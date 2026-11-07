// Export authentication functions
export { signUp } from "./signUp.js";
export { login } from "./login.js";
export { logout } from "./logout.js";

// Export session management functions
export {
    getCurrentSession,
    getCurrentUser,
    monitorAuthState
} from "./session.js";

// Access token verification
export { verifyAccessToken } from "./verifyToken.js";

// Session refreshing
export { refreshSession } from "./refreshSession.js";

// Password recovery
export { requestPasswordRecovery } from "./passwordRecovery.js";

// Password updating
export { updatePassword } from "./updatePassword.js";

// Password recovery verification
export { verifyPasswordRecovery } from "./verifyPasswordRecovery.js";