export default function BookList() {
   let pageTitle = "Books";
   let book1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falmabooks.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fdracula.jpg&f=1&nofb=1&ipt=5da4a1e256f8e43a80f450802bfe0b701b14df97f42d56c6b4ab35c7f8074be2&ipo=images.com";
   let book2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd8%2Ffe%2Fd6%2Fd8fed6d5f84b38306f8a228988ea919c.jpg&f=1&nofb=1&ipt=f643f71a9f1a0cdb890061513d2e6cdc399c1f3c55f36b76ea5ee67bb5789917&ipo=images";
   let book3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv2-2-f.scribdassets.com%2Fimg%2Fword_document%2F325731305%2Foriginal%2F408397ac62%2F1568688974%3Fv%3D1&f=1&nofb=1&ipt=3cb00262cdd82c602ad640de08e77ce937ad23c0068eaf2443df3d83403777bf&ipo=images";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dracula" />
         <img src={book2} alt="Frankenstein" />
         <img src={book3} alt="Moby Dick" />
      </div>      
   );
}