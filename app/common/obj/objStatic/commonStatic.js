requestProperties = {
    triggerIdentifier: undefined,
    reciverIdentifier: undefined,
    chatName: undefined
};

auxiliaryMessage = {
    triggerIdentifier: undefined,
    message: undefined
};

messageStatic = {
    "email.check.exist": "Địa chỉ email đã tồn tại trong hệ thống",
    "email.check.null": "Địa chỉ email không được phép Null",
    "entity.check.null": "Đối tượng không được phép Null",
    "entity.check.not.exist": "Đối tượng không tồn tại hoặc đã bị xóa",
    "request.message.trigger.add.user": function () {
        return "Bạn đã yêu cầu kết nối đến " + requestProperties.reciverIdentifier;
    },
    "request.message.reciever.add.user": function () {
        return requestProperties.triggerIdentifier + " đã gửi cho bạn một yêu cầu kết nối";
    },
    "request.message.trigger.add.user.to.chat": function () {
        return "Bạn đã mời " + requestProperties.reciverIdentifier + " tham gia " + requestProperties.chatName;
    },
    "request.message.reciever.add.user.to.chat": function () {
        return requestProperties.triggerIdentifier + " đã mời bạn tham gia " + requestProperties.chatName;
    },
    "request.message.trigger.request.to.chat": function () {
        return "Bạn đã gửi yêu cầu tham gia " + requestProperties.chatName;
    },
    "request.message.reciever.request.to.chat": function () {
        return requestProperties.triggerIdentifier + " đã yêu cầu tham gia cuộc trò chuyện";
    },
    "request.message.reciever.accept.user": function () {
        return requestProperties.reciverIdentifier + " đã chấp nhận kết nối với bạn";
    },
    "request.message.reciever.accept.to.chat": function () {
        return requestProperties.reciverIdentifier + " đã tham gia cuộc trò chuyện";
    },
    "message.when.created.chat": function () {
        return auxiliaryMessage.triggerIdentifier + ' đã tạo cuộc trò chuyện';
    }

}

exports.requestProperties = requestProperties;
exports.messageStatic = messageStatic;
