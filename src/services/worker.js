const {
    queue
} = require('./initBot');

const {isEmpty} = require('lodash')
const {
    sendToken,
    getBalance
} = require('./TokenService');

const handleJobQueue =  async ( data, done ) => {
    let htmlbalanceunconfrim = 0
    try {
        if(!isEmpty(data)) {
            let balance = await getBalance(`${data.from}`);
            let unconfirmedBalance = balance.unconfirmedBalance;
            htmlbalanceunconfrim = unconfirmedBalance.toString().split('.');
            while((htmlbalanceunconfrim[0])*1 <  0) {
                balance = await getBalance(ownerId);
                unconfirmedBalance = balance.unconfirmedBalance;
                htmlbalanceunconfrim = unconfirmedBalance.toString().split('.');
            }
            await sendToken(`${data.from}`, data.volume, `${data.to}`, `${data.symbol}`)
        }
    } catch(err) {

    }
    // .then((data) => {})
    // .catch(err => console.log(err))
    done();
};


queue.process('rain', async (job, done) => {
    await handleJobQueue(job.data, done);
    done();
});

