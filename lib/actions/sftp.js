<<<<<<< HEAD
const rabbitmq = require('msgbroker-nxg-cg');
const {constants} = require('utils-nxg-cg');
const {sftp} = require('sftp-cg-lib');
const {emits} = constants;
const {loging_elastic} = require('loging-elastic-cg-lib');
=======
const {log, constants} = require('utils-nxg-cg');
const {sftp} = require('sftp-cg-lib');
const {producerErrorMessage} = require('msgbroker-nxg-cg');
const {loging_elastic} = require('loging-elastic-cg-lib');
const {emits, log_levels} = constants;
>>>>>>> 80a22ac27b510bd4c71a5e230cae3c07ac41ef31

/**
 * Method for sftp connections
 * @param msg
 * @param cfg
 * @param snapshot
 * @returns {Promise<void>}
 */
module.exports.process = async function sftpProcess(msg, cfg, snapshot = {}) {
    try {
        loging_elastic(constants.START_EXEC, log_levels.debug);
        const _data = await sftp(msg, cfg);
        this.emit(emits.data, {data: {content: _data}});
        snapshot.lastUpdated = new Date();
        this.emit(emits.snapshot, snapshot);
        loging_elastic(constants.FINISH_EXEC, log_levels.debug);
        this.emit(emits.end);
    } catch (e) {
<<<<<<< HEAD
        this.emit('error', e);
        loging_elastic(e, log_levels.error);
        rabbitmq.producerErrorMessage(msg,e);
=======
        this.emit(emits.error, e);
        await loging_elastic(e, log_levels.error);
        await producerErrorMessage(msg, e);
>>>>>>> 80a22ac27b510bd4c71a5e230cae3c07ac41ef31
    }
};