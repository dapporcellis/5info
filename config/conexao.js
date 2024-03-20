import mongoose from 'mongoose';

//const conexao = await mongoose.connect('mongodb://localhost:27017/5info')
const conexao = await mongoose.connect('mongodb://ifsul:ifsul@ac-pcra3vd-shard-00-00.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-01.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-02.ajiapmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-14e4b2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')

export default conexao