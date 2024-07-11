function changeCSS(cssFile, cssLinkIndex) 
  {
        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
        // window.alert();
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }
// هذه الدالة من اجل اخفاء صفحه التحميل بعد تحميل كامل الموقع
function loadPage()
  {
      removeElement('demo');
      var bady = document.getElementsByTagName("body")[0];
      bady.style.overflow ='auto';  
  }

// Removes an element from the document
function removeElement(elementId) 
  {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }
// Scroll To Top Page
function topFunction() 
  {
    window.scrollTo(0, 0); 
  }