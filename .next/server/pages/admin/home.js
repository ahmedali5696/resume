"use strict";
(() => {
var exports = {};
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 6115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Certifications)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _hooks_useAddData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7285);
/* harmony import */ var _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4097);
/* harmony import */ var _sections_SectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6735);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_6__, _Spinner__WEBPACK_IMPORTED_MODULE_8__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_6__, _Spinner__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Certifications() {
    const { isLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.data);
    const { certf  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.data.data);
    const myCertf = typeof certf === "object" ? Object.values(certf) : certf || [];
    const [addNewItem] = (0,_hooks_useAddData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { removeItem  } = (0,_hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [emptyFieldMsg, checkEmptyFields, clearForm] = (0,_hooks_useValidate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    function addItemHandler(e) {
        e.preventDefault();
        const id = certf?.length || 0;
        const allInputs = e.target;
        const certfName = e.target[0].value;
        const institute = e.target[1].value;
        const site = e.target[2].value;
        const date = e.target[3].value;
        const link = e.target[4].value;
        if (!checkEmptyFields(allInputs)) {
            addNewItem("certf", {
                certfName,
                institute,
                site,
                date,
                link
            }, id);
            clearForm(allInputs);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "certifications",
        className: "dash-section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                heading: "certifications",
                desc: "Put and remove your all Certifications"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-500 mb-2",
                children: emptyFieldMsg
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: addItemHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "certificate",
                                children: [
                                    "Certificate Name ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "certificate",
                                id: "certificate"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "by",
                                children: [
                                    "By ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "by",
                                id: "by"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "site",
                                children: [
                                    "Site Name ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "site",
                                id: "site"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "date",
                                children: [
                                    "Date ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "Apr, 2020",
                                name: "date",
                                id: "date"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "cert-link",
                                children: [
                                    "Cert Link ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                placeholder: "https://example.com",
                                name: "cert-link",
                                id: "cert-link"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "admin-btn",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "border rounded-md p-2 mt-5",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : myCertf.reverse().map((cer)=>cer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "flex gap-3 p-1 items-center main-bg main-text-color shadow-md mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: cer.certfName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                onClick: ()=>removeItem("certf", cer.id),
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCircleXmark,
                                className: "text-red-600 ml-auto mr-2 cursor-pointer"
                            })
                        ]
                    }, cer.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Experiances)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _sections_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(796);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7285);
/* harmony import */ var _hooks_useValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9701);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(468);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4097);
/* harmony import */ var _hooks_useUpdateData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__, _Spinner__WEBPACK_IMPORTED_MODULE_8__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_10__, _hooks_useUpdateData__WEBPACK_IMPORTED_MODULE_11__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__, _Spinner__WEBPACK_IMPORTED_MODULE_8__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_10__, _hooks_useUpdateData__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Experiances() {
    const [editeMode, setEditeMode] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
        id: 0,
        mode: false
    });
    const { isLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.data);
    const { experiances  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.data.data);
    const myExperiances = typeof experiances === "object" ? Object.values(experiances) : experiances || [];
    const [addNewItem] = (0,_hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [updateItem] = (0,_hooks_useUpdateData__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { removeItem  } = (0,_hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const [emptyFieldMsg, checkEmptyFields, clearForm] = (0,_hooks_useValidate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    const companyRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    const fromRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    const toRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    const descRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    function addItemHandler(e) {
        e.preventDefault();
        const id = experiances?.length || 0;
        const allInputs = e.target;
        const title = e.target[0].value;
        const company = e.target[1].value;
        const date = {
            from: e.target[2].value,
            to: e.target[3].value
        };
        const description = e.target[4].value;
        if (!checkEmptyFields(allInputs)) {
            addNewItem("experiances", {
                title,
                company,
                date,
                description
            }, id);
            clearForm(allInputs);
        }
    }
    function editeModeHandler(item) {
        setEditeMode({
            id: item.id,
            mode: true
        });
        titleRef.current.value = item.title;
        companyRef.current.value = item.company;
        fromRef.current.value = item.date.from;
        toRef.current.value = item.date.to;
        descRef.current.value = item.description;
    }
    function updateHandler() {
        const id = editeMode.id;
        const item = {
            id,
            title: titleRef.current.value,
            company: companyRef.current.value,
            date: {
                from: fromRef.current.value,
                to: toRef.current.value
            },
            description: descRef.current.value
        };
        updateItem("experiances", item, id);
        cancleEdite();
    }
    function cancleEdite() {
        setEditeMode((prev)=>({
                ...prev,
                mode: false
            }));
        titleRef.current.value = "";
        companyRef.current.value = "";
        fromRef.current.value = "";
        toRef.current.value = "";
        descRef.current.value = "";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "experiance",
        className: "dash-section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                heading: "Experiances",
                desc: "Put, update or remove your Experiances"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-500 mb-2",
                children: emptyFieldMsg
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: addItemHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "title",
                                children: [
                                    "Title ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-400",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: titleRef,
                                type: "text",
                                name: "title",
                                id: "title"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "company",
                                children: [
                                    "Company ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-400",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: companyRef,
                                type: "text",
                                name: "company",
                                id: "company"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex max-[540px]:flex-col main-text-color justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-group",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "start-date",
                                        children: [
                                            "From ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-red-400",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: fromRef,
                                        type: "text",
                                        placeholder: "i.e: Sep 2022",
                                        name: "start-date",
                                        id: "start-date",
                                        className: " placeholder:opacity-50"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-group",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "end-date",
                                        children: [
                                            "To ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-red-400",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: toRef,
                                        type: "text",
                                        placeholder: "i.e: Jun 2022",
                                        name: "end-date",
                                        id: "end-date",
                                        className: " placeholder:opacity-50"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "description",
                                children: [
                                    "Description ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-400",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: descRef,
                                type: "text",
                                name: "description",
                                id: "description"
                            })
                        ]
                    }),
                    editeMode.mode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: updateHandler,
                                className: " bg-yellow-500 text-slate-50 rounded py-1 px-2 ",
                                children: "Update"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: cancleEdite,
                                className: " bg-gray-500 text-slate-50 rounded py-1 px-2 ",
                                children: "Cancle"
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "admin-btn",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "border rounded-md p-2 mt-5 grid grid-cols-[repeat(auto-fit,minmax(185px,1fr))] gap-1",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : myExperiances.map((exp)=>exp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "flex justify-between p-2 items-center main-bg shadow-md mb-2 main-text-color",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: exp.title
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                        onClick: ()=>editeModeHandler(exp),
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPenToSquare,
                                        className: " cursor-pointer mr-2 text-blue-600"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                        onClick: ()=>{
                                            removeItem("experiances", exp.id);
                                            cancleEdite();
                                        },
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCircleXmark,
                                        className: "cursor-pointer text-red-600"
                                    })
                                ]
                            })
                        ]
                    }, exp.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4097);
/* harmony import */ var _sections_SectionHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6735);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_4__, _Spinner__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_4__, _Spinner__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Messages() {
    const { isLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.data);
    const { messages  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.data.data);
    const myMessages = typeof messages === "undefined" || messages === null ? [] : typeof messages === "object" ? Object.values(messages) : messages || [];
    const { removeItem  } = (0,_hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "messages",
        className: "dash-section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                heading: "Messages",
                desc: "Read and remove your messages"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "border rounded-md p-2 mt-5",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : myMessages.reverse().map((msg)=>msg && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "flex gap-3 p-1 items-center main-bg main-text-color shadow-md mb-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: " font-semibold",
                                                children: "Name:"
                                            }),
                                            " ",
                                            msg.username
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: " font-semibold",
                                                children: "Email:"
                                            }),
                                            " ",
                                            msg.email
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: " font-semibold",
                                                children: "Message:"
                                            }),
                                            " ",
                                            msg.msg
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleXmark,
                                onClick: ()=>removeItem("messages", msg.id),
                                className: "text-red-600 ml-auto mr-2 cursor-pointer"
                            })
                        ]
                    }, msg.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Portfolio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var _sections_SectionHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6735);
