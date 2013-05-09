"""
Socket IO connections
"""

from datetime import timedelta

from tornado import ioloop, gen
from tornadio2 import SocketConnection, TornadioRouter, SocketServer, event, gen
from jsonmaking import jsoner

class QueryConnection(SocketConnection):
    def long_running(self, value, callback):
        """Long running task implementation.
        Simply adds 3 second timeout and then calls provided callback method.
        """
        def finish():
            ## Adding the json list to the response element
            newson = jsoner()
            ##print newson
            callback(newson)
            newson = jsoner()

        ioloop.IOLoop.instance().add_timeout(timedelta(seconds=1), finish)

    @event
    def query(self, num):
        """Event implementation

        Because on_event() was wrapped with ``gen.sync_engine``, yield will be treated
        as asynchronous task.
        """
        remake_json=jsoner()
        response = yield gen.Task(self.long_running, remake_json)
        self.emit('response', response)
        print response ## Response here is a list need to pass the 0 index of list to Angular
                                ## Response prints the callback info

    @gen.engine
    def on_event(self, name, *args, **kwargs):
        """Wrapped ``on_event`` handler, which will queue events and will allow usage
        of the ``yield`` in the event handlers.

        If you want to use non-queued version, just wrap ``on_event`` with ``gen.engine``.
        """
        return super(QueryConnection, self).on_event(name, *args, **kwargs)


