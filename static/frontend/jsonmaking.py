import json, random, time, sys

"""
Creating a random JSON object based on lists of info and random numbers
to assign the index

"""
##Directory
input_file = "test.json"
###Success message takes the file_name and operation type (ie. written, closed)
def process_message(outcome, file_name, operation_type):
    print "*******%s File: %s %s    *******" % (outcome, file_name, operation_type)
##Open file
try:
    open_file=open(input_file, 'w')
    print "File opened"
except:
    print "Error opening "+input_file

##Random chooser-random number picker function to be used over and over, but needs to be created before called 
##To keep everything clean it's listed before the others funtions so that they maybe listed in order of the dictionary keys
def random_chooser(start,end):
    return random.randrange(start,end)




##Lists of info
doctors_name=["Dr_K", "Dr. Pepper", "Dr. Lector", "Dr. Seus", "Dr Dre", "Dr. Phill", "Dr. Glass"]
special_notes_list=["No more doctors available for the weekend", "All offices closed for Labor Day", "Offices closed till Monday for Christmas",
                    "No Dr. on call Saturdays", "No Dr. on call Fridays", "No Dr. on call Mondays", "No Dr. on call Wednesdays" ,"No Dr. on call Tuesdays",
                    "Office closed for snow"]
dates=["1/17/2013","12/02/2011", "11/08/2012", "4/1/2010", "5/23/2011","1/15/2013","12/02/2010", "12/08/2012", "6/1/2010", "7/23/2011"]
first_name=["Bob", "Peter", "Jim", "Gerry", "Jean", "Robert", "Susan", "Mary", "Jo", "Brian"]
last_name=["Cameron", "Bender", "Neutron", "Simmons", "Jackson", "Smith", "Gardner", "Crocker","Black", "White"]
from_place=["Fort Worth","Plano","Houston","Little Rock","Detroit","Memphis", "Dallas","Arlington","Jenks","Chicago","Tulsa", "Boise", "Desmoins", "Minnieapolis", "St. Louis"]
check_list=["5647","7610","1230","3210","6543","9874","1324","3215","5897","6546","5968","6540"]
content_list=["Nice to see you!", "This is a content message", "This is another content message" ,"This is a test message to verify that the content is coming through",
              "This is the content you are looking for","Content is magically here","Some content","Test content for your viewing pleasure",
              "This is a test of the call_manager content system","Testing...testing...1...2...3!","Testing...testing...4...5...6!"]
##Keys for the dictionary
messages_info_keys = ["date_and_time", "caller_name", "from", "call_back_number", "call_back_ext", "check_number", "content"]


##Random pick of date from list dates
def date_picker():
    picked_date=random_chooser(1,len(dates))
    new_date=dates[picked_date]
    return new_date

##creates a full name from lists first_name and last_name
def pick_your_name():
    first=random_chooser(1,len(first_name))
    last=random_chooser(1,10)
    combo_name =first_name[first]+" "+last_name[last]
    return combo_name

##Random pick of location from list from_place
def random_place():
    picked_place=random_chooser(1,len(from_place))
    place=from_place[picked_place]
    return place

##Random number generator with randint from the random module
def random_number_maker(n):
    range_start = 10**(n-1)
    range_end = (10**n)-1
    return random.randint(range_start, range_end)


##combines a group of random numbers to resemble a phone number
def random_phone_number():
    return "%s-%s-%s" %(str(random_number_maker(3)), str(random_number_maker(3)), str(random_number_maker(4)))

##call_back_ext picker, uses random number to generate number
def random_ext():
    extension_maker=random_chooser(111,999)
    return extension_maker


## not needed using random phone number generator
#call_back=[1,65,3,5,7,88]

##Random check number picker from list check_list
def check():
    check_picker=random_chooser(1,10)
    check=check_list[check_picker]
    #=[1,2,3,5,6,8,98]
    return check


##Random content picker from list content_list
def content():
    content_picker=random_chooser(1,len(content_list))
    content=content_list[content_picker]
    return content


##Generates a random number of message items
def messages_list_random_maker():
    x=0
    lister_maker=[]
    while(x<random_chooser(1,20)):
        messages_info_values = [date_picker(),pick_your_name(),random_place(),random_phone_number(),random_ext(),check(), content()]
        messages_info_list = dict(zip(messages_info_keys, messages_info_values))
        lister_maker.append(messages_info_list)
        x=x+1
    return lister_maker


##dictionaries of info
account_info_dict = {"home_number":random_phone_number(), "cell_number":random_phone_number()}
messages_info_dict = {"home_number":random_phone_number(), "cell_number":random_phone_number()}


##Main area that puts everything together
doctors_list=[]
for name in doctors_name:
    random_number=random.randrange(0,10)
    special_notes_random_number=random.randrange(0,len(special_notes_list))
    special_notes=special_notes_list[special_notes_random_number]
    acct_number=random_number_maker(4)
    ticket_number = abs(random_number-10)+1
    duration_of_call = abs(random_number-10)+1
    listerine = messages_list_random_maker()
    account_info_dict = {"home_number":random_phone_number(), "cell_number":random_phone_number()}
    doctors_list.append({"doctors_name":name, "special_notes":special_notes, "acct_number":acct_number,
                         "ticket_number":ticket_number, "duration_of_call":duration_of_call, "call_status": "ringing", "account_info": account_info_dict,
                         "messages":listerine})

##Dumps the dict to a jason object
jasoner=json.dumps(doctors_list)
#print jasoner

##Count up percentage of completion
for i in range(100):
    print "\r", str(i)+"%"
    time.sleep(.025)
print "\r"

##Write file
try:
    open_file.write(jasoner)
    process_message("SUCCESS", input_file, "Written")

except:
    process_message("FAILURE" , input_file, "Not Written")
##Close file
try:
    open_file.close()
    process_message("SUCCESS", input_file, "Closed")
except:
    process_message("FAILURE" , input_file, "Not Closed")
