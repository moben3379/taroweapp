var isLogin=false
var AtAvatarUrl=''
var nickName=''
var address=''
var phone=''
var openId=''
var url = 'http://localhost:8090/'

export function setIsLogin(val){
  isLogin=val
}
export function getIsLogin(){
  return isLogin
}

export function setAddress(val){
  address=val
}
export function getAddress(){
  return address
}

export function setPhone(val){
  phone=val
}
export function getPhone(){
  return phone
}

export function setOpenId(val){
  openId=val
}
export function getOpenId(){
  return openId
}
export function setAtAvatarUrl(val){
  AtAvatarUrl=val
}
export function getAtAvatarUrl(){
  return AtAvatarUrl
}
export function setnickName(val){
  nickName=val
}
export function getnickName(){
  return nickName
}

export function geturl(){
  return url
}
