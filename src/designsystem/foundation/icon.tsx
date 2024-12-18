import {CSSProperties, ReactElement} from "react";
import AddEmoji from "./icon/AddEmoji";
import AddFill from "./icon/AddFill";
import AddLine from "./icon/AddLine";
import Alarm from "./icon/Alarm";
import AlarmDisabled from "./icon/AlarmDisabled";
import Book from "./icon/Book";
import BookmarkFill from "./icon/BookmarkFill";
import BookmarkLine from "./icon/BookmarkLine";
import Calendar from "./icon/Calendar";
import Camera from "./icon/Camera";
import Chat from "./icon/Chat";
import CheckFill from "./icon/CheckFill";
import CheckLine from "./icon/CheckLine";
import CheckRing from "./icon/CheckRing";
import Copy from "./icon/Copy";
import CrossFill from "./icon/CrossFill";
import CrossLine from "./icon/CrossLine";
import CrossRing from "./icon/CrossRing";
import Crown from "./icon/Crown";
import Write from "./icon/Write";
import Utensils from "./icon/Utensils";
import Trash from "./icon/Trash";
import Substack from "./icon/Substack";
import StopArrow from "./icon/StopArrow";
import Star from "./icon/Star";
import Show from "./icon/Show";
import Setting from "./icon/Setting";
import Send from "./icon/Send";
import Search from "./icon/Search";
import RadioFill from "./icon/RadioFill";
import RadioLine from "./icon/RadioLine";
import Ping from "./icon/Ping";
import Photo from "./icon/Photo";
import Person from "./icon/Person";
import NormalArrow from "./icon/NormalArrow";
import Pen from "./icon/Pen";
import CurveArrow from "./icon/CurveArrow";
import Detail from "./icon/Detail";
import ExclamationLine from "./icon/ExclamationLine";
import ExclamationFill from "./icon/ExclamationFill";
import ExpandArrow from "./icon/ExpandArrow";
import File from "./icon/File";
import HeartFill from "./icon/HeartFill";
import HeartLine from "./icon/HeartLine";
import Home from "./icon/Home";
import Hide from "./icon/Hide";
import Logout from "./icon/Logout";
import LoudSpeaker from "./icon/LoudSpeaker";
import Manage from "./icon/Manage";
import Moon from "./icon/Moon";
import AddRing from "./icon/AddRing";

export enum IconType {
    AddEmoji,
    AddFill,
    AddLine,
    AddRing,
    Alarm,
    AlarmDisabled,
    Book,
    BookmarkFill,
    BookmarkLine,
    Calendar,
    Camera,
    Chat,
    CheckFill,
    CheckLine,
    CheckRing,
    Copy,
    CrossFill,
    CrossLine,
    CrossRing,
    Crown,
    CurveArrow,
    Detail,
    ExclamationFill,
    ExclamationLine,
    ExpandArrow,
    File,
    HeartFill,
    HeartLine,
    Hide,
    Home,
    Logout,
    LoudSpeaker,
    Manage,
    Moon,
    NormalArrow,
    Pen,
    Person,
    Photo,
    Ping,
    RadioFill,
    RadioLine,
    Search,
    Send,
    Setting,
    Show,
    Star,
    StopArrow,
    Substack,
    Trash,
    Utensils,
    Write,
}

interface IconProps {
    type: IconType;
    tint?: CSSProperties['color'];
    size?: CSSProperties['width'];
}

