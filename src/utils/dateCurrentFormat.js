
function dateCurrentFormat() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = String(now.getFullYear());
  
    const today = dd + '/' + mm + '/' + yyyy;
    return today;
  }
  
  export default dateCurrentFormat;
  