from __future__ import print_function
import time
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException
from pprint import pprint

import random

# Generate a random number between 100000 and 999999
generated_random_number = random.randint(100000, 999999)

configuration = sib_api_v3_sdk.Configuration()
configuration.api_key['api-key'] = 'Enter-Api-key'

api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))
Contacts_api_instance = sib_api_v3_sdk.ContactsApi(sib_api_v3_sdk.ApiClient(configuration))
sender = {"name":"abcd","email":"234521@example.com"}
to = [{"email":"1234@example.com","name":"John doe"}]
def send_verification_mail(contact):
    template_id = 8
    send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(sender=sender, subject="verification", template_id=template_id,to=to)
    update_contact = sib_api_v3_sdk.UpdateContact(attributes={"RANDOM_NUMBER":generated_random_number})
    try:
        api_response = api_instance.send_transac_email(send_smtp_email)
        Contacts_api_instance.update_contact(identifier=contact,update_contact=update_contact)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SMTPApi->send_transac_email: %s\n" % e)
def send_reset_mail():
    template_id = 7
    reset_mail = sib_api_v3_sdk.SendSmtpEmail(sender=sender, subject="reset", template_id=template_id,to=to)
    try:
        api_response = api_instance.send_transac_email(reset_mail)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SMTPApi->send_transac_email: %s\n" % e)
while True:
    print("what type of mail do you want to send out?")
    print("1. reset password mail")
    print("2. email verification mail")
    print("3. quit")
    choice = int(input("enter choice"))
    if choice == 1:
        send_reset_mail()
    elif choice == 2:
        contact = input("enter contact mail")
        send_verification_mail(contact)
    elif choice == 3:
        break
    else:
        print("invalid response")