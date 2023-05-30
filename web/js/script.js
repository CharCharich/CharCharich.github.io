let nodes=[]
function updateSlider(){
    var slider = Peppermint(document.getElementById('peppermint'))

    rightArr = document.getElementById('right-arr')
    leftArr = document.getElementById('left-arr')
    slides1 = document.getElementById('slides1')
    slides2 = document.getElementById('slides2')
    slides3 = document.getElementById('slides3')
    slider.recalcWidth()

rightArr.addEventListener('click', slider.next, false);
leftArr.addEventListener('click', slider.prev, false);
slides1.addEventListener('click', function() { slider.slideTo(0) }, false);
slides2.addEventListener('click', function() { slider.slideTo(1) }, false);
slides3.addEventListener('click', function() { slider.slideTo(2) }, false);
}
updateSlider()
$("#car1").on("click", function () {
    console.log("1")

    $("#peppermint").html(`<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/bmw/series5.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>BMW</h2>
                    <p>5-series</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            3.0 л., 286 л.с., Дизель<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            Полный привод<br>
            6 700  000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>
</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/bmw/series3.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>BMW</h2>
                    <p>3-series</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            2.0 л., 190 л.с., Бензин<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            Задний привод<br>
            6 700  000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/bmw/x3.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>BMW</h2>
                    <p>X3-series</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            2.0 л., 184 л.с., Бензин<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            Полный привод<br>
            4 300 000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>`)
updateSlider()
})
$("#car2").on("click", function () {
    console.log("2")
    $("#peppermint").html(`<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/skoda/octavia.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>skoda</h2>
                    <p>octavia</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            1.4 л., 150 л.с., Бензин<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            передний привод<br>
            2 368  000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>
</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/skoda/rapid.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>skoda</h2>
                    <p>rapid</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            1.4 л.c, 125 л.с., Бензин<br>
            Коробка передач:<br>
            Вариатор<br>
            Привод:<br>
            передний привод<br>
            1 932 000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/skoda/kodiaq.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>Skoda</h2>
                    <p>Kodiaq</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            2.0 л., 180 л.с., бензин<br>
            Коробка передач:<br>
            Вариатор<br>
            Привод:<br>
            Полный привод<br>
            3 200 000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>`)
 updateSlider()
})
$("#car3").on("click", function () {
    console.log("3")
    $("#peppermint").html(`<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/kia/rio.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>KIA</h2>
                    <p>Rio</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            1.4 л., 100 л.с., Бензин<br>
            Коробка передач:<br>
            МКПП<br>
            Привод:<br>
            передний привод<br>
            1 434  000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>
</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/kia/stinger.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>KIA</h2>
                    <p>Stinger</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            2.0 л., 247 л.с., Бензин<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            Полный привод<br>
            4 849 000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/kia/k9.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>KIA</h2>
                    <p>K9</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
            3.3 л., 249 л.с., Бензин<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            Полный привод<br>
            7 347 000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>`)
 updateSlider()
})
$("#car4").on("click", function () {
    console.log("4")
    $("#peppermint").html(`<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/lada/vesta.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>Lada</h2>
                    <p>Vesta</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
        1.6 л., 113 л.с., Бензин<br>
            Коробка передач:<br>
            АКПП<br>
            Привод:<br>
            передний привод<br>
            1 750  000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>
</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/lada/granta.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>Lada</h2>
                    <p>Granta</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
        1.6 л., 90 л.с., Бензин<br>
            Коробка передач:<br>
            МКПП<br>
            Привод:<br>
            передний привод<br>
            765 500 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>
<div class="person">
    <div class="circle-container">
        <div class="bg-circle">
            <div class="person-photo">
                <img src="../img/lada/legend.png" width="300px">
            </div>
            <div class="name-person">
                <div class="about-person">
                    <h2>Lada</h2>
                    <p>Niva Legend</p>
                </div>
            </div>
            <div class="bg-circle2"></div>
            <div class="bg-circle3 bg-circle-light"></div>
            <div class="bg-circle4 bg-circle-light"></div>
        </div>
    </div>
    <div class="right-text-person">
        <p>Двигатель:<br>
        1.7 л., 83 л.с., Бензин<br>
            Коробка передач:<br>
            МКПП<br>
            Привод:<br>
            Полный привод<br>
            985 000 ₽<br></p>
        <div class="up-pointer">
            <p>“</p>
        </div>
    </div>

</div>`)
 updateSlider()
})


