
import datetime as dt
import pandas as pd
import smtplib as sm
import random
import os

#Date
dt = dt.datetime.now()
today_date= dt.date()

#File read
data = pd.read_csv("birthdays.csv")
data_dt = data.to_dict("records")

def send_birthday_mail(p_name,p_mail):
    mail = #email from sending
    pw = #app password
    dir_path = #directory where multiple templates are stored
    replace_text = #placeholder to replace

    file_list = [i for i in os.listdir(dir_path)]

    #random select the letter from the file list in a folder
    with open(f"letter_templates/{random.choice(file_list)}") as letter:
        letter_to_send = letter.read()
        letter_to_send = letter_to_send.replace(replace_text,p_name)

    with sm.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=mail,
                         password=pw)
        connection.sendmail(from_addr=mail,
                            to_addrs=f"{p_mail}",
                            msg=f"Subject:Happy Birthday \n\n {letter_to_send}")

for i in data_dt:
    day_to_comp = f"{i["year"]}-{i["month"]}-{i["day"]}"
    date_day_to_comp = dt.strptime(day_to_comp,"%Y-%m-%d").date()

    if today_date == date_day_to_comp:
        send_birthday_mail(i["name"],i["email"])





