// 获取日期与时间
export function getDate() {
    let param = new Date();
    let year = param.getFullYear();
    let month = param.getMonth() + 1;
    let day = param.getDate();
    let hour = param.getHours();
    let minute = param.getMinutes();
    let second = param.getSeconds();

    year = year.toString();
    month = month < 10? ('0' + month) : month.toString();
    day = day < 10? ('0' + day) : day.toString();
    hour = hour < 10? ('0' + hour) : hour.toString();
    minute = minute < 10? ('0' + minute) : minute.toString();
    second = second < 10? ('0' + second) : second.toString();

    return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        showDate: year + "-" + month + "-" + day,
        showTime: hour + ":" + minute
    };
}

// 判断字符串是否合规
export function isEmptyString(param) {
    if(typeof param === 'string') {
        return (param.length === 0);
    }
    else {
        return false;
    }
}

// 根据当前时间段返回问候语
export function getGreet() {
    let hour = new Date().getHours();

    const greets = {
        morning: '朝霞满',
        noon: '正当午',
        afternoon: '斜阳下',
        evening: '日暮里',
        night: '见星辰',
        daybreak: '又一宿'
    };

    if (hour >=0 && hour < 6) {          // 凌晨
        return greets.daybreak;
    }
    else if (hour >= 6 && hour < 11) {   // 上午
        return greets.morning;
    }
    else if (hour >= 11 && hour < 14) {  // 中午
        return greets.noon;
    }
    else if (hour >= 14 && hour < 17) {  // 下午
        return greets.afternoon;
    }
    else if (hour >=17 && hour < 20) {   //傍晚
        return greets.evening;
    }
    else if (hour >=19 && hour < 24) {   //夜晚
        return greets.night;
    }
}

// 请求unsplash图片前随机显示多彩颜色主题
export function setColorTheme() {
    let themes = [
        {'bodyBackgroundColor': '#FFEBEE', 'frostedGlassBackgroundColor': '#F44336'},
        {'bodyBackgroundColor': '#FCE4EC', 'frostedGlassBackgroundColor': '#E91E63'},
        {'bodyBackgroundColor': '#F3E5F5', 'frostedGlassBackgroundColor': '#9C27B0'},
        {'bodyBackgroundColor': '#EDE7F6', 'frostedGlassBackgroundColor': '#673AB7'},
        {'bodyBackgroundColor': '#E8EAF6', 'frostedGlassBackgroundColor': '#3F51B5'},
        {'bodyBackgroundColor': '#E3F2FD', 'frostedGlassBackgroundColor': '#2196F3'},
        {'bodyBackgroundColor': '#E1F5FE', 'frostedGlassBackgroundColor': '#03A9F4'},
        {'bodyBackgroundColor': '#E0F7FA', 'frostedGlassBackgroundColor': '#00BCD4'},
        {'bodyBackgroundColor': '#E0F2F1', 'frostedGlassBackgroundColor': '#009688'},
        {'bodyBackgroundColor': '#E8F5E9', 'frostedGlassBackgroundColor': '#4CAF50'},
        {'bodyBackgroundColor': '#F1F8E9', 'frostedGlassBackgroundColor': '#8BC34A'},
        {'bodyBackgroundColor': '#F9FBE7', 'frostedGlassBackgroundColor': '#CDDC39'},
        {'bodyBackgroundColor': '#FFFDE7', 'frostedGlassBackgroundColor': '#FFEB3B'},
        {'bodyBackgroundColor': '#FFF8E1', 'frostedGlassBackgroundColor': '#FFC107'},
        {'bodyBackgroundColor': '#FFF3E0', 'frostedGlassBackgroundColor': '#FF9800'},
        {'bodyBackgroundColor': '#FBE9E7', 'frostedGlassBackgroundColor': '#FF5722'},
        {'bodyBackgroundColor': '#EFEBE9', 'frostedGlassBackgroundColor': '#795548'},
        {'bodyBackgroundColor': '#ECEFF1', 'frostedGlassBackgroundColor': '#607D8B'},
        {'bodyBackgroundColor': '#FAFAFA', 'frostedGlassBackgroundColor': '#9E9E9E'},
    ];
    let randomNum = Math.floor(Math.random() * themes.length);
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = themes[randomNum].bodyBackgroundColor;  // 设置body背景颜色

    return themes[randomNum].frostedGlassBackgroundColor;  // 返回各组件背景颜色
}

// 根据图片背景颜色获取反色主题
export function getThemeColor(color) {
    color = '0x' + color.replace('#', '');
    let newColor = '000000' + (0xFFFFFF - parseInt(color)).toString(16);
    return '#' + newColor.substring(newColor.length-6, newColor.length);
}

// 根据元素背景颜色获取字体颜色
export function getFontColor(color) {
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (rgb) {
        let r = parseInt(rgb[1], 16);
        let g = parseInt(rgb[2], 16);
        let b = parseInt(rgb[3], 16);
        let gray = Math.round(r * 0.299 + g * 0.587 + b * 0.114);
        if (gray > 128) {
            return '#000000';
        } else {
            return '#ffffff';
        }
    }
    else {
        return '#ffffff';
    }
}

// PC端鼠标移动效果
export function mouseMoveEffect() {
    let backgroundImage = document.getElementById('backgroundImage');
    window.addEventListener('mousemove',function(e){
        if(backgroundImage instanceof HTMLElement) {
            backgroundImage.style.transition = '0.5s';
            if (e.movementX > 0 && e.movementY > 0) {
                backgroundImage.style.transform = 'scale(1.05) translate(-0.1%, -0.1%)';
            } else if (e.movementX < 0 && e.movementY > 0) {
                backgroundImage.style.transform = 'scale(1.05) translate(0.1%, -0.1%)';
            } else if (e.movementX > 0 && e.movementY < 0) {
                backgroundImage.style.transform = 'scale(1.05) translate(-0.1%, 0.1%)';
            } else if (e.movementX < 0 && e.movementY < 0) {
                backgroundImage.style.transform = 'scale(1.05) translate(0.1%, 0.1%)';
            }
        }
    });
}

// 判断设备型号
export function deviceModel() {
    let ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > -1) { return 'iPhone' }
    else if(ua.indexOf('iPad') > -1) { return 'iPad' }
    else if(ua.indexOf('Android') > -1) { return 'Android' }
    else { return '' }
}