angular.module('language.services', [])

.factory('getLanguage', function() {
  // Might use a resource here that returns a JSON array

  return {
    all: function() {
      return chats;
    },
    getShowLanguage: function() {

      alert("start to excute!!!!!!");
      var actionUrl = "http://10.5.0.218:55580/client/getShowLanguage.action";

      $.ajax( { // ȡ����
        url : actionUrl,
        async: false,
        type : "get",
        dataType : "jsonp",
        jsonp: "callback",//���ݸ�����������ҳ��ģ����Ի��jsonp�ص��������Ĳ�����(һ��Ĭ��Ϊ:callback)
        jsonpCallback:"getShowLanguage",//�Զ����jsonp�ص��������ƣ�Ĭ��ΪjQuery�Զ����ɵ������������Ҳ����д"?"��jQuery���Զ�Ϊ�㴦������
        error : function(data)
        {
          if(data.status=="200")
          {
            alert("������ˢ��һ��");
          }
          else if(data.status=="500")
          {
            alert("������������!!!!");
          }
          else
          {
            alert("there is an errror!!!");
          }
        },
        success : function(data)
        {
          alert("yes,it is success!!!");
          var insertHtml=insertLanguageInPage(data);
          alert(insertHtml);
        }
      });// end of ajax
    }
  };
});


/*����Ӧ��λ�ò�������*/
function insertLanguageInPage(data)
{


  var insertHtml="<ul>";
  var len=data.length;
  for(var i=0;i<len;i++)
  {
    var tempId=data[i].id;
    var tempName=data[i].foreignerName;
    if(tempId==7)//˵�����û�ѡ������Ե�id
    {
      insertHtml="<a href='javascritp:void(0)' class='downmenu'>"+tempName+"</a>"+insertHtml;
    }
    else
    {
      //if(customerRequestPage.indexOf("?") > 0)
      //{//�Ѿ����˱�Ĳ�������Ҫ��&
      //	insertHtml+="<li><a href='"+customerRequestPage+"&languageId="+tempId+"'>"+tempName+"</a></li>";
      //}
      //else
      //{//û�б�Ĳ�������Ҫ�ӣ�
      //	insertHtml+="<li><a href='"+customerRequestPage+"?languageId="+tempId+"'>"+tempName+"</a></li>";
      //}
    }

  }

  insertHtml+="</ul>";

  return insertHtml;

}
