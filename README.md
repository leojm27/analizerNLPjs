# analizerNlpjs

## Endpoint '/twitter'

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

## respuesta:

{
  locale: 'es',
  utterance: 'Se me bloqueó la tarjeta del Credicoop por favooooooor algo más ?',
  settings: undefined,
  languageGuessed: false,
  localeIso2: 'es',
  language: 'Spanish',
  nluAnswer: {
    classifications: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    entities: undefined,
    explanation: undefined
  },
  classifications: [
    {
      intent: 'Tarjetas problemas técnicos',
      score: 0.8383561341204252
    },
    { intent: 'Tarjetas servicios', score: 0.16164386587957483 },
    { intent: 'OtrasOpiniones&RT', score: 0 },
    { intent: 'App Credicoop', score: 0 },
    { intent: 'Influencer', score: 0 },
    { intent: 'OtrasConsultas&Reclamos', score: 0 },
    { intent: 'Atención Canales', score: 0 },
    { intent: 'prensa', score: 0 }
  ],
  intent: 'Tarjetas problemas técnicos',
  score: 0.8383561341204252,
  domain: 'default',
  sourceEntities: [],
  entities: [],
  answers: [],
  answer: undefined,
  actions: [],
  sentiment: {
    score: 0.25,
    numWords: 11,
    numHits: 1,
    average: 0.022727272727272728,
    type: 'senticon',
    locale: 'es',
    vote: 'positive'
  }
}
