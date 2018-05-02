<p align="center"><a href="https://github.com/berkott/SmartLib/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FSmartLibLogoBlack.png?alt=media&token=2d36b3ef-7fe1-44aa-8ec1-e8c4867e33e9"></a>
  <h1>SmartLib</h1>
</p>
FBLA Mobile App Development submission for Berkan and Shiv from Northview High School Johns Creek, Georgia.

## Goal
Develop an app to manage the issuance of books and to provide other information at a school library. Give the school a name. The app must be able to do or show the following: Allow students and teachers to reserve books. Allow students and teachers to check out books. Remind students and teachers when books are overdue. Show a map of the school library.

## Features
- Simple and concise packaging
- Multiplatform (Android, iOS, & Windows)
- Checkout (by scanning or entering ISBN), reserve, reminders, updatable map (through firebase), and clear help page
- Social Media Integration with 3 pages (view below) and in app social sharing
- Easy Navigation with a Responsive Layout
- Bug-Free, readable code with Many Comments
- Sleek and High Quality Graphics
- Bug Reporter
- Simple Google OAuth Login with login, sign up, and auto login.
- Customizable School
- Title and Author Fuzzy Search
- Backend in firebase for Total Control to the Library Adminsitrator


## How to Download

All releases are on the releases page https://github.com/berkott/SmartLib/releases.

### Android

1. On your phone, go to Menu > Settings > Security > and check Unknown Sources to allow your phone to install apps from sources other than the Google Play Store.
2. Download the apk onto your device from the release page.
3. If you downloaded the apk onto your computer just simple email it to yourself and open it on your phone.
4. Simply install the apk and open it.

### iOS
**_Note:_ You must have Xcode installed on your computer.**

1. Dowload the .zip file from the release page.
2. Unzip the files into a directory of your choice.
3. Open the same directory as above with Xcode.
4. Simply build the project on Xcode and run it.


## Pages

Below is a quick explanation of all the pages with screen shots of what they can do
Video demo of reserving and checking out a book: https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FSmartLibExampleCheckout.mp4?alt=media&token=ca972b52-3edd-4b83-9d83-07a2849e52cd

### Login

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122046.png?alt=media&token=0fe5b5e1-3fa5-481b-aae0-789dc4d0909f"> | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_login.jpg?alt=media&token=6e6125ac-66cc-4914-8241-eeebd240870a"> |

When you first open the app you come to the login page which allows for auto login once you are logged in on a device once.

### MyLib

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122120.png?alt=media&token=d3e8f66c-3bea-4efc-b051-dffe5735d136"> | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_mylib_popular.jpg?alt=media&token=ba7fb328-8b97-4dfc-bd65-73c2cb6ca294"> |

MyLib is like the home page of the app and on this page you are able to view reminders and see popular books. From here you can even see upcoming events that the library is hosting.

### Catalog

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122155.png?alt=media&token=c102a1f1-5c48-4965-8a86-943bd4d78b41">      | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_mylib_popular.jpg?alt=media&token=ba7fb328-8b97-4dfc-bd65-73c2cb6ca294"> |


On the catalog page you are able to view all books currently available in your library.

#### Search

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122205.png?alt=media&token=f595786f-4886-41a4-9fd9-d56d7d5b6728">      | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_search.jpg?alt=media&token=cc8b1587-f357-44df-bfdd-db40c83899f1"> |


The search page is the page that is opened once you conduct a search using the search bar at the top of the app.

#### Book Page

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122132.png?alt=media&token=3dd3fd6b-218c-4236-a707-913e4cc560a1">      | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_search_book.jpg?alt=media&token=b55db69d-e547-4b46-af3b-6e55babc25fd"> |

This is the page you are directed to when you press the view button for a book.

### Checkout

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122221.png?alt=media&token=1f831465-0f21-4b9c-aac0-04babb6eb5f8">      | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_checkout.jpg?alt=media&token=75aa1b1e-41df-4d85-a6b9-6cba42c026c1"> |

Once you navigate to the checkout page you can checkout books by either typing in the ISBN or by scanning the book's ISBN.

### Map

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122225.png?alt=media&token=0f5c31af-6ede-4a45-8eff-f4f43ab9eb98">      | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_map.jpg?alt=media&token=3a8d4c17-5ec3-4459-93ee-27872d7a5bb1"> |

The map page offers a nice layout for the map. The administrator can also change the map in the backend allowing for operability with different libraries.

### Settings

| Android       | IOS           |
| ------------- |:-------------:|
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122228.png?alt=media&token=8248d451-29dd-4855-a50a-497164762b7b"> | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_settings.jpg?alt=media&token=23e842b4-76a4-4a61-b824-26481235467b">      | 
| <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2FScreenshot_20180430-122244.png?alt=media&token=c031ff21-6065-4850-b1fa-313d6deb7416">      | <img width="250" src="https://firebasestorage.googleapis.com/v0/b/libraryapp-backend.appspot.com/o/ScreenshotsAndPics%2Fios_bug_report.jpg?alt=media&token=ce38c4ad-c079-4a4a-9d52-76e177989eb8">

This page is opened by opening the side menu and it allows you to get help, view about, submit bug reports, logout, and share the app.

## Services and Libraries Used
- Google Firebase
- OnsenUI
- Monaca
- FuseJS
- jQuery

## Social Media
@SmartLibNHS
- https://twitter.com/SmartLibNHS
- https://fb.me/SmartLibNHS
- https://www.instagram.com/smartlibnhs/
