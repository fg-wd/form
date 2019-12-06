function mask(obj, fun) {
	_obj = obj;
	_fun = fun;
	setTimeout("execMask()", 1)
}
		
function execMask() {
	_obj.value = _fun(_obj.value);
}
		
function maskTel(phone) {
	phone = phone.replace(/\D/g,"");
	phone = phone.replace(/^(\d{2})(\d)/g,"($1) $2 ");
	phone = phone.replace(/(\d)(\d{4})$/,"$1 $2");
    return phone;
}
		
function id(el) {
	return document.getElementById(el);
}
		
window.onload = function() {
	id('phone').onkeyup = function() {
		mask(this, maskTel);
	}
}
