// Contact Management System
#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct Contact
{
    string name;
    string phoneNumber;
    string email;
};

void addContact(vector<Contact> &contacts)
{
    Contact newContact;
    cout << "Enter name: ";
    getline(cin, newContact.name); // To consume the newline character after name input
    cout << "Enter phone number: " << endl;
    getline(cin, newContact.phoneNumber); // To consume the newline character after phone number input
    cout << "Enter email: " << endl;
    getline(cin, newContact.email); // To consume the newline character after email input
    int low = 0;
    int high = contacts.size() - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if ((contacts[mid].phoneNumber) == (newContact.phoneNumber))
        {
            cout << "Contact with this phone number already exists." << endl;
            return;
        }
        else if ((contacts[mid].phoneNumber) < (newContact.phoneNumber))
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    contacts.insert(contacts.begin() + low, newContact);
    cout << "Contact added successfully!" << endl;
}

void displayContacts(const vector<Contact> &contacts)
{
    if (contacts.empty())
    {
        cout << "No contacts to display." << endl;
        return;
    }
    for (const auto &contact : contacts)
    {
        cout << "Name: " << contact.name << ", Phone: " << contact.phoneNumber << ", Email: " << contact.email << endl;
    }
}

void searchContactByPhoneNumber(vector<Contact> &contacts, string phoneNumber)
{
    int low = 0;
    int high = contacts.size() - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if ((contacts[mid].phoneNumber) == (phoneNumber))
        {
            cout << "Contact found: Name: " << contacts[mid].name << ", Phone: " << contacts[mid].phoneNumber << ", Email: " << contacts[mid].email << endl;
            return;
        }
        else if ((contacts[mid].phoneNumber) < (phoneNumber))
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    cout << "Contact not found." << endl;
}

void searchContactByName(vector<Contact> &contacts, string name)
{
    int low = 0;
    int high = contacts.size() - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if ((contacts[mid].name) == (name))
        {
            cout << "Contact found: Name: " << contacts[mid].name << ", Phone: " << contacts[mid].phoneNumber << ", Email: " << contacts[mid].email << endl;
            return;
        }
        else if ((contacts[mid].name) < (name))
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    cout << "Contact not found." << endl;
}

Contact updateContact(vector<Contact> &contacts, string PhoneNumber)
{
    int low = 0;
    int high = contacts.size() - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if ((contacts[mid].phoneNumber) == (PhoneNumber))
        {
            cout << "Enter new phone number: ";
            getline(cin, contacts[mid].phoneNumber);
            cout << "Enter new email: ";
            getline(cin, contacts[mid].email);
            cout << "Contact updated successfully!" << endl;
            return contacts[mid];
        }
        else if ((contacts[mid].phoneNumber) < (PhoneNumber))
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    cout << "Contact not found." << endl;
    return Contact(); // Return an empty contact if not found
}

void deleteContact(vector<Contact> &contacts, string phoneNumber)
{
    int low = 0;
    int high = contacts.size() - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if ((contacts[mid].phoneNumber) == (phoneNumber))
        {
            contacts.erase(contacts.begin() + mid);
            cout << "Contact deleted successfully!" << endl;
            return;
        }
        else if ((contacts[mid].phoneNumber) < (phoneNumber))
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    cout << "Contact not found." << endl;
}

int main()
{
    vector<Contact> contacts;
    int choice;

    do
    {
        cout << "Contact Management System" << endl;
        cout << "Press 1 to Add Contact" << endl;
        cout << "Press 2 to Display all Contacts" << endl;
        cout << "Press 3 to Search Contact by phone number" << endl;
        cout << "Press 4 to Search Contact by name" << endl;
        cout << "Press 5 to Update Contact" << endl;
        cout << "Press 6 to Delete Contact" << endl;
        cout << "Press 7 to Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore(); // To consume the newline character after choice input
        switch (choice)
        {
        case 1:
            addContact(contacts);
            break;
        case 2:
            displayContacts(contacts);
            break;
        case 3:
        {
            string phoneNumber;
            cout << "Enter phone number to search: ";
            getline(cin, phoneNumber);
            searchContactByPhoneNumber(contacts, phoneNumber);
        }
        break;
        case 4:
        {
            string name;
            cout << "Enter name to search: ";
            getline(cin, name);
            searchContactByName(contacts, name);
        }
        break;
        case 5:
        {
            string phoneNumber;
            cout << "Enter phone number of the contact to update: ";
            getline(cin, phoneNumber);
            Contact updatedContact = updateContact(contacts, phoneNumber);
            int low = 0;
            int high = contacts.size() - 1;
            while (low <= high)
            {
                int mid = low + (high - low) / 2;
                if ((contacts[mid].phoneNumber) == (phoneNumber))
                {
                    contacts.erase(contacts.begin() + mid);
                    break;
                }
                else if ((contacts[mid].phoneNumber) < (phoneNumber))
                {
                    low = mid + 1;
                }
                else
                {
                    high = mid - 1;
                }
            }
            contacts.insert(contacts.begin() + low, updatedContact);
        }
        break;
        case 6:
        {
            string phoneNumber;
            cout << "Enter phone number of the contact to delete: ";
            getline(cin, phoneNumber);
            deleteContact(contacts, phoneNumber);
        }
        break;
        case 7:
            cout << "Exiting..." << endl;
            break;
        default:
            cout << "Invalid choice. Please try again." << endl;
        }
    } while (choice != 7);
}