module.exports={
    
    dietery_history:()=>{

    },
    hitung:(req,res)=>{
        let {bb,tb,usia,jk}=req.body
        let imt=bb/(tb*tb)
        let keb_kalori=''
        if(jk=="L"){
            keb_kalori=66+(13.7*bb)+(5*tb)-(6.8*usia)
        }else{
            keb_kalori=655+(9.6*bb)+(18*tb)-(4.7*usia)
        }
        let lemak=15/100*keb_kalori/9
        let protein=25/100*keb_kalori/4
        let karbohidrat=60/100*keb_kalori/4
        res.send({keb_kalori:keb_kalori.toPrecision(4),imt:imt.toPrecision(4),lemak:lemak.toPrecision(4),protein:protein.toPrecision(4),karbohidrat:karbohidrat.toPrecision(4)})
    }
}