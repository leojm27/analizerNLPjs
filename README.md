# analizerNlpjs

## Endpoint '/twitter' or '/facebook'


example body:

[
    {
    "id": "123456",
    "text": "Che el banco Macro y el credicoop ahora no hacen compras millonarias de dólares billete? #ALBERTO #Cristina #kicillof"
    },
    {
    "id": "456789",
    "text": "Se me bloqueó la tarjeta del Credicoop por favooooooor algo más ?"
    },
    {
    "id": "987321",
    "text": "RT. Fui al Credicoop. El custodio estaba a las puteadas contra Cafierito. En el Credicoop."
    },
]

## end point return

[
    {
        "id": "123456",
        "text": "Che el banco Macro y el credicoop ahora no hacen compras millonarias de dólares billete? #ALBERTO #Cristina #kicillof",
        "sentiment": 0,
        "tag": "Cajeros automaticos"
    },
    {
        "id": "456789",
        "text": "Se me bloqueó la bueno tarjeta del Credicoop, mierda por favooooooor algo más ?",
        "sentiment": -1,
        "tag": "Cajeros automaticos"
    },
    {
        "id": "987321",
        "text": "RT. Fui al Credicoop. El custodio estaba a las puteadas contra Cafierito. En el Credicoop.",
        "sentiment": -1,
        "tag": "RespuestasCredicoop"
    }
]


