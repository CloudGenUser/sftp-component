const rabbitmq = require('msgbroker-nxg-cg');
const {constants} = require('utils-nxg-cg');
const {sftp} = require('sftp-cg-lib');
const {emits} = constants;
const {loging_elastic} = require('loging-elastic-cg-lib');

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
        this.emit(emits.data, {data: _data});
        snapshot.lastUpdated = new Date();
        this.emit(emits.snapshot, snapshot);
        loging_elastic(constants.FINISH_EXEC, log_levels.debug);
        this.emit(emits.end);
    } catch (e) {
        this.emit('error', e);
        loging_elastic(e, log_levels.error);
        rabbitmq.producerErrorMessage(msg,e);
    }
};