export default function Icon(
    {
        type,
        tint = 'black',
        size = 24
    }: IconProps
): ReactElement {
    switch (type) {
        case IconType.AddEmoji:
            return <AddEmoji fill={tint} width={size} height={size}/>;
        case IconType.AddFill:
            return <AddFill fill={tint} width={size} height={size}/>;
        case IconType.AddLine:
            return <AddLine fill={tint} width={size} height={size}/>;
        case IconType.AddRing:
            return <AddRing fill={tint} width={size} height={size}/>;
        case IconType.Alarm:
            return <Alarm fill={tint} width={size} height={size}/>;
        case IconType.AlarmDisabled:
            return <AlarmDisabled fill={tint} width={size} height={size}/>;
        case IconType.Book:
            return <Book fill={tint} width={size} height={size}/>;
        case IconType.BookmarkFill:
            return <BookmarkFill fill={tint} width={size} height={size}/>;
        case IconType.BookmarkLine:
            return <BookmarkLine fill={tint} width={size} height={size}/>;
        case IconType.Calendar:
            return <Calendar fill={tint} width={size} height={size}/>;
        case IconType.Camera:
            return <Camera fill={tint} width={size} height={size}/>;
        case IconType.Chat:
            return <Chat fill={tint} width={size} height={size}/>;
        case IconType.CheckFill:
            return <CheckFill fill={tint} width={size} height={size}/>;
        case IconType.CheckLine:
            return <CheckLine fill={tint} width={size} height={size}/>;
        case IconType.CheckRing:
            return <CheckRing fill={tint} width={size} height={size}/>;
        case IconType.Copy:
            return <Copy fill={tint} width={size} height={size}/>;
        case IconType.CrossFill:
            return <CrossFill fill={tint} width={size} height={size}/>;
        case IconType.CrossLine:
            return <CrossLine fill={tint} width={size} height={size}/>;
        case IconType.CrossRing:
            return <CrossRing fill={tint} width={size} height={size}/>;
        case IconType.Crown:
            return <Crown fill={tint} width={size} height={size}/>;
        case IconType.CurveArrow:
            return <CurveArrow fill={tint} width={size} height={size}/>;
        case IconType.Detail:
            return <Detail fill={tint} width={size} height={size}/>;
        case IconType.ExclamationFill:
            return <ExclamationFill fill={tint} width={size} height={size}/>;
        case IconType.ExclamationLine:
            return <ExclamationLine fill={tint} width={size} height={size}/>;
        case IconType.ExpandArrow:
            return <ExpandArrow fill={tint} width={size} height={size}/>;
        case IconType.File:
            return <File fill={tint} width={size} height={size}/>;
        case IconType.HeartFill:
            return <HeartFill fill={tint} width={size} height={size}/>;
        case IconType.HeartLine:
            return <HeartLine fill={tint} width={size} height={size}/>;
        case IconType.Hide:
            return <Hide fill={tint} width={size} height={size}/>;
        case IconType.Home:
            return <Home fill={tint} width={size} height={size}/>;
        case IconType.Logout:
            return <Logout fill={tint} width={size} height={size}/>;
        case IconType.LoudSpeaker:
            return <LoudSpeaker fill={tint} width={size} height={size}/>;
        case IconType.Manage:
            return <Manage fill={tint} width={size} height={size}/>;
        case IconType.Moon:
            return <Moon fill={tint} width={size} height={size}/>;
        case IconType.NormalArrow:
            return <NormalArrow fill={tint} width={size} height={size}/>;
        case IconType.Pen:
            return <Pen fill={tint} width={size} height={size}/>;
        case IconType.Person:
            return <Person fill={tint} width={size} height={size}/>;
        case IconType.Photo:
            return <Photo fill={tint} width={size} height={size}/>;
        case IconType.Ping:
            return <Ping fill={tint} width={size} height={size}/>;
        case IconType.RadioFill:
            return <RadioFill fill={tint} width={size} height={size}/>;
        case IconType.RadioLine:
            return <RadioLine fill={tint} width={size} height={size}/>;
        case IconType.Search:
            return <Search fill={tint} width={size} height={size}/>;
        case IconType.Send:
            return <Send fill={tint} width={size} height={size}/>;
        case IconType.Setting:
            return <Setting fill={tint} width={size} height={size}/>;
        case IconType.Show:
            return <Show fill={tint} width={size} height={size}/>;
        case IconType.Star:
            return <Star fill={tint} width={size} height={size}/>;
        case IconType.StopArrow:
            return <StopArrow fill={tint} width={size} height={size}/>;
        case IconType.Substack:
            return <Substack fill={tint} width={size} height={size}/>;
        case IconType.Trash:
            return <Trash fill={tint} width={size} height={size}/>;
        case IconType.Utensils:
            return <Utensils fill={tint} width={size} height={size}/>;
        case IconType.Write:
            return <Write fill={tint} width={size} height={size}/>;
    }
};