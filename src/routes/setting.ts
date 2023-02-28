/**
 * Title     Path
 * Index:    "example/"
 * Message:  "example/message"
 * Create:   "example/create"
 * Edit:     "example/edit/:id"
 * Detail:   "example/detail/:id"
 */

const URL_ROUTES = {
  Root: "/",
  Login: "login",
  Common: {
    Create: "create",
    Edit: "edit/:id",
    Detail: "detail/:id",
  },
  Admin: "admin",
  Dashboard: {
    Index: "dashboard",
    Notification: "notification",
  },
  Test: {
    Index: "test",
    Message: "message",
  },
  Example: {
    Index: "example",
    Task: "task",
  },
};

export default URL_ROUTES;
