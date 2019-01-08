module.exports = {
    'POST /user/login':                               { action: 'User/login' }, //用户登录
    'POST /user/create':                              { action: 'User/createUser' }, //添加用户
    'DELETE /user/delete/:id':                        { action: 'User/deleteUser' }, //删除用户
    'POST /user/update_pwd':                          { action: 'User/updatePassword' }, //修改密码
    'POST /user/update_info':                         { action: 'User/updateInfo' }, ////修改信息
    'GET /user/search':                               { action: 'User/getUserList' }, //搜索用户
}