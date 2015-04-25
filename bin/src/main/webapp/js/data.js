	//어플리케이션 모듈을 선언하고, Directive를 인젝션한다.
	var directiveExam = angular.module('treeView', ['euTree.directive']);

	directiveExam.controller('treeController', ['$scope', function ($scope)
	    {
	        //roleList에 tree 데이터 할당
	        $scope.roleList = [
	            {
	                "roleName": "디비코아",
	                "roleId": "role1",
	                "children": [
	                    {
	                        "roleName": "강용기",
	                        "roleId": "role11",
	                        "children": []
       },
	                    {
	                        "roleName": "경영지원본부",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "원지희",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "김현주",
	                                "roleId": "role121",
	                                "children": []
         }
        ]
       },
	                    {
	                        "roleName": "기술본부",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "이승훈",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "김윤성",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "남상덕",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "윤성보",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "이현수",
	                                "roleId": "role121",
	                                "children": []
         }, {
	                                "roleName": "기술1팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "김재동",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "류영재",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "임철영",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "김석문",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "이승석",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       }, {
	                                "roleName": "기술2팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "강경수",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "이창민",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "박봉수",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "이자헌",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "성용",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "이상민",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       },
        ]
       },
	                    {
	                        "roleName": "영업본부",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "원지희",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "영업1팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "김우근",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "정봉수",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       },
	                            {
	                                "roleName": "영업2팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "김재동",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "정봉수",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       },
	                            {
	                                "roleName": "영업3팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "김성기",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       },
	                            {
	                                "roleName": "기획/개발팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "서진동",
	                                        "roleId": "role121",
	                                        "children": []
         },

        ]
       },
	                            {
	                                "roleName": "기획/개발1팀",
	                                "roleId": "role121",
	                                "children": [
	                                    {
	                                        "roleName": "홍은숙",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "안성운",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "김민경",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "김택균",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "유은경",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "김아롱",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "이지현",
	                                        "roleId": "role121",
	                                        "children": []
                                         }
                                        ]
         },
	                            {
	                                "roleName": "기획/개발2팀",
	                                "roleId": "role121",
	                                "children": [
	                                    {
	                                        "roleName": "정경식",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "김종일",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "마순환",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "이석곤",
	                                        "roleId": "role121",
	                                        "children": []
                                         },
	                                    {
	                                        "roleName": "서춘교",
	                                        "roleId": "role121",
	                                        "children": []
                                         }
                                        ]
         }
        ]
       },
	                    {
	                        "roleName": "SI사업본부",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "김정보",
	                                "roleId": "role121",
	                                "children": []
         }, {
	                                "roleName": "개발1팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "정인영",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "류성률",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "서혁성",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "송영화",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "어금지운",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "한귀정",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "정혁",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "조진원",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       },
	                            {
	                                "roleName": "개발2팀",
	                                "roleId": "role12",
	                                "children": [
	                                    {
	                                        "roleName": "박은정",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "김두욱",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "김태훈",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "임상우",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "박명현",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "박해수",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "한용해",
	                                        "roleId": "role121",
	                                        "children": []
         },
	                                    {
	                                        "roleName": "장태건",
	                                        "roleId": "role121",
	                                        "children": []
         }
        ]
       }
        ]
       },
	                    {
	                        "roleName": "시스템사업본부",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "장길수",
	                                "roleId": "role121",
	                                "children": []
         }
        ]
       },
	                    {
	                        "roleName": "기술연구소",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "강용기",
	                                "roleId": "role121",
	                                "children": []
         },
	                            {
	                                "roleName": "조경근",
	                                "roleId": "role121",
	                                "children": []
         },

	                            {
	                                "roleName": "서민교",
	                                "roleId": "role121",
	                                "children": []
         },

	                            {
	                                "roleName": "김경범",
	                                "roleId": "role121",
	                                "children": []
         },

	                            {
	                                "roleName": "박기태",
	                                "roleId": "role121",
	                                "children": []
         },

	                            {
	                                "roleName": "정인철",
	                                "roleId": "role121",
	                                "children": []
         }
        ]
       },
	                    {
	                        "roleName": "제주사무소",
	                        "roleId": "role12",
	                        "children": [
	                            {
	                                "roleName": "",
	                                "roleId": "",
	                                "children": []
         }

        ]
       }
      ]
     }
    ];

   }]);