/* harmony import */ var _hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7285);
/* harmony import */ var _hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8748);
/* harmony import */ var _hooks_useValidate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9701);
/* harmony import */ var _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4097);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__, _Spinner__WEBPACK_IMPORTED_MODULE_10__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__, _Spinner__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Portfolio() {
    const { isLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.data);
    const { portfolio  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.data.data);
    const myPortfolio = typeof portfolio === "object" ? Object.values(portfolio) : portfolio || [];
    const [addNewItem] = (0,_hooks_useAddData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { uploadImg  } = (0,_hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { removeItem  } = (0,_hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [emptyFieldMsg, checkEmptyFields, clearForm] = (0,_hooks_useValidate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    function submitHandler(e) {
        e.preventDefault();
        const id = portfolio?.length || 0;
        const allInputs = e.target;
        const name = e.target[0].value;
        const description = e.target[1].value;
        const codeLink = e.target[2].value;
        const liveLink = e.target[3].value;
        const projectImg = e.target[4]?.files[0];
        if (!checkEmptyFields(allInputs)) {
            uploadImg("portfolio", projectImg).then((imgUrl)=>addNewItem("portfolio", {
                    name,
                    description,
                    codeLink,
                    liveLink,
                    img: imgUrl
                }, id));
            clearForm(allInputs);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "portfolio",
        className: "dash-section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                heading: "Portfolio",
                desc: "Put and remove your projects"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-500 mb-2",
                children: emptyFieldMsg
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "project-name",
                                children: [
                                    "Project Name ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "project-name",
                                id: "project-name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "project-descr",
                                children: [
                                    "Description ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "project-descr",
                                id: "project-descr"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "code",
                                children: [
                                    "Code link ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                placeholder: "https://example.com",
                                name: "code",
                                id: "code"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "live",
                                children: [
                                    "Live Link ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                placeholder: "https://example.com",
                                name: "live",
                                id: "live"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "project-img",
                                children: [
                                    "Project Img ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                name: "project-img",
                                id: "project-img",
                                accept: "image/*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "admin-btn",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "border rounded-md p-2 mt-5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-1",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : myPortfolio.reverse().map((project)=>project && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "flex gap-3 p-1 items-center main-bg shadow-md mb-2 main-text-color",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: project.img,
                                alt: "Project Image",
                                width: 60,
                                height: 60
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: project.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                onClick: ()=>removeItem("portfolio", project.id),
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCircleXmark,
                                className: "text-red-600 ml-auto mr-2 cursor-pointer"
                            })
                        ]
                    }, project.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var _hooks_useValidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9701);
/* harmony import */ var _hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8748);
/* harmony import */ var _hooks_useAddData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7285);
/* harmony import */ var _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4097);
/* harmony import */ var _sections_SectionHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6735);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_8__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__, _Spinner__WEBPACK_IMPORTED_MODULE_11__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__, _hooks_useAddData__WEBPACK_IMPORTED_MODULE_8__, _hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__, _Spinner__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Skills() {
    const { isLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.data);
    const { skills  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.data.data);
    const mySkills = typeof skills === "object" ? Object.values(skills) : skills || [];
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { uploadImg  } = (0,_hooks_useUploadImg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [addNewItem] = (0,_hooks_useAddData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { removeItem  } = (0,_hooks_useRemoveData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [emptyFieldMsg, checkEmptyFields, clearForm] = (0,_hooks_useValidate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    function addItemHandler(e) {
        e.preventDefault();
        const id = skills?.length || 0;
        const allInputs = e.target;
        const skillName = e.target[0].value;
        const selectedImg = e.target[1]?.files[0];
        if (!checkEmptyFields(allInputs)) {
            uploadImg("skills", selectedImg).then((imgUrl)=>addNewItem("skills", {
                    img: imgUrl,
                    name: skillName
                }, id));
            setShow(true);
            clearForm(allInputs);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "skills",
        className: "dash-section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                heading: "Skills",
                desc: "Put and remove your skills"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-500 mb-2",
                children: emptyFieldMsg
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: addItemHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "skill-name",
                                children: [
                                    "Skill Name ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-400",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "skill-name",
                                id: "skill-name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group main-text-color",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "skill-logo",
                                children: [
                                    "Skill Logo ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-400",
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                name: "skill-logo",
                                id: "skill-logo",
                                accept: "image/*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        id: "skill-btn",
                        type: "submit",
                        className: "admin-btn",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-1 border rounded-md p-2 mt-5",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}) : mySkills.map((skill)=>skill && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "flex gap-1 p-1 items-center main-bg shadow-md mb-2 main-text-color",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: skill.img,
                                alt: "Skill Logo",
                                width: 32,
                                height: 32
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: skill.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "",
                                className: " ml-auto mr-2",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    removeItem("skills", skill.id);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCircleXmark,
                                    className: "text-red-600"
                                })
                            })
                        ]
                    }, skill.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAddData)
/* harmony export */ });
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_dataSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _store_dataSlice__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _store_dataSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useAddData() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    function addNewItem(path, item, id) {
        const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, path + "/" + id), {
            ...item,
            id: id + 1
        }).then(()=>{
            dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_2__/* .updateData */ .VA)(path));
        }).catch((error)=>{
            console.log(error);
        });
    }
    return [
        addNewItem
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRemoveData)
/* harmony export */ });
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_dataSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _store_dataSlice__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _store_dataSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useRemoveData() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    function removeItem(path, id) {
        const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();
        const initId = id === 0 ? id : id - 1;
        const updates = {};
        updates["/" + path + "/" + initId] = null;
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db), updates).then(dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_2__/* .updateData */ .VA)(path)));
    }
    return {
        removeItem
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3951);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8116);
/* harmony import */ var _components_admin_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8237);
/* harmony import */ var _components_admin_sections_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(660);
/* harmony import */ var _components_admin_sections_Experiances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(184);
/* harmony import */ var _components_admin_sections_Portfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6823);
/* harmony import */ var _components_admin_sections_Certfi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6115);
/* harmony import */ var _components_admin_sections_Messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7235);
/* harmony import */ var _store_dataSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1291);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_admin_Header__WEBPACK_IMPORTED_MODULE_6__, _components_admin_sections_Skills__WEBPACK_IMPORTED_MODULE_7__, _components_admin_sections_Experiances__WEBPACK_IMPORTED_MODULE_8__, _components_admin_sections_Portfolio__WEBPACK_IMPORTED_MODULE_9__, _components_admin_sections_Certfi__WEBPACK_IMPORTED_MODULE_10__, _components_admin_sections_Messages__WEBPACK_IMPORTED_MODULE_11__, _store_dataSlice__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_13__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_admin_Header__WEBPACK_IMPORTED_MODULE_6__, _components_admin_sections_Skills__WEBPACK_IMPORTED_MODULE_7__, _components_admin_sections_Experiances__WEBPACK_IMPORTED_MODULE_8__, _components_admin_sections_Portfolio__WEBPACK_IMPORTED_MODULE_9__, _components_admin_sections_Certfi__WEBPACK_IMPORTED_MODULE_10__, _components_admin_sections_Messages__WEBPACK_IMPORTED_MODULE_11__, _store_dataSlice__WEBPACK_IMPORTED_MODULE_12__, _store__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Home() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!localStorage.getItem("isLoggedIn")) {
            router.replace("/admin");
        } else {
            setMounted(true);
        }
    }, [
        router
    ]);
    const navs = [
        [
            "skills",
            "experiance",
            "portfolio",
            "certifications",
            "messages"
        ],
        [
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGear,
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGraduationCap,
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBriefcase,
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLayerGroup,
            _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMessage
        ]
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Ahmed Ali | Dashboard"
            }),
            mounted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
                navs: navs,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_sections_Skills__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_sections_Experiances__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_sections_Portfolio__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_sections_Certfi__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_sections_Messages__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
}
const getStaticProps = _store__WEBPACK_IMPORTED_MODULE_13__/* .wrapper.getStaticProps */ .Y.getStaticProps((store)=>async ()=>{
        await store.dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_12__/* .getData */ .Yu)());
        return {
            revalidate: 3600
        };
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("autoprefixer");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 2527:
/***/ ((module) => {

module.exports = import("@firebase/util");;

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 2765:
/***/ ((module) => {

module.exports = import("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 1208:
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,563,367,951,116,773,250], () => (__webpack_exec__(6346)));
module.exports = __webpack_exports__;

})();