function(doc) {

    // !code vendor/acra-storage/utils.js
    var result = utils.digestReport(doc);
    if(result) {
        emit(new Date(doc.USER_CRASH_DATE), result);
    }
};