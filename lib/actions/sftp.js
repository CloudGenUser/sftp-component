const {log, constants} = require('utils-nxg-cg');
const {sftp} = require('sftp-cg-lib');
const {producerErrorMessage} = require('msgbroker-nxg-cg');
const {loging_elastic} = require('loging-elastic-cg-lib');
const {emits, log_levels} = constants;

/**
 * Method for sftp connections
 * @param msg
 * @param cfg
 * @param snapshot
 * @returns {Promise<void>}
 */
module.exports.process = async function sftpProcess(msg, cfg, snapshot = {}) {
    try {
        const _data = await sftp(msg, cfg);
        this.emit(emits.data, {data: {content: _data}});
        snapshot.lastUpdated = new Date();
        this.emit(emits.snapshot, snapshot);
        log.info(constants.FINISH_EXEC);
        this.emit(emits.end);
    } catch (e) {
        this.emit(emits.error, e);
        await loging_elastic(e, log_levels.error);
        await producerErrorMessage(msg, e);
    }
};