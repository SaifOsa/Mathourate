


function invocationmatin() {
    let invocationMatinClicked = true;
    let invocationSoirClicked = false;

    localStorage.setItem("invocationMatinClicked", "true");
    localStorage.setItem("invocationSoirClicked", "false");
/*
    console.log("localstorage invocationMatinClicked = " + localStorage.getItem("invocationMatinClicked"))
    console.log("localstorage invocationSoirClicked = " + localStorage.getItem("invocationSoirClicked"))
  */  
  }

  

function invocationsoir() {
  let invocationSoirClicked = true;
  let invocationMatinClicked = false;

  localStorage.setItem("invocationMatinClicked", "false");
  localStorage.setItem("invocationSoirClicked", "true");
/*
  console.log("localstorage invocationMatinClicked = " + localStorage.getItem("invocationMatinClicked"))
  console.log("localstorage invocationSoirClicked = " + localStorage.getItem("invocationSoirClicked"))
*/  
}

function initializeFlags(){
  localStorage.setItem("versInvocation8Clicked", "false");
  localStorage.setItem("versInvocation9Clicked", "false");
  localStorage.setItem("versInvocation10Clicked", "false");
  localStorage.setItem("versInvocation11Clicked", "false");
  localStorage.setItem("versInvocation26Clicked", "false");
  
}

function versInvocation8() {
  localStorage.setItem("versInvocation8Clicked", "true");
  
}

function versInvocation9() {
  localStorage.setItem("versInvocation9Clicked", "true");
  
}

function versInvocation10() {
  localStorage.setItem("versInvocation10Clicked", "true");
  
}

function versInvocation11() {
  localStorage.setItem("versInvocation11Clicked", "true");
  
}

function versInvocation26() {
  localStorage.setItem("versInvocation26Clicked", "true");
  
}


