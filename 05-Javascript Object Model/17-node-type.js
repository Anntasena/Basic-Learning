// Node Type
/*
  > Saat kita menyeleksi node menjadi nodeList, kadang kita ingin tahu tipe node tersebut
  > Apakah element, TextElement atau yang lainnya
  > Node sendiri memiliki property bernama nodeType, dimana kita bisa melihat tipe dari node tersebut
*/

// Node Type Constant
/*
Constant ==> Value ==> Decription

  > Node.ELEMENT_NODE ==> 1 ==> An Element node like <p> or <div>
  > Node.ATTRIBUTE_NODE ==> 2 ==> An Attribute of an Element 
  > Node.TEXT_NODE ==> 3 ==> The actual Text inside of Element or Attr 
  > Node.CDATA_SECTION_NODE ==> 4 ==> A CDATASection, such as <!CDATA[[...]]>
  > Node.PROCESSING_INSTRUCTION_NODE ==> 7 ==> A ProcessingInstruction of XML document, such as <?xml-stylesheet ... ?>
  > Node.COMMNET_NODE ==> 8 ==> A Comment node, such  as <!--...-->
  > Node.DOCUMENT_NODE ==> 9 ==> A Documnet node
  > Node.DOCUMENT_TYPE_NODE ==> 10 ==> A DocumentType node, such as <!DOCTYPE html>
  > Node.DOCUMENT_FRAGMENT_NODE ==> 11 ==> A DocumentFragment node 
*/

// Kode: Node Type
/*
  *Ada di 14-nodeType.html
*/