"use strict";
exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 5563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PH": () => (/* binding */ loginState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "n$": () => (/* binding */ userLogin)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("login/userLogin", async (userData, thunkAPI)=>{
    const { rejectWithValue  } = thunkAPI;
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuS1urv_ldcP5vmbSoNiIAs5bq6-PBBEU";
    try {
        const sendData = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                ...userData,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (sendData.ok) {
            return sendData.json();
        } else {
            return sendData.json().then((data)=>{
                throw new Error(data.error.message);
            });
        }
    } catch (error) {
        console.log(error.message);
        return rejectWithValue(error.message);
    }
});
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "login",
    initialState: {
        token: "",
        expires: null,
        loading: false,
        isLoggedIn: false,
        loginError: null
    },
    reducers: {
        logout: (state, action)=>{
            state.token = "";
            state.isLoggedIn = false;
            state.expires = null;
            localStorage.removeItem("isLoggedIn");
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(userLogin.pending, (state, action)=>{
            state.loading = true;
        }).addCase(userLogin.fulfilled, (state, action)=>{
            state.token = action.payload.idToken;
            state.expires = action.payload.expiresIn;
            state.loading = false;
            state.isLoggedIn = true;
            state.loginError = null;
            localStorage.setItem("isLoggedIn", state.isLoggedIn);
        }).addCase(userLogin.rejected, (state, action)=>{
            state.loading = false;
            state.isLoggedIn = false;
            state.loginError = action.error.message;
        });
    }
});
const loginState = (state)=>state.login;
const { logout  } = loginSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);


/***/ })

};
;