function matinclicked(){
  let invocationSoirClicked = localStorage.getItem("invocationSoirClicked") ;
  let invocationMatinClicked = localStorage.getItem("invocationMatinClicked");
  

  console.log("localstorage invocationMatinClicked = " + invocationMatinClicked + typeof(invocationMatinClicked));
  console.log("localstorage invocationSoirClicked = " + invocationSoirClicked + typeof(invocationSoirClicked));


  if (invocationMatinClicked == "true")
  {
    if (localStorage.getItem("versInvocation8Clicked") == "true")
    {
        // Invocation 8
      document.getElementById("amsaynaWaAmsaArab").innerHTML = "أصبحنا وأصبح الملك لله والحمد لله لا شريك له لا إله إلا هو وإليه النشور";
      document.getElementById("amsaynaWaAmsaPhonetique").innerHTML =" ạảṣ̊baḥ̊nā wāảṣ̊baḥa ạl̊mul̊ku lilãh wāl̊ḥam̊du lilãh lā sẖarĩyka lahu lā ạilaha ại̹lãạ hūa wāi̹laẙhi ạlnũsẖūr̊";
      document.getElementById("amsaynaWaAmsaTraduction").innerHTML = "Nous voilà au matin et le règne appartient à Allah. Louange à Allah, sans associé à Lui, Il n'y a aucune divinité [digne d'être adorée] en dehors de lui, et c'est vers Lui que se fera la Résurrection.";
      
      // reset flag
      localStorage.setItem("versInvocation8Clicked", "false");

    }
    
    if (localStorage.getItem("versInvocation9Clicked") == "true")
    {
      //Invocation 9
      document.getElementById("amsaynaAlaFitratiArab").innerHTML = "أصبحنا على فطرة الإسلام وكلمة الإخلاص وعلى دين نبينا محمد صلّى الله عليه وسلّم وعلى ملّة أبينا إبراهيم حنيفاً وما كان من المشركين";
      document.getElementById("amsaynaAlaFitratiPhonetique").innerHTML =" ạảṣ̊baḥ̊nā ʿalãạ fiṭ̊raẗi l̊ại̹s̊lām̊ wakalimaẗi l̊ại̹kẖ̊lā̊ṣ̊ waʿalãạ dīni nabīĩnā muḥamãdiⁿ ṣalã llãhu ʿalaẙhi wasalãm̊ waʿalãạ milãẗi ạảbīnā ạ̹b̊rāhī̊ma ḥanīfa wamā kāna mina ạl̊musẖ̊rikī̊n̊";
      document.getElementById("amsaynaAlaFitratiTraduction").innerHTML = "Nous voici au matin, en conformité avec la saine disposition qu’est l’Islam, avec la parole du monothéisme, avec la religion de notre Prophète Mohammed et sur la voie de notre père Ibrâhîm qui vouait un culte exclusif à Allah, soumis à Lui, et n’était point du nombre des polythéistes.";

      // reset flag
      localStorage.setItem("versInvocation9Clicked", "false");
    }

    if (localStorage.getItem("versInvocation10Clicked") == "true")
    {
    
      //Invocation 10
      document.getElementById("amsaitouMinkaArab").innerHTML ="اللَّهُمَّ إنِّيْ أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر، فَأَتْمِمْ  عِلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَة";
      document.getElementById("amsaitouMinkaPhonetique").innerHTML ="   ạllãhumã ạ̹nĩẙ ạảṣ̊baḥ̊tu min̊ka fī niʿ̊maẗiⁿ waʿāfīaẗiⁿ wasit̊r̊ , fāảt̊mim̊ niʿ̊mataka ʿilayã waʿāfīataka wasit̊raka fī dun̊yā wāl̊ậkẖirah̊";
      document.getElementById("amsaitouMinkaTraduction").innerHTML = "Ô Allah ! Certe, je me retrouve au matin grâce à toi, dans un bienfait, en bonne santé et dans une couverture (de mes péchés), donc, accompli sur moi ton bienfait, ta grâce de bonne santé et ta couverture dans ce bas monde et dans le Jour dernier.";

      // reset flag
      localStorage.setItem("versInvocation10Clicked", "false");
    }

    if (localStorage.getItem("versInvocation11Clicked") == "true")
    {
    
      //Invocation 11
      document.getElementById("maAmsabiArab").innerHTML ="اللَّهُمُّ مَا أَصْبَحَ بِيَ مِنْ نِعْمَةٍ أَوْ بِأحَدٍ مِنْ خَلْقِكْ، فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكْ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرْ";
      document.getElementById("maAmsabiPhonetique").innerHTML =" ạllãhumũ mā ạảṣ̊baḥa bī min̊ niʿ̊maẗiⁿ ạảẘ biạ̉ḥadiⁿ min̊ kẖal̊qik̊ , famin̊ka waḥ̊daka lā sẖarīka lak̊ , falaka ạl̊ḥam̊du walaka ạlsẖũk̊r̊";
      document.getElementById("maAmsabiTraduction").innerHTML = "Ô Allah ! en ce soir, quelque soit le bienfait qui m'arrive ou qui arrive à toute autre créature, provient de Toi seul sans associé. Donc, à Toi la louange et à Toi le remerciement.";

      // reset flag
      localStorage.setItem("versInvocation11Clicked", "false");
    }
  }
  else if (invocationSoirClicked == "true"){
    
    if (localStorage.getItem("versInvocation8Clicked") == "true")
    {
   
      // Invocation 8
      document.getElementById("amsaynaWaAmsaArab").innerHTML = "أمسينا وأمسى الملك لله والحمد لله لا شريك له لا إله إلا هو وإليه المصير";
      document.getElementById("amsaynaWaAmsaPhonetique").innerHTML = " ạảm̊saẙnā wāảm̊sa ạl̊mul̊ku lilãh wāl̊ḥam̊du lilãh lā sẖarīka lah̊ lā ạilaha ại̹lãạ hūa wāi̹laẙhi ạl̊maṣī̊r̊";
      document.getElementById("amsaynaWaAmsaTraduction").innerHTML = "Nous voilà au soir et le règne appartient à Allah. Louange à Allah, sans associé à Lui, Il n'y a aucune divinité [digne d'être adorée] en dehors de lui, et c'est vers Lui que sera notre destinée.";
      

      // reset flag
      localStorage.setItem("versInvocation8Clicked", "false");

    }

    if (localStorage.getItem("versInvocation9Clicked") == "true")
    {
    
      //Invocation 9
      document.getElementById("amsaynaAlaFitratiArab").innerHTML = "أمسينا على فطرة الإسلام وكلمة الإخلاص وعلى دين نبينا محمد صلّى الله عليه وسلّم وعلى ملّة أبينا إبراهيم حنيفاً وما كان من المشركين";
      document.getElementById("amsaynaAlaFitratiPhonetique").innerHTML ="  ạảm̊saẙnā ʿalãạ fiṭ̊raẗi l̊ại̹s̊lām̊ wakalimaẗi l̊ại̹kẖ̊lā̊ṣ̊ waʿalãạ dīni nabīĩnā muḥamãdiⁿ ṣalã llãhu ʿalaẙhi wasalãm̊ waʿalãạ milãẗi ạảbīnā ạ̹b̊rāhī̊ma ḥanīfa wamā kāna mina ạl̊musẖ̊rikī̊n̊";
      document.getElementById("amsaynaAlaFitratiTraduction").innerHTML = "Nous voici au soir, en conformité avec la saine disposition qu'est l'Islam, avec la parole du monothéisme, avec la religion de notre Prophète Mohammed et sur la voie de notre père Ibrâhîm qui vouait un culte exclusif à Allah, soumis à Lui, et n'était point du nombre des polythéistes.";

      // reset flag
      localStorage.setItem("versInvocation9Clicked", "false");
    }

    if (localStorage.getItem("versInvocation10Clicked") == "true")
    {
    
      //Invocation 10
      document.getElementById("amsaitouMinkaArab").innerHTML ="اللَّهُمَّ إنِّيْ أَمْسَيْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر، فَأَتْمِمْ  عِلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَة";
      document.getElementById("amsaitouMinkaPhonetique").innerHTML ="   ạllãhumã ạ̹nĩẙ ạảm̊saẙtu min̊ka fī niʿ̊maẗiⁿ waʿāfīaẗiⁿ wasit̊r̊ , fāảt̊mim̊ niʿ̊mataka ʿilayã waʿāfīataka wasit̊raka fī dun̊yā wāl̊ậkẖirah̊";
      document.getElementById("amsaitouMinkaTraduction").innerHTML = "Ô Allah ! Certe, je me retrouve au soir grâce à toi, dans un bienfait, en bonne santé et dans une couverture (de mes péchés), donc, accompli sur moi ton bienfait, ta grâce de bonne santé et ta couverture dans ce bas monde et dans le Jour dernier.";

      // reset flag
      localStorage.setItem("versInvocation10Clicked", "false");
    }

    if (localStorage.getItem("versInvocation11Clicked") == "true")
    {
    
      //Invocation 11
      document.getElementById("maAmsabiArab").innerHTML ="اللَّهُمُّ مَا أَمْسَى بِيَ مِنْ نِعْمَةٍ أَوْ بِأحَدٍ مِنْ خَلْقِكْ، فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكْ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرْ";
      document.getElementById("maAmsabiPhonetique").innerHTML =" ạllãhumũ mā ạảm̊say̱ bī min̊ niʿ̊maẗiⁿ ạảẘ biạ̉ḥadiⁿ min̊ kẖal̊qik̊ , famin̊ka waḥ̊daka lā sẖarīka lak̊ , falaka ạl̊ḥam̊du walaka ạlsẖũk̊r̊";
      document.getElementById("maAmsabiTraduction").innerHTML = "Ô Allah ! en ce jour, quelque soit le bienfait qui m'arrive ou qui arrive à toute autre créature, provient de Toi seul sans associé. Donc, à Toi la louange et à Toi le remerciement.";

      // reset flag
      localStorage.setItem("versInvocation11Clicked", "false");
    }

  }
  
}
    