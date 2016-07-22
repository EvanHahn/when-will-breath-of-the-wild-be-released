const cuid = require('cuid')
const startOfDay = require('date-fns/start_of_day')

const data = [["BS Zelda no Densetsu", "no", "1995-08-06 00:00:00"], ["BS Zelda no Densetsu: Kodai no Sekiban", "no", "1997-12-31 00:00:00"], ["BS Zelda no Densetsu: Kodai no Sekiban", "no", "1998-12-31 00:00:00"], ["Color-Changing: Tingle's Balloon Trip of Love", "no", "2009-08-06 00:00:00"], ["Freshly-Picked: Tingle's Rosy Rupeeland", "no", "2006-09-02 00:00:00"], ["Freshly-Picked: Tingle's Rosy Rupeeland", "no", "2007-09-14 00:00:00"], ["Hyrule Warriors", "no", "2014-08-14 00:00:00"], ["Hyrule Warriors", "no", "2014-09-19 00:00:00"], ["Hyrule Warriors", "no", "2014-09-20 00:00:00"], ["Hyrule Warriors", "no", "2014-09-26 00:00:00"], ["Hyrule Warriors", "no", "2014-09-27 00:00:00"], ["Hyrule Warriors", "no", "2016-01-21 00:00:00"], ["Hyrule Warriors", "no", "2016-02-24 00:00:00"], ["Hyrule Warriors", "no", "2016-03-24 00:00:00"], ["Hyrule Warriors", "no", "2016-03-25 00:00:00"], ["Link: The Faces of Evil", "no", "1993-10-10 00:00:00"], ["Link's Crossbow Training", "no", "2007-11-19 00:00:00"], ["Link's Crossbow Training", "no", "2007-12-07 00:00:00"], ["Link's Crossbow Training", "no", "2007-12-13 00:00:00"], ["Link's Crossbow Training", "no", "2008-05-01 00:00:00"], ["My Nintendo Picross: The Legend of Zelda Twilight Princess", "no", "2016-03-17 00:00:00"], ["My Nintendo Picross: The Legend of Zelda Twilight Princess", "no", "2016-03-31 00:00:00"], ["The Legend of Zelda", "yes", "1986-02-21 00:00:00"], ["The Legend of Zelda", "yes", "1987-01-19 00:00:00"], ["The Legend of Zelda", "yes", "1987-11-15 00:00:00"], ["The Legend of Zelda", "yes", "1994-02-19 00:00:00"], ["The Legend of Zelda", "yes", "2004-02-14 00:00:00"], ["The Legend of Zelda", "yes", "2004-06-07 00:00:00"], ["The Legend of Zelda", "yes", "2004-07-09 00:00:00"], ["The Legend of Zelda", "yes", "2006-11-19 00:00:00"], ["The Legend of Zelda", "yes", "2006-12-02 00:00:00"], ["The Legend of Zelda", "yes", "2006-12-08 00:00:00"], ["The Legend of Zelda", "yes", "2011-09-01 00:00:00"], ["The Legend of Zelda", "yes", "2012-04-12 00:00:00"], ["The Legend of Zelda", "yes", "2012-07-05 00:00:00"], ["The Legend of Zelda", "yes", "2013-08-29 00:00:00"], ["The Legend of Zelda: A Link Between Worlds", "yes", "2013-11-22 00:00:00"], ["The Legend of Zelda: A Link Between Worlds", "yes", "2013-11-23 00:00:00"], ["The Legend of Zelda: A Link Between Worlds", "yes", "2013-12-26 00:00:00"], ["The Legend of Zelda: A Link Between Worlds", "yes", "2015-10-16 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "1991-11-21 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "1992-04-13 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "1992-09-24 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "1996-12-31 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "1998-12-31 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2006-12-02 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2007-01-22 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2007-03-23 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2013-12-12 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2013-12-13 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2014-01-30 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2014-02-12 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2016-03-04 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2016-03-11 00:00:00"], ["The Legend of Zelda: A Link to the Past", "yes", "2016-04-14 00:00:00"], ["The Legend of Zelda: A Link to the Past & Four Swords", "yes", "2002-12-02 00:00:00"], ["The Legend of Zelda: A Link to the Past & Four Swords", "yes", "2002-12-03 00:00:00"], ["The Legend of Zelda: A Link to the Past & Four Swords", "yes", "2003-03-14 00:00:00"], ["The Legend of Zelda: A Link to the Past & Four Swords", "yes", "2003-03-28 00:00:00"], ["The Legend of Zelda: A Link to the Past & Four Swords", "yes", "2006-09-25 00:00:00"], ["The Legend of Zelda: Collector's Edition", "no", "2003-11-14 00:00:00"], ["The Legend of Zelda: Collector's Edition", "no", "2003-11-17 00:00:00"], ["The Legend of Zelda: Collector's Edition", "no", "2003-11-24 00:00:00"], ["The Legend of Zelda: Collector's Edition", "no", "2004-04-01 00:00:00"], ["The Legend of Zelda: Four Swords Adventures", "yes", "2004-03-18 00:00:00"], ["The Legend of Zelda: Four Swords Adventures", "yes", "2004-06-07 00:00:00"], ["The Legend of Zelda: Four Swords Adventures", "yes", "2005-01-07 00:00:00"], ["The Legend of Zelda: Four Swords Adventures", "yes", "2006-04-24 00:00:00"], ["The Legend Of Zelda: Four Swords Anniversary Edition", "no", "2011-09-28 00:00:00"], ["The Legend Of Zelda: Four Swords Anniversary Edition", "no", "2014-01-30 00:00:00"], ["The Legend of Zelda: Link's Awakening", "yes", "1993-07-06 00:00:00"], ["The Legend of Zelda: Link's Awakening", "yes", "1993-08-06 00:00:00"], ["The Legend of Zelda: Link's Awakening", "yes", "1993-12-01 00:00:00"], ["The Legend of Zelda: Link's Awakening", "yes", "1993-12-31 00:00:00"], ["The Legend of Zelda: Link's Awakening DX", "no", "1998-10-31 00:00:00"], ["The Legend of Zelda: Link's Awakening DX", "no", "1998-12-12 00:00:00"], ["The Legend of Zelda: Link's Awakening DX", "no", "1998-12-31 00:00:00"], ["The Legend of Zelda: Link's Awakening DX", "no", "1999-01-04 00:00:00"], ["The Legend of Zelda: Link's Awakening DX", "no", "2011-06-07 00:00:00"], ["The Legend of Zelda: Majora's Mask", "yes", "2000-04-27 00:00:00"], ["The Legend of Zelda: Majora's Mask", "yes", "2000-10-25 00:00:00"], ["The Legend of Zelda: Majora's Mask", "yes", "2000-11-17 00:00:00"], ["The Legend of Zelda: Majora's Mask", "yes", "2009-04-03 00:00:00"], ["The Legend of Zelda: Majora's Mask", "yes", "2009-04-07 00:00:00"], ["The Legend of Zelda: Majora's Mask", "yes", "2009-05-18 00:00:00"], ["The Legend of Zelda: Majora's Mask 3D", "no", "2015-02-13 00:00:00"], ["The Legend of Zelda: Majora's Mask 3D", "no", "2015-02-14 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "1998-11-21 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "1998-11-23 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "1998-11-24 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "1998-12-11 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "1998-12-18 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "2000-12-31 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "2007-02-23 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "2007-02-26 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "2007-02-27 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "2015-07-02 00:00:00"], ["The Legend of Zelda: Ocarina of Time", "yes", "2015-07-03 00:00:00"], ["The Legend of Zelda: Ocarina of Time / Master Quest", "no", "2002-11-28 00:00:00"], ["The Legend of Zelda: Ocarina of Time / Master Quest", "no", "2003-02-18 00:00:00"], ["The Legend of Zelda: Ocarina of Time / Master Quest", "no", "2003-02-28 00:00:00"], ["The Legend of Zelda: Ocarina of Time / Master Quest", "no", "2003-05-03 00:00:00"], ["The Legend of Zelda: Ocarina of Time / Master Quest", "no", "2003-05-09 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2011-06-16 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2011-06-17 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2011-06-19 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2011-06-30 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2012-10-18 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2012-11-01 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2016-03-11 00:00:00"], ["The Legend of Zelda: Ocarina of Time 3D", "no", "2016-06-24 00:00:00"], ["The Legend of Zelda: Oracle of Ages", "yes", "2001-05-14 00:00:00"], ["The Legend of Zelda: Oracle of Ages", "yes", "2001-10-05 00:00:00"], ["The Legend of Zelda: Oracle of Ages", "yes", "2013-05-30 00:00:00"], ["The Legend of Zelda: Oracle of Seasons", "yes", "2001-02-27 00:00:00"], ["The Legend of Zelda: Oracle of Seasons", "yes", "2001-05-14 00:00:00"], ["The Legend of Zelda: Oracle of Seasons", "yes", "2001-10-05 00:00:00"], ["The Legend of Zelda: Oracle of Seasons", "yes", "2013-05-30 00:00:00"], ["The Legend of Zelda: Phantom Hourglass", "yes", "2007-06-23 00:00:00"], ["The Legend of Zelda: Phantom Hourglass", "yes", "2007-10-01 00:00:00"], ["The Legend of Zelda: Phantom Hourglass", "yes", "2007-10-11 00:00:00"], ["The Legend of Zelda: Phantom Hourglass", "yes", "2007-10-19 00:00:00"], ["The Legend of Zelda: Phantom Hourglass", "yes", "2015-11-13 00:00:00"], ["The Legend of Zelda: Phantom Hourglass", "yes", "2016-05-12 00:00:00"], ["The Legend of Zelda: Skyward Sword", "yes", "2011-11-18 00:00:00"], ["The Legend of Zelda: Skyward Sword", "yes", "2011-11-20 00:00:00"], ["The Legend of Zelda: Skyward Sword", "yes", "2011-11-23 00:00:00"], ["The Legend of Zelda: Skyward Sword", "yes", "2011-11-24 00:00:00"], ["The Legend of Zelda: Spirit Tracks", "yes", "2009-12-07 00:00:00"], ["The Legend of Zelda: Spirit Tracks", "yes", "2009-12-10 00:00:00"], ["The Legend of Zelda: Spirit Tracks", "yes", "2009-12-11 00:00:00"], ["The Legend of Zelda: Spirit Tracks", "yes", "2009-12-23 00:00:00"], ["The Legend of Zelda: Spirit Tracks", "yes", "2015-11-13 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2004-11-04 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2004-11-12 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2005-04-07 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2005-06-10 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2011-12-16 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2014-04-30 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2014-05-29 00:00:00"], ["The Legend of Zelda: The Minish Cap", "yes", "2014-06-05 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2002-12-13 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2003-03-24 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2003-05-03 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2003-05-07 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2003-05-09 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2003-12-31 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2004-10-22 00:00:00"], ["The Legend of Zelda: The Wind Waker", "yes", "2005-11-28 00:00:00"], ["The Legend of Zelda: The Wind Waker HD", "no", "2013-09-20 00:00:00"], ["The Legend of Zelda: The Wind Waker HD", "no", "2013-09-26 00:00:00"], ["The Legend of Zelda: The Wind Waker HD", "no", "2013-10-04 00:00:00"], ["The Legend of Zelda: The Wind Waker HD", "no", "2015-06-30 00:00:00"], ["The Legend of Zelda: The Wind Waker HD", "no", "2016-04-15 00:00:00"], ["The Legend of Zelda: Tri Force Heroes", "yes", "2015-10-22 00:00:00"], ["The Legend of Zelda: Tri Force Heroes", "yes", "2015-10-23 00:00:00"], ["The Legend of Zelda: Tri Force Heroes", "yes", "2015-10-24 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-11-19 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-12-02 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-12-07 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-12-08 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-12-11 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-12-15 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2006-12-19 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2011-05-15 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2011-09-16 00:00:00"], ["The Legend of Zelda: Twilight Princess", "yes", "2013-11-07 00:00:00"], ["The Legend of Zelda: Twilight Princess HD", "no", "2016-03-04 00:00:00"], ["The Legend of Zelda: Twilight Princess HD", "no", "2016-03-05 00:00:00"], ["The Legend of Zelda: Twilight Princess HD", "no", "2016-03-10 00:00:00"], ["Tingle's Balloon Fight DS", "no", "2007-01-01 00:00:00"], ["Tingle's Balloon Fight DS", "no", "2007-04-30 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "1987-01-14 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "1988-09-01 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "1988-11-26 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2004-08-10 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2004-10-25 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2005-01-07 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2005-12-31 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2007-01-23 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2007-02-09 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2007-06-04 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2011-09-01 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2012-06-06 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2012-09-13 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2013-09-12 00:00:00"], ["Zelda II: The Adventure of Link", "yes", "2013-09-26 00:00:00"], ["Zelda: The Wand of Gamelon", "no", "1993-10-10 00:00:00"], ["Zelda's Adventure", "no", "1994-06-05 00:00:00"]]  // eslint-disable-line

const releases = data
  .map((arr) => ({
    name: arr[0],
    isMainSeries: arr[1] === 'yes',
    releaseDate: startOfDay(new Date(arr[2].replace(' ', 'T'))),
    id: cuid()
  }))
  .sort((a, b) => a.releaseDate - b.releaseDate)

const games = (function () {
  const namesSeen = {}

  return releases.reduce((result, release) => {
    if (namesSeen[release.name]) {
      return result
    } else {
      namesSeen[release.name] = true

      return result.concat({
        name: release.name,
        isMainSeries: release.isMainSeries,
        releaseDate: release.releaseDate,
        id: cuid()
      })
    }
  }, [])
})()

const mainSeriesGames = games.filter((g) => g.isMainSeries)

module.exports = {
  releases,
  games,
  mainSeriesGames
}
