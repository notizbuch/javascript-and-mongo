```
npm install -g mgeneratejs
/opt/node/bin/mgeneratejs '{"name": "$name", "born_in": {"$year": {"min": 1930, "max": 2012}}, country: {"$country":{"full": true}}, coordinates: "$coordinates",ip: "$ip", traveldate: "$date", "status": {"$choose": {"from": ["read", "unread", "deleted"], "weights": [2, 1, 1]}} , "emails":{"$array": {"of": "$email", "number": 3}}, signature:{"$binary": {"length":1024 }}}' -n $1
```
