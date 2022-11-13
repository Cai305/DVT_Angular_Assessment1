import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist';
import { Album } from 'src/app/interfaces/album';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  private id!: number;
  list:any=[{},{},{},{}];
  public artist!: Array<Artist>;

  _albums:Album[] =  [
      {
        "id": 303118947,
        "title": "Métèque",
        "link": "https://www.deezer.com/album/303118947",
        "cover": "https://api.deezer.com/album/303118947/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/faf600468e53ba50ca8b118a871eaa04/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/faf600468e53ba50ca8b118a871eaa04/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/faf600468e53ba50ca8b118a871eaa04/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/faf600468e53ba50ca8b118a871eaa04/1000x1000-000000-80-0-0.jpg",
        "md5_image": "faf600468e53ba50ca8b118a871eaa04",
        "genre_id": 132,
        "fans": 13928,
        "release_date": "2022-05-06",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/303118947/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 231005082,
        "title": "Putain de Best Of ! (1985 - 1994)",
        "link": "https://www.deezer.com/album/231005082",
        "cover": "https://api.deezer.com/album/231005082/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/88f426cba584933616f51ab3f787203e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/88f426cba584933616f51ab3f787203e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/88f426cba584933616f51ab3f787203e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/88f426cba584933616f51ab3f787203e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "88f426cba584933616f51ab3f787203e",
        "genre_id": 132,
        "fans": 7318,
        "release_date": "2021-05-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/231005082/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 232678262,
        "title": "Putain de Best Of ! (1994 - 2019)",
        "link": "https://www.deezer.com/album/232678262",
        "cover": "https://api.deezer.com/album/232678262/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/98c77c883209ac639597a1a648316fd7/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/98c77c883209ac639597a1a648316fd7/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/98c77c883209ac639597a1a648316fd7/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/98c77c883209ac639597a1a648316fd7/1000x1000-000000-80-0-0.jpg",
        "md5_image": "98c77c883209ac639597a1a648316fd7",
        "genre_id": 132,
        "fans": 2671,
        "release_date": "2021-05-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/232678262/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 116385052,
        "title": "Les mômes et les enfants d'abord",
        "link": "https://www.deezer.com/album/116385052",
        "cover": "https://api.deezer.com/album/116385052/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/1277884def32b9cc1fc52ae48ffbda9a/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/1277884def32b9cc1fc52ae48ffbda9a/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/1277884def32b9cc1fc52ae48ffbda9a/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/1277884def32b9cc1fc52ae48ffbda9a/1000x1000-000000-80-0-0.jpg",
        "md5_image": "1277884def32b9cc1fc52ae48ffbda9a",
        "genre_id": 132,
        "fans": 22594,
        "release_date": "2019-11-29",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/116385052/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 51781072,
        "title": "Phénix Tour (Live)",
        "link": "https://www.deezer.com/album/51781072",
        "cover": "https://api.deezer.com/album/51781072/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/95f231e3cb9cf49b831b0a25dc40199d/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/95f231e3cb9cf49b831b0a25dc40199d/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/95f231e3cb9cf49b831b0a25dc40199d/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/95f231e3cb9cf49b831b0a25dc40199d/1000x1000-000000-80-0-0.jpg",
        "md5_image": "95f231e3cb9cf49b831b0a25dc40199d",
        "genre_id": 132,
        "fans": 11104,
        "release_date": "2017-12-01",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/51781072/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 13525923,
        "title": "50 + belles chansons",
        "link": "https://www.deezer.com/album/13525923",
        "cover": "https://api.deezer.com/album/13525923/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/03f5e9b65faa1af03c1056af4b91a7e1/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/03f5e9b65faa1af03c1056af4b91a7e1/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/03f5e9b65faa1af03c1056af4b91a7e1/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/03f5e9b65faa1af03c1056af4b91a7e1/1000x1000-000000-80-0-0.jpg",
        "md5_image": "03f5e9b65faa1af03c1056af4b91a7e1",
        "genre_id": 132,
        "fans": 41971,
        "release_date": "2016-07-08",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/13525923/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85789002,
        "title": "Renaud (Deluxe Version)",
        "link": "https://www.deezer.com/album/85789002",
        "cover": "https://api.deezer.com/album/85789002/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/47aca0591cddd401fb739f3e963b46b7/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/47aca0591cddd401fb739f3e963b46b7/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/47aca0591cddd401fb739f3e963b46b7/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/47aca0591cddd401fb739f3e963b46b7/1000x1000-000000-80-0-0.jpg",
        "md5_image": "47aca0591cddd401fb739f3e963b46b7",
        "genre_id": 132,
        "fans": 6043,
        "release_date": "2016-04-08",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85789002/tracks",
        "explicit_lyrics": true,
        "type": "album"
      },
      {
        "id": 425212,
        "title": "Molly Malone : Balade irlandaise (Version Deluxe)",
        "link": "https://www.deezer.com/album/425212",
        "cover": "https://api.deezer.com/album/425212/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d2b3c8021fa85b5416ec71fcf729abe9/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d2b3c8021fa85b5416ec71fcf729abe9/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d2b3c8021fa85b5416ec71fcf729abe9/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d2b3c8021fa85b5416ec71fcf729abe9/1000x1000-000000-80-0-0.jpg",
        "md5_image": "d2b3c8021fa85b5416ec71fcf729abe9",
        "genre_id": 132,
        "fans": 9623,
        "release_date": "2009-11-20",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/425212/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85782432,
        "title": "Rouge Sang",
        "link": "https://www.deezer.com/album/85782432",
        "cover": "https://api.deezer.com/album/85782432/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/24ebc23c729b25dcc89b98497e22d040/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/24ebc23c729b25dcc89b98497e22d040/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/24ebc23c729b25dcc89b98497e22d040/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/24ebc23c729b25dcc89b98497e22d040/1000x1000-000000-80-0-0.jpg",
        "md5_image": "24ebc23c729b25dcc89b98497e22d040",
        "genre_id": 132,
        "fans": 3566,
        "release_date": "2006-09-29",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85782432/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85787502,
        "title": "Tournée Rouge Sang (Paris Bercy + Hexagone) (Live)",
        "link": "https://www.deezer.com/album/85787502",
        "cover": "https://api.deezer.com/album/85787502/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f17dcf121a0dd3179cb4b2c7137b19e7/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f17dcf121a0dd3179cb4b2c7137b19e7/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f17dcf121a0dd3179cb4b2c7137b19e7/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f17dcf121a0dd3179cb4b2c7137b19e7/1000x1000-000000-80-0-0.jpg",
        "md5_image": "f17dcf121a0dd3179cb4b2c7137b19e7",
        "genre_id": 132,
        "fans": 1961,
        "release_date": "2006-09-29",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85787502/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 314332,
        "title": "Tournée d'enfer (Live)",
        "link": "https://www.deezer.com/album/314332",
        "cover": "https://api.deezer.com/album/314332/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5d7b5b674c6e876601f63276eb329c5e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5d7b5b674c6e876601f63276eb329c5e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5d7b5b674c6e876601f63276eb329c5e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5d7b5b674c6e876601f63276eb329c5e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "5d7b5b674c6e876601f63276eb329c5e",
        "genre_id": 132,
        "fans": 10716,
        "release_date": "2003-11-14",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/314332/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85788992,
        "title": "Boucan d'enfer",
        "link": "https://www.deezer.com/album/85788992",
        "cover": "https://api.deezer.com/album/85788992/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/13cfd6d90bd4705e344bf8d4abc87868/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/13cfd6d90bd4705e344bf8d4abc87868/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/13cfd6d90bd4705e344bf8d4abc87868/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/13cfd6d90bd4705e344bf8d4abc87868/1000x1000-000000-80-0-0.jpg",
        "md5_image": "13cfd6d90bd4705e344bf8d4abc87868",
        "genre_id": 132,
        "fans": 6807,
        "release_date": "2002-05-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85788992/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 9508028,
        "title": "renaud cante el' nord / renaud chante brassens",
        "link": "https://www.deezer.com/album/9508028",
        "cover": "https://api.deezer.com/album/9508028/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d99685d45888840b2c604acf9b475656/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d99685d45888840b2c604acf9b475656/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d99685d45888840b2c604acf9b475656/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d99685d45888840b2c604acf9b475656/1000x1000-000000-80-0-0.jpg",
        "md5_image": "d99685d45888840b2c604acf9b475656",
        "genre_id": 132,
        "fans": 870,
        "release_date": "2003-02-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/9508028/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 314349,
        "title": "Paris Provinces Aller/Retour (Live)",
        "link": "https://www.deezer.com/album/314349",
        "cover": "https://api.deezer.com/album/314349/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/de6e25023d58a99f086d3d1b8a6bb1fc/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/de6e25023d58a99f086d3d1b8a6bb1fc/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/de6e25023d58a99f086d3d1b8a6bb1fc/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/de6e25023d58a99f086d3d1b8a6bb1fc/1000x1000-000000-80-0-0.jpg",
        "md5_image": "de6e25023d58a99f086d3d1b8a6bb1fc",
        "genre_id": 132,
        "fans": 12700,
        "release_date": "2003-02-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/314349/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85786602,
        "title": "Chante Brassens",
        "link": "https://www.deezer.com/album/85786602",
        "cover": "https://api.deezer.com/album/85786602/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/05c8c110d05ff2cb3dd14fa0364c1239/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/05c8c110d05ff2cb3dd14fa0364c1239/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/05c8c110d05ff2cb3dd14fa0364c1239/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/05c8c110d05ff2cb3dd14fa0364c1239/1000x1000-000000-80-0-0.jpg",
        "md5_image": "05c8c110d05ff2cb3dd14fa0364c1239",
        "genre_id": 132,
        "fans": 3505,
        "release_date": "1996-03-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85786602/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 522476,
        "title": "Le retour de la chetron sauvage (Live, Zénith 86)",
        "link": "https://www.deezer.com/album/522476",
        "cover": "https://api.deezer.com/album/522476/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/7c664225bf2474534b9a4a6d0448fbfa/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/7c664225bf2474534b9a4a6d0448fbfa/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/7c664225bf2474534b9a4a6d0448fbfa/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/7c664225bf2474534b9a4a6d0448fbfa/1000x1000-000000-80-0-0.jpg",
        "md5_image": "7c664225bf2474534b9a4a6d0448fbfa",
        "genre_id": 132,
        "fans": 6940,
        "release_date": "2010-04-09",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/522476/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 314347,
        "title": "The Meilleur Of Renaud",
        "link": "https://www.deezer.com/album/314347",
        "cover": "https://api.deezer.com/album/314347/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/13b9cb68939bde04c983913726582bbd/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/13b9cb68939bde04c983913726582bbd/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/13b9cb68939bde04c983913726582bbd/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/13b9cb68939bde04c983913726582bbd/1000x1000-000000-80-0-0.jpg",
        "md5_image": "13b9cb68939bde04c983913726582bbd",
        "genre_id": 132,
        "fans": 6786,
        "release_date": "2003-02-28",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/314347/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 247060,
        "title": "The Meilleur Of Renaud",
        "link": "https://www.deezer.com/album/247060",
        "cover": "https://api.deezer.com/album/247060/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/76b211ca116f5b91265d64ef8001da17/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/76b211ca116f5b91265d64ef8001da17/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/76b211ca116f5b91265d64ef8001da17/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/76b211ca116f5b91265d64ef8001da17/1000x1000-000000-80-0-0.jpg",
        "md5_image": "76b211ca116f5b91265d64ef8001da17",
        "genre_id": 132,
        "fans": 21910,
        "release_date": "2009-01-12",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/247060/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85782422,
        "title": "À la belle de mai",
        "link": "https://www.deezer.com/album/85782422",
        "cover": "https://api.deezer.com/album/85782422/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/17413f253fe560c8e3de5fd15ef8a6ce/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/17413f253fe560c8e3de5fd15ef8a6ce/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/17413f253fe560c8e3de5fd15ef8a6ce/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/17413f253fe560c8e3de5fd15ef8a6ce/1000x1000-000000-80-0-0.jpg",
        "md5_image": "17413f253fe560c8e3de5fd15ef8a6ce",
        "genre_id": 132,
        "fans": 4134,
        "release_date": "1994-11-18",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85782422/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 314268,
        "title": "Renaud Cante El' Nord",
        "link": "https://www.deezer.com/album/314268",
        "cover": "https://api.deezer.com/album/314268/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9fa33d65577bf514e66fa5c16c13e826/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9fa33d65577bf514e66fa5c16c13e826/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9fa33d65577bf514e66fa5c16c13e826/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9fa33d65577bf514e66fa5c16c13e826/1000x1000-000000-80-0-0.jpg",
        "md5_image": "9fa33d65577bf514e66fa5c16c13e826",
        "genre_id": 132,
        "fans": 10087,
        "release_date": "1993-05-20",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/314268/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 85782942,
        "title": "Marchand de cailloux",
        "link": "https://www.deezer.com/album/85782942",
        "cover": "https://api.deezer.com/album/85782942/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/cc3656276b0c2d7deacbb88c4e23f843/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/cc3656276b0c2d7deacbb88c4e23f843/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/cc3656276b0c2d7deacbb88c4e23f843/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/cc3656276b0c2d7deacbb88c4e23f843/1000x1000-000000-80-0-0.jpg",
        "md5_image": "cc3656276b0c2d7deacbb88c4e23f843",
        "genre_id": 132,
        "fans": 4853,
        "release_date": "1991-09-30",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/85782942/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 472855,
        "title": "Visage pâle rencontrer public (Live)",
        "link": "https://www.deezer.com/album/472855",
        "cover": "https://api.deezer.com/album/472855/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/526e73a68223d413aef6046b73fbc92b/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/526e73a68223d413aef6046b73fbc92b/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/526e73a68223d413aef6046b73fbc92b/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/526e73a68223d413aef6046b73fbc92b/1000x1000-000000-80-0-0.jpg",
        "md5_image": "526e73a68223d413aef6046b73fbc92b",
        "genre_id": 132,
        "fans": 10560,
        "release_date": "1989-08-01",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/472855/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 314267,
        "title": "Putain de camion",
        "link": "https://www.deezer.com/album/314267",
        "cover": "https://api.deezer.com/album/314267/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f8531753baa1ffaafa45ec3575201d65/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f8531753baa1ffaafa45ec3575201d65/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f8531753baa1ffaafa45ec3575201d65/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f8531753baa1ffaafa45ec3575201d65/1000x1000-000000-80-0-0.jpg",
        "md5_image": "f8531753baa1ffaafa45ec3575201d65",
        "genre_id": 132,
        "fans": 16061,
        "release_date": "2003-03-03",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/314267/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 472854,
        "title": "Mistral gagnant",
        "link": "https://www.deezer.com/album/472854",
        "cover": "https://api.deezer.com/album/472854/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/83a7a070a8239c8d479fe2eb7ee38408/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/83a7a070a8239c8d479fe2eb7ee38408/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/83a7a070a8239c8d479fe2eb7ee38408/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/83a7a070a8239c8d479fe2eb7ee38408/1000x1000-000000-80-0-0.jpg",
        "md5_image": "83a7a070a8239c8d479fe2eb7ee38408",
        "genre_id": 132,
        "fans": 48266,
        "release_date": "1985-11-30",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/472854/tracks",
        "explicit_lyrics": false,
        "type": "album"
      },
      {
        "id": 12735196,
        "title": "Un Olympia pour moi tout seul (Live)",
        "link": "https://www.deezer.com/album/12735196",
        "cover": "https://api.deezer.com/album/12735196/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/857c1e73b5b66efc70913f3f0df5bfb7/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/857c1e73b5b66efc70913f3f0df5bfb7/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/857c1e73b5b66efc70913f3f0df5bfb7/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/857c1e73b5b66efc70913f3f0df5bfb7/1000x1000-000000-80-0-0.jpg",
        "md5_image": "857c1e73b5b66efc70913f3f0df5bfb7",
        "genre_id": 132,
        "fans": 8439,
        "release_date": "2016-03-25",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/12735196/tracks",
        "explicit_lyrics": false,
        "type": "album"
      }
    ]
  
  
  public _artist: Artist = {
    "id": 21,
    "name": "Renaud",
    "link": "https://www.deezer.com/artist/21",
    "share": "https://www.deezer.com/artist/21?utm_source=deezer&utm_content=artist-21&utm_term=0_1668229879&utm_medium=web",
    "picture": "https://api.deezer.com/artist/21/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/1000x1000-000000-80-0-0.jpg",
    "nb_album": 38,
    "nb_fan": 1008614,
    "radio": true,
    "tracklist": "https://api.deezer.com/artist/21/top?limit=50",
    "type": "artist"
  }

  constructor(
    private deezer:DeezerService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.get_Artist(this.id);

  }

  get_Artist(id:number){
    this.deezer.get_One_Artist().subscribe((artist:Artist[])=>{
      console.log(artist);
      this.artist = artist;
    })
  }

}
