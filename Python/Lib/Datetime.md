
```py
from datetime import datetime
x = datetime(1995,3,25)
x.day
x.weekday()
datetime.now()
datetime.now() - date(2018, 1, 1) # Will give you the difference between both dates
x = datetime.strptime('Jan 5, 2018', '%b %d, %Y') # Will convert string into datetime object format
x = datetime.strftime(datetime.now(), '%b %d, %Y') # Will convert datetime object to string
```