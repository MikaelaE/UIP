/**
 * Created by Joel_ on 2017-02-07.
 */

/* Gör så att hemsidan laddas först innan JQuery sätter igång.
 $(document).ready(something);
 */


function getAboutText() {
    var firstText = document.getElementById("firstSection");

    var text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec bene dicuntur, nec ego repugno," +
        " sed inter sese ipsa pugnant. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Ita enim " +
        "vivunt quidam, ut eorum vita refellatur oratio. Omnia contraria, quos etiam insanos esse vultis. Sin kakan" +
        " malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Mihi enim erit isdem istis" +
        " fortasse iam utendum. Cupit enim dícere nihil posse ad beatam vitam deesse sapienti. Re mihi non aeque " +
        "satisfacit, et quidem locis pluribus. Hanc quoque iucunditatem, si vis, transfer in animum; Prave, nequiter," +
        " turpiter cenabat; Eadem nunc mea adversum te oratio est. Facile est hoc cernere in primis puerorum aetatulis." +
        " Res tota, Torquate, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nominis.";

    var tempText = document.createTextNode(text);
    firstText.appendChild(tempText);
    return text;
}

function getAboutTextSection2() {
    var secondText = document.getElementById("secondSection");

    var text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec bene dicuntur, nec ego repugno," +
        " sed inter sese ipsa pugnant. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Ita enim " +
        "vivunt quidam, ut eorum vita refellatur oratio. Omnia contraria, quos etiam insanos esse vultis. Sin kakan" +
        " malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Mihi enim erit isdem istis" +
        " fortasse iam utendum. Cupit enim dícere nihil posse ad beatam vitam deesse sapienti. Re mihi non aeque " +
        "satisfacit, et quidem locis pluribus. Hanc quoque iucunditatem, si vis, transfer in animum; Prave, nequiter," +
        " turpiter cenabat; Eadem nunc mea adversum te oratio est. Facile est hoc cernere in primis puerorum aetatulis." +
        " Res tota, Torquate, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nominis.";

    var tempText = document.createTextNode(text);
    secondText.appendChild(tempText);
    return text;
}

