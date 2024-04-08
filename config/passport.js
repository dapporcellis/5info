import passport from 'passport'
import LocalStrategy from 'passport-local'
import Usuario from '../models/usuario.js'

passport.use(new LocalStrategy({
    passReqToCallback: true, 
    usernameField: 'email',
    passwordField: 'senha',
}, async function verify(req, username, password, cb) {
    let usuario = await Usuario.findOne({
        'email': username
    })
    console.log(usuario)
    console.log(password + ' senha ' + usuario.senha)
    if (!usuario) {
        console.log('Usuario errado')
        return cb(null, false, 'Email não encontrado.')
    } else if (usuario.senha != password) {
        console.log('Erro de senha')
        return cb(null, false, 'Senha incorreta.')
    } else {
        console.log('Passou')
        return cb(null, usuario);
    }

}));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {
            id: user.id,
            nome: user.nome,
            email: user.email,
            foto: user.foto
        });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});


export default passport