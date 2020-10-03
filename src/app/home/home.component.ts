import { CardDetailComponent } from './../card-detail/card-detail.component';
import { Card } from './../shared/models/card.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public readonly data: Card[] = [
    {
      title: '#001',
      text: 'Jedes Grundstück hat eine andere Geometrie, ist nie gleich und immer ein Unikat, daher ist ein Denken in gleichartigen modularen Holzbausystemen zu starr und unwirtschaftlich.',
      imgSrc: 'assets/01.png'
    },
    {
      title: '#002',
      text: 'Der Entwurf im Holzbau erfordert parallele Denkwei- sen vom Groben ins Feine und umgekehrt. Es gibt schnelle Maßstabssprünge. Städtebauliche Entschei- dungen haben weitreichende Konsequenzen bis in die Detailebene.',
      imgSrc: 'assets/01.png'
    },
    {
      title: '#003',
      text: `In Wien wird oft in der Gebäudeklasse 5 gebaut, also Gebäude mit einem Fluchtniveau von max. 22 m. Dies entspricht 8 Geschossen inkl. einem Staffelge- schoss.
      Derzeit beschränken aber die Brandschutzvorschrif- ten einen Holzbau mit max. 6 Geschossen.
      Die Erfüllung dieser Anforderungen ist meist keine große Herausforderung.
      Will man dennoch die max. wirtschaftliche Ausnut- zung erzielen und 8-geschossig bauen, sind Sonder- lösungen mittels Brandschutzkonzept frühzeitig ein- zuplanen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#004',
      text: `Ein Integraler Planungsprozess ist im Holzbau von Beginn an erforderlich. Es gibt noch keine jahrzehnte lange Erfahrung im Holzbau und auch keine standardisierten Aufbauten, daher ist ein paralleler Austausch mit der Tragwerksplanung, der Bauphysik und der Technischen Gebäudeausstattung notwendig.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#005',
      text: `Ein Integraler Planungsprozess ist im Holzbau von Beginn an erforderlich. Es gibt noch keine jahrzehnte lange Erfahrung im Holzbau und auch keine standardisierten Aufbauten, daher ist ein paralleler Austausch mit der Tragwerksplanung, der Bauphysik und der Technischen Gebäudeausstattung notwendig.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#006',
      text: `Im Holzbau ist eher ein Wissensmangel auf der Planungsseite und ein Wissensvorsprung auf der Ausführungsseite vorhanden.
      Das öffentliche Vergaberecht verhindert allerdings Absprachen mit ausführenden Firmen in der Planungsphase, also den Wissensaustausch,
      daher sind andere Lösungen der Kooperation erforderlich.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#007',
      text: `Holzbauteile sind nicht standardisiert.
      (zB. Deckenplatten usw.).
      Daher macht es keinen Sinn Hersteller-spezifische Elementbreiten usw. im Entwurf zu berücksichtigen, da in der Vergabephase ein anderes Unternehmen den Zuschlag bekommen kann.
      Wichtig ist nur, gewisse Bandbreiten die sich aus dem Transport und der Produktion ergeben, zu berücksichtigen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#008',
      text: `Wände im Holzrahmenbau werden auf sogenannten Schmetterlingwendetischen hergestellt. Diese sind meist 12m lang. Je größer die Wandteile, desto wirt- schaftlicher ist die Produktion.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#009',
      text: `Wände werden stehend transportiert und montiert. Decken werden liegend produziert, transportiert und montiert.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#010',
      text: `Wirtschaftlichkeit: Jeder m3 Holz kostet!
      Das Verhältnis m3 zu € ist im Stahlbetonbau nicht so drastisch. Jeder Zentimeter zusätzlicher Decken- stärke kostet im Holzbau viel mehr, als im Massivbau.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#011',
      text: `Kostenumlagerungen sind durch den Optimierungs- gedanken im Holzbau leicht möglich.
      Einsparungen auf der einen Seite, können Mehrkosten in anderen Fachgebieten bewirken.
      Daher ist eine ganzheitliche und integrale Planung notwendig.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#012',
      text: `Schallschutz im Holzbau ist heikler als Brandschutz! Im Massivbau geht man davon aus, dass die hohe Eigen-Masse viele Probleme löst, im Holzbau muss man vermehrt in Schichten denken und ein ganzheitliches Schallschutz-Konzept in der frühen Planungsphase berücksichtigen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#013',
      text: `Durch die Schichtung im Holzbau arbeitet oft die statische Lastabtragung gegen die schalltechnische Trennung. Umso wichtiger ist daher eine gleichzeitige Einbindung von Baupyhsik- und Tragwerksplanung.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#014',
      text: `
      Der Integrale Planungsprozess braucht mehr Budget zu Beginn, dafür sinken aber die laufenden baubegleitenden Kosten.
      Darüber hinaus sinken die Fehleranfälligkeit in der Bauphase, die Kosten für die Bauüberwachung und teurere Änderungsleistungen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#015',
      text: `Wer A sagt, muss auch B sagen: Holzbau ist nicht nur Ersatz des primär Baustoffes, sondern betrifft auch Folgeentscheidungen auf ökologischer und ausfüh- rungstechnischer Seite.
      Keine gute Kombination sind Kunststoffdämmungen und Holzrahmenbau, Nasse Fußbodenaufbauen, Verbundwerkstoffe generell ...`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#016',
      text: `Sichtholzoberflächen müssen frühzeitig definiert und festlegt werden.
      Einerseits gibt es architektonische Auswirkungen, bauphysikalische Auswirkungen (keine Vorsatz- schalen), aber auch im Bauprozess ist es wichtig, auf die entsprechenden Transport-, Lagerungs-
      und Montagebedingungen zu achten. Sichtholzoberflächen müssen einen ganzen Bauablauf unbeschadet überstehen können, dafür sind keine zeitintensiven Spachtel- und Malerarbeiten notwendig.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#017',
      text: `Es gibt eine hohe Artenvielfalt an Holzbauweisen.
      Je nach Gebäude gilt es das bestgeeignetste System zu finden. Grundsätzlich unterscheidet man in Rahmenbau-, Massivholzbau- und Skelettbau- weise. Diverse Eigenschaften und Parameter beein- flussen die Systemwahl: Grad der Vorfertigung, Trag- fähigkeit, Öffnungsanteil, Spannweiten, Bauablauf, Wertschöpfung usw.
      Man kann die Systeme auch mischen, dadurch ergeben sich zusätzliche Wechselbeziehungen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#018',
      text: `Durch die vielen Entscheidungsparameter und Wechselbeziehungen entsteht eine hohe Komplexität.
      Der schichtenweise Aufbau erzeugt Abhängigkeiten in der Bauphysik, Statik, Produktion und TGA, daher muss ein Bauteil integral geplant werden.
      Weiters empfiehlt es sich daher einen Standardisie- rungsgedanken im Entwurf zu berücksichtigen, um Sonderlösungen und Neu-Erfindungen zu vermeiden, um die Komplexität nicht noch weiter zuzuspitzen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#019',
      text: `Holz ist ein natürlich gewachsener Rohstoff und hat in jede Richtung andere Festigkeiten.
      Ein Gedankenspiel mit 100g Spaghetti – stellt man den Bündel auf und belastet es gleichmäßig von oben, also in Faserrichtung so ist es sehr stabil.
      Legt man den Bündel aber auf den Tisch und drückt quer zur Faser, so quetscht sich der Bündel auseinander und kann nicht viel Kraft aufnehmen. Analog dazu verhalten sich die Fasern im Holz.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#020',
      text: `Holzbauteile müssen gleichmäßig belastet werden, ansonsten treten zu hohe Pressungen auf. Besondere Beachtung muss dabei den Auflager- punkten gegeben werden.
      Querpressungen sind bereits ab drei Geschossen maßgeblich zu berücksichtigen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#021',
      text: `Stahlbeton ist ein formbares Verbundmaterial,
      mit dem man die Tragfähigkeit durch die eingelegte Bewehrung in späten Bauphasen relativ kosten- günstig steuern kann.
      Der Holzbau hingegen hat grundlegende andere Material- und Verarbeitungseigenschaften, die man je nach Einbausituation im Vorhinein berücksichtigen muss. Daher ist ein ungeheures Maß an Genauigkeit in der Planung erforderlich.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#022',
      text: `Holz ist ein sehr weicher Werkstoff, erst durch Verleimung können plattenförmige starre Elemente hergestellt werden.
      Allerdings ist die Scheibensteifigkeit viel geringer als bei Stahlbeton.
      Daher ist es sehr wichtig ein Aussteifungskonzept im Entwurf zu entwickeln.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#023',
      text: `Wie bei einem Schraubenschlüssel gilt, je größer der Hebelsarm zur Gebäudemitte, desto geringer wird die aufzubringende Kraft in der aussteifenden Wand. Daher sind hochsteife Materialien im Kern erforder- lich. Durch einen wirksamen Hebelsarm können auch weichere Materialien beispielsweise in Außenwän- den verwendet werden.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#024',
      text: `Die Statik weist die Tragfähigkeit und die Gebrauchs- tauglichkeit von Bauteilen nach. Erstes weist nach, dass keine Kräfte auf ein Bauteil einwirken, die das Material nicht aushält. Zweiteres weist nach, dass die Durchbiegung und Formänderung in Folge einer Be- lastung nicht zu groß ist. Da dieser Nachweis meist viel früher maßgebend ist, weil Holz weicher ist und eine Formänderung daher schneller eintritt, ist die Spannweite eine sehr wirksame Stellschraube. Einige Zentimeter Reduktion können maßgeblich die Durchbiegung und Schwingungserscheinungen ^reduzieren. Eine weitere wirksame Maßnahme ist die Ausbildung von durchlaufenden Bauteilen, die so- mit mehr Auflagerpunkte haben und Durchbiegungen reduzieren können.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#025',
      text: `Durch das geringe Eigengewicht von Holz sind Schub- und Zuganker zur Ableitung von horizontalen Kräften notwendig.
      Durch die elementierte Bauweise müssen die Kräfte pro Geschoß aufgenommen und durch entsprechen- de Verbindungsmittel bis ins Erdgeschoß und dann in das Fundament weitergeleitet werden.
      Die Einspannung ist im Knotenpunkt zum Fundament am höchsten und die Kräfte verringern sich nach obenhin.
      Dementsprechend sind die Schub- und Zuganker zu dimensionieren.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#026',
      text: `Beim Schallschutz gibt es zwei Arten von Übertragung, die beachtet werden muss.
      Erstens den Trittschall, welcher durch direkte Berüh- rungspunkte (Flanken) übertragen wird. Deshalb sind konstruktive oder materielle Trennelemente nötig, um die Schallübertragung zu unterbrechen. Dies wirkt sich allerdings eher nachteilig auf die Statik aus, weshalb im- mer ein Abwegen der Maßnahmen erforderlich ist.
      Zweitens der Luftschall, welcher maßgeblich durch Schwingungen im Medium Luft übertragen wird und durch Bauteile indirekt hindurch wandern kann. Dafür ist im Holzbau ein mehrschichtiger Aufbau mit Dämp- fender Wirkung erforderlich.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#027',
      text: `Bei Brandschutzkonzepten ist auf eine schnelle
      und unkomplizierte Entfluchtung zu achten, sowie ausreichend Angriffsflächen für die Feuerwehr. Daher sind grundsätzlich kleinere freistehende Baukörper wie Punkthäuser besser geeignet, als großvolumige Zeilenbauten.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#028',
      text: `Die Haupt-Todesursache bei Brandunfällen sind Rauchgasvergiftungen und nicht der Brand bzw. die Flamme an sich.
      Durch die elementierte Bauweise ist es im Holzbau besonders wichtig luftdichte und hohlraum-freie Aufbauten zu konzipieren, sowie die hohe Anzahl
      an Fugen entsprechend auszuführen.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#029',
      text: `Holz hat ein sehr gutes Wärmedämmverhalten. Daher sind schlankere Aufbauten bei gleichen Wärmedämm-Anforderungen möglich. Wärmebrücken können reduziert werden und somit sind die Oberflächentemperaturen höher, was sich positiv auf das Raumklima auswirkt.
      Es sinkt zB. die Gefahr der Schimmelbildung.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#030',
      text: `Die Sommerliche Überwärmung von Gebäuden ist von der Bauweise primär unabhängig.
      Im 24h-Rhythmus ist es tagsüber wichtig die Wärmeeinträge durch Beschattung zu minimieren und nachtsüber die Wärmeabfuhr durch hohen Luftwechsel zu maximieren.
      Dabei hat das Material der Tragkonstruktion keinen Einfluss, da innerhalb dieser 24h-Phasen die Wärme- energie lediglich wenige Zentimeter (ca. 2 cm) in den oberflächennahen Materialien eindringen kann. Somit ist es wichtig diese Schichten mit einer
      hohen Masse auszuführen, um tagsüber möglichst viel Wärmeenergie zu speichern, aber gleichzeitig ist es genauso wichtig diese Wärmeenergie nachtsüber schnell wieder abgeben zu können.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#031',
      text: `Holz und Feuchtigkeit vertragen sich nicht.
      Daher ist es immens wichtig bauphysikalische Grundprinzipien einzuhalten.
      Raumseitig hohe Masse und luftdicht bzw.
      6x dampfdichter als Außenseitig ausführen.
      Das heißt nach außen hin immer diffusionsoffener werden, damit mögliche anfallende Feuchtigkeit abtransportiert werden kann.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#032',
      text: `Beim Flachdach ist auf eine mögliche Trennung von Tragebene und Dämmebene zu achten, ansonsten empfiehlt es sich eine Hinterlüftungsebene als Kaltdach auszubilden.
      Nicht hinterlüftete Kompaktdächer sind nur unter Einhaltung spezieller Kriterien empfehlenswert.`,
      imgSrc: 'assets/01.png'
    },
    {
      title: '#033',
      text: `Für die holzbaugerechte Technische Gebäudeaus- stattung und generell bei vorgefertigten Bauweisen empfiehlt sich eine zentrale Schachtversorgung, welche dabei unabhängig vom Tragwerk funktioniert, leicht zugänglich ist und auch erweitert werden kann. Danach ergeben sich die Anforderungen an Größe und Lage von Installationsführungen, welche als fixierte Parameter in die Planung einfließen.`,
      imgSrc: 'assets/01.png'
    }
  ];

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public onCardClick(card: Card) {
    const ref = this.modalService.open(CardDetailComponent, { centered: true, windowClass: 'modal-background' });
    ref.componentInstance.card = card;
  }


}
