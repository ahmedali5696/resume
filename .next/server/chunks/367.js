"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 6228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fs": () => (/* binding */ database),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuS1urv_ldcP5vmbSoNiIAs5bq6-PBBEU",
    authDomain: "app-auth-17e47.firebaseapp.com",
    databaseURL: "https://app-auth-17e47-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "app-auth-17e47",
    storageBucket: "app-auth-17e47.appspot.com",
    messagingSenderId: "795382363336",
    appId: "1:795382363336:web:2acd474b37d0924b7de1fd"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)(app);
const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VA": () => (/* binding */ updateData),
/* harmony export */   "Yu": () => (/* binding */ getData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports dataState, addItem */
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2527);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1208);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6228);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_util__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase_util__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("data/getAllData", async (_, thunkAPI)=>{
    const { rejectWithValue  } = thunkAPI;
    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .database */ .Fs);
    try {
        const data = await (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.child)(dbRef, `/`));
        return data.val();
    } catch (error) {
        return rejectWithValue(error);
    }
});
const updateData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("data/updateData", async (path, thunkAPI)=>{
    const { rejectWithValue  } = thunkAPI;
    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .database */ .Fs);
    try {
        const data = await (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.child)(dbRef, "/" + path));
        return {
            data: data.val(),
            path
        };
    } catch (error) {
        return rejectWithValue(error);
    }
});
const allDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "data",
    initialState: {
        isLoading: false,
        error: "",
        data: []
    },
    extraReducers: (builder)=>{
        builder.addCase(getData.pending, (state, action)=>{
            state.isLoading = true;
        }).addCase(getData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getData.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = "There error from the server, Please try later";
        }).addCase(updateData.pending, (state, action)=>{
            state.isLoading = true;
        }).addCase(updateData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = {
                ...state.data,
                [action.payload.path]: action.payload.data
            };
        }).addCase(updateData.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = "There error from the server, Please try later";
        });
    }
});
const dataState = (state)=>state.data;
const { addItem  } = allDataSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allDataSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loginSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5563);
/* harmony import */ var _dataSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);
/* harmony import */ var _msgSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2566);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_dataSlice__WEBPACK_IMPORTED_MODULE_2__, _msgSlice__WEBPACK_IMPORTED_MODULE_3__]);
([_dataSlice__WEBPACK_IMPORTED_MODULE_2__, _msgSlice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    login: _loginSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    data: _dataSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    msg: _msgSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
});
const reducer = (state, action)=>{
    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};
const store = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer
    });
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(store, {
    debug: true
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (store)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "g": () => (/* binding */ sendMsg)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_1__]);
firebase_database__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const sendMsg = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("msg/sendMsg", async (msg, thunkAPI)=>{
    const { rejectWithValue  } = thunkAPI;
    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();
    try {
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, "/messages/" + msg.id), msg.msg).then((res)=>console.log(res)).catch((error)=>console.log(error));
    } catch (error) {
        return rejectWithValue(error);
    }
});
const msgSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "msg",
    initialState: {
        sending: false,
        success: false
    },
    extraReducers: (builder)=>{
        builder.addCase(sendMsg.pending, (state, action)=>{
            state.sending = true;
        }).addCase(sendMsg.fulfilled, (state, action)=>{
            state.sending = false;
            state.success = true;
        }).addCase(sendMsg.rejected, (state, action)=>{
            state.sending = false;
            state.success = false;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (msgSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;