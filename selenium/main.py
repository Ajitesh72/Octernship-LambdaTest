from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time
import datetime
import json

# set up the Chrome driver
options = webdriver.ChromeOptions()
options.add_argument("--disable-blink-features=AutomationControlled")
driver = webdriver.Chrome(options=options)
import random
import datetime

# data is recieved from cycling through navbar routes
def getData(link):  
# generate a date in the year 2023
    year = 2023
    start_date = datetime.date(year, 1, 1)
    end_date = datetime.date(year, 12, 31)
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    random_date = start_date + datetime.timedelta(days=random_number_of_days)
    date = {"date": random_date.isoformat()}    

    driver.get(link)

# wait for a click anywhere on the page
    action_chains = ActionChains(driver)
    action_chains.click().perform()

# get the network logs
    logs = driver.execute_script("return window.performance.getEntries();")
    for log in logs:
        # convert any WebElement objects to strings
        for key, value in log.items():
            if isinstance(value, webdriver.remote.webelement.WebElement):
                log[key] = value.get_attribute("outerHTML")
        log.update(date)
    
        
# append the logs to the file
    
    with open(r"./networklogs.json", "a") as f:
        for log in logs:
            json_data = json.dumps(log)
            f.write(str(json_data) + ","+"\n")

for x in range(5):
# automated python script to extract network logs and store it in networklogs.txt using selenium
# basically we wont have to manually click on navbar for 60 timesi.e more than 1000 logs are saved 
  getData("https://www.lambdatest.com/")
  time.sleep(0.5)
  getData("https://www.lambdatest.com/feature")
  time.sleep(0.5)
  getData("https://www.lambdatest.com/enterprise")
  time.sleep(0.5)
  getData("https://www.lambdatest.com/pricing")
  time.sleep(0.5)



