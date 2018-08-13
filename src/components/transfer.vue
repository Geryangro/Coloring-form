<template>
  <b-col md="12" id="transfer">
    <div class="trans" v-if="$resize && $mq.above(992)">
        <p class="bold">Assalamualaikum wr.wb</p>
        <p>Terima kasih, data anak Ayah Bunda sudah kami terima. <br> 
        Silahkan transfer Biaya Pendaftaran ke nomor rekening <br>
        PT Afra Insan Amanah berikut.
        </p>
        <p>Lakukan Pembayaran Sebesar :</p>
    </div>
    <div class="trans" v-else>
        <p class="bold">Assalamualaikum wr.wb</p>
        <p>Terima kasih, data anak <br> Ayah Bunda sudah kami terima. <br> 
        Silahkan transfer Biaya <br> Pendaftaran ke nomor rekening <br>
        PT Afra Insan Amanah berikut.
        </p>
        <p>Lakukan Pembayaran Sebesar :</p>
    </div>
    <h1>Rp. 50.135</h1>
    <b-row>
        <b-col cols="12" md="6" offset-md="3">
            <b-row class="border-bottom-col"> 
                <b-col md="6" cols="4">
                    <b-img class="bank" :src="require('../assets/image/BCA.png')" fluid></b-img>
                </b-col>
                <b-col class="text-left" md="6" cols="8">
                    <p class="bold">BCA Cabang Warung Buncit</p>
                    <p>
                    An. PT Afra Insan Amanah <br>
                    5520199987
                    </p>
                </b-col>
            </b-row>
            <b-row class="border-bottom-col"> 
                <b-col md="6" cols="4">
                    <b-img class="bank" :src="require('../assets/image/BNI.png')" fluid></b-img>
                </b-col>
                <b-col class="text-left" md="6" cols="8">
                    <p class="bold">BNI Syariah Cabang Syariah
                        Jakarta Timur</p>
                    <p>
                    An. PT Afra Insan Amanah <br>
                    8007060500
                    </p>
                </b-col>
            </b-row>
            <b-row class="border-bottom-col"> 
                <b-col md="6" cols="4">
                    <b-img class="bank" :src="require('../assets/image/Mandiri.png')" fluid></b-img>
                </b-col>
                <b-col class="text-left" md="6" cols="8">
                    <p class="bold">Mandiri Cabang Grand Wijaya</p>
                    <p>
                    An. PT Afra Insan Amanah <br>
                    1260007009714
                    </p>
                </b-col>
            </b-row>
            <b-row class="border-bottom-col"> 
                <b-col md="6" cols="4">
                    <b-img class="bank" :src="require('../assets/image/BRI.png')" fluid></b-img>
                </b-col>
                <b-col class="text-left" md="6" cols="8">
                    <p class="bold">BRI Cabang Fatmawati</p>
                    <p>
                    An. PT Afra Insan Amanah <br>
                    033-001-001-706-307
                    </p>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <a href="https://api.whatsapp.com/send?phone=6285771889836&text=Assalamulaikum%2C%20saya%20sudah%20bayar%20pendaftaraan%20lomba%20mewarnai%20afrakids%20%E2%98%BA">
        <b-button  class="dftr">
            KONFIRMASI PEMBAYARAN
        </b-button>
    </a>
    <p class="email">*Lihat email pemberitahuan bisa di kotak masuk/spam</p>
  </b-col>
</template>

<script>
export default {
  name: 'transfer'
}
</script>

<style scoped>
#transfer {
    background-image: url('../assets/image/transfer.jpg');
    background-size: 100% 100%;
    padding: 60px 20px 100px;
    height: 1450px;
}
.trans {
    margin-top: 100px;
}
.trans p {
    color: #000000;
    margin-bottom: 10px;
    font-family: sans-serif;
    font-weight: 600px;
    font-size: 20px;
}
.bold {
    font-weight: bold;
}
p {
    font-family: sans-serif;
    margin: 0px;
    font-size: 18px;
}
h1 {
    font-family: sans-serif;
    font-size: 55px;
    font-weight: bold;
    margin-bottom: 30px;
}
img.bank {
    margin-top: 20px;
}
.border-bottom-col {
    border-bottom: 2px solid #000000;
    padding: 20px 10px 20px;
}
.dftr {
    background-color: #F4AF15;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    width: 400px;
    font-size: 26px;
    margin-top: 20px;
    border-radius: 15px;
}
.email {
    font-size: 12px;
    color: #E21759;
    margin-top: 10px;
}
@media screen and (max-width:760px) {
    #transfer {
        padding: 20px 30px 120px;
        background-image: url('../assets/image/konfirmasi-pembayaran.jpg');
        background-size: 100% 100%;
        height: 1200px;
    }
    .trans {
        margin-top: 70px;
    }
    .trans p {
        font-size: 16px;
    }
    h1 {
        font-size: 40px;
    }
    img.bank {
        margin-top: 40px;
    }
    p {
        font-size: 16px;
    }
    .dftr {
        width: 100%;
        margin-top: 20px;
        font-size: 16px;
    }
}
</style>