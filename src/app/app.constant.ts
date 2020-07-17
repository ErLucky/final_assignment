import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class ScreenConstants {
    public static tokenName = "cp_token";
    public fieldMandatoryError = "This field is mandatory";
    public invalidDateError = "Date format must be DD/MM/YYYY. Expiration date should be greater than or equal to Current Date and Start Date";
    public invalidEmailError = "Please enter a valid Email (e.g:xyz@gmail.com)";
    public invalidUserCodeError = "User Id is mandatory and must be of atleast 4 characters without whitespaces.";
    public invalidUserNameError = "User Name must contain only alphanumeric.";
    public confirmPasswordNotMatch = "Confirm Password doesn't match with the New Password.";
    public addUserConfirmPasswordNotMatch = "Confirm Password doesn't match with the Password.";

    public fieldsMandatory = "*Fields with red left border are mandatory.";
    public userCreationRoleInfo = '*Only ORGANIZATION ADMIN or ADMIN can create a User.';
    public gstNoError = "Please enter a valid GST No"

    public screenUrls = {
        HOME_PAGE: "/home",
        LOGIN: "/login",
        ADD_UPDATE: "/addupdateuser",
        CHANGE_PASS: "/changepassword"
    };

    public fieldLabels = {
        pass: 'Password',
        currPass: 'Current Password',
        newPass: 'New Password',
        confirmPass: 'Confirm Password',
        userId: 'User Id',
        userName: 'User Name',
        email: 'Email',
        status: 'Status',
        startDate: 'Start Date',
        endDate: 'Expiration Date',
        datePlaceholder: 'DD/MM/YYYY',
        country: 'Country',
        usrType: 'User Type',
        isactive: 'Is Active',
        grantedApps: 'Granted Apps',
        expDate: 'Expiration Date',
        userLang: 'User Language',
        timeZone: 'Time Zone',
        action: 'Action',
        application: 'Application',
        organization: 'Organization',
        roles: 'Roles'
    };

    public btnLabels = {
        login: 'Login',
        submit: 'Submit',
        search : 'Search',
        clear: 'Clear',
        forgotPass: 'Forgot password?',
        resetPass: 'Reset Password',
        trackContainer: 'Track your container'
    };

    public fieldValidationErrors = {
        fieldValidationErrors : 'Please enter atleast 8 characters(uppercase,lowercase,numbers and special characters except !* _ )',
    };

    public errorNotificationMsgs = {
        unauthToCreateUsr : "You are not authorized to create new users.",
        orgOrRoleNotSelected : 'Either Organization or Role is not selected for ',
        regOrUpdateFailed : "Registering/Updating user failed for ",
        deletedUsr : "Deleted User since it could not be submitted to any App."
    };

    public successNotificationMsgs = {
        usrCreated : "Successfully Registered/Updated user in ",
    };

    public appAttributes = {
        orgEndpoint: 'org_endpoint',
        roleEndpoint: 'role_endpoint',
        orgRoleEndpoint: 'org_role_endpoint'
    };

    public noApplicationsToShow = "There are not any application available at the moment";
    public someErrorOccurred = "Some error occurred while performing the operation.";
    public passResetSuccess = "Password has been reset successfully.";

    public selectApp = "Please select atleast one Application.";

    public appCodes = {
        COMMON_PORTAL: "CP",
        LVS: "LVS",
        LDB: "LDB",
        LDBA: "LDBA"
    };

    public loginUnSuccessMessages = {
        LOGIN_001: "Account is Locked",
        LOGIN_002: "Account is expired",
        LOGIN_003: "User has expired",//"Credentials are Expired",
        LOGIN_004: "User credentials are not correct",//"Bad Login Credentials",
        LOGIN_005: "Account is Disabled"
    };
    public changePasswordMessages = {
        CP_001: "Current Password is incorrect",
        CP_002: "Current Password and New Password cannot be same",
        CP_003: "Password has been changed successfully."
    };

    constructor() {
    }
}
