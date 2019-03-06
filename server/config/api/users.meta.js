module.exports = {
  name: "Users",
  description:
    "This JSON Schema defines the paramaters required to handle a User object",
  properties: {
    id: {
      title: "id",
      description:
        "DB에서 부여하는 Primary Key (요청 파라미터에 넣을 필요없음)",
      type: "string"
    },
    email: {
      title: "email",
      description: "이메일, 홈페이지 아이디로 사용됨",
      type: "string",
      maxLength: 64,
      required: true
    },
    password: {
      title: "password",
      description: "비밀번호",
      type: "string",
      required: true
    },
    name: {
      title: "name",
      description: "사용자 이름",
      type: "string",
      maxLength: 32,
      required: true
    },
    role: {
      title: "user scope",
      description: "사용자 Scope, default 값은 customer",
      type: "string",
      required: true
    },
    mobile: {
      title: "mobile",
      description: "Please enter telephone number including country code",
      type: "string",
      maxLength: 16,
      required: true
    },
    company: {
      title: "company",
      type: "string",
      description: "사용자 소속",
      maxLength: 64
    },
    address: {
      title: "address",
      type: "string",
      description: "사용자 주소",
      maxLength: 64
    },
    status: {
      title: "user status",
      type: "boolean",
      description: "사용자 상태 (탈퇴여부)"
    },
    created_at: {
      title: "signup date",
      type: "timestamp",
      description: "사용자 가입일"
    },
    updated_at: {
      title: "update date",
      type: "timestamp",
      description: "사용자 갱신일"
    },
    last_login: {
      title: "recent login date",
      type: "timestamp",
      description: "마지막 로그인 날짜"
    }
  }
};
