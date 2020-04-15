import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const AuthToken=(props)=>{
    return(
        <>{props.Bdivision==="login"?
        <Dialog open={props.openModal}onClose={props.handleClose} >
            <DialogTitle>로그인</DialogTitle>
            <DialogContent>
                <TextField label="아이디" type="text" name="username" value={props.username.value} onChange={props.username.onChange} /> <br/>
                <TextField label="비밀번호" type="password" name="password" value={props.password.value} onChange={props.password.onChange} /> <br/>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={props.loginProcess}>로그인</Button>
                <Button variant="outlined" corlor="primary" onClick={props.handleClose}>닫기</Button>
            </DialogActions>
        </Dialog>:
     <Dialog open={props.openModal} onClose={props.handleClose}>
     <DialogTitle>회원가입</DialogTitle>
     <DialogContent>
        <TextField label="아이디" type="text" name="username" value={props.username.value} onChange={props.username.onChange} /> <br/>
        <TextField label="비밀번호" type="password" name="password" value={props.password.value} onChange={props.password.onChange} /> <br/>
        <TextField label="비밀번호 확인" type="password" name="confirmpassword" value={props.confirmPassword.value} onChange={props.confirmPassword.onChange} /> <br/>
     </DialogContent>
     <DialogActions>
        <Button variant="contained" color="primary" onClick={props.RegisterProcess}>회원가입</Button>
        <Button variant="outlined" corlor="primary" onClick={props.handleClose}>닫기</Button>
    </DialogActions>
   </Dialog>}
     </>
    );
}   

