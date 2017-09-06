
#!/bin/bash

#The localtunnel script appears to be crashing very often!. 
# Script automatically restart localtunnel if it crashes 

# make sure you have execute permissions:
# cd /path/to/project
# chmod +x ./sendgrid_webhook.sh
# to run, type ./sendgrid_webhook.sh in the terminal

function localtunnel {
  lt -s hotfeedbackdev004v01 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done