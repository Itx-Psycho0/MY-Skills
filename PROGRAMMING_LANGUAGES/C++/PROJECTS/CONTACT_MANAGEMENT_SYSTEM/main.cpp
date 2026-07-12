// Contact Management System (V1.1)

#include <iostream>
#include <vector>
#include <string>
#include <limits>

using namespace std;

struct Contact
{
    string name;
    string phoneNumber;
    string email;
};

int findInsertPosition(const vector<Contact> &contacts, const string &phone)
{
    int low = 0, high = (int)contacts.size() - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (contacts[mid].phoneNumber == phone)
            return mid;

        if (contacts[mid].phoneNumber < phone)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return low;
}

int binarySearchPhone(const vector<Contact> &contacts, const string &phone)
{
    int low = 0, high = (int)contacts.size() - 1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (contacts[mid].phoneNumber == phone)
            return mid;

        if (contacts[mid].phoneNumber < phone)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

void addContact(vector<Contact> &contacts)
{
    Contact c;

    cout << "Enter Name : ";
    getline(cin, c.name);

    cout << "Enter Phone: ";
    getline(cin, c.phoneNumber);

    cout << "Enter Email: ";
    getline(cin, c.email);

    if (binarySearchPhone(contacts, c.phoneNumber) != -1)
    {
        cout << "\nPhone number already exists.\n";
        return;
    }

    int pos = findInsertPosition(contacts, c.phoneNumber);
    contacts.insert(contacts.begin() + pos, c);

    cout << "\nContact Added Successfully!\n";
}

void displayContacts(const vector<Contact> &contacts)
{
    if (contacts.empty())
    {
        cout << "\nNo Contacts Found.\n";
        return;
    }

    cout << "\n========== CONTACT LIST ==========\n";

    for (const auto &c : contacts)
    {
        cout << "----------------------------------\n";
        cout << "Name  : " << c.name << "\n";
        cout << "Phone : " << c.phoneNumber << "\n";
        cout << "Email : " << c.email << "\n";
    }

    cout << "----------------------------------\n";
}

void searchContactByPhone(const vector<Contact> &contacts, const string &phone)
{
    int idx = binarySearchPhone(contacts, phone);

    if (idx == -1)
    {
        cout << "\nContact Not Found.\n";
        return;
    }

    const Contact &c = contacts[idx];

    cout << "\n========== CONTACT FOUND ==========\n";
    cout << "Name  : " << c.name << "\n";
    cout << "Phone : " << c.phoneNumber << "\n";
    cout << "Email : " << c.email << "\n";
    cout << "===================================\n";
}

void searchContactByName(const vector<Contact> &contacts, const string &name)
{
    for (const auto &c : contacts)
    {
        if (c.name == name)
        {
            cout << "\n========== CONTACT FOUND ==========\n";
            cout << "Name  : " << c.name << "\n";
            cout << "Phone : " << c.phoneNumber << "\n";
            cout << "Email : " << c.email << "\n";
            cout << "===================================\n";
            return;
        }
    }

    cout << "\nContact Not Found.\n";
}

void updateContact(vector<Contact> &contacts, const string &oldPhone)
{
    int idx = binarySearchPhone(contacts, oldPhone);

    if (idx == -1)
    {
        cout << "\nContact Not Found.\n";
        return;
    }

    Contact updated = contacts[idx];
    contacts.erase(contacts.begin() + idx);

    cout << "Enter New Name : ";
    getline(cin, updated.name);

    cout << "Enter New Phone: ";
    getline(cin, updated.phoneNumber);

    cout << "Enter New Email: ";
    getline(cin, updated.email);

    if (binarySearchPhone(contacts, updated.phoneNumber) != -1)
    {
        cout << "\nNew phone number already exists.\n";

        int pos = findInsertPosition(contacts, oldPhone);
        updated.phoneNumber = oldPhone;
        contacts.insert(contacts.begin() + pos, updated);
        return;
    }

    int pos = findInsertPosition(contacts, updated.phoneNumber);
    contacts.insert(contacts.begin() + pos, updated);

    cout << "\nContact Updated Successfully!\n";
}

void deleteContact(vector<Contact> &contacts, const string &phone)
{
    int idx = binarySearchPhone(contacts, phone);

    if (idx == -1)
    {
        cout << "\nContact Not Found.\n";
        return;
    }

    contacts.erase(contacts.begin() + idx);

    cout << "\nContact Deleted Successfully!\n";
}

int main()
{
    vector<Contact> contacts;
    int choice;

    do
    {
        cout << "\n========== CONTACT MANAGEMENT ==========\n";
        cout << "1. Add Contact\n";
        cout << "2. Display Contacts\n";
        cout << "3. Search By Phone\n";
        cout << "4. Search By Name\n";
        cout << "5. Update Contact\n";
        cout << "6. Delete Contact\n";
        cout << "7. Exit\n";
        cout << "========================================\n";
        cout << "Enter Choice: ";

        cin >> choice;
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

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
            string phone;
            cout << "Enter Phone: ";
            getline(cin, phone);
            searchContactByPhone(contacts, phone);
            break;
        }

        case 4:
        {
            string name;
            cout << "Enter Name: ";
            getline(cin, name);
            searchContactByName(contacts, name);
            break;
        }

        case 5:
        {
            string phone;
            cout << "Enter Existing Phone: ";
            getline(cin, phone);
            updateContact(contacts, phone);
            break;
        }

        case 6:
        {
            string phone;
            cout << "Enter Phone: ";
            getline(cin, phone);
            deleteContact(contacts, phone);
            break;
        }

        case 7:
            cout << "\nGoodbye!\n";
            break;

        default:
            cout << "\nInvalid Choice.\n";
        }

    } while (choice != 7);

    return 0;
}
