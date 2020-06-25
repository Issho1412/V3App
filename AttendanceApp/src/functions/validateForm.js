import {Alert} from 'react-native';

const CODE = {
    success: 0,
    code_1: 1,
    code_2: 2,
    code_3: 3,
    code_4: 4,
    code_5: 5,
    code_6: 6,
}

function checkValidEmail (email){
    let regexForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email === '' || email == null){
        return 4;
    }
    let isValidEmail = regexForEmail.test(email);
    if(!isValidEmail){
        return 5;
    }
    return 0;
}

function checkLogin (id_student, pwd){
    if(id_student == null|| id_student === ''){
        return 6;
    }
    if(pwd == null || pwd === ''){
        return 2;
    }
    if(isNaN(id_student)){
        return 6;
    }
    return 0;
}

function checkSamePwd (old_info, new_info, confirm_info){
    if(old_info == null || old_info === ''){
        return 1;
    }
    if(new_info == null || new_info === ''){
        return 2;
    }
    if(confirm_info == null || confirm_info === ''){
        return 3;
    }
    if(new_info !== confirm_info){
        return 3;
    }    
    return 0;
}

function showAlert(responseCode){
    switch(responseCode){
        case CODE.code_1: {
            Alert.alert('Announce', 'Please old password is not valid');
            break;
        }
        case CODE.code_2: {
            Alert.alert('Announce', 'Please password is not valid');
            break;
        }
        case CODE.code_3: {
            Alert.alert('Announce', 'Please confirm password is not correct');
            break;
        }
        case CODE.code_4: {
            Alert.alert('Announce', 'Please email is not valid');
            break;
        }
        case CODE.code_5: {
            Alert.alert('Announce', 'Please email format is incorrect');
            break;
        }
        case CODE.code_6: {
            Alert.alert('Announce', 'Please id student is incorrect');
            break;
        }   
    }
}

export default {
    checkLogin,
    checkSamePwd,
    checkValidEmail,
    showAlert,
};
  