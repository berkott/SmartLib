/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
    apiKey: "AIzaSyDTvUwyFOD-qb9trefu9jSL_ej-H4oqE5w",
    authDomain: "libraryapp-backend.firebaseapp.com",
    databaseURL: "https://libraryapp-backend.firebaseio.com",
    projectId: "libraryapp-backend",
    storageBucket: "libraryapp-backend.appspot.com",
    messagingSenderId: "617592398054"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = null;