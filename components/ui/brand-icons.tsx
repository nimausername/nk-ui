import type { ComponentType, SVGProps } from "react"
import type { SimpleIcon } from "simple-icons"
import * as simpleIconsModule from "simple-icons"

/**
 * Props for nk brand mark SVGs (`currentColor` fills).
 */
type BrandIconProps = SVGProps<SVGSVGElement>

type BrandIconData = {
  readonly title: string
  readonly path: string
}

type BrandIconComponentProps = BrandIconProps & {
  /** Simple Icons slug, e.g. `github`, `nextdotjs`. */
  readonly slug: string
}

const brandSvgProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
  xmlns: "http://www.w3.org/2000/svg",
}

const isSimpleIcon = (value: unknown): value is SimpleIcon => {
  if (!value || typeof value !== "object") return false
  const icon = value as Partial<SimpleIcon>
  return (
    typeof icon.path === "string" &&
    typeof icon.slug === "string" &&
    typeof icon.title === "string"
  )
}

/**
 * Marks removed from Simple Icons for trademark reasons — historical paths.
 */
const brandIconOverrides: Readonly<Record<string, BrandIconData>> = {
  "slack": {
    "title": "Slack",
    "path": "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
  },
  "openai": {
    "title": "OpenAI",
    "path": "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
  },
  "linkedin": {
    "title": "LinkedIn",
    "path": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  "amazonwebservices": {
    "title": "Amazon Web Services",
    "path": "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"
  },
  "visualstudiocode": {
    "title": "Visual Studio Code",
    "path": "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
  },
  "microsoft": {
    "title": "Microsoft",
    "path": "M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"
  }
}

const simpleIconsBySlug = new Map<string, BrandIconData>()
for (const value of Object.values(simpleIconsModule)) {
  if (!isSimpleIcon(value)) continue
  simpleIconsBySlug.set(value.slug, { title: value.title, path: value.path })
}

/**
 * Resolves a brand mark by Simple Icons slug (plus nk overrides).
 */
const getBrandIconData = (slug: string): BrandIconData | undefined => {
  return brandIconOverrides[slug] ?? simpleIconsBySlug.get(slug)
}

/**
 * Renders any brand mark by slug (`github`, `stripe`, `nextdotjs`, …).
 */
const BrandIcon = ({ slug, className, ...props }: BrandIconComponentProps) => {
  const data = getBrandIconData(slug)
  if (!data) return null
  return (
    <svg className={className} {...brandSvgProps} {...props}>
      <path d={data.path} />
    </svg>
  )
}

type BrandIconsCatalogEntry = {
  readonly name: string
  readonly slug: string
  readonly Icon: ComponentType<BrandIconProps>
}

/** .ENV mark — compose with Select, Button, menus, etc. */
const ENVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dotenv" {...props} />

/** .NET mark — compose with Select, Button, menus, etc. */
const NETBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dotnet" {...props} />

/** /e/ mark — compose with Select, Button, menus, etc. */
const EBrandIcon = (props: BrandIconProps) => <BrandIcon slug="e" {...props} />

/** 1.1.1.1 mark — compose with Select, Button, menus, etc. */
const Brand1111BrandIcon = (props: BrandIconProps) => <BrandIcon slug="1dot1dot1dot1" {...props} />

/** 1&1 mark — compose with Select, Button, menus, etc. */
const Brand11BrandIcon = (props: BrandIconProps) => <BrandIcon slug="1and1" {...props} />

/** 1001Tracklists mark — compose with Select, Button, menus, etc. */
const Brand1001TracklistsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="1001tracklists" {...props} />

/** 1Panel mark — compose with Select, Button, menus, etc. */
const Brand1PanelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="1panel" {...props} />

/** 1Password mark — compose with Select, Button, menus, etc. */
const Brand1PasswordBrandIcon = (props: BrandIconProps) => <BrandIcon slug="1password" {...props} />

/** 2FAS mark — compose with Select, Button, menus, etc. */
const Brand2FASBrandIcon = (props: BrandIconProps) => <BrandIcon slug="2fas" {...props} />

/** 2K mark — compose with Select, Button, menus, etc. */
const Brand2KBrandIcon = (props: BrandIconProps) => <BrandIcon slug="2k" {...props} />

/** 30 seconds of code mark — compose with Select, Button, menus, etc. */
const Brand30SecondsOfCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="30secondsofcode" {...props} />

/** 365 Data Science mark — compose with Select, Button, menus, etc. */
const Brand365DataScienceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="365datascience" {...props} />

/** 3M mark — compose with Select, Button, menus, etc. */
const Brand3MBrandIcon = (props: BrandIconProps) => <BrandIcon slug="3m" {...props} />

/** 42 mark — compose with Select, Button, menus, etc. */
const Brand42BrandIcon = (props: BrandIconProps) => <BrandIcon slug="42" {...props} />

/** 4chan mark — compose with Select, Button, menus, etc. */
const Brand4chanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="4chan" {...props} />

/** 4D mark — compose with Select, Button, menus, etc. */
const Brand4DBrandIcon = (props: BrandIconProps) => <BrandIcon slug="4d" {...props} />

/** 500px mark — compose with Select, Button, menus, etc. */
const Brand500pxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="500px" {...props} />

/** 7Zip mark — compose with Select, Button, menus, etc. */
const Brand7ZipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="7zip" {...props} />

/** 99designs mark — compose with Select, Button, menus, etc. */
const Brand99designsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="99designs" {...props} />

/** 9GAG mark — compose with Select, Button, menus, etc. */
const Brand9GAGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="9gag" {...props} />

/** A-Frame mark — compose with Select, Button, menus, etc. */
const AFrameBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aframe" {...props} />

/** AB Download Manager mark — compose with Select, Button, menus, etc. */
const ABDownloadManagerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="abdownloadmanager" {...props} />

/** ABB mark — compose with Select, Button, menus, etc. */
const ABBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="abb" {...props} />

/** Abbott mark — compose with Select, Button, menus, etc. */
const AbbottBrandIcon = (props: BrandIconProps) => <BrandIcon slug="abbott" {...props} />

/** Abbvie mark — compose with Select, Button, menus, etc. */
const AbbvieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="abbvie" {...props} />

/** about.me mark — compose with Select, Button, menus, etc. */
const AboutMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aboutdotme" {...props} />

/** Abstract mark — compose with Select, Button, menus, etc. */
const AbstractBrandIcon = (props: BrandIconProps) => <BrandIcon slug="abstract" {...props} />

/** abuse.ch mark — compose with Select, Button, menus, etc. */
const AbuseChBrandIcon = (props: BrandIconProps) => <BrandIcon slug="abusedotch" {...props} />

/** Academia mark — compose with Select, Button, menus, etc. */
const AcademiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="academia" {...props} />

/** Accenture mark — compose with Select, Button, menus, etc. */
const AccentureBrandIcon = (props: BrandIconProps) => <BrandIcon slug="accenture" {...props} />

/** Accusoft mark — compose with Select, Button, menus, etc. */
const AccusoftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="accusoft" {...props} />

/** AccuWeather mark — compose with Select, Button, menus, etc. */
const AccuWeatherBrandIcon = (props: BrandIconProps) => <BrandIcon slug="accuweather" {...props} />

/** Acer mark — compose with Select, Button, menus, etc. */
const AcerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="acer" {...props} />

/** ACM mark — compose with Select, Button, menus, etc. */
const ACMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="acm" {...props} />

/** Acode mark — compose with Select, Button, menus, etc. */
const AcodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="acode" {...props} />

/** ActiGraph mark — compose with Select, Button, menus, etc. */
const ActiGraphBrandIcon = (props: BrandIconProps) => <BrandIcon slug="actigraph" {...props} />

/** Activeloop mark — compose with Select, Button, menus, etc. */
const ActiveloopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="activeloop" {...props} />

/** Activision mark — compose with Select, Button, menus, etc. */
const ActivisionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="activision" {...props} />

/** ActivityPub mark — compose with Select, Button, menus, etc. */
const ActivityPubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="activitypub" {...props} />

/** Actix mark — compose with Select, Button, menus, etc. */
const ActixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="actix" {...props} />

/** Actual Budget mark — compose with Select, Button, menus, etc. */
const ActualBudgetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="actualbudget" {...props} />

/** Acura mark — compose with Select, Button, menus, etc. */
const AcuraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="acura" {...props} />

/** Ada mark — compose with Select, Button, menus, etc. */
const AdaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ada" {...props} />

/** Adafruit mark — compose with Select, Button, menus, etc. */
const AdafruitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adafruit" {...props} />

/** AdAway mark — compose with Select, Button, menus, etc. */
const AdAwayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adaway" {...props} />

/** AdBlock mark — compose with Select, Button, menus, etc. */
const AdBlockBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adblock" {...props} />

/** Adblock Plus mark — compose with Select, Button, menus, etc. */
const AdblockPlusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adblockplus" {...props} />

/** addy.io mark — compose with Select, Button, menus, etc. */
const AddyIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="addydotio" {...props} />

/** AdGuard mark — compose with Select, Button, menus, etc. */
const AdGuardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adguard" {...props} />

/** Adidas mark — compose with Select, Button, menus, etc. */
const AdidasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adidas" {...props} />

/** Adminer mark — compose with Select, Button, menus, etc. */
const AdminerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adminer" {...props} />

/** AdonisJS mark — compose with Select, Button, menus, etc. */
const AdonisJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adonisjs" {...props} />

/** ADP mark — compose with Select, Button, menus, etc. */
const ADPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adp" {...props} />

/** Adroll mark — compose with Select, Button, menus, etc. */
const AdrollBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adroll" {...props} />

/** Advent Of Code mark — compose with Select, Button, menus, etc. */
const AdventOfCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adventofcode" {...props} />

/** Adyen mark — compose with Select, Button, menus, etc. */
const AdyenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="adyen" {...props} />

/** Aegis Authenticator mark — compose with Select, Button, menus, etc. */
const AegisAuthenticatorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aegisauthenticator" {...props} />

/** Aeroflot mark — compose with Select, Button, menus, etc. */
const AeroflotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aeroflot" {...props} />

/** Aeroméxico mark — compose with Select, Button, menus, etc. */
const AeromXicoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aeromexico" {...props} />

/** AFDIAN mark — compose with Select, Button, menus, etc. */
const AfdianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="afdian" {...props} />

/** AFFiNE mark — compose with Select, Button, menus, etc. */
const AFFiNEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="affine" {...props} />

/** Afterpay mark — compose with Select, Button, menus, etc. */
const AfterpayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="afterpay" {...props} />

/** AfterShip mark — compose with Select, Button, menus, etc. */
const AfterShipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aftership" {...props} />

/** Agent Skills mark — compose with Select, Button, menus, etc. */
const AgentSkillsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="agentskills" {...props} />

/** Agora mark — compose with Select, Button, menus, etc. */
const AgoraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="agora" {...props} />

/** AI Dungeon mark — compose with Select, Button, menus, etc. */
const AIDungeonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aidungeon" {...props} />

/** AIB mark — compose with Select, Button, menus, etc. */
const AIBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aib" {...props} />

/** AIOHTTP mark — compose with Select, Button, menus, etc. */
const AiohttpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aiohttp" {...props} />

/** Aiqfome mark — compose with Select, Button, menus, etc. */
const AiqfomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aiqfome" {...props} />

/** Air Canada mark — compose with Select, Button, menus, etc. */
const AirCanadaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aircanada" {...props} />

/** Air China mark — compose with Select, Button, menus, etc. */
const AirChinaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airchina" {...props} />

/** Air France mark — compose with Select, Button, menus, etc. */
const AirFranceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airfrance" {...props} />

/** Air India mark — compose with Select, Button, menus, etc. */
const AirIndiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airindia" {...props} />

/** Air Serbia mark — compose with Select, Button, menus, etc. */
const AirSerbiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airserbia" {...props} />

/** Air Transat mark — compose with Select, Button, menus, etc. */
const AirTransatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airtransat" {...props} />

/** AirAsia mark — compose with Select, Button, menus, etc. */
const AirAsiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airasia" {...props} />

/** Airbnb mark — compose with Select, Button, menus, etc. */
const AirbnbBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airbnb" {...props} />

/** Airbrake mark — compose with Select, Button, menus, etc. */
const AirbrakeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airbrake" {...props} />

/** Airbus mark — compose with Select, Button, menus, etc. */
const AirbusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airbus" {...props} />

/** Airbyte mark — compose with Select, Button, menus, etc. */
const AirbyteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airbyte" {...props} />

/** Aircall mark — compose with Select, Button, menus, etc. */
const AircallBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aircall" {...props} />

/** AirPlay Audio mark — compose with Select, Button, menus, etc. */
const AirPlayAudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airplayaudio" {...props} />

/** AirPlay Video mark — compose with Select, Button, menus, etc. */
const AirPlayVideoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airplayvideo" {...props} />

/** Airtable mark — compose with Select, Button, menus, etc. */
const AirtableBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airtable" {...props} />

/** Airtel mark — compose with Select, Button, menus, etc. */
const AirtelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="airtel" {...props} />

/** Ajv mark — compose with Select, Button, menus, etc. */
const AjvBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ajv" {...props} />

/** Akamai mark — compose with Select, Button, menus, etc. */
const AkamaiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="akamai" {...props} />

/** Akasa Air mark — compose with Select, Button, menus, etc. */
const AkasaAirBrandIcon = (props: BrandIconProps) => <BrandIcon slug="akasaair" {...props} />

/** Akaunting mark — compose with Select, Button, menus, etc. */
const AkauntingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="akaunting" {...props} />

/** Akiflow mark — compose with Select, Button, menus, etc. */
const AkiflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="akiflow" {...props} />

/** Alacritty mark — compose with Select, Button, menus, etc. */
const AlacrittyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alacritty" {...props} />

/** Alamy mark — compose with Select, Button, menus, etc. */
const AlamyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alamy" {...props} />

/** Albert Heijn mark — compose with Select, Button, menus, etc. */
const AlbertHeijnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="albertheijn" {...props} />

/** Album of the Year mark — compose with Select, Button, menus, etc. */
const AlbumOfTheYearBrandIcon = (props: BrandIconProps) => <BrandIcon slug="albumoftheyear" {...props} />

/** Alby mark — compose with Select, Button, menus, etc. */
const AlbyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alby" {...props} />

/** Alchemy mark — compose with Select, Button, menus, etc. */
const AlchemyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alchemy" {...props} />

/** Aldi Nord mark — compose with Select, Button, menus, etc. */
const AldiNordBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aldinord" {...props} />

/** Aldi Süd mark — compose with Select, Button, menus, etc. */
const AldiSDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aldisud" {...props} />

/** Alfred mark — compose with Select, Button, menus, etc. */
const AlfredBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alfred" {...props} />

/** Algolia mark — compose with Select, Button, menus, etc. */
const AlgoliaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="algolia" {...props} />

/** Algorand mark — compose with Select, Button, menus, etc. */
const AlgorandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="algorand" {...props} />

/** Alibaba Cloud mark — compose with Select, Button, menus, etc. */
const AlibabaCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alibabacloud" {...props} />

/** Alibaba.com mark — compose with Select, Button, menus, etc. */
const AlibabaComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alibabadotcom" {...props} />

/** Alienware mark — compose with Select, Button, menus, etc. */
const AlienwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alienware" {...props} />

/** AliExpress mark — compose with Select, Button, menus, etc. */
const AliExpressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aliexpress" {...props} />

/** Alipay mark — compose with Select, Button, menus, etc. */
const AlipayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alipay" {...props} />

/** AList mark — compose with Select, Button, menus, etc. */
const AListBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alist" {...props} />

/** Allegro mark — compose with Select, Button, menus, etc. */
const AllegroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="allegro" {...props} />

/** AlliedModders mark — compose with Select, Button, menus, etc. */
const AlliedModdersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alliedmodders" {...props} />

/** AllTrails mark — compose with Select, Button, menus, etc. */
const AllTrailsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alltrails" {...props} />

/** AlmaLinux mark — compose with Select, Button, menus, etc. */
const AlmaLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="almalinux" {...props} />

/** alphaXiv mark — compose with Select, Button, menus, etc. */
const AlphaXivBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alphaxiv" {...props} />

/** Alpine Linux mark — compose with Select, Button, menus, etc. */
const AlpineLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alpinelinux" {...props} />

/** Alpine.js mark — compose with Select, Button, menus, etc. */
const AlpineJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alpinedotjs" {...props} />

/** AlternativeTo mark — compose with Select, Button, menus, etc. */
const AlternativeToBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alternativeto" {...props} />

/** Alwaysdata mark — compose with Select, Button, menus, etc. */
const AlwaysdataBrandIcon = (props: BrandIconProps) => <BrandIcon slug="alwaysdata" {...props} />

/** Amazon Web Services mark — compose with Select, Button, menus, etc. */
const AmazonWebServicesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="amazonwebservices" {...props} />

/** AMD mark — compose with Select, Button, menus, etc. */
const AMDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="amd" {...props} />

/** Ameba mark — compose with Select, Button, menus, etc. */
const AmebaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ameba" {...props} />

/** American Airlines mark — compose with Select, Button, menus, etc. */
const AmericanAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="americanairlines" {...props} />

/** American Express mark — compose with Select, Button, menus, etc. */
const AmericanExpressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="americanexpress" {...props} />

/** AMG mark — compose with Select, Button, menus, etc. */
const AMGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="amg" {...props} />

/** AMP mark — compose with Select, Button, menus, etc. */
const AMPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="amp" {...props} />

/** Amul mark — compose with Select, Button, menus, etc. */
const AmulBrandIcon = (props: BrandIconProps) => <BrandIcon slug="amul" {...props} />

/** ANA mark — compose with Select, Button, menus, etc. */
const ANABrandIcon = (props: BrandIconProps) => <BrandIcon slug="ana" {...props} />

/** Anaconda mark — compose with Select, Button, menus, etc. */
const AnacondaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anaconda" {...props} />

/** Analogue mark — compose with Select, Button, menus, etc. */
const AnalogueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="analogue" {...props} />

/** Andela mark — compose with Select, Button, menus, etc. */
const AndelaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="andela" {...props} />

/** Android mark — compose with Select, Button, menus, etc. */
const AndroidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="android" {...props} />

/** Android Auto mark — compose with Select, Button, menus, etc. */
const AndroidAutoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="androidauto" {...props} />

/** Android Studio mark — compose with Select, Button, menus, etc. */
const AndroidStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="androidstudio" {...props} />

/** Angular mark — compose with Select, Button, menus, etc. */
const AngularBrandIcon = (props: BrandIconProps) => <BrandIcon slug="angular" {...props} />

/** AniChart mark — compose with Select, Button, menus, etc. */
const AniChartBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anichart" {...props} />

/** AniList mark — compose with Select, Button, menus, etc. */
const AniListBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anilist" {...props} />

/** Animal Planet mark — compose with Select, Button, menus, etc. */
const AnimalPlanetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="animalplanet" {...props} />

/** Anime.js mark — compose with Select, Button, menus, etc. */
const AnimeJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="animedotjs" {...props} />

/** AnkerMake mark — compose with Select, Button, menus, etc. */
const AnkerMakeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ankermake" {...props} />

/** Anki mark — compose with Select, Button, menus, etc. */
const AnkiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anki" {...props} />

/** Ansible mark — compose with Select, Button, menus, etc. */
const AnsibleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ansible" {...props} />

/** Answer mark — compose with Select, Button, menus, etc. */
const AnswerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="answer" {...props} />

/** Ansys mark — compose with Select, Button, menus, etc. */
const AnsysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ansys" {...props} />

/** Ant Design mark — compose with Select, Button, menus, etc. */
const AntDesignBrandIcon = (props: BrandIconProps) => <BrandIcon slug="antdesign" {...props} />

/** Anta mark — compose with Select, Button, menus, etc. */
const AntaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anta" {...props} />

/** Antena 3 mark — compose with Select, Button, menus, etc. */
const Antena3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="antena3" {...props} />

/** AntennaPod mark — compose with Select, Button, menus, etc. */
const AntennaPodBrandIcon = (props: BrandIconProps) => <BrandIcon slug="antennapod" {...props} />

/** Anthropic mark — compose with Select, Button, menus, etc. */
const AnthropicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anthropic" {...props} />

/** AntV mark — compose with Select, Button, menus, etc. */
const AntVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="antv" {...props} />

/** Anycubic mark — compose with Select, Button, menus, etc. */
const AnycubicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anycubic" {...props} />

/** AnyDesk mark — compose with Select, Button, menus, etc. */
const AnyDeskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anydesk" {...props} />

/** Anytype mark — compose with Select, Button, menus, etc. */
const AnytypeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="anytype" {...props} />

/** Apache mark — compose with Select, Button, menus, etc. */
const ApacheBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apache" {...props} />

/** Apache Airflow mark — compose with Select, Button, menus, etc. */
const ApacheAirflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheairflow" {...props} />

/** Apache Ant mark — compose with Select, Button, menus, etc. */
const ApacheAntBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheant" {...props} />

/** Apache Arrow mark — compose with Select, Button, menus, etc. */
const ApacheArrowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachearrow" {...props} />

/** Apache Avro mark — compose with Select, Button, menus, etc. */
const ApacheAvroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheavro" {...props} />

/** Apache Cassandra mark — compose with Select, Button, menus, etc. */
const ApacheCassandraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachecassandra" {...props} />

/** Apache CloudStack mark — compose with Select, Button, menus, etc. */
const ApacheCloudStackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachecloudstack" {...props} />

/** Apache Cordova mark — compose with Select, Button, menus, etc. */
const ApacheCordovaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachecordova" {...props} />

/** Apache CouchDB mark — compose with Select, Button, menus, etc. */
const ApacheCouchDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachecouchdb" {...props} />

/** Apache DolphinScheduler mark — compose with Select, Button, menus, etc. */
const ApacheDolphinSchedulerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachedolphinscheduler" {...props} />

/** Apache Doris mark — compose with Select, Button, menus, etc. */
const ApacheDorisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachedoris" {...props} />

/** Apache Druid mark — compose with Select, Button, menus, etc. */
const ApacheDruidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachedruid" {...props} />

/** Apache ECharts mark — compose with Select, Button, menus, etc. */
const ApacheEChartsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheecharts" {...props} />

/** Apache Flink mark — compose with Select, Button, menus, etc. */
const ApacheFlinkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheflink" {...props} />

/** Apache FreeMarker mark — compose with Select, Button, menus, etc. */
const ApacheFreeMarkerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachefreemarker" {...props} />

/** Apache Groovy mark — compose with Select, Button, menus, etc. */
const ApacheGroovyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachegroovy" {...props} />

/** Apache Guacamole mark — compose with Select, Button, menus, etc. */
const ApacheGuacamoleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheguacamole" {...props} />

/** Apache Hadoop mark — compose with Select, Button, menus, etc. */
const ApacheHadoopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachehadoop" {...props} />

/** Apache HBase mark — compose with Select, Button, menus, etc. */
const ApacheHBaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachehbase" {...props} />

/** Apache Hive mark — compose with Select, Button, menus, etc. */
const ApacheHiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachehive" {...props} />

/** Apache JMeter mark — compose with Select, Button, menus, etc. */
const ApacheJMeterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachejmeter" {...props} />

/** Apache Kafka mark — compose with Select, Button, menus, etc. */
const ApacheKafkaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachekafka" {...props} />

/** Apache Kylin mark — compose with Select, Button, menus, etc. */
const ApacheKylinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachekylin" {...props} />

/** Apache Lucene mark — compose with Select, Button, menus, etc. */
const ApacheLuceneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachelucene" {...props} />

/** Apache Maven mark — compose with Select, Button, menus, etc. */
const ApacheMavenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachemaven" {...props} />

/** Apache NetBeans IDE mark — compose with Select, Button, menus, etc. */
const ApacheNetBeansIDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachenetbeanside" {...props} />

/** Apache NiFi mark — compose with Select, Button, menus, etc. */
const ApacheNiFiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachenifi" {...props} />

/** Apache OpenOffice mark — compose with Select, Button, menus, etc. */
const ApacheOpenOfficeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheopenoffice" {...props} />

/** Apache Parquet mark — compose with Select, Button, menus, etc. */
const ApacheParquetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacheparquet" {...props} />

/** Apache PDFBox mark — compose with Select, Button, menus, etc. */
const ApachePDFBoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachepdfbox" {...props} />

/** Apache Pulsar mark — compose with Select, Button, menus, etc. */
const ApachePulsarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachepulsar" {...props} />

/** Apache RocketMQ mark — compose with Select, Button, menus, etc. */
const ApacheRocketMQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apacherocketmq" {...props} />

/** Apache Solr mark — compose with Select, Button, menus, etc. */
const ApacheSolrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachesolr" {...props} />

/** Apache Spark mark — compose with Select, Button, menus, etc. */
const ApacheSparkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachespark" {...props} />

/** Apache Storm mark — compose with Select, Button, menus, etc. */
const ApacheStormBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachestorm" {...props} />

/** Apache Superset mark — compose with Select, Button, menus, etc. */
const ApacheSupersetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachesuperset" {...props} />

/** Apache Tomcat mark — compose with Select, Button, menus, etc. */
const ApacheTomcatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apachetomcat" {...props} />

/** Aparat mark — compose with Select, Button, menus, etc. */
const AparatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aparat" {...props} />

/** Apifox mark — compose with Select, Button, menus, etc. */
const ApifoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apifox" {...props} />

/** APM Terminals mark — compose with Select, Button, menus, etc. */
const APMTerminalsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apmterminals" {...props} />

/** Apollo GraphQL mark — compose with Select, Button, menus, etc. */
const ApolloGraphQLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apollographql" {...props} />

/** Apostrophe mark — compose with Select, Button, menus, etc. */
const ApostropheBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apostrophe" {...props} />

/** App Store mark — compose with Select, Button, menus, etc. */
const AppStoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appstore" {...props} />

/** AppGallery mark — compose with Select, Button, menus, etc. */
const AppGalleryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appgallery" {...props} />

/** Appian mark — compose with Select, Button, menus, etc. */
const AppianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appian" {...props} />

/** AppImage mark — compose with Select, Button, menus, etc. */
const AppImageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appimage" {...props} />

/** Appium mark — compose with Select, Button, menus, etc. */
const AppiumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appium" {...props} />

/** Apple mark — compose with Select, Button, menus, etc. */
const AppleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="apple" {...props} />

/** Apple Arcade mark — compose with Select, Button, menus, etc. */
const AppleArcadeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="applearcade" {...props} />

/** Apple Music mark — compose with Select, Button, menus, etc. */
const AppleMusicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="applemusic" {...props} />

/** Apple News mark — compose with Select, Button, menus, etc. */
const AppleNewsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="applenews" {...props} />

/** Apple Pay mark — compose with Select, Button, menus, etc. */
const ApplePayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="applepay" {...props} />

/** Apple Podcasts mark — compose with Select, Button, menus, etc. */
const ApplePodcastsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="applepodcasts" {...props} />

/** Apple TV mark — compose with Select, Button, menus, etc. */
const AppleTVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appletv" {...props} />

/** AppManager mark — compose with Select, Button, menus, etc. */
const AppManagerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appmanager" {...props} />

/** AppSignal mark — compose with Select, Button, menus, etc. */
const AppSignalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appsignal" {...props} />

/** Appsmith mark — compose with Select, Button, menus, etc. */
const AppsmithBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appsmith" {...props} />

/** AppVeyor mark — compose with Select, Button, menus, etc. */
const AppVeyorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appveyor" {...props} />

/** Appwrite mark — compose with Select, Button, menus, etc. */
const AppwriteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="appwrite" {...props} />

/** Aqua mark — compose with Select, Button, menus, etc. */
const AquaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aqua" {...props} />

/** ARAL mark — compose with Select, Button, menus, etc. */
const ARALBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aral" {...props} />

/** ArangoDB mark — compose with Select, Button, menus, etc. */
const ArangoDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arangodb" {...props} />

/** Arc mark — compose with Select, Button, menus, etc. */
const ArcBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arc" {...props} />

/** ArcGIS mark — compose with Select, Button, menus, etc. */
const ArcGISBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arcgis" {...props} />

/** Arch Linux mark — compose with Select, Button, menus, etc. */
const ArchLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="archlinux" {...props} />

/** Archicad mark — compose with Select, Button, menus, etc. */
const ArchicadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="archicad" {...props} />

/** Archive of Our Own mark — compose with Select, Button, menus, etc. */
const ArchiveOfOurOwnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="archiveofourown" {...props} />

/** Ardour mark — compose with Select, Button, menus, etc. */
const ArdourBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ardour" {...props} />

/** Arduino mark — compose with Select, Button, menus, etc. */
const ArduinoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arduino" {...props} />

/** Argo mark — compose with Select, Button, menus, etc. */
const ArgoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="argo" {...props} />

/** Argos mark — compose with Select, Button, menus, etc. */
const ArgosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="argos" {...props} />

/** Ariakit mark — compose with Select, Button, menus, etc. */
const AriakitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ariakit" {...props} />

/** ARK Ecosystem mark — compose with Select, Button, menus, etc. */
const ARKEcosystemBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arkecosystem" {...props} />

/** Arlo mark — compose with Select, Button, menus, etc. */
const ArloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arlo" {...props} />

/** Arm mark — compose with Select, Button, menus, etc. */
const ArmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arm" {...props} />

/** Arm Keil mark — compose with Select, Button, menus, etc. */
const ArmKeilBrandIcon = (props: BrandIconProps) => <BrandIcon slug="armkeil" {...props} />

/** Ars Technica mark — compose with Select, Button, menus, etc. */
const ArsTechnicaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arstechnica" {...props} />

/** Artifact Hub mark — compose with Select, Button, menus, etc. */
const ArtifactHubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="artifacthub" {...props} />

/** Artix Linux mark — compose with Select, Button, menus, etc. */
const ArtixLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="artixlinux" {...props} />

/** ArtStation mark — compose with Select, Button, menus, etc. */
const ArtStationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="artstation" {...props} />

/** arXiv mark — compose with Select, Button, menus, etc. */
const ArXivBrandIcon = (props: BrandIconProps) => <BrandIcon slug="arxiv" {...props} />

/** Asahi Linux mark — compose with Select, Button, menus, etc. */
const AsahiLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="asahilinux" {...props} />

/** Asana mark — compose with Select, Button, menus, etc. */
const AsanaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="asana" {...props} />

/** Asciidoctor mark — compose with Select, Button, menus, etc. */
const AsciidoctorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="asciidoctor" {...props} />

/** asciinema mark — compose with Select, Button, menus, etc. */
const AsciinemaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="asciinema" {...props} />

/** ASDA mark — compose with Select, Button, menus, etc. */
const ASDABrandIcon = (props: BrandIconProps) => <BrandIcon slug="asda" {...props} />

/** Aseprite mark — compose with Select, Button, menus, etc. */
const AsepriteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aseprite" {...props} />

/** Aspire mark — compose with Select, Button, menus, etc. */
const AspireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aspire" {...props} />

/** AssemblyScript mark — compose with Select, Button, menus, etc. */
const AssemblyScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="assemblyscript" {...props} />

/** Asterisk mark — compose with Select, Button, menus, etc. */
const AsteriskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="asterisk" {...props} />

/** Aston Martin mark — compose with Select, Button, menus, etc. */
const AstonMartinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="astonmartin" {...props} />

/** Astra mark — compose with Select, Button, menus, etc. */
const AstraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="astra" {...props} />

/** Astral mark — compose with Select, Button, menus, etc. */
const AstralBrandIcon = (props: BrandIconProps) => <BrandIcon slug="astral" {...props} />

/** Astro mark — compose with Select, Button, menus, etc. */
const AstroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="astro" {...props} />

/** ASUS mark — compose with Select, Button, menus, etc. */
const ASUSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="asus" {...props} />

/** AT&T mark — compose with Select, Button, menus, etc. */
const ATTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="atandt" {...props} />

/** Atari mark — compose with Select, Button, menus, etc. */
const AtariBrandIcon = (props: BrandIconProps) => <BrandIcon slug="atari" {...props} />

/** AtlasOS mark — compose with Select, Button, menus, etc. */
const AtlasOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="atlasos" {...props} />

/** Atlassian mark — compose with Select, Button, menus, etc. */
const AtlassianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="atlassian" {...props} />

/** AtomGit mark — compose with Select, Button, menus, etc. */
const AtomGitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="atomgit" {...props} />

/** Auchan mark — compose with Select, Button, menus, etc. */
const AuchanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="auchan" {...props} />

/** Audacity mark — compose with Select, Button, menus, etc. */
const AudacityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audacity" {...props} />

/** Audi mark — compose with Select, Button, menus, etc. */
const AudiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audi" {...props} />

/** Audible mark — compose with Select, Button, menus, etc. */
const AudibleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audible" {...props} />

/** Audio-Technica mark — compose with Select, Button, menus, etc. */
const AudioTechnicaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audiotechnica" {...props} />

/** Audiobookshelf mark — compose with Select, Button, menus, etc. */
const AudiobookshelfBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audiobookshelf" {...props} />

/** Audioboom mark — compose with Select, Button, menus, etc. */
const AudioboomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audioboom" {...props} />

/** Audiomack mark — compose with Select, Button, menus, etc. */
const AudiomackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="audiomack" {...props} />

/** Aurelia mark — compose with Select, Button, menus, etc. */
const AureliaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="aurelia" {...props} />

/** Autentique mark — compose with Select, Button, menus, etc. */
const AutentiqueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autentique" {...props} />

/** Auth0 mark — compose with Select, Button, menus, etc. */
const Auth0BrandIcon = (props: BrandIconProps) => <BrandIcon slug="auth0" {...props} />

/** Authelia mark — compose with Select, Button, menus, etc. */
const AutheliaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="authelia" {...props} />

/** Authentik mark — compose with Select, Button, menus, etc. */
const AuthentikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="authentik" {...props} />

/** AutoCAD mark — compose with Select, Button, menus, etc. */
const AutoCADBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autocad" {...props} />

/** AutoCannon mark — compose with Select, Button, menus, etc. */
const AutoCannonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autocannon" {...props} />

/** Autodesk mark — compose with Select, Button, menus, etc. */
const AutodeskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autodesk" {...props} />

/** Autodesk Maya mark — compose with Select, Button, menus, etc. */
const AutodeskMayaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autodeskmaya" {...props} />

/** Autodesk Revit mark — compose with Select, Button, menus, etc. */
const AutodeskRevitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autodeskrevit" {...props} />

/** AutoHotkey mark — compose with Select, Button, menus, etc. */
const AutoHotkeyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autohotkey" {...props} />

/** AutoIt mark — compose with Select, Button, menus, etc. */
const AutoItBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autoit" {...props} />

/** Automattic mark — compose with Select, Button, menus, etc. */
const AutomatticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="automattic" {...props} />

/** Autoprefixer mark — compose with Select, Button, menus, etc. */
const AutoprefixerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autoprefixer" {...props} />

/** AutoZone mark — compose with Select, Button, menus, etc. */
const AutoZoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="autozone" {...props} />

/** avajs mark — compose with Select, Button, menus, etc. */
const AvajsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="avajs" {...props} />

/** AvaloniaUI mark — compose with Select, Button, menus, etc. */
const AvaloniaUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="avaloniaui" {...props} />

/** Avast mark — compose with Select, Button, menus, etc. */
const AvastBrandIcon = (props: BrandIconProps) => <BrandIcon slug="avast" {...props} />

/** avianca mark — compose with Select, Button, menus, etc. */
const AviancaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="avianca" {...props} />

/** Avira mark — compose with Select, Button, menus, etc. */
const AviraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="avira" {...props} />

/** AVM mark — compose with Select, Button, menus, etc. */
const AVMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="avm" {...props} />

/** Await mark — compose with Select, Button, menus, etc. */
const AwaitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="await" {...props} />

/** Awesome Lists mark — compose with Select, Button, menus, etc. */
const AwesomeListsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="awesomelists" {...props} />

/** awesomeWM mark — compose with Select, Button, menus, etc. */
const AwesomeWMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="awesomewm" {...props} />

/** Awwwards mark — compose with Select, Button, menus, etc. */
const AwwwardsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="awwwards" {...props} />

/** Axios mark — compose with Select, Button, menus, etc. */
const AxiosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="axios" {...props} />

/** Axis Bank mark — compose with Select, Button, menus, etc. */
const AxisBankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="axisbank" {...props} />

/** B&R Automation mark — compose with Select, Button, menus, etc. */
const BRAutomationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bandrautomation" {...props} />

/** B4X mark — compose with Select, Button, menus, etc. */
const B4XBrandIcon = (props: BrandIconProps) => <BrandIcon slug="b4x" {...props} />

/** Babel mark — compose with Select, Button, menus, etc. */
const BabelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="babel" {...props} />

/** Babelio mark — compose with Select, Button, menus, etc. */
const BabelioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="babelio" {...props} />

/** Babylon.js mark — compose with Select, Button, menus, etc. */
const BabylonJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="babylondotjs" {...props} />

/** Backblaze mark — compose with Select, Button, menus, etc. */
const BackblazeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="backblaze" {...props} />

/** Backbone mark — compose with Select, Button, menus, etc. */
const BackboneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="backbone" {...props} />

/** Backbone.js mark — compose with Select, Button, menus, etc. */
const BackboneJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="backbonedotjs" {...props} />

/** Backendless mark — compose with Select, Button, menus, etc. */
const BackendlessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="backendless" {...props} />

/** Backstage mark — compose with Select, Button, menus, etc. */
const BackstageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="backstage" {...props} />

/** Backstage mark — compose with Select, Button, menus, etc. */
const BackstageCastingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="backstage_casting" {...props} />

/** Badoo mark — compose with Select, Button, menus, etc. */
const BadooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="badoo" {...props} />

/** Baidu mark — compose with Select, Button, menus, etc. */
const BaiduBrandIcon = (props: BrandIconProps) => <BrandIcon slug="baidu" {...props} />

/** Bakaláři mark — compose with Select, Button, menus, etc. */
const BakalIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bakalari" {...props} />

/** Bamboo mark — compose with Select, Button, menus, etc. */
const BambooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bamboo" {...props} />

/** Bambu Lab mark — compose with Select, Button, menus, etc. */
const BambuLabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bambulab" {...props} />

/** Bandcamp mark — compose with Select, Button, menus, etc. */
const BandcampBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bandcamp" {...props} />

/** BandLab mark — compose with Select, Button, menus, etc. */
const BandLabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bandlab" {...props} />

/** Bandsintown mark — compose with Select, Button, menus, etc. */
const BandsintownBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bandsintown" {...props} />

/** Bank of America mark — compose with Select, Button, menus, etc. */
const BankOfAmericaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bankofamerica" {...props} />

/** Barclays mark — compose with Select, Button, menus, etc. */
const BarclaysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="barclays" {...props} />

/** Baremetrics mark — compose with Select, Button, menus, etc. */
const BaremetricsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="baremetrics" {...props} />

/** Barmenia mark — compose with Select, Button, menus, etc. */
const BarmeniaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="barmenia" {...props} />

/** Base UI mark — compose with Select, Button, menus, etc. */
const BaseUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="baseui" {...props} />

/** Basecamp mark — compose with Select, Button, menus, etc. */
const BasecampBrandIcon = (props: BrandIconProps) => <BrandIcon slug="basecamp" {...props} />

/** Baserow mark — compose with Select, Button, menus, etc. */
const BaserowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="baserow" {...props} />

/** Basic Attention Token mark — compose with Select, Button, menus, etc. */
const BasicAttentionTokenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="basicattentiontoken" {...props} />

/** Bastyon mark — compose with Select, Button, menus, etc. */
const BastyonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bastyon" {...props} />

/** bat mark — compose with Select, Button, menus, etc. */
const BatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bat" {...props} />

/** Bata mark — compose with Select, Button, menus, etc. */
const BataBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bata" {...props} />

/** Battle.net mark — compose with Select, Button, menus, etc. */
const BattleNetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="battledotnet" {...props} />

/** Bazel mark — compose with Select, Button, menus, etc. */
const BazelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bazel" {...props} />

/** Beatport mark — compose with Select, Button, menus, etc. */
const BeatportBrandIcon = (props: BrandIconProps) => <BrandIcon slug="beatport" {...props} />

/** Beats mark — compose with Select, Button, menus, etc. */
const BeatsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="beats" {...props} />

/** Beats by Dre mark — compose with Select, Button, menus, etc. */
const BeatsByDreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="beatsbydre" {...props} />

/** BeatStars mark — compose with Select, Button, menus, etc. */
const BeatStarsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="beatstars" {...props} />

/** Beekeeper Studio mark — compose with Select, Button, menus, etc. */
const BeekeeperStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="beekeeperstudio" {...props} />

/** Behance mark — compose with Select, Button, menus, etc. */
const BehanceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="behance" {...props} />

/** Beijing Subway mark — compose with Select, Button, menus, etc. */
const BeijingSubwayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="beijingsubway" {...props} />

/** BEM mark — compose with Select, Button, menus, etc. */
const BEMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bem" {...props} />

/** Bentley mark — compose with Select, Button, menus, etc. */
const BentleyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bentley" {...props} />

/** Bento mark — compose with Select, Button, menus, etc. */
const BentoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bento" {...props} />

/** BentoBox mark — compose with Select, Button, menus, etc. */
const BentoBoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bentobox" {...props} />

/** BentoML mark — compose with Select, Button, menus, etc. */
const BentoMLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bentoml" {...props} />

/** BeReal mark — compose with Select, Button, menus, etc. */
const BeRealBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bereal" {...props} />

/** Betfair mark — compose with Select, Button, menus, etc. */
const BetfairBrandIcon = (props: BrandIconProps) => <BrandIcon slug="betfair" {...props} />

/** Better Auth mark — compose with Select, Button, menus, etc. */
const BetterAuthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="betterauth" {...props} />

/** Better Stack mark — compose with Select, Button, menus, etc. */
const BetterStackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="betterstack" {...props} />

/** BetterDiscord mark — compose with Select, Button, menus, etc. */
const BetterDiscordBrandIcon = (props: BrandIconProps) => <BrandIcon slug="betterdiscord" {...props} />

/** Bevy mark — compose with Select, Button, menus, etc. */
const BevyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bevy" {...props} />

/** Big Cartel mark — compose with Select, Button, menus, etc. */
const BigCartelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bigcartel" {...props} />

/** bigbasket mark — compose with Select, Button, menus, etc. */
const BigbasketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bigbasket" {...props} />

/** BigBlueButton mark — compose with Select, Button, menus, etc. */
const BigBlueButtonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bigbluebutton" {...props} />

/** BigCommerce mark — compose with Select, Button, menus, etc. */
const BigCommerceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bigcommerce" {...props} />

/** Bilibili mark — compose with Select, Button, menus, etc. */
const BilibiliBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bilibili" {...props} />

/** Billboard mark — compose with Select, Button, menus, etc. */
const BillboardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="billboard" {...props} />

/** BIM mark — compose with Select, Button, menus, etc. */
const BIMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bim" {...props} />

/** Binance mark — compose with Select, Button, menus, etc. */
const BinanceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="binance" {...props} />

/** Bio Link mark — compose with Select, Button, menus, etc. */
const BioLinkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="biolink" {...props} />

/** Bioconductor mark — compose with Select, Button, menus, etc. */
const BioconductorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bioconductor" {...props} />

/** Biome mark — compose with Select, Button, menus, etc. */
const BiomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="biome" {...props} />

/** BisectHosting mark — compose with Select, Button, menus, etc. */
const BisectHostingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bisecthosting" {...props} />

/** Bit mark — compose with Select, Button, menus, etc. */
const BitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bit" {...props} />

/** Bitbucket mark — compose with Select, Button, menus, etc. */
const BitbucketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitbucket" {...props} />

/** Bitcoin mark — compose with Select, Button, menus, etc. */
const BitcoinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitcoin" {...props} />

/** Bitcoin Cash mark — compose with Select, Button, menus, etc. */
const BitcoinCashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitcoincash" {...props} />

/** Bitcoin SV mark — compose with Select, Button, menus, etc. */
const BitcoinSVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitcoinsv" {...props} />

/** BitComet mark — compose with Select, Button, menus, etc. */
const BitCometBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitcomet" {...props} />

/** Bitdefender mark — compose with Select, Button, menus, etc. */
const BitdefenderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitdefender" {...props} />

/** Bitly mark — compose with Select, Button, menus, etc. */
const BitlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitly" {...props} />

/** Bitrise mark — compose with Select, Button, menus, etc. */
const BitriseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitrise" {...props} />

/** Bitsy mark — compose with Select, Button, menus, etc. */
const BitsyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitsy" {...props} />

/** BitTorrent mark — compose with Select, Button, menus, etc. */
const BitTorrentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bittorrent" {...props} />

/** Bitwarden mark — compose with Select, Button, menus, etc. */
const BitwardenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitwarden" {...props} />

/** Bitwig mark — compose with Select, Button, menus, etc. */
const BitwigBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bitwig" {...props} />

/** Black mark — compose with Select, Button, menus, etc. */
const BlackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="black" {...props} />

/** Blackberry mark — compose with Select, Button, menus, etc. */
const BlackberryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blackberry" {...props} />

/** Blackmagic Design mark — compose with Select, Button, menus, etc. */
const BlackmagicDesignBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blackmagicdesign" {...props} />

/** Blazemeter mark — compose with Select, Button, menus, etc. */
const BlazemeterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blazemeter" {...props} />

/** Blazor mark — compose with Select, Button, menus, etc. */
const BlazorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blazor" {...props} />

/** Blender mark — compose with Select, Button, menus, etc. */
const BlenderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blender" {...props} />

/** Blibli mark — compose with Select, Button, menus, etc. */
const BlibliBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blibli" {...props} />

/** Blockbench mark — compose with Select, Button, menus, etc. */
const BlockbenchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blockbench" {...props} />

/** Blockchain.com mark — compose with Select, Button, menus, etc. */
const BlockchainComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blockchaindotcom" {...props} />

/** Blogger mark — compose with Select, Button, menus, etc. */
const BloggerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blogger" {...props} />

/** Bloglovin mark — compose with Select, Button, menus, etc. */
const BloglovinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bloglovin" {...props} />

/** Blueprint mark — compose with Select, Button, menus, etc. */
const BlueprintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="blueprint" {...props} />

/** Bluesky mark — compose with Select, Button, menus, etc. */
const BlueskyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bluesky" {...props} />

/** Bluesound mark — compose with Select, Button, menus, etc. */
const BluesoundBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bluesound" {...props} />

/** Bluetooth mark — compose with Select, Button, menus, etc. */
const BluetoothBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bluetooth" {...props} />

/** BMC Software mark — compose with Select, Button, menus, etc. */
const BMCSoftwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bmcsoftware" {...props} />

/** BMW mark — compose with Select, Button, menus, etc. */
const BMWBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bmw" {...props} />

/** BNB Chain mark — compose with Select, Button, menus, etc. */
const BNBChainBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bnbchain" {...props} />

/** BoardGameGeek mark — compose with Select, Button, menus, etc. */
const BoardGameGeekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boardgamegeek" {...props} />

/** boAt mark — compose with Select, Button, menus, etc. */
const BoAtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boat" {...props} />

/** Boehringer Ingelheim mark — compose with Select, Button, menus, etc. */
const BoehringerIngelheimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boehringeringelheim" {...props} />

/** Boeing mark — compose with Select, Button, menus, etc. */
const BoeingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boeing" {...props} />

/** Bohemia Interactive mark — compose with Select, Button, menus, etc. */
const BohemiaInteractiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bohemiainteractive" {...props} />

/** Bombardier mark — compose with Select, Button, menus, etc. */
const BombardierBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bombardier" {...props} />

/** Bookalope mark — compose with Select, Button, menus, etc. */
const BookalopeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bookalope" {...props} />

/** BookBub mark — compose with Select, Button, menus, etc. */
const BookBubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bookbub" {...props} />

/** Booking.com mark — compose with Select, Button, menus, etc. */
const BookingComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bookingdotcom" {...props} />

/** Bookmeter mark — compose with Select, Button, menus, etc. */
const BookmeterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bookmeter" {...props} />

/** BookMyShow mark — compose with Select, Button, menus, etc. */
const BookMyShowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bookmyshow" {...props} />

/** BookStack mark — compose with Select, Button, menus, etc. */
const BookStackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bookstack" {...props} />

/** Boost mark — compose with Select, Button, menus, etc. */
const BoostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boost" {...props} />

/** Boosty mark — compose with Select, Button, menus, etc. */
const BoostyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boosty" {...props} />

/** Boots mark — compose with Select, Button, menus, etc. */
const BootsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boots" {...props} />

/** Bootstrap mark — compose with Select, Button, menus, etc. */
const BootstrapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bootstrap" {...props} />

/** BorgBackup mark — compose with Select, Button, menus, etc. */
const BorgBackupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="borgbackup" {...props} />

/** Bosch mark — compose with Select, Button, menus, etc. */
const BoschBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bosch" {...props} />

/** Bose mark — compose with Select, Button, menus, etc. */
const BoseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bose" {...props} />

/** Botble CMS mark — compose with Select, Button, menus, etc. */
const BotbleCMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="botblecms" {...props} />

/** boulanger mark — compose with Select, Button, menus, etc. */
const BoulangerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boulanger" {...props} />

/** Bower mark — compose with Select, Button, menus, etc. */
const BowerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bower" {...props} />

/** Box mark — compose with Select, Button, menus, etc. */
const BoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="box" {...props} />

/** Boxy SVG mark — compose with Select, Button, menus, etc. */
const BoxySVGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="boxysvg" {...props} />

/** Braintree mark — compose with Select, Button, menus, etc. */
const BraintreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="braintree" {...props} />

/** Braintrust mark — compose with Select, Button, menus, etc. */
const BraintrustBrandIcon = (props: BrandIconProps) => <BrandIcon slug="braintrust" {...props} />

/** Brandfetch mark — compose with Select, Button, menus, etc. */
const BrandfetchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="brandfetch" {...props} />

/** Brandfolder mark — compose with Select, Button, menus, etc. */
const BrandfolderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="brandfolder" {...props} />

/** Brave mark — compose with Select, Button, menus, etc. */
const BraveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="brave" {...props} />

/** Breaker mark — compose with Select, Button, menus, etc. */
const BreakerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="breaker" {...props} />

/** Brenntag mark — compose with Select, Button, menus, etc. */
const BrenntagBrandIcon = (props: BrandIconProps) => <BrandIcon slug="brenntag" {...props} />

/** Brevo mark — compose with Select, Button, menus, etc. */
const BrevoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="brevo" {...props} />

/** Brex mark — compose with Select, Button, menus, etc. */
const BrexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="brex" {...props} />

/** Bricks mark — compose with Select, Button, menus, etc. */
const BricksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bricks" {...props} />

/** British Airways mark — compose with Select, Button, menus, etc. */
const BritishAirwaysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="britishairways" {...props} />

/** Broadcom mark — compose with Select, Button, menus, etc. */
const BroadcomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="broadcom" {...props} />

/** Bruno mark — compose with Select, Button, menus, etc. */
const BrunoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bruno" {...props} />

/** BSD mark — compose with Select, Button, menus, etc. */
const BSDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bsd" {...props} />

/** bspwm mark — compose with Select, Button, menus, etc. */
const BspwmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bspwm" {...props} />

/** BT mark — compose with Select, Button, menus, etc. */
const BTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bt" {...props} />

/** Buddy mark — compose with Select, Button, menus, etc. */
const BuddyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buddy" {...props} />

/** Budibase mark — compose with Select, Button, menus, etc. */
const BudibaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="budibase" {...props} />

/** Buefy mark — compose with Select, Button, menus, etc. */
const BuefyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buefy" {...props} />

/** Buffer mark — compose with Select, Button, menus, etc. */
const BufferBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buffer" {...props} />

/** Bugatti mark — compose with Select, Button, menus, etc. */
const BugattiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bugatti" {...props} />

/** Bugcrowd mark — compose with Select, Button, menus, etc. */
const BugcrowdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bugcrowd" {...props} />

/** Buhl mark — compose with Select, Button, menus, etc. */
const BuhlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buhl" {...props} />

/** Buildkite mark — compose with Select, Button, menus, etc. */
const BuildkiteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buildkite" {...props} />

/** BuiltByBit mark — compose with Select, Button, menus, etc. */
const BuiltByBitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="builtbybit" {...props} />

/** Bukalapak mark — compose with Select, Button, menus, etc. */
const BukalapakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bukalapak" {...props} />

/** Bulma mark — compose with Select, Button, menus, etc. */
const BulmaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bulma" {...props} />

/** Bun mark — compose with Select, Button, menus, etc. */
const BunBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bun" {...props} />

/** Bungie mark — compose with Select, Button, menus, etc. */
const BungieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bungie" {...props} />

/** bunny.net mark — compose with Select, Button, menus, etc. */
const BunnyNetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bunnydotnet" {...props} />

/** bunq mark — compose with Select, Button, menus, etc. */
const BunqBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bunq" {...props} />

/** Burger King mark — compose with Select, Button, menus, etc. */
const BurgerKingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="burgerking" {...props} />

/** Burp Suite mark — compose with Select, Button, menus, etc. */
const BurpSuiteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="burpsuite" {...props} />

/** Burton mark — compose with Select, Button, menus, etc. */
const BurtonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="burton" {...props} />

/** Buy Me A Coffee mark — compose with Select, Button, menus, etc. */
const BuyMeACoffeeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buymeacoffee" {...props} />

/** BuySellAds mark — compose with Select, Button, menus, etc. */
const BuySellAdsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buysellads" {...props} />

/** BuzzFeed mark — compose with Select, Button, menus, etc. */
const BuzzFeedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="buzzfeed" {...props} />

/** BVG mark — compose with Select, Button, menus, etc. */
const BVGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bvg" {...props} />

/** Byju's mark — compose with Select, Button, menus, etc. */
const ByjuSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="byjus" {...props} />

/** ByteDance mark — compose with Select, Button, menus, etc. */
const ByteDanceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="bytedance" {...props} />

/** C mark — compose with Select, Button, menus, etc. */
const CBrandIcon = (props: BrandIconProps) => <BrandIcon slug="c" {...props} />

/** C++ mark — compose with Select, Button, menus, etc. */
const CplusplusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cplusplus" {...props} />

/** C++ Builder mark — compose with Select, Button, menus, etc. */
const CBuilderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cplusplusbuilder" {...props} />

/** Cachet mark — compose with Select, Button, menus, etc. */
const CachetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cachet" {...props} />

/** CachyOS mark — compose with Select, Button, menus, etc. */
const CachyOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cachyos" {...props} />

/** Caddy mark — compose with Select, Button, menus, etc. */
const CaddyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="caddy" {...props} />

/** Cadillac mark — compose with Select, Button, menus, etc. */
const CadillacBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cadillac" {...props} />

/** CafePress mark — compose with Select, Button, menus, etc. */
const CafePressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cafepress" {...props} />

/** Cairo Graphics mark — compose with Select, Button, menus, etc. */
const CairoGraphicsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cairographics" {...props} />

/** Cairo Metro mark — compose with Select, Button, menus, etc. */
const CairoMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cairometro" {...props} />

/** CaixaBank mark — compose with Select, Button, menus, etc. */
const CaixaBankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="caixabank" {...props} />

/** CakePHP mark — compose with Select, Button, menus, etc. */
const CakePHPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cakephp" {...props} />

/** Cal.com mark — compose with Select, Button, menus, etc. */
const CalComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="caldotcom" {...props} />

/** Calendly mark — compose with Select, Button, menus, etc. */
const CalendlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="calendly" {...props} />

/** Calibre-Web mark — compose with Select, Button, menus, etc. */
const CalibreWebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="calibreweb" {...props} />

/** Campaign Monitor mark — compose with Select, Button, menus, etc. */
const CampaignMonitorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="campaignmonitor" {...props} />

/** Camunda mark — compose with Select, Button, menus, etc. */
const CamundaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="camunda" {...props} />

/** Canonical mark — compose with Select, Button, menus, etc. */
const CanonicalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="canonical" {...props} />

/** Canvas mark — compose with Select, Button, menus, etc. */
const CanvasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="canvas" {...props} />

/** Capacitor mark — compose with Select, Button, menus, etc. */
const CapacitorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="capacitor" {...props} />

/** CapRover mark — compose with Select, Button, menus, etc. */
const CapRoverBrandIcon = (props: BrandIconProps) => <BrandIcon slug="caprover" {...props} />

/** Car Throttle mark — compose with Select, Button, menus, etc. */
const CarThrottleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="carthrottle" {...props} />

/** Cardano mark — compose with Select, Button, menus, etc. */
const CardanoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cardano" {...props} />

/** Cardmarket mark — compose with Select, Button, menus, etc. */
const CardmarketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cardmarket" {...props} />

/** Carlsberg Group mark — compose with Select, Button, menus, etc. */
const CarlsbergGroupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="carlsberggroup" {...props} />

/** Carrd mark — compose with Select, Button, menus, etc. */
const CarrdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="carrd" {...props} />

/** Carrefour mark — compose with Select, Button, menus, etc. */
const CarrefourBrandIcon = (props: BrandIconProps) => <BrandIcon slug="carrefour" {...props} />

/** Carto mark — compose with Select, Button, menus, etc. */
const CartoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="carto" {...props} />

/** Cash App mark — compose with Select, Button, menus, etc. */
const CashAppBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cashapp" {...props} />

/** Castbox mark — compose with Select, Button, menus, etc. */
const CastboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="castbox" {...props} />

/** Castorama mark — compose with Select, Button, menus, etc. */
const CastoramaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="castorama" {...props} />

/** Castro mark — compose with Select, Button, menus, etc. */
const CastroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="castro" {...props} />

/** Caterpillar mark — compose with Select, Button, menus, etc. */
const CaterpillarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="caterpillar" {...props} />

/** CBC mark — compose with Select, Button, menus, etc. */
const CBCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cbc" {...props} />

/** CBS mark — compose with Select, Button, menus, etc. */
const CBSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cbs" {...props} />

/** CCC mark — compose with Select, Button, menus, etc. */
const CCCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ccc" {...props} />

/** CCleaner mark — compose with Select, Button, menus, etc. */
const CCleanerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ccleaner" {...props} />

/** CD Projekt mark — compose with Select, Button, menus, etc. */
const CDProjektBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cdprojekt" {...props} />

/** CE mark — compose with Select, Button, menus, etc. */
const CEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ce" {...props} />

/** Celery mark — compose with Select, Button, menus, etc. */
const CeleryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="celery" {...props} />

/** Celestron mark — compose with Select, Button, menus, etc. */
const CelestronBrandIcon = (props: BrandIconProps) => <BrandIcon slug="celestron" {...props} />

/** CentOS mark — compose with Select, Button, menus, etc. */
const CentOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="centos" {...props} />

/** Ceph mark — compose with Select, Button, menus, etc. */
const CephBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ceph" {...props} />

/** Cesium mark — compose with Select, Button, menus, etc. */
const CesiumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cesium" {...props} />

/** Chai mark — compose with Select, Button, menus, etc. */
const ChaiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chai" {...props} />

/** Chainguard mark — compose with Select, Button, menus, etc. */
const ChainguardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chainguard" {...props} />

/** Chainlink mark — compose with Select, Button, menus, etc. */
const ChainlinkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chainlink" {...props} />

/** Chakra UI mark — compose with Select, Button, menus, etc. */
const ChakraUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chakraui" {...props} />

/** Change Detection mark — compose with Select, Button, menus, etc. */
const ChangeDetectionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="changedetection" {...props} />

/** Channel 4 mark — compose with Select, Button, menus, etc. */
const Channel4BrandIcon = (props: BrandIconProps) => <BrandIcon slug="channel4" {...props} />

/** Charles mark — compose with Select, Button, menus, etc. */
const CharlesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="charles" {...props} />

/** Chart.js mark — compose with Select, Button, menus, etc. */
const ChartJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chartdotjs" {...props} />

/** ChartMogul mark — compose with Select, Button, menus, etc. */
const ChartMogulBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chartmogul" {...props} />

/** Chase mark — compose with Select, Button, menus, etc. */
const ChaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chase" {...props} />

/** ChatBot mark — compose with Select, Button, menus, etc. */
const ChatBotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chatbot" {...props} />

/** Chatwoot mark — compose with Select, Button, menus, etc. */
const ChatwootBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chatwoot" {...props} />

/** CheckiO mark — compose with Select, Button, menus, etc. */
const CheckiOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="checkio" {...props} />

/** Checkmarx mark — compose with Select, Button, menus, etc. */
const CheckmarxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="checkmarx" {...props} />

/** Checkmk mark — compose with Select, Button, menus, etc. */
const CheckmkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="checkmk" {...props} />

/** Chedraui mark — compose with Select, Button, menus, etc. */
const ChedrauiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chedraui" {...props} />

/** Cheerio mark — compose with Select, Button, menus, etc. */
const CheerioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cheerio" {...props} />

/** Chef mark — compose with Select, Button, menus, etc. */
const ChefBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chef" {...props} />

/** Chemex mark — compose with Select, Button, menus, etc. */
const ChemexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chemex" {...props} />

/** Chess.com mark — compose with Select, Button, menus, etc. */
const ChessComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chessdotcom" {...props} />

/** Chevrolet mark — compose with Select, Button, menus, etc. */
const ChevroletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chevrolet" {...props} />

/** Chia Network mark — compose with Select, Button, menus, etc. */
const ChiaNetworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chianetwork" {...props} />

/** China Eastern Airlines mark — compose with Select, Button, menus, etc. */
const ChinaEasternAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chinaeasternairlines" {...props} />

/** China Railway mark — compose with Select, Button, menus, etc. */
const ChinaRailwayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chinarailway" {...props} />

/** China Southern Airlines mark — compose with Select, Button, menus, etc. */
const ChinaSouthernAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chinasouthernairlines" {...props} />

/** Chocolatey mark — compose with Select, Button, menus, etc. */
const ChocolateyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chocolatey" {...props} />

/** Chromatic mark — compose with Select, Button, menus, etc. */
const ChromaticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chromatic" {...props} />

/** Chrome Web Store mark — compose with Select, Button, menus, etc. */
const ChromeWebStoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chromewebstore" {...props} />

/** Chrysler mark — compose with Select, Button, menus, etc. */
const ChryslerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chrysler" {...props} />

/** Chupa Chups mark — compose with Select, Button, menus, etc. */
const ChupaChupsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="chupachups" {...props} />

/** Cilium mark — compose with Select, Button, menus, etc. */
const CiliumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cilium" {...props} />

/** Cinema 4D mark — compose with Select, Button, menus, etc. */
const Cinema4DBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cinema4d" {...props} />

/** Cinnamon mark — compose with Select, Button, menus, etc. */
const CinnamonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cinnamon" {...props} />

/** Cinny mark — compose with Select, Button, menus, etc. */
const CinnyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cinny" {...props} />

/** Circle mark — compose with Select, Button, menus, etc. */
const CircleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="circle" {...props} />

/** CircleCI mark — compose with Select, Button, menus, etc. */
const CircleCIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="circleci" {...props} />

/** CircuitVerse mark — compose with Select, Button, menus, etc. */
const CircuitVerseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="circuitverse" {...props} />

/** Cirrus CI mark — compose with Select, Button, menus, etc. */
const CirrusCIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cirrusci" {...props} />

/** Cisco mark — compose with Select, Button, menus, etc. */
const CiscoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cisco" {...props} />

/** Citrix mark — compose with Select, Button, menus, etc. */
const CitrixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="citrix" {...props} />

/** Citroën mark — compose with Select, Button, menus, etc. */
const CitroNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="citroen" {...props} />

/** CiviCRM mark — compose with Select, Button, menus, etc. */
const CiviCRMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="civicrm" {...props} />

/** Civo mark — compose with Select, Button, menus, etc. */
const CivoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="civo" {...props} />

/** Clarifai mark — compose with Select, Button, menus, etc. */
const ClarifaiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clarifai" {...props} />

/** Claris mark — compose with Select, Button, menus, etc. */
const ClarisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="claris" {...props} />

/** Clarivate mark — compose with Select, Button, menus, etc. */
const ClarivateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clarivate" {...props} />

/** Claude mark — compose with Select, Button, menus, etc. */
const ClaudeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="claude" {...props} />

/** Claude Code mark — compose with Select, Button, menus, etc. */
const ClaudeCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="claudecode" {...props} />

/** Clerk mark — compose with Select, Button, menus, etc. */
const ClerkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clerk" {...props} />

/** Clever Cloud mark — compose with Select, Button, menus, etc. */
const CleverCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clevercloud" {...props} />

/** ClickHouse mark — compose with Select, Button, menus, etc. */
const ClickHouseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clickhouse" {...props} />

/** ClickUp mark — compose with Select, Button, menus, etc. */
const ClickUpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clickup" {...props} />

/** Cline mark — compose with Select, Button, menus, etc. */
const ClineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cline" {...props} />

/** CLion mark — compose with Select, Button, menus, etc. */
const CLionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clion" {...props} />

/** Clockify mark — compose with Select, Button, menus, etc. */
const ClockifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clockify" {...props} />

/** Clojure mark — compose with Select, Button, menus, etc. */
const ClojureBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clojure" {...props} />

/** Cloud 66 mark — compose with Select, Button, menus, etc. */
const Cloud66BrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloud66" {...props} />

/** Cloud Foundry mark — compose with Select, Button, menus, etc. */
const CloudFoundryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudfoundry" {...props} />

/** Cloud Native Build mark — compose with Select, Button, menus, etc. */
const CloudNativeBuildBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudnativebuild" {...props} />

/** CloudBees mark — compose with Select, Button, menus, etc. */
const CloudBeesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudbees" {...props} />

/** CloudCannon mark — compose with Select, Button, menus, etc. */
const CloudCannonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudcannon" {...props} />

/** Cloudera mark — compose with Select, Button, menus, etc. */
const ClouderaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudera" {...props} />

/** Cloudflare mark — compose with Select, Button, menus, etc. */
const CloudflareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudflare" {...props} />

/** Cloudflare Pages mark — compose with Select, Button, menus, etc. */
const CloudflarePagesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudflarepages" {...props} />

/** Cloudflare Workers mark — compose with Select, Button, menus, etc. */
const CloudflareWorkersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudflareworkers" {...props} />

/** Cloudinary mark — compose with Select, Button, menus, etc. */
const CloudinaryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudinary" {...props} />

/** Cloudron mark — compose with Select, Button, menus, etc. */
const CloudronBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudron" {...props} />

/** Cloudsmith mark — compose with Select, Button, menus, etc. */
const CloudsmithBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudsmith" {...props} />

/** Cloudways mark — compose with Select, Button, menus, etc. */
const CloudwaysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cloudways" {...props} />

/** Clubforce mark — compose with Select, Button, menus, etc. */
const ClubforceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clubforce" {...props} />

/** Clubhouse mark — compose with Select, Button, menus, etc. */
const ClubhouseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clubhouse" {...props} />

/** Clyp mark — compose with Select, Button, menus, etc. */
const ClypBrandIcon = (props: BrandIconProps) => <BrandIcon slug="clyp" {...props} />

/** CMake mark — compose with Select, Button, menus, etc. */
const CMakeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cmake" {...props} />

/** CNCF mark — compose with Select, Button, menus, etc. */
const CNCFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cncf" {...props} />

/** CNES mark — compose with Select, Button, menus, etc. */
const CNESBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cnes" {...props} />

/** CNET mark — compose with Select, Button, menus, etc. */
const CNETBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cnet" {...props} />

/** CNN mark — compose with Select, Button, menus, etc. */
const CNNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cnn" {...props} />

/** Co-op mark — compose with Select, Button, menus, etc. */
const CoOpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coop" {...props} />

/** cobalt mark — compose with Select, Button, menus, etc. */
const CobaltBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cobalt" {...props} />

/** Coca-Cola mark — compose with Select, Button, menus, etc. */
const CocaColaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cocacola" {...props} />

/** Cockpit mark — compose with Select, Button, menus, etc. */
const CockpitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cockpit" {...props} />

/** Cockroach Labs mark — compose with Select, Button, menus, etc. */
const CockroachLabsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cockroachlabs" {...props} />

/** CocoaPods mark — compose with Select, Button, menus, etc. */
const CocoaPodsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cocoapods" {...props} />

/** Cocos mark — compose with Select, Button, menus, etc. */
const CocosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cocos" {...props} />

/** Coda mark — compose with Select, Button, menus, etc. */
const CodaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coda" {...props} />

/** Codacy mark — compose with Select, Button, menus, etc. */
const CodacyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codacy" {...props} />

/** Code Climate mark — compose with Select, Button, menus, etc. */
const CodeClimateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeclimate" {...props} />

/** Code::Blocks mark — compose with Select, Button, menus, etc. */
const CodeBlocksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeblocks" {...props} />

/** Codeberg mark — compose with Select, Button, menus, etc. */
const CodebergBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeberg" {...props} />

/** CodeBuddy mark — compose with Select, Button, menus, etc. */
const CodeBuddyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codebuddy" {...props} />

/** Codecademy mark — compose with Select, Button, menus, etc. */
const CodecademyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codecademy" {...props} />

/** CodeceptJS mark — compose with Select, Button, menus, etc. */
const CodeceptJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeceptjs" {...props} />

/** CodeChef mark — compose with Select, Button, menus, etc. */
const CodeChefBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codechef" {...props} />

/** Codecov mark — compose with Select, Button, menus, etc. */
const CodecovBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codecov" {...props} />

/** CodeCrafters mark — compose with Select, Button, menus, etc. */
const CodeCraftersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codecrafters" {...props} />

/** CodeFactor mark — compose with Select, Button, menus, etc. */
const CodeFactorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codefactor" {...props} />

/** Codeforces mark — compose with Select, Button, menus, etc. */
const CodeforcesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeforces" {...props} />

/** Codefresh mark — compose with Select, Button, menus, etc. */
const CodefreshBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codefresh" {...props} />

/** CodeIgniter mark — compose with Select, Button, menus, etc. */
const CodeIgniterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeigniter" {...props} />

/** Codemagic mark — compose with Select, Button, menus, etc. */
const CodemagicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codemagic" {...props} />

/** Codementor mark — compose with Select, Button, menus, etc. */
const CodementorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codementor" {...props} />

/** CodeMirror mark — compose with Select, Button, menus, etc. */
const CodeMirrorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codemirror" {...props} />

/** CodeNewbie mark — compose with Select, Button, menus, etc. */
const CodeNewbieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codenewbie" {...props} />

/** CodeProject mark — compose with Select, Button, menus, etc. */
const CodeProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeproject" {...props} />

/** Coder mark — compose with Select, Button, menus, etc. */
const CoderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coder" {...props} />

/** CodeRabbit mark — compose with Select, Button, menus, etc. */
const CodeRabbitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coderabbit" {...props} />

/** CodersRank mark — compose with Select, Button, menus, etc. */
const CodersRankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codersrank" {...props} />

/** Coderwall mark — compose with Select, Button, menus, etc. */
const CoderwallBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coderwall" {...props} />

/** CodeSandbox mark — compose with Select, Button, menus, etc. */
const CodeSandboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codesandbox" {...props} />

/** Codeship mark — compose with Select, Button, menus, etc. */
const CodeshipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codeship" {...props} />

/** CodeSignal mark — compose with Select, Button, menus, etc. */
const CodeSignalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codesignal" {...props} />

/** CodeStream mark — compose with Select, Button, menus, etc. */
const CodeStreamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codestream" {...props} />

/** Codewars mark — compose with Select, Button, menus, etc. */
const CodewarsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codewars" {...props} />

/** Coding Ninjas mark — compose with Select, Button, menus, etc. */
const CodingNinjasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codingninjas" {...props} />

/** CodinGame mark — compose with Select, Button, menus, etc. */
const CodinGameBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codingame" {...props} />

/** Codio mark — compose with Select, Button, menus, etc. */
const CodioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="codio" {...props} />

/** CoffeeScript mark — compose with Select, Button, menus, etc. */
const CoffeeScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coffeescript" {...props} />

/** Coggle mark — compose with Select, Button, menus, etc. */
const CoggleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coggle" {...props} />

/** Coinbase mark — compose with Select, Button, menus, etc. */
const CoinbaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coinbase" {...props} />

/** CoinMarketCap mark — compose with Select, Button, menus, etc. */
const CoinMarketCapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coinmarketcap" {...props} />

/** Collabora Online mark — compose with Select, Button, menus, etc. */
const CollaboraOnlineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="collaboraonline" {...props} />

/** ComicFury mark — compose with Select, Button, menus, etc. */
const ComicFuryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="comicfury" {...props} />

/** comma mark — compose with Select, Button, menus, etc. */
const CommaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="comma" {...props} />

/** Commerzbank mark — compose with Select, Button, menus, etc. */
const CommerzbankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="commerzbank" {...props} />

/** commitlint mark — compose with Select, Button, menus, etc. */
const CommitlintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="commitlint" {...props} />

/** Commodore mark — compose with Select, Button, menus, etc. */
const CommodoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="commodore" {...props} />

/** Common Lisp mark — compose with Select, Button, menus, etc. */
const CommonLispBrandIcon = (props: BrandIconProps) => <BrandIcon slug="commonlisp" {...props} />

/** Common Workflow Language mark — compose with Select, Button, menus, etc. */
const CommonWorkflowLanguageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="commonworkflowlanguage" {...props} />

/** Compiler Explorer mark — compose with Select, Button, menus, etc. */
const CompilerExplorerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="compilerexplorer" {...props} />

/** Composer mark — compose with Select, Button, menus, etc. */
const ComposerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="composer" {...props} />

/** CompTIA mark — compose with Select, Button, menus, etc. */
const CompTIABrandIcon = (props: BrandIconProps) => <BrandIcon slug="comptia" {...props} />

/** Comsol mark — compose with Select, Button, menus, etc. */
const ComsolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="comsol" {...props} />

/** Conan mark — compose with Select, Button, menus, etc. */
const ConanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="conan" {...props} />

/** Concourse mark — compose with Select, Button, menus, etc. */
const ConcourseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="concourse" {...props} />

/** Conda-Forge mark — compose with Select, Button, menus, etc. */
const CondaForgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="condaforge" {...props} />

/** Conekta mark — compose with Select, Button, menus, etc. */
const ConektaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="conekta" {...props} />

/** Confluence mark — compose with Select, Button, menus, etc. */
const ConfluenceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="confluence" {...props} />

/** Construct 3 mark — compose with Select, Button, menus, etc. */
const Construct3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="construct3" {...props} />

/** Consul mark — compose with Select, Button, menus, etc. */
const ConsulBrandIcon = (props: BrandIconProps) => <BrandIcon slug="consul" {...props} />

/** Contabo mark — compose with Select, Button, menus, etc. */
const ContaboBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contabo" {...props} />

/** Contactless Payment mark — compose with Select, Button, menus, etc. */
const ContactlessPaymentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contactlesspayment" {...props} />

/** containerd mark — compose with Select, Button, menus, etc. */
const ContainerdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="containerd" {...props} />

/** Contao mark — compose with Select, Button, menus, etc. */
const ContaoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contao" {...props} />

/** Contensis mark — compose with Select, Button, menus, etc. */
const ContensisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contensis" {...props} />

/** Contentful mark — compose with Select, Button, menus, etc. */
const ContentfulBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contentful" {...props} />

/** Contentstack mark — compose with Select, Button, menus, etc. */
const ContentstackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contentstack" {...props} />

/** Continente mark — compose with Select, Button, menus, etc. */
const ContinenteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="continente" {...props} />

/** Contributor Covenant mark — compose with Select, Button, menus, etc. */
const ContributorCovenantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="contributorcovenant" {...props} />

/** Conventional Commits mark — compose with Select, Button, menus, etc. */
const ConventionalCommitsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="conventionalcommits" {...props} />

/** Convertio mark — compose with Select, Button, menus, etc. */
const ConvertioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="convertio" {...props} />

/** Convex mark — compose with Select, Button, menus, etc. */
const ConvexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="convex" {...props} />

/** Cookiecutter mark — compose with Select, Button, menus, etc. */
const CookiecutterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cookiecutter" {...props} />

/** Cooler Master mark — compose with Select, Button, menus, etc. */
const CoolerMasterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coolermaster" {...props} />

/** Coolify mark — compose with Select, Button, menus, etc. */
const CoolifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coolify" {...props} />

/** Copa Airlines mark — compose with Select, Button, menus, etc. */
const CopaAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="copaairlines" {...props} />

/** Coppel mark — compose with Select, Button, menus, etc. */
const CoppelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coppel" {...props} />

/** Cora mark — compose with Select, Button, menus, etc. */
const CoraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cora" {...props} />

/** Coreboot mark — compose with Select, Button, menus, etc. */
const CorebootBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coreboot" {...props} />

/** CorelDRAW mark — compose with Select, Button, menus, etc. */
const CorelDRAWBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coreldraw" {...props} />

/** Corona Engine mark — compose with Select, Button, menus, etc. */
const CoronaEngineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coronaengine" {...props} />

/** Corona Renderer mark — compose with Select, Button, menus, etc. */
const CoronaRendererBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coronarenderer" {...props} />

/** Corsair mark — compose with Select, Button, menus, etc. */
const CorsairBrandIcon = (props: BrandIconProps) => <BrandIcon slug="corsair" {...props} />

/** Couchbase mark — compose with Select, Button, menus, etc. */
const CouchbaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="couchbase" {...props} />

/** Counter-Strike mark — compose with Select, Button, menus, etc. */
const CounterStrikeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="counterstrike" {...props} />

/** CountingWorks PRO mark — compose with Select, Button, menus, etc. */
const CountingWorksPROBrandIcon = (props: BrandIconProps) => <BrandIcon slug="countingworkspro" {...props} />

/** Coursera mark — compose with Select, Button, menus, etc. */
const CourseraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coursera" {...props} />

/** Coveralls mark — compose with Select, Button, menus, etc. */
const CoverallsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coveralls" {...props} />

/** Coze mark — compose with Select, Button, menus, etc. */
const CozeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="coze" {...props} />

/** cPanel mark — compose with Select, Button, menus, etc. */
const CPanelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cpanel" {...props} />

/** Craft CMS mark — compose with Select, Button, menus, etc. */
const CraftCMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="craftcms" {...props} />

/** Craftsman mark — compose with Select, Button, menus, etc. */
const CraftsmanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="craftsman" {...props} />

/** CrateDB mark — compose with Select, Button, menus, etc. */
const CrateDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cratedb" {...props} />

/** Crayon mark — compose with Select, Button, menus, etc. */
const CrayonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crayon" {...props} />

/** Creality mark — compose with Select, Button, menus, etc. */
const CrealityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="creality" {...props} />

/** Create React App mark — compose with Select, Button, menus, etc. */
const CreateReactAppBrandIcon = (props: BrandIconProps) => <BrandIcon slug="createreactapp" {...props} />

/** Creative Commons mark — compose with Select, Button, menus, etc. */
const CreativeCommonsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="creativecommons" {...props} />

/** Creative Technology mark — compose with Select, Button, menus, etc. */
const CreativeTechnologyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="creativetechnology" {...props} />

/** Credly mark — compose with Select, Button, menus, etc. */
const CredlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="credly" {...props} />

/** Crehana mark — compose with Select, Button, menus, etc. */
const CrehanaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crehana" {...props} />

/** Crew United mark — compose with Select, Button, menus, etc. */
const CrewUnitedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crewunited" {...props} />

/** CrewAI mark — compose with Select, Button, menus, etc. */
const CrewAIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crewai" {...props} />

/** Critical Role mark — compose with Select, Button, menus, etc. */
const CriticalRoleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="criticalrole" {...props} />

/** Crowdin mark — compose with Select, Button, menus, etc. */
const CrowdinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crowdin" {...props} />

/** Crowdsource mark — compose with Select, Button, menus, etc. */
const CrowdsourceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crowdsource" {...props} />

/** Crunchbase mark — compose with Select, Button, menus, etc. */
const CrunchbaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crunchbase" {...props} />

/** Crunchyroll mark — compose with Select, Button, menus, etc. */
const CrunchyrollBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crunchyroll" {...props} />

/** CRYENGINE mark — compose with Select, Button, menus, etc. */
const CryengineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cryengine" {...props} />

/** Cryptomator mark — compose with Select, Button, menus, etc. */
const CryptomatorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cryptomator" {...props} />

/** CryptPad mark — compose with Select, Button, menus, etc. */
const CryptPadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cryptpad" {...props} />

/** Crystal mark — compose with Select, Button, menus, etc. */
const CrystalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="crystal" {...props} />

/** CSDN mark — compose with Select, Button, menus, etc. */
const CSDNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="csdn" {...props} />

/** CSS mark — compose with Select, Button, menus, etc. */
const CSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="css" {...props} />

/** CSS Design Awards mark — compose with Select, Button, menus, etc. */
const CSSDesignAwardsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cssdesignawards" {...props} />

/** CSS Modules mark — compose with Select, Button, menus, etc. */
const CSSModulesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cssmodules" {...props} />

/** CSS Wizardry mark — compose with Select, Button, menus, etc. */
const CSSWizardryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="csswizardry" {...props} />

/** CTS mark — compose with Select, Button, menus, etc. */
const CTSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cts" {...props} />

/** Cucumber mark — compose with Select, Button, menus, etc. */
const CucumberBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cucumber" {...props} />

/** Cultura mark — compose with Select, Button, menus, etc. */
const CulturaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cultura" {...props} />

/** curl mark — compose with Select, Button, menus, etc. */
const CurlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="curl" {...props} />

/** CurseForge mark — compose with Select, Button, menus, etc. */
const CurseForgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="curseforge" {...props} />

/** Cursor mark — compose with Select, Button, menus, etc. */
const CursorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cursor" {...props} />

/** Custom Ink mark — compose with Select, Button, menus, etc. */
const CustomInkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="customink" {...props} />

/** CyberDefenders mark — compose with Select, Button, menus, etc. */
const CyberDefendersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cyberdefenders" {...props} />

/** Cycling '74 mark — compose with Select, Button, menus, etc. */
const Cycling74BrandIcon = (props: BrandIconProps) => <BrandIcon slug="cycling74" {...props} />

/** Cypress mark — compose with Select, Button, menus, etc. */
const CypressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cypress" {...props} />

/** Cytoscape.js mark — compose with Select, Button, menus, etc. */
const CytoscapeJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="cytoscapedotjs" {...props} />

/** D mark — compose with Select, Button, menus, etc. */
const DBrandIcon = (props: BrandIconProps) => <BrandIcon slug="d" {...props} />

/** D-EDGE mark — compose with Select, Button, menus, etc. */
const DEDGEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dedge" {...props} />

/** D-Wave Systems mark — compose with Select, Button, menus, etc. */
const DWaveSystemsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dwavesystems" {...props} />

/** D3 mark — compose with Select, Button, menus, etc. */
const D3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="d3" {...props} />

/** Dacia mark — compose with Select, Button, menus, etc. */
const DaciaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dacia" {...props} />

/** DAF mark — compose with Select, Button, menus, etc. */
const DAFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="daf" {...props} />

/** daily.dev mark — compose with Select, Button, menus, etc. */
const DailyDevBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dailydotdev" {...props} />

/** Dailymotion mark — compose with Select, Button, menus, etc. */
const DailymotionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dailymotion" {...props} />

/** daisyUI mark — compose with Select, Button, menus, etc. */
const DaisyUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="daisyui" {...props} />

/** Dapr mark — compose with Select, Button, menus, etc. */
const DaprBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dapr" {...props} />

/** Dark Reader mark — compose with Select, Button, menus, etc. */
const DarkReaderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="darkreader" {...props} />

/** Dart mark — compose with Select, Button, menus, etc. */
const DartBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dart" {...props} />

/** Darty mark — compose with Select, Button, menus, etc. */
const DartyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="darty" {...props} />

/** Das Erste mark — compose with Select, Button, menus, etc. */
const DasErsteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="daserste" {...props} />

/** Dash mark — compose with Select, Button, menus, etc. */
const DashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dash" {...props} />

/** Dash0 mark — compose with Select, Button, menus, etc. */
const Dash0BrandIcon = (props: BrandIconProps) => <BrandIcon slug="dash0" {...props} />

/** Dashlane mark — compose with Select, Button, menus, etc. */
const DashlaneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dashlane" {...props} />

/** Dask mark — compose with Select, Button, menus, etc. */
const DaskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dask" {...props} />

/** Dassault Systèmes mark — compose with Select, Button, menus, etc. */
const DassaultSystMesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dassaultsystemes" {...props} />

/** data.ai mark — compose with Select, Button, menus, etc. */
const DataAiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datadotai" {...props} />

/** Databricks mark — compose with Select, Button, menus, etc. */
const DatabricksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="databricks" {...props} />

/** DataCamp mark — compose with Select, Button, menus, etc. */
const DataCampBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datacamp" {...props} />

/** Datadog mark — compose with Select, Button, menus, etc. */
const DatadogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datadog" {...props} />

/** DataGrip mark — compose with Select, Button, menus, etc. */
const DataGripBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datagrip" {...props} />

/** Dataiku mark — compose with Select, Button, menus, etc. */
const DataikuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dataiku" {...props} />

/** DataStax mark — compose with Select, Button, menus, etc. */
const DataStaxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datastax" {...props} />

/** date-fns mark — compose with Select, Button, menus, etc. */
const DateFnsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datefns" {...props} />

/** DATEV mark — compose with Select, Button, menus, etc. */
const DatevBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datev" {...props} />

/** DatoCMS mark — compose with Select, Button, menus, etc. */
const DatoCMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datocms" {...props} />

/** Datto mark — compose with Select, Button, menus, etc. */
const DattoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="datto" {...props} />

/** DaVinci Resolve mark — compose with Select, Button, menus, etc. */
const DaVinciResolveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="davinciresolve" {...props} />

/** Dazhong Dianping mark — compose with Select, Button, menus, etc. */
const DazhongDianpingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dazhongdianping" {...props} />

/** DAZN mark — compose with Select, Button, menus, etc. */
const DAZNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dazn" {...props} />

/** DBeaver mark — compose with Select, Button, menus, etc. */
const DBeaverBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dbeaver" {...props} />

/** dblp mark — compose with Select, Button, menus, etc. */
const DblpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dblp" {...props} />

/** DC Entertainment mark — compose with Select, Button, menus, etc. */
const DCEntertainmentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dcentertainment" {...props} />

/** De'Longhi mark — compose with Select, Button, menus, etc. */
const DeLonghiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="delonghi" {...props} />

/** Debian mark — compose with Select, Button, menus, etc. */
const DebianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="debian" {...props} />

/** Debrid-Link mark — compose with Select, Button, menus, etc. */
const DebridLinkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="debridlink" {...props} />

/** Decap CMS mark — compose with Select, Button, menus, etc. */
const DecapCMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="decapcms" {...props} />

/** Decentraland mark — compose with Select, Button, menus, etc. */
const DecentralandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="decentraland" {...props} />

/** DeepCool mark — compose with Select, Button, menus, etc. */
const DeepCoolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepcool" {...props} />

/** Deepgram mark — compose with Select, Button, menus, etc. */
const DeepgramBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepgram" {...props} />

/** deepin mark — compose with Select, Button, menus, etc. */
const DeepinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepin" {...props} />

/** DeepL mark — compose with Select, Button, menus, etc. */
const DeepLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepl" {...props} />

/** DeepMind mark — compose with Select, Button, menus, etc. */
const DeepMindBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepmind" {...props} />

/** Deepnote mark — compose with Select, Button, menus, etc. */
const DeepnoteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepnote" {...props} />

/** DeepSeek mark — compose with Select, Button, menus, etc. */
const DeepSeekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deepseek" {...props} />

/** Deezer mark — compose with Select, Button, menus, etc. */
const DeezerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deezer" {...props} />

/** Deliveroo mark — compose with Select, Button, menus, etc. */
const DeliverooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deliveroo" {...props} />

/** Dell mark — compose with Select, Button, menus, etc. */
const DellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dell" {...props} />

/** Delphi mark — compose with Select, Button, menus, etc. */
const DelphiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="delphi" {...props} />

/** Delta mark — compose with Select, Button, menus, etc. */
const DeltaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="delta" {...props} />

/** Deluge mark — compose with Select, Button, menus, etc. */
const DelugeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deluge" {...props} />

/** Deno mark — compose with Select, Button, menus, etc. */
const DenoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deno" {...props} />

/** Deno Deploy mark — compose with Select, Button, menus, etc. */
const DenoDeployBrandIcon = (props: BrandIconProps) => <BrandIcon slug="denodeploy" {...props} />

/** Denon mark — compose with Select, Button, menus, etc. */
const DenonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="denon" {...props} />

/** Dependabot mark — compose with Select, Button, menus, etc. */
const DependabotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dependabot" {...props} />

/** Depositphotos mark — compose with Select, Button, menus, etc. */
const DepositphotosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="depositphotos" {...props} />

/** Der Spiegel mark — compose with Select, Button, menus, etc. */
const DerSpiegelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="derspiegel" {...props} />

/** Deutsche Bahn mark — compose with Select, Button, menus, etc. */
const DeutscheBahnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deutschebahn" {...props} />

/** Deutsche Bank mark — compose with Select, Button, menus, etc. */
const DeutscheBankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deutschebank" {...props} />

/** Deutsche Post mark — compose with Select, Button, menus, etc. */
const DeutschePostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deutschepost" {...props} />

/** Deutsche Telekom mark — compose with Select, Button, menus, etc. */
const DeutscheTelekomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deutschetelekom" {...props} />

/** Deutsche Welle mark — compose with Select, Button, menus, etc. */
const DeutscheWelleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deutschewelle" {...props} />

/** dev.to mark — compose with Select, Button, menus, etc. */
const DevToBrandIcon = (props: BrandIconProps) => <BrandIcon slug="devdotto" {...props} />

/** Devbox mark — compose with Select, Button, menus, etc. */
const DevboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="devbox" {...props} />

/** Development Containers mark — compose with Select, Button, menus, etc. */
const DevelopmentContainersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="developmentcontainers" {...props} />

/** DevExpress mark — compose with Select, Button, menus, etc. */
const DevExpressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="devexpress" {...props} />

/** DeviantArt mark — compose with Select, Button, menus, etc. */
const DeviantArtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="deviantart" {...props} />

/** Devpost mark — compose with Select, Button, menus, etc. */
const DevpostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="devpost" {...props} />

/** devRant mark — compose with Select, Button, menus, etc. */
const DevRantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="devrant" {...props} />

/** Devuan mark — compose with Select, Button, menus, etc. */
const DevuanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="devuan" {...props} />

/** Dgraph mark — compose with Select, Button, menus, etc. */
const DgraphBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dgraph" {...props} />

/** DHL mark — compose with Select, Button, menus, etc. */
const DHLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dhl" {...props} />

/** diagrams.net mark — compose with Select, Button, menus, etc. */
const DiagramsNetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="diagramsdotnet" {...props} />

/** Dialogflow mark — compose with Select, Button, menus, etc. */
const DialogflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dialogflow" {...props} />

/** Diaspora mark — compose with Select, Button, menus, etc. */
const DiasporaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="diaspora" {...props} />

/** DiceBear mark — compose with Select, Button, menus, etc. */
const DiceBearBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dicebear" {...props} />

/** Dictionary.com mark — compose with Select, Button, menus, etc. */
const DictionaryComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dictionarydotcom" {...props} />

/** Dify mark — compose with Select, Button, menus, etc. */
const DifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dify" {...props} />

/** Digg mark — compose with Select, Button, menus, etc. */
const DiggBrandIcon = (props: BrandIconProps) => <BrandIcon slug="digg" {...props} />

/** Digi-Key Electronics mark — compose with Select, Button, menus, etc. */
const DigiKeyElectronicsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="digikeyelectronics" {...props} />

/** DigitalOcean mark — compose with Select, Button, menus, etc. */
const DigitalOceanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="digitalocean" {...props} />

/** Diners Club mark — compose with Select, Button, menus, etc. */
const DinersClubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dinersclub" {...props} />

/** Dior mark — compose with Select, Button, menus, etc. */
const DiorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dior" {...props} />

/** Directus mark — compose with Select, Button, menus, etc. */
const DirectusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="directus" {...props} />

/** Discogs mark — compose with Select, Button, menus, etc. */
const DiscogsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="discogs" {...props} />

/** Discord mark — compose with Select, Button, menus, etc. */
const DiscordBrandIcon = (props: BrandIconProps) => <BrandIcon slug="discord" {...props} />

/** discord.js mark — compose with Select, Button, menus, etc. */
const DiscordJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="discorddotjs" {...props} />

/** Discourse mark — compose with Select, Button, menus, etc. */
const DiscourseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="discourse" {...props} />

/** Discover mark — compose with Select, Button, menus, etc. */
const DiscoverBrandIcon = (props: BrandIconProps) => <BrandIcon slug="discover" {...props} />

/** Disqus mark — compose with Select, Button, menus, etc. */
const DisqusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="disqus" {...props} />

/** Disroot mark — compose with Select, Button, menus, etc. */
const DisrootBrandIcon = (props: BrandIconProps) => <BrandIcon slug="disroot" {...props} />

/** Distrobox mark — compose with Select, Button, menus, etc. */
const DistroboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="distrobox" {...props} />

/** Distrokid mark — compose with Select, Button, menus, etc. */
const DistrokidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="distrokid" {...props} />

/** Django mark — compose with Select, Button, menus, etc. */
const DjangoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="django" {...props} />

/** DJI mark — compose with Select, Button, menus, etc. */
const DJIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dji" {...props} />

/** Dlib mark — compose with Select, Button, menus, etc. */
const DlibBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dlib" {...props} />

/** DLNA mark — compose with Select, Button, menus, etc. */
const DLNABrandIcon = (props: BrandIconProps) => <BrandIcon slug="dlna" {...props} />

/** dlthub mark — compose with Select, Button, menus, etc. */
const DlthubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dlthub" {...props} />

/** dm mark — compose with Select, Button, menus, etc. */
const DmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dm" {...props} />

/** DMM mark — compose with Select, Button, menus, etc. */
const DMMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dmm" {...props} />

/** Docker mark — compose with Select, Button, menus, etc. */
const DockerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="docker" {...props} />

/** Docs.rs mark — compose with Select, Button, menus, etc. */
const DocsRsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="docsdotrs" {...props} />

/** Docsify mark — compose with Select, Button, menus, etc. */
const DocsifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="docsify" {...props} />

/** Doctrine mark — compose with Select, Button, menus, etc. */
const DoctrineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="doctrine" {...props} />

/** Docusaurus mark — compose with Select, Button, menus, etc. */
const DocusaurusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="docusaurus" {...props} />

/** Dodo Payments mark — compose with Select, Button, menus, etc. */
const DodoPaymentsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dodopayments" {...props} />

/** Dogecoin mark — compose with Select, Button, menus, etc. */
const DogecoinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dogecoin" {...props} />

/** DOI mark — compose with Select, Button, menus, etc. */
const DOIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="doi" {...props} />

/** Dolby mark — compose with Select, Button, menus, etc. */
const DolbyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dolby" {...props} />

/** Dolibarr mark — compose with Select, Button, menus, etc. */
const DolibarrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dolibarr" {...props} />

/** Dolphin mark — compose with Select, Button, menus, etc. */
const DolphinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dolphin" {...props} />

/** DoorDash mark — compose with Select, Button, menus, etc. */
const DoorDashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="doordash" {...props} />

/** Dota 2 mark — compose with Select, Button, menus, etc. */
const Dota2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="dota2" {...props} />

/** Douban mark — compose with Select, Button, menus, etc. */
const DoubanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="douban" {...props} />

/** Douban Read mark — compose with Select, Button, menus, etc. */
const DoubanReadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="doubanread" {...props} />

/** Dovecot mark — compose with Select, Button, menus, etc. */
const DovecotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dovecot" {...props} />

/** Dovetail mark — compose with Select, Button, menus, etc. */
const DovetailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dovetail" {...props} />

/** Downdetector mark — compose with Select, Button, menus, etc. */
const DowndetectorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="downdetector" {...props} />

/** Doxygen mark — compose with Select, Button, menus, etc. */
const DoxygenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="doxygen" {...props} />

/** DPD mark — compose with Select, Button, menus, etc. */
const DPDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dpd" {...props} />

/** Dragonframe mark — compose with Select, Button, menus, etc. */
const DragonframeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dragonframe" {...props} />

/** Draugiem.lv mark — compose with Select, Button, menus, etc. */
const DraugiemLvBrandIcon = (props: BrandIconProps) => <BrandIcon slug="draugiemdotlv" {...props} />

/** Dreamstime mark — compose with Select, Button, menus, etc. */
const DreamstimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dreamstime" {...props} />

/** Dribbble mark — compose with Select, Button, menus, etc. */
const DribbbleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dribbble" {...props} />

/** Drizzle mark — compose with Select, Button, menus, etc. */
const DrizzleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="drizzle" {...props} />

/** Drone mark — compose with Select, Button, menus, etc. */
const DroneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="drone" {...props} />

/** Drooble mark — compose with Select, Button, menus, etc. */
const DroobleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="drooble" {...props} />

/** Dropbox mark — compose with Select, Button, menus, etc. */
const DropboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dropbox" {...props} />

/** Drupal mark — compose with Select, Button, menus, etc. */
const DrupalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="drupal" {...props} />

/** DS Automobiles mark — compose with Select, Button, menus, etc. */
const DSAutomobilesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dsautomobiles" {...props} />

/** DTS mark — compose with Select, Button, menus, etc. */
const DTSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dts" {...props} />

/** DTube mark — compose with Select, Button, menus, etc. */
const DTubeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dtube" {...props} />

/** Ducati mark — compose with Select, Button, menus, etc. */
const DucatiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ducati" {...props} />

/** DuckDB mark — compose with Select, Button, menus, etc. */
const DuckDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="duckdb" {...props} />

/** DuckDuckGo mark — compose with Select, Button, menus, etc. */
const DuckDuckGoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="duckduckgo" {...props} />

/** Dungeons & Dragons mark — compose with Select, Button, menus, etc. */
const DungeonsDragonsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dungeonsanddragons" {...props} />

/** Dunked mark — compose with Select, Button, menus, etc. */
const DunkedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dunked" {...props} />

/** Dunzo mark — compose with Select, Button, menus, etc. */
const DunzoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dunzo" {...props} />

/** Duolingo mark — compose with Select, Button, menus, etc. */
const DuolingoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="duolingo" {...props} />

/** Duplicati mark — compose with Select, Button, menus, etc. */
const DuplicatiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="duplicati" {...props} />

/** DVC mark — compose with Select, Button, menus, etc. */
const DVCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dvc" {...props} />

/** dwm mark — compose with Select, Button, menus, etc. */
const DwmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dwm" {...props} />

/** Dynatrace mark — compose with Select, Button, menus, etc. */
const DynatraceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dynatrace" {...props} />

/** E.Leclerc mark — compose with Select, Button, menus, etc. */
const ELeclercBrandIcon = (props: BrandIconProps) => <BrandIcon slug="edotleclerc" {...props} />

/** E3 mark — compose with Select, Button, menus, etc. */
const E3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="e3" {...props} />

/** EA mark — compose with Select, Button, menus, etc. */
const EABrandIcon = (props: BrandIconProps) => <BrandIcon slug="ea" {...props} />

/** EAC mark — compose with Select, Button, menus, etc. */
const EACBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eac" {...props} />

/** Eagle mark — compose with Select, Button, menus, etc. */
const EagleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eagle" {...props} />

/** EasyEDA mark — compose with Select, Button, menus, etc. */
const EasyEDABrandIcon = (props: BrandIconProps) => <BrandIcon slug="easyeda" {...props} />

/** easyJet mark — compose with Select, Button, menus, etc. */
const EasyJetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="easyjet" {...props} />

/** eBay mark — compose with Select, Button, menus, etc. */
const EBayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ebay" {...props} />

/** EBOX mark — compose with Select, Button, menus, etc. */
const EBOXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ebox" {...props} />

/** Eclipse Adoptium mark — compose with Select, Button, menus, etc. */
const EclipseAdoptiumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eclipseadoptium" {...props} />

/** Eclipse Che mark — compose with Select, Button, menus, etc. */
const EclipseCheBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eclipseche" {...props} />

/** Eclipse IDE mark — compose with Select, Button, menus, etc. */
const EclipseIDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eclipseide" {...props} />

/** Eclipse Jetty mark — compose with Select, Button, menus, etc. */
const EclipseJettyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eclipsejetty" {...props} />

/** Eclipse Mosquitto mark — compose with Select, Button, menus, etc. */
const EclipseMosquittoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eclipsemosquitto" {...props} />

/** Eclipse Vert.x mark — compose with Select, Button, menus, etc. */
const EclipseVertXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eclipsevertdotx" {...props} />

/** Ecosia mark — compose with Select, Button, menus, etc. */
const EcosiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ecosia" {...props} />

/** Ecovacs mark — compose with Select, Button, menus, etc. */
const EcovacsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ecovacs" {...props} />

/** EDEKA mark — compose with Select, Button, menus, etc. */
const EdekaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="edeka" {...props} />

/** Edge Impulse mark — compose with Select, Button, menus, etc. */
const EdgeImpulseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="edgeimpulse" {...props} />

/** EditorConfig mark — compose with Select, Button, menus, etc. */
const EditorConfigBrandIcon = (props: BrandIconProps) => <BrandIcon slug="editorconfig" {...props} />

/** Educative mark — compose with Select, Button, menus, etc. */
const EducativeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="educative" {...props} />

/** edX mark — compose with Select, Button, menus, etc. */
const EdXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="edx" {...props} />

/** Effect mark — compose with Select, Button, menus, etc. */
const EffectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="effect" {...props} />

/** egghead mark — compose with Select, Button, menus, etc. */
const EggheadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="egghead" {...props} />

/** Egnyte mark — compose with Select, Button, menus, etc. */
const EgnyteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="egnyte" {...props} />

/** Eight mark — compose with Select, Button, menus, etc. */
const EightBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eight" {...props} />

/** Eight Sleep mark — compose with Select, Button, menus, etc. */
const EightSleepBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eightsleep" {...props} />

/** EJS mark — compose with Select, Button, menus, etc. */
const EJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ejs" {...props} />

/** Elastic mark — compose with Select, Button, menus, etc. */
const ElasticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elastic" {...props} />

/** Elastic Cloud mark — compose with Select, Button, menus, etc. */
const ElasticCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elasticcloud" {...props} />

/** Elastic Stack mark — compose with Select, Button, menus, etc. */
const ElasticStackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elasticstack" {...props} />

/** Elasticsearch mark — compose with Select, Button, menus, etc. */
const ElasticsearchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elasticsearch" {...props} />

/** Elavon mark — compose with Select, Button, menus, etc. */
const ElavonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elavon" {...props} />

/** Electron mark — compose with Select, Button, menus, etc. */
const ElectronBrandIcon = (props: BrandIconProps) => <BrandIcon slug="electron" {...props} />

/** Electron Fiddle mark — compose with Select, Button, menus, etc. */
const ElectronFiddleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="electronfiddle" {...props} />

/** electron-builder mark — compose with Select, Button, menus, etc. */
const ElectronBuilderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="electronbuilder" {...props} />

/** Elegoo mark — compose with Select, Button, menus, etc. */
const ElegooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elegoo" {...props} />

/** Element mark — compose with Select, Button, menus, etc. */
const ElementBrandIcon = (props: BrandIconProps) => <BrandIcon slug="element" {...props} />

/** elementary mark — compose with Select, Button, menus, etc. */
const ElementaryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elementary" {...props} />

/** Elementor mark — compose with Select, Button, menus, etc. */
const ElementorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elementor" {...props} />

/** ElevenLabs mark — compose with Select, Button, menus, etc. */
const ElevenLabsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elevenlabs" {...props} />

/** Eleventy mark — compose with Select, Button, menus, etc. */
const EleventyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eleventy" {...props} />

/** Elgato mark — compose with Select, Button, menus, etc. */
const ElgatoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elgato" {...props} />

/** Elixir mark — compose with Select, Button, menus, etc. */
const ElixirBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elixir" {...props} />

/** Elk mark — compose with Select, Button, menus, etc. */
const ElkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elk" {...props} />

/** Elm mark — compose with Select, Button, menus, etc. */
const ElmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elm" {...props} />

/** Elsevier mark — compose with Select, Button, menus, etc. */
const ElsevierBrandIcon = (props: BrandIconProps) => <BrandIcon slug="elsevier" {...props} />

/** Embarcadero mark — compose with Select, Button, menus, etc. */
const EmbarcaderoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="embarcadero" {...props} />

/** Embark mark — compose with Select, Button, menus, etc. */
const EmbarkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="embark" {...props} />

/** Ember.js mark — compose with Select, Button, menus, etc. */
const EmberJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="emberdotjs" {...props} />

/** Emby mark — compose with Select, Button, menus, etc. */
const EmbyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="emby" {...props} />

/** Emirates mark — compose with Select, Button, menus, etc. */
const EmiratesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="emirates" {...props} />

/** Emlakjet mark — compose with Select, Button, menus, etc. */
const EmlakjetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="emlakjet" {...props} />

/** EndeavourOS mark — compose with Select, Button, menus, etc. */
const EndeavourOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="endeavouros" {...props} />

/** Enpass mark — compose with Select, Button, menus, etc. */
const EnpassBrandIcon = (props: BrandIconProps) => <BrandIcon slug="enpass" {...props} />

/** ENS mark — compose with Select, Button, menus, etc. */
const ENSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ens" {...props} />

/** Ente mark — compose with Select, Button, menus, etc. */
const EnteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ente" {...props} />

/** EnterpriseDB mark — compose with Select, Button, menus, etc. */
const EnterpriseDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="enterprisedb" {...props} />

/** Envato mark — compose with Select, Button, menus, etc. */
const EnvatoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="envato" {...props} />

/** Envoy Proxy mark — compose with Select, Button, menus, etc. */
const EnvoyProxyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="envoyproxy" {...props} />

/** EPEL mark — compose with Select, Button, menus, etc. */
const EPELBrandIcon = (props: BrandIconProps) => <BrandIcon slug="epel" {...props} />

/** Epic Games mark — compose with Select, Button, menus, etc. */
const EpicGamesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="epicgames" {...props} />

/** Epson mark — compose with Select, Button, menus, etc. */
const EpsonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="epson" {...props} />

/** Equinix Metal mark — compose with Select, Button, menus, etc. */
const EquinixMetalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="equinixmetal" {...props} />

/** Eraser mark — compose with Select, Button, menus, etc. */
const EraserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eraser" {...props} />

/** Ericsson mark — compose with Select, Button, menus, etc. */
const EricssonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ericsson" {...props} />

/** Erlang mark — compose with Select, Button, menus, etc. */
const ErlangBrandIcon = (props: BrandIconProps) => <BrandIcon slug="erlang" {...props} />

/** ERPNext mark — compose with Select, Button, menus, etc. */
const ERPNextBrandIcon = (props: BrandIconProps) => <BrandIcon slug="erpnext" {...props} />

/** esbuild mark — compose with Select, Button, menus, etc. */
const EsbuildBrandIcon = (props: BrandIconProps) => <BrandIcon slug="esbuild" {...props} />

/** ESEA mark — compose with Select, Button, menus, etc. */
const ESEABrandIcon = (props: BrandIconProps) => <BrandIcon slug="esea" {...props} />

/** ESLGaming mark — compose with Select, Button, menus, etc. */
const ESLGamingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eslgaming" {...props} />

/** ESLint mark — compose with Select, Button, menus, etc. */
const ESLintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eslint" {...props} />

/** Esoteric Software mark — compose with Select, Button, menus, etc. */
const EsotericSoftwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="esotericsoftware" {...props} />

/** ESPHome mark — compose with Select, Button, menus, etc. */
const ESPHomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="esphome" {...props} />

/** Espressif mark — compose with Select, Button, menus, etc. */
const EspressifBrandIcon = (props: BrandIconProps) => <BrandIcon slug="espressif" {...props} />

/** ESRI mark — compose with Select, Button, menus, etc. */
const ESRIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="esri" {...props} />

/** etcd mark — compose with Select, Button, menus, etc. */
const EtcdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="etcd" {...props} />

/** Ethereum mark — compose with Select, Button, menus, etc. */
const EthereumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ethereum" {...props} />

/** Ethers mark — compose with Select, Button, menus, etc. */
const EthersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ethers" {...props} />

/** Ethiopian Airlines mark — compose with Select, Button, menus, etc. */
const EthiopianAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ethiopianairlines" {...props} />

/** Etihad Airways mark — compose with Select, Button, menus, etc. */
const EtihadAirwaysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="etihadairways" {...props} />

/** Etsy mark — compose with Select, Button, menus, etc. */
const EtsyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="etsy" {...props} />

/** European Union mark — compose with Select, Button, menus, etc. */
const EuropeanUnionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="europeanunion" {...props} />

/** Event Store mark — compose with Select, Button, menus, etc. */
const EventStoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eventstore" {...props} />

/** Evernote mark — compose with Select, Button, menus, etc. */
const EvernoteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="evernote" {...props} />

/** Every.org mark — compose with Select, Button, menus, etc. */
const EveryOrgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="everydotorg" {...props} />

/** Excalidraw mark — compose with Select, Button, menus, etc. */
const ExcalidrawBrandIcon = (props: BrandIconProps) => <BrandIcon slug="excalidraw" {...props} />

/** Exercism mark — compose with Select, Button, menus, etc. */
const ExercismBrandIcon = (props: BrandIconProps) => <BrandIcon slug="exercism" {...props} />

/** Exordo mark — compose with Select, Button, menus, etc. */
const ExordoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="exordo" {...props} />

/** Exoscale mark — compose with Select, Button, menus, etc. */
const ExoscaleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="exoscale" {...props} />

/** Expedia mark — compose with Select, Button, menus, etc. */
const ExpediaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="expedia" {...props} />

/** Expensify mark — compose with Select, Button, menus, etc. */
const ExpensifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="expensify" {...props} />

/** Experts Exchange mark — compose with Select, Button, menus, etc. */
const ExpertsExchangeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="expertsexchange" {...props} />

/** Expo mark — compose with Select, Button, menus, etc. */
const ExpoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="expo" {...props} />

/** Express mark — compose with Select, Button, menus, etc. */
const ExpressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="express" {...props} />

/** Express.com mark — compose with Select, Button, menus, etc. */
const ExpressComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="expressdotcom" {...props} />

/** ExpressVPN mark — compose with Select, Button, menus, etc. */
const ExpressVPNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="expressvpn" {...props} />

/** EyeEm mark — compose with Select, Button, menus, etc. */
const EyeEmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="eyeem" {...props} />

/** F-Droid mark — compose with Select, Button, menus, etc. */
const FDroidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fdroid" {...props} />

/** F# mark — compose with Select, Button, menus, etc. */
const FBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fsharp" {...props} />

/** F1 mark — compose with Select, Button, menus, etc. */
const F1BrandIcon = (props: BrandIconProps) => <BrandIcon slug="f1" {...props} />

/** F5 mark — compose with Select, Button, menus, etc. */
const F5BrandIcon = (props: BrandIconProps) => <BrandIcon slug="f5" {...props} />

/** Facebook mark — compose with Select, Button, menus, etc. */
const FacebookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="facebook" {...props} />

/** Facebook Gaming mark — compose with Select, Button, menus, etc. */
const FacebookGamingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="facebookgaming" {...props} />

/** Facebook Live mark — compose with Select, Button, menus, etc. */
const FacebookLiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="facebooklive" {...props} />

/** FACEIT mark — compose with Select, Button, menus, etc. */
const FaceitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="faceit" {...props} />

/** Facepunch mark — compose with Select, Button, menus, etc. */
const FacepunchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="facepunch" {...props} />

/** Fairphone mark — compose with Select, Button, menus, etc. */
const FairphoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fairphone" {...props} />

/** Faker mark — compose with Select, Button, menus, etc. */
const FakerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="faker" {...props} />

/** Falco mark — compose with Select, Button, menus, etc. */
const FalcoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="falco" {...props} />

/** Falcon mark — compose with Select, Button, menus, etc. */
const FalconBrandIcon = (props: BrandIconProps) => <BrandIcon slug="falcon" {...props} />

/** FamPay mark — compose with Select, Button, menus, etc. */
const FamPayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fampay" {...props} />

/** Fandango mark — compose with Select, Button, menus, etc. */
const FandangoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fandango" {...props} />

/** Fandom mark — compose with Select, Button, menus, etc. */
const FandomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fandom" {...props} />

/** Fanfou mark — compose with Select, Button, menus, etc. */
const FanfouBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fanfou" {...props} />

/** Fantom mark — compose with Select, Button, menus, etc. */
const FantomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fantom" {...props} />

/** Farcaster mark — compose with Select, Button, menus, etc. */
const FarcasterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="farcaster" {...props} />

/** FareHarbor mark — compose with Select, Button, menus, etc. */
const FareHarborBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fareharbor" {...props} />

/** FARFETCH mark — compose with Select, Button, menus, etc. */
const FarfetchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="farfetch" {...props} />

/** FastAPI mark — compose with Select, Button, menus, etc. */
const FastAPIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fastapi" {...props} />

/** Fastify mark — compose with Select, Button, menus, etc. */
const FastifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fastify" {...props} />

/** Fastlane mark — compose with Select, Button, menus, etc. */
const FastlaneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fastlane" {...props} />

/** Fastly mark — compose with Select, Button, menus, etc. */
const FastlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fastly" {...props} />

/** Fathom mark — compose with Select, Button, menus, etc. */
const FathomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fathom" {...props} />

/** Fauna mark — compose with Select, Button, menus, etc. */
const FaunaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fauna" {...props} />

/** Favro mark — compose with Select, Button, menus, etc. */
const FavroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="favro" {...props} />

/** Fawry mark — compose with Select, Button, menus, etc. */
const FawryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fawry" {...props} />

/** FCC mark — compose with Select, Button, menus, etc. */
const FCCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fcc" {...props} />

/** FedEx mark — compose with Select, Button, menus, etc. */
const FedExBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fedex" {...props} />

/** Fedora mark — compose with Select, Button, menus, etc. */
const FedoraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fedora" {...props} />

/** Feedly mark — compose with Select, Button, menus, etc. */
const FeedlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="feedly" {...props} />

/** Ferrari mark — compose with Select, Button, menus, etc. */
const FerrariBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ferrari" {...props} />

/** Ferrari N.V. mark — compose with Select, Button, menus, etc. */
const FerrariNVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ferrarinv" {...props} />

/** FerretDB mark — compose with Select, Button, menus, etc. */
const FerretDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ferretdb" {...props} />

/** FFmpeg mark — compose with Select, Button, menus, etc. */
const FFmpegBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ffmpeg" {...props} />

/** Fi mark — compose with Select, Button, menus, etc. */
const FiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fi" {...props} />

/** Fiat mark — compose with Select, Button, menus, etc. */
const FiatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fiat" {...props} />

/** Fido Alliance mark — compose with Select, Button, menus, etc. */
const FidoAllianceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fidoalliance" {...props} />

/** FIFA mark — compose with Select, Button, menus, etc. */
const FIFABrandIcon = (props: BrandIconProps) => <BrandIcon slug="fifa" {...props} />

/** Fig mark — compose with Select, Button, menus, etc. */
const FigBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fig" {...props} />

/** Figma mark — compose with Select, Button, menus, etc. */
const FigmaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="figma" {...props} />

/** figshare mark — compose with Select, Button, menus, etc. */
const FigshareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="figshare" {...props} />

/** Fila mark — compose with Select, Button, menus, etc. */
const FilaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fila" {...props} />

/** Filament mark — compose with Select, Button, menus, etc. */
const FilamentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="filament" {...props} />

/** File.io mark — compose with Select, Button, menus, etc. */
const FileIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="filedotio" {...props} />

/** Filen mark — compose with Select, Button, menus, etc. */
const FilenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="filen" {...props} />

/** Files mark — compose with Select, Button, menus, etc. */
const FilesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="files" {...props} />

/** FileZilla mark — compose with Select, Button, menus, etc. */
const FileZillaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="filezilla" {...props} />

/** Fillout mark — compose with Select, Button, menus, etc. */
const FilloutBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fillout" {...props} />

/** Fineco mark — compose with Select, Button, menus, etc. */
const FinecoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fineco" {...props} />

/** Fing mark — compose with Select, Button, menus, etc. */
const FingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fing" {...props} />

/** Firebase mark — compose with Select, Button, menus, etc. */
const FirebaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="firebase" {...props} />

/** Firefish mark — compose with Select, Button, menus, etc. */
const FirefishBrandIcon = (props: BrandIconProps) => <BrandIcon slug="firefish" {...props} />

/** Firefly III mark — compose with Select, Button, menus, etc. */
const FireflyIIIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fireflyiii" {...props} />

/** Firefox mark — compose with Select, Button, menus, etc. */
const FirefoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="firefox" {...props} />

/** Firefox Browser mark — compose with Select, Button, menus, etc. */
const FirefoxBrowserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="firefoxbrowser" {...props} />

/** Fireship mark — compose with Select, Button, menus, etc. */
const FireshipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fireship" {...props} />

/** Firewalla mark — compose with Select, Button, menus, etc. */
const FirewallaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="firewalla" {...props} />

/** FIRST mark — compose with Select, Button, menus, etc. */
const FirstBrandIcon = (props: BrandIconProps) => <BrandIcon slug="first" {...props} />

/** Fish Audio mark — compose with Select, Button, menus, etc. */
const FishAudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fishaudio" {...props} />

/** fish shell mark — compose with Select, Button, menus, etc. */
const FishShellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fishshell" {...props} />

/** Fitbit mark — compose with Select, Button, menus, etc. */
const FitbitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fitbit" {...props} />

/** FiveM mark — compose with Select, Button, menus, etc. */
const FiveMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fivem" {...props} />

/** Fiverr mark — compose with Select, Button, menus, etc. */
const FiverrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fiverr" {...props} />

/** Fizz mark — compose with Select, Button, menus, etc. */
const FizzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fizz" {...props} />

/** Flashforge mark — compose with Select, Button, menus, etc. */
const FlashforgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flashforge" {...props} />

/** Flask mark — compose with Select, Button, menus, etc. */
const FlaskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flask" {...props} />

/** Flat mark — compose with Select, Button, menus, etc. */
const FlatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flat" {...props} />

/** Flathub mark — compose with Select, Button, menus, etc. */
const FlathubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flathub" {...props} />

/** Flatpak mark — compose with Select, Button, menus, etc. */
const FlatpakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flatpak" {...props} />

/** Flickr mark — compose with Select, Button, menus, etc. */
const FlickrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flickr" {...props} />

/** Flightaware mark — compose with Select, Button, menus, etc. */
const FlightawareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flightaware" {...props} />

/** Flipboard mark — compose with Select, Button, menus, etc. */
const FlipboardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flipboard" {...props} />

/** Floatplane mark — compose with Select, Button, menus, etc. */
const FloatplaneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="floatplane" {...props} />

/** Flood mark — compose with Select, Button, menus, etc. */
const FloodBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flood" {...props} />

/** Floorp mark — compose with Select, Button, menus, etc. */
const FloorpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="floorp" {...props} />

/** Flower mark — compose with Select, Button, menus, etc. */
const FlowerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flower" {...props} />

/** Fluent Bit mark — compose with Select, Button, menus, etc. */
const FluentBitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fluentbit" {...props} />

/** Fluentd mark — compose with Select, Button, menus, etc. */
const FluentdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fluentd" {...props} />

/** Fluke mark — compose with Select, Button, menus, etc. */
const FlukeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fluke" {...props} />

/** Flutter mark — compose with Select, Button, menus, etc. */
const FlutterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flutter" {...props} />

/** Flux mark — compose with Select, Button, menus, etc. */
const FluxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flux" {...props} />

/** Fluxer mark — compose with Select, Button, menus, etc. */
const FluxerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fluxer" {...props} />

/** Fly.io mark — compose with Select, Button, menus, etc. */
const FlyIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flydotio" {...props} />

/** Flyway mark — compose with Select, Button, menus, etc. */
const FlywayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="flyway" {...props} />

/** FMOD mark — compose with Select, Button, menus, etc. */
const FMODBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fmod" {...props} />

/** Fnac mark — compose with Select, Button, menus, etc. */
const FnacBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fnac" {...props} />

/** Folium mark — compose with Select, Button, menus, etc. */
const FoliumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="folium" {...props} />

/** Folo mark — compose with Select, Button, menus, etc. */
const FoloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="folo" {...props} />

/** Fonoma mark — compose with Select, Button, menus, etc. */
const FonomaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fonoma" {...props} />

/** Font Awesome mark — compose with Select, Button, menus, etc. */
const FontAwesomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fontawesome" {...props} />

/** FontBase mark — compose with Select, Button, menus, etc. */
const FontBaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fontbase" {...props} />

/** FontForge mark — compose with Select, Button, menus, etc. */
const FontForgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fontforge" {...props} />

/** foobar2000 mark — compose with Select, Button, menus, etc. */
const Foobar2000BrandIcon = (props: BrandIconProps) => <BrandIcon slug="foobar2000" {...props} />

/** foodpanda mark — compose with Select, Button, menus, etc. */
const FoodpandaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="foodpanda" {...props} />

/** Ford mark — compose with Select, Button, menus, etc. */
const FordBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ford" {...props} />

/** Forgejo mark — compose with Select, Button, menus, etc. */
const ForgejoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="forgejo" {...props} />

/** Formbricks mark — compose with Select, Button, menus, etc. */
const FormbricksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="formbricks" {...props} />

/** Formik mark — compose with Select, Button, menus, etc. */
const FormikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="formik" {...props} />

/** Formspree mark — compose with Select, Button, menus, etc. */
const FormspreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="formspree" {...props} />

/** Formstack mark — compose with Select, Button, menus, etc. */
const FormstackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="formstack" {...props} />

/** Fortinet mark — compose with Select, Button, menus, etc. */
const FortinetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fortinet" {...props} />

/** Fortnite mark — compose with Select, Button, menus, etc. */
const FortniteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fortnite" {...props} />

/** Fortran mark — compose with Select, Button, menus, etc. */
const FortranBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fortran" {...props} />

/** Fossa mark — compose with Select, Button, menus, etc. */
const FossaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fossa" {...props} />

/** Fossil SCM mark — compose with Select, Button, menus, etc. */
const FossilSCMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fossilscm" {...props} />

/** Foundry Virtual Tabletop mark — compose with Select, Button, menus, etc. */
const FoundryVirtualTabletopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="foundryvirtualtabletop" {...props} />

/** Foursquare mark — compose with Select, Button, menus, etc. */
const FoursquareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="foursquare" {...props} />

/** FOX mark — compose with Select, Button, menus, etc. */
const FOXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fox" {...props} />

/** Foxtel mark — compose with Select, Button, menus, etc. */
const FoxtelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="foxtel" {...props} />

/** Fozzy mark — compose with Select, Button, menus, etc. */
const FozzyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fozzy" {...props} />

/** Framer mark — compose with Select, Button, menus, etc. */
const FramerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="framer" {...props} />

/** Framework mark — compose with Select, Button, menus, etc. */
const FrameworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="framework" {...props} />

/** Framework7 mark — compose with Select, Button, menus, etc. */
const Framework7BrandIcon = (props: BrandIconProps) => <BrandIcon slug="framework7" {...props} />

/** Franprix mark — compose with Select, Button, menus, etc. */
const FranprixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="franprix" {...props} />

/** Frappe mark — compose with Select, Button, menus, etc. */
const FrappeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="frappe" {...props} />

/** Fraunhofer-Gesellschaft mark — compose with Select, Button, menus, etc. */
const FraunhoferGesellschaftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fraunhofergesellschaft" {...props} />

/** FreeBSD mark — compose with Select, Button, menus, etc. */
const FreeBSDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freebsd" {...props} />

/** FreeCAD mark — compose with Select, Button, menus, etc. */
const FreeCADBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freecad" {...props} />

/** freeCodeCamp mark — compose with Select, Button, menus, etc. */
const FreeCodeCampBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freecodecamp" {...props} />

/** freedesktop.org mark — compose with Select, Button, menus, etc. */
const FreedesktopOrgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freedesktopdotorg" {...props} />

/** Freelancer mark — compose with Select, Button, menus, etc. */
const FreelancerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freelancer" {...props} />

/** freelancermap mark — compose with Select, Button, menus, etc. */
const FreelancermapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freelancermap" {...props} />

/** FreeNAS mark — compose with Select, Button, menus, etc. */
const FreeNASBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freenas" {...props} />

/** freenet mark — compose with Select, Button, menus, etc. */
const FreenetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freenet" {...props} />

/** Freepik mark — compose with Select, Button, menus, etc. */
const FreepikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freepik" {...props} />

/** FreeTube mark — compose with Select, Button, menus, etc. */
const FreeTubeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freetube" {...props} />

/** Fresh mark — compose with Select, Button, menus, etc. */
const FreshBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fresh" {...props} />

/** FreshRSS mark — compose with Select, Button, menus, etc. */
const FreshRSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="freshrss" {...props} />

/** Frigate mark — compose with Select, Button, menus, etc. */
const FrigateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="frigate" {...props} />

/** FRITZ! mark — compose with Select, Button, menus, etc. */
const FritzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fritz" {...props} />

/** Frontend Mentor mark — compose with Select, Button, menus, etc. */
const FrontendMentorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="frontendmentor" {...props} />

/** Frontify mark — compose with Select, Button, menus, etc. */
const FrontifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="frontify" {...props} />

/** Fubo mark — compose with Select, Button, menus, etc. */
const FuboBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fubo" {...props} />

/** Fueler mark — compose with Select, Button, menus, etc. */
const FuelerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fueler" {...props} />

/** Fuga Cloud mark — compose with Select, Button, menus, etc. */
const FugaCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fugacloud" {...props} />

/** Fujifilm mark — compose with Select, Button, menus, etc. */
const FujifilmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fujifilm" {...props} />

/** Fujitsu mark — compose with Select, Button, menus, etc. */
const FujitsuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fujitsu" {...props} />

/** Fur Affinity mark — compose with Select, Button, menus, etc. */
const FurAffinityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="furaffinity" {...props} />

/** Furry Network mark — compose with Select, Button, menus, etc. */
const FurryNetworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="furrynetwork" {...props} />

/** FusionAuth mark — compose with Select, Button, menus, etc. */
const FusionAuthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fusionauth" {...props} />

/** FutureLearn mark — compose with Select, Button, menus, etc. */
const FutureLearnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="futurelearn" {...props} />

/** Fyle mark — compose with Select, Button, menus, etc. */
const FyleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="fyle" {...props} />

/** G2 mark — compose with Select, Button, menus, etc. */
const G2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="g2" {...props} />

/** G2A mark — compose with Select, Button, menus, etc. */
const G2ABrandIcon = (props: BrandIconProps) => <BrandIcon slug="g2a" {...props} />

/** G2G mark — compose with Select, Button, menus, etc. */
const G2GBrandIcon = (props: BrandIconProps) => <BrandIcon slug="g2g" {...props} />

/** Galaxus mark — compose with Select, Button, menus, etc. */
const GalaxusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="galaxus" {...props} />

/** Game Developer mark — compose with Select, Button, menus, etc. */
const GameDeveloperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gamedeveloper" {...props} />

/** Game Jolt mark — compose with Select, Button, menus, etc. */
const GameJoltBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gamejolt" {...props} />

/** Game Science mark — compose with Select, Button, menus, etc. */
const GameScienceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gamescience" {...props} />

/** GameBanana mark — compose with Select, Button, menus, etc. */
const GameBananaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gamebanana" {...props} />

/** Gameloft mark — compose with Select, Button, menus, etc. */
const GameloftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gameloft" {...props} />

/** Gamemaker mark — compose with Select, Button, menus, etc. */
const GamemakerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gamemaker" {...props} />

/** Gandi mark — compose with Select, Button, menus, etc. */
const GandiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gandi" {...props} />

/** Garmin mark — compose with Select, Button, menus, etc. */
const GarminBrandIcon = (props: BrandIconProps) => <BrandIcon slug="garmin" {...props} />

/** Garuda Linux mark — compose with Select, Button, menus, etc. */
const GarudaLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="garudalinux" {...props} />

/** Gatling mark — compose with Select, Button, menus, etc. */
const GatlingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gatling" {...props} />

/** Gatsby mark — compose with Select, Button, menus, etc. */
const GatsbyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gatsby" {...props} />

/** Gcore mark — compose with Select, Button, menus, etc. */
const GcoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gcore" {...props} />

/** GDAL mark — compose with Select, Button, menus, etc. */
const GDALBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gdal" {...props} />

/** GeeksforGeeks mark — compose with Select, Button, menus, etc. */
const GeeksforGeeksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="geeksforgeeks" {...props} />

/** General Electric mark — compose with Select, Button, menus, etc. */
const GeneralElectricBrandIcon = (props: BrandIconProps) => <BrandIcon slug="generalelectric" {...props} />

/** General Motors mark — compose with Select, Button, menus, etc. */
const GeneralMotorsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="generalmotors" {...props} />

/** Genius mark — compose with Select, Button, menus, etc. */
const GeniusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="genius" {...props} />

/** Gentoo mark — compose with Select, Button, menus, etc. */
const GentooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gentoo" {...props} />

/** Geocaching mark — compose with Select, Button, menus, etc. */
const GeocachingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="geocaching" {...props} />

/** Geode mark — compose with Select, Button, menus, etc. */
const GeodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="geode" {...props} />

/** GeoPandas mark — compose with Select, Button, menus, etc. */
const GeoPandasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="geopandas" {...props} />

/** Gerrit mark — compose with Select, Button, menus, etc. */
const GerritBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gerrit" {...props} />

/** GetX mark — compose with Select, Button, menus, etc. */
const GetXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="getx" {...props} />

/** Ghost mark — compose with Select, Button, menus, etc. */
const GhostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ghost" {...props} />

/** Ghostery mark — compose with Select, Button, menus, etc. */
const GhosteryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ghostery" {...props} />

/** Ghostfolio mark — compose with Select, Button, menus, etc. */
const GhostfolioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ghostfolio" {...props} />

/** Ghostty mark — compose with Select, Button, menus, etc. */
const GhosttyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ghostty" {...props} />

/** GIMP mark — compose with Select, Button, menus, etc. */
const GIMPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gimp" {...props} />

/** Gin mark — compose with Select, Button, menus, etc. */
const GinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gin" {...props} />

/** GIPHY mark — compose with Select, Button, menus, etc. */
const GiphyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="giphy" {...props} />

/** Git mark — compose with Select, Button, menus, etc. */
const GitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="git" {...props} />

/** Git Extensions mark — compose with Select, Button, menus, etc. */
const GitExtensionsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitextensions" {...props} />

/** Git for Windows mark — compose with Select, Button, menus, etc. */
const GitForWindowsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitforwindows" {...props} />

/** Git LFS mark — compose with Select, Button, menus, etc. */
const GitLFSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitlfs" {...props} />

/** GitBook mark — compose with Select, Button, menus, etc. */
const GitBookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitbook" {...props} />

/** GitCode mark — compose with Select, Button, menus, etc. */
const GitCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitcode" {...props} />

/** Gitconnected mark — compose with Select, Button, menus, etc. */
const GitconnectedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitconnected" {...props} />

/** Gitea mark — compose with Select, Button, menus, etc. */
const GiteaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitea" {...props} />

/** Gitee mark — compose with Select, Button, menus, etc. */
const GiteeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitee" {...props} />

/** GitHub mark — compose with Select, Button, menus, etc. */
const GitHubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="github" {...props} />

/** GitHub Actions mark — compose with Select, Button, menus, etc. */
const GitHubActionsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="githubactions" {...props} />

/** GitHub Copilot mark — compose with Select, Button, menus, etc. */
const GitHubCopilotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="githubcopilot" {...props} />

/** GitHub Pages mark — compose with Select, Button, menus, etc. */
const GitHubPagesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="githubpages" {...props} />

/** GitHub Sponsors mark — compose with Select, Button, menus, etc. */
const GitHubSponsorsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="githubsponsors" {...props} />

/** gitignore.io mark — compose with Select, Button, menus, etc. */
const GitignoreIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitignoredotio" {...props} />

/** GitKraken mark — compose with Select, Button, menus, etc. */
const GitKrakenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitkraken" {...props} />

/** GitLab mark — compose with Select, Button, menus, etc. */
const GitLabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitlab" {...props} />

/** Gitpod mark — compose with Select, Button, menus, etc. */
const GitpodBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitpod" {...props} />

/** Gitter mark — compose with Select, Button, menus, etc. */
const GitterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gitter" {...props} />

/** GL.iNet mark — compose with Select, Button, menus, etc. */
const GLINetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gldotinet" {...props} />

/** Glance mark — compose with Select, Button, menus, etc. */
const GlanceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="glance" {...props} />

/** Glass mark — compose with Select, Button, menus, etc. */
const GlassBrandIcon = (props: BrandIconProps) => <BrandIcon slug="glass" {...props} />

/** Glassdoor mark — compose with Select, Button, menus, etc. */
const GlassdoorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="glassdoor" {...props} />

/** Gleam mark — compose with Select, Button, menus, etc. */
const GleamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gleam" {...props} />

/** Glide mark — compose with Select, Button, menus, etc. */
const GlideBrandIcon = (props: BrandIconProps) => <BrandIcon slug="glide" {...props} />

/** Glitch mark — compose with Select, Button, menus, etc. */
const GlitchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="glitch" {...props} />

/** Globus mark — compose with Select, Button, menus, etc. */
const GlobusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="globus" {...props} />

/** Glovo mark — compose with Select, Button, menus, etc. */
const GlovoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="glovo" {...props} />

/** glTF mark — compose with Select, Button, menus, etc. */
const GlTFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gltf" {...props} />

/** Gmail mark — compose with Select, Button, menus, etc. */
const GmailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gmail" {...props} />

/** GMX mark — compose with Select, Button, menus, etc. */
const GMXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gmx" {...props} />

/** GNOME mark — compose with Select, Button, menus, etc. */
const GnomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnome" {...props} />

/** GNOME Terminal mark — compose with Select, Button, menus, etc. */
const GnomeTerminalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnometerminal" {...props} />

/** GNU mark — compose with Select, Button, menus, etc. */
const GNUBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnu" {...props} />

/** GNU Bash mark — compose with Select, Button, menus, etc. */
const GNUBashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnubash" {...props} />

/** GNU Emacs mark — compose with Select, Button, menus, etc. */
const GNUEmacsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnuemacs" {...props} />

/** GNU IceCat mark — compose with Select, Button, menus, etc. */
const GNUIceCatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnuicecat" {...props} />

/** GNU Privacy Guard mark — compose with Select, Button, menus, etc. */
const GNUPrivacyGuardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnuprivacyguard" {...props} />

/** GNU social mark — compose with Select, Button, menus, etc. */
const GNUSocialBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gnusocial" {...props} />

/** Go mark — compose with Select, Button, menus, etc. */
const GoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="go" {...props} />

/** GoCD mark — compose with Select, Button, menus, etc. */
const GoCDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gocd" {...props} />

/** GoDaddy mark — compose with Select, Button, menus, etc. */
const GoDaddyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="godaddy" {...props} />

/** Godot Engine mark — compose with Select, Button, menus, etc. */
const GodotEngineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="godotengine" {...props} />

/** Godox mark — compose with Select, Button, menus, etc. */
const GodoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="godox" {...props} />

/** GoFundMe mark — compose with Select, Button, menus, etc. */
const GoFundMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gofundme" {...props} />

/** GOG.com mark — compose with Select, Button, menus, etc. */
const GOGComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gogdotcom" {...props} />

/** Gojek mark — compose with Select, Button, menus, etc. */
const GojekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gojek" {...props} />

/** GoLand mark — compose with Select, Button, menus, etc. */
const GoLandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="goland" {...props} />

/** Goldman Sachs mark — compose with Select, Button, menus, etc. */
const GoldmanSachsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="goldmansachs" {...props} />

/** Goodreads mark — compose with Select, Button, menus, etc. */
const GoodreadsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="goodreads" {...props} />

/** Google mark — compose with Select, Button, menus, etc. */
const GoogleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="google" {...props} />

/** Google AdMob mark — compose with Select, Button, menus, etc. */
const GoogleAdMobBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleadmob" {...props} />

/** Google Ads mark — compose with Select, Button, menus, etc. */
const GoogleAdsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleads" {...props} />

/** Google AdSense mark — compose with Select, Button, menus, etc. */
const GoogleAdSenseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleadsense" {...props} />

/** Google Analytics mark — compose with Select, Button, menus, etc. */
const GoogleAnalyticsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleanalytics" {...props} />

/** Google Apps Script mark — compose with Select, Button, menus, etc. */
const GoogleAppsScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleappsscript" {...props} />

/** Google Assistant mark — compose with Select, Button, menus, etc. */
const GoogleAssistantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleassistant" {...props} />

/** Google Authenticator mark — compose with Select, Button, menus, etc. */
const GoogleAuthenticatorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleauthenticator" {...props} />

/** Google BigQuery mark — compose with Select, Button, menus, etc. */
const GoogleBigQueryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlebigquery" {...props} />

/** Google Bigtable mark — compose with Select, Button, menus, etc. */
const GoogleBigtableBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlebigtable" {...props} />

/** Google Calendar mark — compose with Select, Button, menus, etc. */
const GoogleCalendarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecalendar" {...props} />

/** Google Campaign Manager 360 mark — compose with Select, Button, menus, etc. */
const GoogleCampaignManager360BrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecampaignmanager360" {...props} />

/** Google Cardboard mark — compose with Select, Button, menus, etc. */
const GoogleCardboardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecardboard" {...props} />

/** Google Cast mark — compose with Select, Button, menus, etc. */
const GoogleCastBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecast" {...props} />

/** Google Chat mark — compose with Select, Button, menus, etc. */
const GoogleChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlechat" {...props} />

/** Google Chrome mark — compose with Select, Button, menus, etc. */
const GoogleChromeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlechrome" {...props} />

/** Google Chronicle mark — compose with Select, Button, menus, etc. */
const GoogleChronicleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlechronicle" {...props} />

/** Google Classroom mark — compose with Select, Button, menus, etc. */
const GoogleClassroomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleclassroom" {...props} />

/** Google Cloud mark — compose with Select, Button, menus, etc. */
const GoogleCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecloud" {...props} />

/** Google Cloud Composer mark — compose with Select, Button, menus, etc. */
const GoogleCloudComposerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecloudcomposer" {...props} />

/** Google Cloud Spanner mark — compose with Select, Button, menus, etc. */
const GoogleCloudSpannerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecloudspanner" {...props} />

/** Google Cloud Storage mark — compose with Select, Button, menus, etc. */
const GoogleCloudStorageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecloudstorage" {...props} />

/** Google Colab mark — compose with Select, Button, menus, etc. */
const GoogleColabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecolab" {...props} />

/** Google Container Optimized OS mark — compose with Select, Button, menus, etc. */
const GoogleContainerOptimizedOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlecontaineroptimizedos" {...props} />

/** Google Dataflow mark — compose with Select, Button, menus, etc. */
const GoogleDataflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googledataflow" {...props} />

/** Google Dataproc mark — compose with Select, Button, menus, etc. */
const GoogleDataprocBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googledataproc" {...props} />

/** Google Display & Video 360 mark — compose with Select, Button, menus, etc. */
const GoogleDisplayVideo360BrandIcon = (props: BrandIconProps) => <BrandIcon slug="googledisplayandvideo360" {...props} />

/** Google Docs mark — compose with Select, Button, menus, etc. */
const GoogleDocsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googledocs" {...props} />

/** Google Drive mark — compose with Select, Button, menus, etc. */
const GoogleDriveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googledrive" {...props} />

/** Google Earth mark — compose with Select, Button, menus, etc. */
const GoogleEarthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleearth" {...props} />

/** Google Earth Engine mark — compose with Select, Button, menus, etc. */
const GoogleEarthEngineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleearthengine" {...props} />

/** Google Fonts mark — compose with Select, Button, menus, etc. */
const GoogleFontsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlefonts" {...props} />

/** Google Forms mark — compose with Select, Button, menus, etc. */
const GoogleFormsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleforms" {...props} />

/** Google Gemini mark — compose with Select, Button, menus, etc. */
const GoogleGeminiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlegemini" {...props} />

/** Google Home mark — compose with Select, Button, menus, etc. */
const GoogleHomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlehome" {...props} />

/** Google Jules mark — compose with Select, Button, menus, etc. */
const GoogleJulesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlejules" {...props} />

/** Google Keep mark — compose with Select, Button, menus, etc. */
const GoogleKeepBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlekeep" {...props} />

/** Google Lens mark — compose with Select, Button, menus, etc. */
const GoogleLensBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlelens" {...props} />

/** Google Maps mark — compose with Select, Button, menus, etc. */
const GoogleMapsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlemaps" {...props} />

/** Google Marketing Platform mark — compose with Select, Button, menus, etc. */
const GoogleMarketingPlatformBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlemarketingplatform" {...props} />

/** Google Meet mark — compose with Select, Button, menus, etc. */
const GoogleMeetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlemeet" {...props} />

/** Google Messages mark — compose with Select, Button, menus, etc. */
const GoogleMessagesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlemessages" {...props} />

/** Google Nearby mark — compose with Select, Button, menus, etc. */
const GoogleNearbyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlenearby" {...props} />

/** Google News mark — compose with Select, Button, menus, etc. */
const GoogleNewsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlenews" {...props} />

/** Google Pay mark — compose with Select, Button, menus, etc. */
const GooglePayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlepay" {...props} />

/** Google Photos mark — compose with Select, Button, menus, etc. */
const GooglePhotosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlephotos" {...props} />

/** Google Play mark — compose with Select, Button, menus, etc. */
const GooglePlayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleplay" {...props} />

/** Google Pub/Sub mark — compose with Select, Button, menus, etc. */
const GooglePubSubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlepubsub" {...props} />

/** Google Scholar mark — compose with Select, Button, menus, etc. */
const GoogleScholarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlescholar" {...props} />

/** Google Search Console mark — compose with Select, Button, menus, etc. */
const GoogleSearchConsoleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlesearchconsole" {...props} />

/** Google Sheets mark — compose with Select, Button, menus, etc. */
const GoogleSheetsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlesheets" {...props} />

/** Google Slides mark — compose with Select, Button, menus, etc. */
const GoogleSlidesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googleslides" {...props} />

/** Google Street View mark — compose with Select, Button, menus, etc. */
const GoogleStreetViewBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlestreetview" {...props} />

/** Google Summer of Code mark — compose with Select, Button, menus, etc. */
const GoogleSummerOfCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googlesummerofcode" {...props} />

/** Google Tag Manager mark — compose with Select, Button, menus, etc. */
const GoogleTagManagerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googletagmanager" {...props} />

/** Google Tasks mark — compose with Select, Button, menus, etc. */
const GoogleTasksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googletasks" {...props} />

/** Google Translate mark — compose with Select, Button, menus, etc. */
const GoogleTranslateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googletranslate" {...props} />

/** Google TV mark — compose with Select, Button, menus, etc. */
const GoogleTVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="googletv" {...props} />

/** GoToMeeting mark — compose with Select, Button, menus, etc. */
const GoToMeetingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gotomeeting" {...props} />

/** GPLv3 mark — compose with Select, Button, menus, etc. */
const GPLv3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="gplv3" {...props} />

/** Grab mark — compose with Select, Button, menus, etc. */
const GrabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grab" {...props} />

/** Gradio mark — compose with Select, Button, menus, etc. */
const GradioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gradio" {...props} />

/** Gradle mark — compose with Select, Button, menus, etc. */
const GradleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gradle" {...props} />

/** Gradle Play Publisher mark — compose with Select, Button, menus, etc. */
const GradlePlayPublisherBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gradleplaypublisher" {...props} />

/** Grafana mark — compose with Select, Button, menus, etc. */
const GrafanaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grafana" {...props} />

/** Grammarly mark — compose with Select, Button, menus, etc. */
const GrammarlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grammarly" {...props} />

/** Grand Frais mark — compose with Select, Button, menus, etc. */
const GrandFraisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grandfrais" {...props} />

/** GrapheneOS mark — compose with Select, Button, menus, etc. */
const GrapheneOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grapheneos" {...props} />

/** Graphite mark — compose with Select, Button, menus, etc. */
const GraphiteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="graphite" {...props} />

/** Graphite mark — compose with Select, Button, menus, etc. */
const GraphiteEditorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="graphite_editor" {...props} />

/** GraphQL mark — compose with Select, Button, menus, etc. */
const GraphQLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="graphql" {...props} />

/** Grav mark — compose with Select, Button, menus, etc. */
const GravBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grav" {...props} />

/** Gravatar mark — compose with Select, Button, menus, etc. */
const GravatarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gravatar" {...props} />

/** Graylog mark — compose with Select, Button, menus, etc. */
const GraylogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="graylog" {...props} />

/** Greasy Fork mark — compose with Select, Button, menus, etc. */
const GreasyForkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="greasyfork" {...props} />

/** Great Learning mark — compose with Select, Button, menus, etc. */
const GreatLearningBrandIcon = (props: BrandIconProps) => <BrandIcon slug="greatlearning" {...props} />

/** Greenhouse mark — compose with Select, Button, menus, etc. */
const GreenhouseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="greenhouse" {...props} />

/** GreenSock mark — compose with Select, Button, menus, etc. */
const GreenSockBrandIcon = (props: BrandIconProps) => <BrandIcon slug="greensock" {...props} />

/** GreptimeDB mark — compose with Select, Button, menus, etc. */
const GreptimeDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="greptimedb" {...props} />

/** Grid.ai mark — compose with Select, Button, menus, etc. */
const GridAiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="griddotai" {...props} />

/** Gridsome mark — compose with Select, Button, menus, etc. */
const GridsomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gridsome" {...props} />

/** Grocy mark — compose with Select, Button, menus, etc. */
const GrocyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grocy" {...props} />

/** GroupMe mark — compose with Select, Button, menus, etc. */
const GroupMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="groupme" {...props} />

/** Groupon mark — compose with Select, Button, menus, etc. */
const GrouponBrandIcon = (props: BrandIconProps) => <BrandIcon slug="groupon" {...props} />

/** Grunt mark — compose with Select, Button, menus, etc. */
const GruntBrandIcon = (props: BrandIconProps) => <BrandIcon slug="grunt" {...props} />

/** GSAP mark — compose with Select, Button, menus, etc. */
const GSAPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gsap" {...props} />

/** GSK mark — compose with Select, Button, menus, etc. */
const GSKBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gsk" {...props} />

/** GSMA mark — compose with Select, Button, menus, etc. */
const GSMABrandIcon = (props: BrandIconProps) => <BrandIcon slug="gsma" {...props} />

/** GSMArena.com mark — compose with Select, Button, menus, etc. */
const GSMArenaComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gsmarenadotcom" {...props} />

/** GStreamer mark — compose with Select, Button, menus, etc. */
const GStreamerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gstreamer" {...props} />

/** GTK mark — compose with Select, Button, menus, etc. */
const GTKBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gtk" {...props} />

/** Guangzhou Metro mark — compose with Select, Button, menus, etc. */
const GuangzhouMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="guangzhoumetro" {...props} />

/** Guilded mark — compose with Select, Button, menus, etc. */
const GuildedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="guilded" {...props} />

/** Guitar Pro mark — compose with Select, Button, menus, etc. */
const GuitarProBrandIcon = (props: BrandIconProps) => <BrandIcon slug="guitarpro" {...props} />

/** gulp mark — compose with Select, Button, menus, etc. */
const GulpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gulp" {...props} />

/** Gumroad mark — compose with Select, Button, menus, etc. */
const GumroadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gumroad" {...props} />

/** Gumtree mark — compose with Select, Button, menus, etc. */
const GumtreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gumtree" {...props} />

/** Gunicorn mark — compose with Select, Button, menus, etc. */
const GunicornBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gunicorn" {...props} />

/** Gurobi mark — compose with Select, Button, menus, etc. */
const GurobiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gurobi" {...props} />

/** Gusto mark — compose with Select, Button, menus, etc. */
const GustoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gusto" {...props} />

/** Gutenberg mark — compose with Select, Button, menus, etc. */
const GutenbergBrandIcon = (props: BrandIconProps) => <BrandIcon slug="gutenberg" {...props} />

/** H&M mark — compose with Select, Button, menus, etc. */
const HMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="handm" {...props} />

/** H2 Database mark — compose with Select, Button, menus, etc. */
const H2DatabaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="h2database" {...props} />

/** H3 mark — compose with Select, Button, menus, etc. */
const H3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="h3" {...props} />

/** Habr mark — compose with Select, Button, menus, etc. */
const HabrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="habr" {...props} />

/** Hack Club mark — compose with Select, Button, menus, etc. */
const HackClubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackclub" {...props} />

/** Hack The Box mark — compose with Select, Button, menus, etc. */
const HackTheBoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackthebox" {...props} />

/** Hackaday mark — compose with Select, Button, menus, etc. */
const HackadayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackaday" {...props} />

/** Hacker Noon mark — compose with Select, Button, menus, etc. */
const HackerNoonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackernoon" {...props} />

/** HackerEarth mark — compose with Select, Button, menus, etc. */
const HackerEarthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackerearth" {...props} />

/** HackerOne mark — compose with Select, Button, menus, etc. */
const HackerOneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackerone" {...props} />

/** HackerRank mark — compose with Select, Button, menus, etc. */
const HackerRankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackerrank" {...props} />

/** HackMD mark — compose with Select, Button, menus, etc. */
const HackMDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackmd" {...props} />

/** Hackster mark — compose with Select, Button, menus, etc. */
const HacksterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hackster" {...props} />

/** HAL mark — compose with Select, Button, menus, etc. */
const HALBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hal" {...props} />

/** Handlebars.js mark — compose with Select, Button, menus, etc. */
const HandlebarsJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="handlebarsdotjs" {...props} />

/** Handshake mark — compose with Select, Button, menus, etc. */
const HandshakeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="handshake" {...props} />

/** Handshake mark — compose with Select, Button, menus, etc. */
const HandshakeProtocolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="handshake_protocol" {...props} />

/** HappyCow mark — compose with Select, Button, menus, etc. */
const HappyCowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="happycow" {...props} />

/** HAProxy mark — compose with Select, Button, menus, etc. */
const HAProxyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="haproxy" {...props} />

/** Harbor mark — compose with Select, Button, menus, etc. */
const HarborBrandIcon = (props: BrandIconProps) => <BrandIcon slug="harbor" {...props} />

/** HarmonyOS mark — compose with Select, Button, menus, etc. */
const HarmonyOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="harmonyos" {...props} />

/** Hashcat mark — compose with Select, Button, menus, etc. */
const HashcatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hashcat" {...props} />

/** HashiCorp mark — compose with Select, Button, menus, etc. */
const HashiCorpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hashicorp" {...props} />

/** Hashnode mark — compose with Select, Button, menus, etc. */
const HashnodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hashnode" {...props} />

/** Haskell mark — compose with Select, Button, menus, etc. */
const HaskellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="haskell" {...props} />

/** Hasura mark — compose with Select, Button, menus, etc. */
const HasuraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hasura" {...props} />

/** Hatena Bookmark mark — compose with Select, Button, menus, etc. */
const HatenaBookmarkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hatenabookmark" {...props} />

/** Have I Been Pwned mark — compose with Select, Button, menus, etc. */
const HaveIBeenPwnedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="haveibeenpwned" {...props} />

/** Havells mark — compose with Select, Button, menus, etc. */
const HavellsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="havells" {...props} />

/** Haxe mark — compose with Select, Button, menus, etc. */
const HaxeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="haxe" {...props} />

/** Haystack mark — compose with Select, Button, menus, etc. */
const HaystackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="haystack" {...props} />

/** HBO mark — compose with Select, Button, menus, etc. */
const HBOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hbo" {...props} />

/** HBO Max mark — compose with Select, Button, menus, etc. */
const HBOMaxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hbomax" {...props} />

/** HCL mark — compose with Select, Button, menus, etc. */
const HCLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hcl" {...props} />

/** HDFC Bank mark — compose with Select, Button, menus, etc. */
const HDFCBankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hdfcbank" {...props} />

/** Headless UI mark — compose with Select, Button, menus, etc. */
const HeadlessUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="headlessui" {...props} />

/** Headphone Zone mark — compose with Select, Button, menus, etc. */
const HeadphoneZoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="headphonezone" {...props} />

/** Headspace mark — compose with Select, Button, menus, etc. */
const HeadspaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="headspace" {...props} />

/** Hearth mark — compose with Select, Button, menus, etc. */
const HearthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hearth" {...props} />

/** hearthis.at mark — compose with Select, Button, menus, etc. */
const HearthisAtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hearthisdotat" {...props} />

/** Hedera mark — compose with Select, Button, menus, etc. */
const HederaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hedera" {...props} />

/** HedgeDoc mark — compose with Select, Button, menus, etc. */
const HedgeDocBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hedgedoc" {...props} />

/** Helium mark — compose with Select, Button, menus, etc. */
const HeliumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="helium" {...props} />

/** Helium Browser mark — compose with Select, Button, menus, etc. */
const HeliumBrowserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="heliumbrowser" {...props} />

/** Helix mark — compose with Select, Button, menus, etc. */
const HelixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="helix" {...props} />

/** HelloFresh mark — compose with Select, Button, menus, etc. */
const HelloFreshBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hellofresh" {...props} />

/** Helly Hansen mark — compose with Select, Button, menus, etc. */
const HellyHansenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hellyhansen" {...props} />

/** Helm mark — compose with Select, Button, menus, etc. */
const HelmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="helm" {...props} />

/** Help Scout mark — compose with Select, Button, menus, etc. */
const HelpScoutBrandIcon = (props: BrandIconProps) => <BrandIcon slug="helpscout" {...props} />

/** HelpDesk mark — compose with Select, Button, menus, etc. */
const HelpDeskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="helpdesk" {...props} />

/** Hepsiemlak mark — compose with Select, Button, menus, etc. */
const HepsiemlakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hepsiemlak" {...props} />

/** HERE mark — compose with Select, Button, menus, etc. */
const HEREBrandIcon = (props: BrandIconProps) => <BrandIcon slug="here" {...props} />

/** Hermes mark — compose with Select, Button, menus, etc. */
const HermesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hermes" {...props} />

/** Heroic Games Launcher mark — compose with Select, Button, menus, etc. */
const HeroicGamesLauncherBrandIcon = (props: BrandIconProps) => <BrandIcon slug="heroicgameslauncher" {...props} />

/** HeroUI mark — compose with Select, Button, menus, etc. */
const HeroUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="heroui" {...props} />

/** Hetzner mark — compose with Select, Button, menus, etc. */
const HetznerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hetzner" {...props} />

/** Hevy mark — compose with Select, Button, menus, etc. */
const HevyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hevy" {...props} />

/** Hexlet mark — compose with Select, Button, menus, etc. */
const HexletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hexlet" {...props} />

/** Hexo mark — compose with Select, Button, menus, etc. */
const HexoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hexo" {...props} />

/** HEY mark — compose with Select, Button, menus, etc. */
const HEYBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hey" {...props} />

/** Hi Bob mark — compose with Select, Button, menus, etc. */
const HiBobBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hibob" {...props} />

/** Hibernate mark — compose with Select, Button, menus, etc. */
const HibernateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hibernate" {...props} />

/** Hilton mark — compose with Select, Button, menus, etc. */
const HiltonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hilton" {...props} />

/** Hilton Hotels & Resorts mark — compose with Select, Button, menus, etc. */
const HiltonHotelsResortsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hiltonhotelsandresorts" {...props} />

/** Hitachi mark — compose with Select, Button, menus, etc. */
const HitachiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hitachi" {...props} />

/** Hive mark — compose with Select, Button, menus, etc. */
const HiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hive" {...props} />

/** Hive mark — compose with Select, Button, menus, etc. */
const HiveBlockchainBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hive_blockchain" {...props} />

/** HiveMQ mark — compose with Select, Button, menus, etc. */
const HiveMQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hivemq" {...props} />

/** Homarr mark — compose with Select, Button, menus, etc. */
const HomarrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homarr" {...props} />

/** Home Assistant mark — compose with Select, Button, menus, etc. */
const HomeAssistantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homeassistant" {...props} />

/** Home Assistant Community Store mark — compose with Select, Button, menus, etc. */
const HomeAssistantCommunityStoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homeassistantcommunitystore" {...props} />

/** HomeAdvisor mark — compose with Select, Button, menus, etc. */
const HomeAdvisorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homeadvisor" {...props} />

/** Homebrew mark — compose with Select, Button, menus, etc. */
const HomebrewBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homebrew" {...props} />

/** Homebridge mark — compose with Select, Button, menus, etc. */
const HomebridgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homebridge" {...props} />

/** Homepage mark — compose with Select, Button, menus, etc. */
const HomepageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homepage" {...props} />

/** homify mark — compose with Select, Button, menus, etc. */
const HomifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="homify" {...props} />

/** Honda mark — compose with Select, Button, menus, etc. */
const HondaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="honda" {...props} />

/** Honey mark — compose with Select, Button, menus, etc. */
const HoneyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="honey" {...props} />

/** Honeybadger mark — compose with Select, Button, menus, etc. */
const HoneybadgerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="honeybadger" {...props} />

/** Honeygain mark — compose with Select, Button, menus, etc. */
const HoneygainBrandIcon = (props: BrandIconProps) => <BrandIcon slug="honeygain" {...props} />

/** Hono mark — compose with Select, Button, menus, etc. */
const HonoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hono" {...props} />

/** Honor mark — compose with Select, Button, menus, etc. */
const HonorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="honor" {...props} />

/** Hootsuite mark — compose with Select, Button, menus, etc. */
const HootsuiteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hootsuite" {...props} />

/** Hoppscotch mark — compose with Select, Button, menus, etc. */
const HoppscotchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hoppscotch" {...props} />

/** Hostinger mark — compose with Select, Button, menus, etc. */
const HostingerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hostinger" {...props} />

/** Hotels.com mark — compose with Select, Button, menus, etc. */
const HotelsComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hotelsdotcom" {...props} />

/** Hotjar mark — compose with Select, Button, menus, etc. */
const HotjarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hotjar" {...props} />

/** Hotwire mark — compose with Select, Button, menus, etc. */
const HotwireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hotwire" {...props} />

/** Houdini mark — compose with Select, Button, menus, etc. */
const HoudiniBrandIcon = (props: BrandIconProps) => <BrandIcon slug="houdini" {...props} />

/** Houzz mark — compose with Select, Button, menus, etc. */
const HouzzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="houzz" {...props} />

/** HP mark — compose with Select, Button, menus, etc. */
const HPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hp" {...props} />

/** HSBC mark — compose with Select, Button, menus, etc. */
const HSBCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hsbc" {...props} />

/** HTC mark — compose with Select, Button, menus, etc. */
const HTCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="htc" {...props} />

/** HTC Vive mark — compose with Select, Button, menus, etc. */
const HTCViveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="htcvive" {...props} />

/** HTML Academy mark — compose with Select, Button, menus, etc. */
const HTMLAcademyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="htmlacademy" {...props} />

/** HTML5 mark — compose with Select, Button, menus, etc. */
const Html5BrandIcon = (props: BrandIconProps) => <BrandIcon slug="html5" {...props} />

/** htmx mark — compose with Select, Button, menus, etc. */
const HtmxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="htmx" {...props} />

/** htop mark — compose with Select, Button, menus, etc. */
const HtopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="htop" {...props} />

/** HTTPie mark — compose with Select, Button, menus, etc. */
const HTTPieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="httpie" {...props} />

/** Huawei mark — compose with Select, Button, menus, etc. */
const HuaweiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="huawei" {...props} />

/** HubSpot mark — compose with Select, Button, menus, etc. */
const HubSpotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hubspot" {...props} />

/** Hugging Face mark — compose with Select, Button, menus, etc. */
const HuggingFaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="huggingface" {...props} />

/** Hugo mark — compose with Select, Button, menus, etc. */
const HugoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hugo" {...props} />

/** Humble Bundle mark — compose with Select, Button, menus, etc. */
const HumbleBundleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="humblebundle" {...props} />

/** HumHub mark — compose with Select, Button, menus, etc. */
const HumHubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="humhub" {...props} />

/** Hungry Jack's mark — compose with Select, Button, menus, etc. */
const HungryJackSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hungryjacks" {...props} />

/** Husqvarna mark — compose with Select, Button, menus, etc. */
const HusqvarnaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="husqvarna" {...props} />

/** Hyper mark — compose with Select, Button, menus, etc. */
const HyperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hyper" {...props} />

/** Hyperskill mark — compose with Select, Button, menus, etc. */
const HyperskillBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hyperskill" {...props} />

/** HyperX mark — compose with Select, Button, menus, etc. */
const HyperXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hyperx" {...props} />

/** Hypit mark — compose with Select, Button, menus, etc. */
const HypitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hypit" {...props} />

/** Hypothesis mark — compose with Select, Button, menus, etc. */
const HypothesisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hypothesis" {...props} />

/** Hyprland mark — compose with Select, Button, menus, etc. */
const HyprlandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hyprland" {...props} />

/** Hyundai mark — compose with Select, Button, menus, etc. */
const HyundaiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="hyundai" {...props} />

/** i18next mark — compose with Select, Button, menus, etc. */
const I18nextBrandIcon = (props: BrandIconProps) => <BrandIcon slug="i18next" {...props} />

/** i3 mark — compose with Select, Button, menus, etc. */
const I3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="i3" {...props} />

/** IATA mark — compose with Select, Button, menus, etc. */
const IATABrandIcon = (props: BrandIconProps) => <BrandIcon slug="iata" {...props} />

/** iBeacon mark — compose with Select, Button, menus, etc. */
const IBeaconBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ibeacon" {...props} />

/** Iberia mark — compose with Select, Button, menus, etc. */
const IberiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iberia" {...props} />

/** Iced mark — compose with Select, Button, menus, etc. */
const IcedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iced" {...props} />

/** Iceland mark — compose with Select, Button, menus, etc. */
const IcelandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iceland" {...props} />

/** ICICI Bank mark — compose with Select, Button, menus, etc. */
const IciciBankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="icicibank" {...props} />

/** Icinga mark — compose with Select, Button, menus, etc. */
const IcingaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="icinga" {...props} />

/** iCloud mark — compose with Select, Button, menus, etc. */
const ICloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="icloud" {...props} />

/** IcoMoon mark — compose with Select, Button, menus, etc. */
const IcoMoonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="icomoon" {...props} />

/** ICON mark — compose with Select, Button, menus, etc. */
const ICONBrandIcon = (props: BrandIconProps) => <BrandIcon slug="icon" {...props} />

/** Iconfinder mark — compose with Select, Button, menus, etc. */
const IconfinderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iconfinder" {...props} />

/** Iconify mark — compose with Select, Button, menus, etc. */
const IconifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iconify" {...props} />

/** IconJar mark — compose with Select, Button, menus, etc. */
const IconJarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iconjar" {...props} />

/** Icons8 mark — compose with Select, Button, menus, etc. */
const Icons8BrandIcon = (props: BrandIconProps) => <BrandIcon slug="icons8" {...props} />

/** ICQ mark — compose with Select, Button, menus, etc. */
const ICQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="icq" {...props} />

/** IEEE mark — compose with Select, Button, menus, etc. */
const IEEEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ieee" {...props} />

/** iFixit mark — compose with Select, Button, menus, etc. */
const IFixitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ifixit" {...props} />

/** iFood mark — compose with Select, Button, menus, etc. */
const IFoodBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ifood" {...props} />

/** IFTTT mark — compose with Select, Button, menus, etc. */
const IftttBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ifttt" {...props} />

/** IGDB mark — compose with Select, Button, menus, etc. */
const IGDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="igdb" {...props} />

/** IGN mark — compose with Select, Button, menus, etc. */
const IGNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ign" {...props} />

/** iHeartRadio mark — compose with Select, Button, menus, etc. */
const IHeartRadioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iheartradio" {...props} />

/** IKEA mark — compose with Select, Button, menus, etc. */
const IKEABrandIcon = (props: BrandIconProps) => <BrandIcon slug="ikea" {...props} />

/** Île-de-France Mobilités mark — compose with Select, Button, menus, etc. */
const LeDeFranceMobilitSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iledefrancemobilites" {...props} />

/** iLovePDF mark — compose with Select, Button, menus, etc. */
const ILovePDFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ilovepdf" {...props} />

/** Image Toolbox mark — compose with Select, Button, menus, etc. */
const ImageToolboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imagetoolbox" {...props} />

/** Image.sc mark — compose with Select, Button, menus, etc. */
const ImageScBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imagedotsc" {...props} />

/** ImageJ mark — compose with Select, Button, menus, etc. */
const ImageJBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imagej" {...props} />

/** IMDb mark — compose with Select, Button, menus, etc. */
const IMDbBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imdb" {...props} />

/** iMessage mark — compose with Select, Button, menus, etc. */
const IMessageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imessage" {...props} />

/** Imgur mark — compose with Select, Button, menus, etc. */
const ImgurBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imgur" {...props} />

/** Immer mark — compose with Select, Button, menus, etc. */
const ImmerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="immer" {...props} />

/** Immersive Translate mark — compose with Select, Button, menus, etc. */
const ImmersiveTranslateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="immersivetranslate" {...props} />

/** Immich mark — compose with Select, Button, menus, etc. */
const ImmichBrandIcon = (props: BrandIconProps) => <BrandIcon slug="immich" {...props} />

/** Imou mark — compose with Select, Button, menus, etc. */
const ImouBrandIcon = (props: BrandIconProps) => <BrandIcon slug="imou" {...props} />

/** ImprovMX mark — compose with Select, Button, menus, etc. */
const ImprovMXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="improvmx" {...props} />

/** Indeed mark — compose with Select, Button, menus, etc. */
const IndeedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="indeed" {...props} />

/** Indian Super League mark — compose with Select, Button, menus, etc. */
const IndianSuperLeagueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="indiansuperleague" {...props} />

/** Indie Hackers mark — compose with Select, Button, menus, etc. */
const IndieHackersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="indiehackers" {...props} />

/** IndieWeb mark — compose with Select, Button, menus, etc. */
const IndieWebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="indieweb" {...props} />

/** IndiGo mark — compose with Select, Button, menus, etc. */
const IndiGoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="indigo" {...props} />

/** Inductive Automation mark — compose with Select, Button, menus, etc. */
const InductiveAutomationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inductiveautomation" {...props} />

/** Inertia mark — compose with Select, Button, menus, etc. */
const InertiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inertia" {...props} />

/** INFINITI mark — compose with Select, Button, menus, etc. */
const InfinitiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infiniti" {...props} />

/** InfinityFree mark — compose with Select, Button, menus, etc. */
const InfinityFreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infinityfree" {...props} />

/** InfluxDB mark — compose with Select, Button, menus, etc. */
const InfluxDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="influxdb" {...props} />

/** Infomaniak mark — compose with Select, Button, menus, etc. */
const InfomaniakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infomaniak" {...props} />

/** InfoQ mark — compose with Select, Button, menus, etc. */
const InfoQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infoq" {...props} />

/** Infosys mark — compose with Select, Button, menus, etc. */
const InfosysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infosys" {...props} />

/** Infracost mark — compose with Select, Button, menus, etc. */
const InfracostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infracost" {...props} />

/** Infuse mark — compose with Select, Button, menus, etc. */
const InfuseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="infuse" {...props} />

/** Ingress mark — compose with Select, Button, menus, etc. */
const IngressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ingress" {...props} />

/** Inkdrop mark — compose with Select, Button, menus, etc. */
const InkdropBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inkdrop" {...props} />

/** Inkscape mark — compose with Select, Button, menus, etc. */
const InkscapeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inkscape" {...props} />

/** Inoreader mark — compose with Select, Button, menus, etc. */
const InoreaderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inoreader" {...props} />

/** Inquirer mark — compose with Select, Button, menus, etc. */
const InquirerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inquirer" {...props} />

/** Insomnia mark — compose with Select, Button, menus, etc. */
const InsomniaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="insomnia" {...props} />

/** INSPIRE mark — compose with Select, Button, menus, etc. */
const InspireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="inspire" {...props} />

/** Insta360 mark — compose with Select, Button, menus, etc. */
const Insta360BrandIcon = (props: BrandIconProps) => <BrandIcon slug="insta360" {...props} />

/** Instacart mark — compose with Select, Button, menus, etc. */
const InstacartBrandIcon = (props: BrandIconProps) => <BrandIcon slug="instacart" {...props} />

/** Instagram mark — compose with Select, Button, menus, etc. */
const InstagramBrandIcon = (props: BrandIconProps) => <BrandIcon slug="instagram" {...props} />

/** Instapaper mark — compose with Select, Button, menus, etc. */
const InstapaperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="instapaper" {...props} />

/** Instatus mark — compose with Select, Button, menus, etc. */
const InstatusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="instatus" {...props} />

/** Instructables mark — compose with Select, Button, menus, etc. */
const InstructablesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="instructables" {...props} />

/** Instructure mark — compose with Select, Button, menus, etc. */
const InstructureBrandIcon = (props: BrandIconProps) => <BrandIcon slug="instructure" {...props} />

/** Intel mark — compose with Select, Button, menus, etc. */
const IntelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="intel" {...props} />

/** IntelliJ IDEA mark — compose with Select, Button, menus, etc. */
const IntelliJIDEABrandIcon = (props: BrandIconProps) => <BrandIcon slug="intellijidea" {...props} />

/** Interaction Design Foundation mark — compose with Select, Button, menus, etc. */
const InteractionDesignFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="interactiondesignfoundation" {...props} />

/** InteractJS mark — compose with Select, Button, menus, etc. */
const InteractJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="interactjs" {...props} />

/** Interbase mark — compose with Select, Button, menus, etc. */
const InterbaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="interbase" {...props} />

/** Intercom mark — compose with Select, Button, menus, etc. */
const IntercomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="intercom" {...props} />

/** Intermarche mark — compose with Select, Button, menus, etc. */
const IntermarcheBrandIcon = (props: BrandIconProps) => <BrandIcon slug="intermarche" {...props} />

/** Internet Archive mark — compose with Select, Button, menus, etc. */
const InternetArchiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="internetarchive" {...props} />

/** Internet Computer mark — compose with Select, Button, menus, etc. */
const InternetComputerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="internetcomputer" {...props} />

/** Intigriti mark — compose with Select, Button, menus, etc. */
const IntigritiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="intigriti" {...props} />

/** Intuit mark — compose with Select, Button, menus, etc. */
const IntuitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="intuit" {...props} />

/** Invidious mark — compose with Select, Button, menus, etc. */
const InvidiousBrandIcon = (props: BrandIconProps) => <BrandIcon slug="invidious" {...props} />

/** Invoice Ninja mark — compose with Select, Button, menus, etc. */
const InvoiceNinjaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="invoiceninja" {...props} />

/** ioBroker mark — compose with Select, Button, menus, etc. */
const IoBrokerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iobroker" {...props} />

/** Ionic mark — compose with Select, Button, menus, etc. */
const IonicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ionic" {...props} />

/** Ionos mark — compose with Select, Button, menus, etc. */
const IonosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ionos" {...props} />

/** iOS mark — compose with Select, Button, menus, etc. */
const IOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ios" {...props} />

/** IOTA mark — compose with Select, Button, menus, etc. */
const IOTABrandIcon = (props: BrandIconProps) => <BrandIcon slug="iota" {...props} />

/** IPFS mark — compose with Select, Button, menus, etc. */
const IPFSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ipfs" {...props} />

/** IRIS mark — compose with Select, Button, menus, etc. */
const IRISBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iris" {...props} />

/** iRobot mark — compose with Select, Button, menus, etc. */
const IRobotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="irobot" {...props} />

/** ISC2 mark — compose with Select, Button, menus, etc. */
const ISC2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="isc2" {...props} />

/** ISRO mark — compose with Select, Button, menus, etc. */
const ISROBrandIcon = (props: BrandIconProps) => <BrandIcon slug="isro" {...props} />

/** Issuu mark — compose with Select, Button, menus, etc. */
const IssuuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="issuu" {...props} />

/** Istio mark — compose with Select, Button, menus, etc. */
const IstioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="istio" {...props} />

/** Itch.io mark — compose with Select, Button, menus, etc. */
const ItchIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="itchdotio" {...props} />

/** iTerm2 mark — compose with Select, Button, menus, etc. */
const ITerm2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="iterm2" {...props} />

/** iTunes mark — compose with Select, Button, menus, etc. */
const ITunesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="itunes" {...props} />

/** ITVx mark — compose with Select, Button, menus, etc. */
const ITVxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="itvx" {...props} />

/** IVECO mark — compose with Select, Button, menus, etc. */
const IvecoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="iveco" {...props} />

/** Jabber mark — compose with Select, Button, menus, etc. */
const JabberBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jabber" {...props} />

/** Jaeger mark — compose with Select, Button, menus, etc. */
const JaegerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jaeger" {...props} />

/** Jameson mark — compose with Select, Button, menus, etc. */
const JamesonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jameson" {...props} />

/** Jamstack mark — compose with Select, Button, menus, etc. */
const JamstackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jamstack" {...props} />

/** Japan Airlines mark — compose with Select, Button, menus, etc. */
const JapanAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="japanairlines" {...props} />

/** Jasmine mark — compose with Select, Button, menus, etc. */
const JasmineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jasmine" {...props} />

/** JavaScript mark — compose with Select, Button, menus, etc. */
const JavaScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="javascript" {...props} />

/** JBL mark — compose with Select, Button, menus, etc. */
const JBLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jbl" {...props} />

/** JCB mark — compose with Select, Button, menus, etc. */
const JCBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jcb" {...props} />

/** JDoodle mark — compose with Select, Button, menus, etc. */
const JDoodleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jdoodle" {...props} />

/** Jeep mark — compose with Select, Button, menus, etc. */
const JeepBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jeep" {...props} />

/** Jekyll mark — compose with Select, Button, menus, etc. */
const JekyllBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jekyll" {...props} />

/** Jellyfin mark — compose with Select, Button, menus, etc. */
const JellyfinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jellyfin" {...props} />

/** Jenkins mark — compose with Select, Button, menus, etc. */
const JenkinsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jenkins" {...props} />

/** Jest mark — compose with Select, Button, menus, etc. */
const JestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jest" {...props} />

/** JET mark — compose with Select, Button, menus, etc. */
const JETBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jet" {...props} />

/** JetBlue mark — compose with Select, Button, menus, etc. */
const JetBlueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jetblue" {...props} />

/** JetBrains mark — compose with Select, Button, menus, etc. */
const JetBrainsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jetbrains" {...props} />

/** Jetpack Compose mark — compose with Select, Button, menus, etc. */
const JetpackComposeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jetpackcompose" {...props} />

/** JFrog mark — compose with Select, Button, menus, etc. */
const JFrogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jfrog" {...props} />

/** JFrog Pipelines mark — compose with Select, Button, menus, etc. */
const JFrogPipelinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jfrogpipelines" {...props} />

/** JHipster mark — compose with Select, Button, menus, etc. */
const JHipsterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jhipster" {...props} />

/** Jinja mark — compose with Select, Button, menus, etc. */
const JinjaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jinja" {...props} />

/** Jio mark — compose with Select, Button, menus, etc. */
const JioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jio" {...props} />

/** Jira mark — compose with Select, Button, menus, etc. */
const JiraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jira" {...props} />

/** Jira Software mark — compose with Select, Button, menus, etc. */
const JiraSoftwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jirasoftware" {...props} />

/** JitPack mark — compose with Select, Button, menus, etc. */
const JitPackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jitpack" {...props} />

/** Jitsi mark — compose with Select, Button, menus, etc. */
const JitsiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jitsi" {...props} />

/** John Deere mark — compose with Select, Button, menus, etc. */
const JohnDeereBrandIcon = (props: BrandIconProps) => <BrandIcon slug="johndeere" {...props} />

/** Joomla mark — compose with Select, Button, menus, etc. */
const JoomlaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="joomla" {...props} />

/** Joplin mark — compose with Select, Button, menus, etc. */
const JoplinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="joplin" {...props} />

/** Jordan mark — compose with Select, Button, menus, etc. */
const JordanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jordan" {...props} />

/** JOUAV mark — compose with Select, Button, menus, etc. */
const JouavBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jouav" {...props} />

/** Jovian mark — compose with Select, Button, menus, etc. */
const JovianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jovian" {...props} />

/** JPEG mark — compose with Select, Button, menus, etc. */
const JPEGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jpeg" {...props} />

/** jQuery mark — compose with Select, Button, menus, etc. */
const JQueryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jquery" {...props} />

/** JR Group mark — compose with Select, Button, menus, etc. */
const JRGroupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jrgroup" {...props} />

/** jsDelivr mark — compose with Select, Button, menus, etc. */
const JsDelivrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jsdelivr" {...props} />

/** JSFiddle mark — compose with Select, Button, menus, etc. */
const JSFiddleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jsfiddle" {...props} />

/** JSON mark — compose with Select, Button, menus, etc. */
const JSONBrandIcon = (props: BrandIconProps) => <BrandIcon slug="json" {...props} />

/** JSON Web Tokens mark — compose with Select, Button, menus, etc. */
const JSONWebTokensBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jsonwebtokens" {...props} />

/** JSR mark — compose with Select, Button, menus, etc. */
const JSRBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jsr" {...props} />

/** JSS mark — compose with Select, Button, menus, etc. */
const JSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jss" {...props} />

/** JUCE mark — compose with Select, Button, menus, etc. */
const JUCEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="juce" {...props} />

/** Juejin mark — compose with Select, Button, menus, etc. */
const JuejinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="juejin" {...props} />

/** JUKE mark — compose with Select, Button, menus, etc. */
const JUKEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="juke" {...props} />

/** Julia mark — compose with Select, Button, menus, etc. */
const JuliaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="julia" {...props} />

/** Juniper Networks mark — compose with Select, Button, menus, etc. */
const JuniperNetworksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="junipernetworks" {...props} />

/** JUnit5 mark — compose with Select, Button, menus, etc. */
const JUnit5BrandIcon = (props: BrandIconProps) => <BrandIcon slug="junit5" {...props} />

/** Jupyter mark — compose with Select, Button, menus, etc. */
const JupyterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="jupyter" {...props} />

/** Just mark — compose with Select, Button, menus, etc. */
const JustBrandIcon = (props: BrandIconProps) => <BrandIcon slug="just" {...props} />

/** Just Eat mark — compose with Select, Button, menus, etc. */
const JustEatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="justeat" {...props} />

/** JustGiving mark — compose with Select, Button, menus, etc. */
const JustGivingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="justgiving" {...props} />

/** K3s mark — compose with Select, Button, menus, etc. */
const K3sBrandIcon = (props: BrandIconProps) => <BrandIcon slug="k3s" {...props} />

/** k6 mark — compose with Select, Button, menus, etc. */
const K6BrandIcon = (props: BrandIconProps) => <BrandIcon slug="k6" {...props} />

/** Kaggle mark — compose with Select, Button, menus, etc. */
const KaggleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kaggle" {...props} />

/** Kagi mark — compose with Select, Button, menus, etc. */
const KagiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kagi" {...props} />

/** Kahoot! mark — compose with Select, Button, menus, etc. */
const KahootBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kahoot" {...props} />

/** KaiOS mark — compose with Select, Button, menus, etc. */
const KaiOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kaios" {...props} />

/** Kakao mark — compose with Select, Button, menus, etc. */
const KakaoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kakao" {...props} />

/** KakaoTalk mark — compose with Select, Button, menus, etc. */
const KakaoTalkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kakaotalk" {...props} />

/** Kali Linux mark — compose with Select, Button, menus, etc. */
const KaliLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kalilinux" {...props} />

/** Kamailio mark — compose with Select, Button, menus, etc. */
const KamailioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kamailio" {...props} />

/** Kando mark — compose with Select, Button, menus, etc. */
const KandoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kando" {...props} />

/** Kaniko mark — compose with Select, Button, menus, etc. */
const KanikoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kaniko" {...props} />

/** Karakeep mark — compose with Select, Button, menus, etc. */
const KarakeepBrandIcon = (props: BrandIconProps) => <BrandIcon slug="karakeep" {...props} />

/** Karlsruher Verkehrsverbund mark — compose with Select, Button, menus, etc. */
const KarlsruherVerkehrsverbundBrandIcon = (props: BrandIconProps) => <BrandIcon slug="karlsruherverkehrsverbund" {...props} />

/** Kasa Smart mark — compose with Select, Button, menus, etc. */
const KasaSmartBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kasasmart" {...props} />

/** KashFlow mark — compose with Select, Button, menus, etc. */
const KashFlowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kashflow" {...props} />

/** Kaspersky mark — compose with Select, Button, menus, etc. */
const KasperskyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kaspersky" {...props} />

/** Katana mark — compose with Select, Button, menus, etc. */
const KatanaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="katana" {...props} />

/** Kaufland mark — compose with Select, Button, menus, etc. */
const KauflandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kaufland" {...props} />

/** KDE mark — compose with Select, Button, menus, etc. */
const KDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kde" {...props} />

/** KDE neon mark — compose with Select, Button, menus, etc. */
const KDENeonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kdeneon" {...props} />

/** KDE Plasma mark — compose with Select, Button, menus, etc. */
const KDEPlasmaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kdeplasma" {...props} />

/** Kdenlive mark — compose with Select, Button, menus, etc. */
const KdenliveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kdenlive" {...props} />

/** Kedro mark — compose with Select, Button, menus, etc. */
const KedroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kedro" {...props} />

/** Keenetic mark — compose with Select, Button, menus, etc. */
const KeeneticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keenetic" {...props} />

/** Keep a Changelog mark — compose with Select, Button, menus, etc. */
const KeepAChangelogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keepachangelog" {...props} />

/** KeePassXC mark — compose with Select, Button, menus, etc. */
const KeePassXCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keepassxc" {...props} />

/** Keeper mark — compose with Select, Button, menus, etc. */
const KeeperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keeper" {...props} />

/** KeeWeb mark — compose with Select, Button, menus, etc. */
const KeeWebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keeweb" {...props} />

/** Kenmei mark — compose with Select, Button, menus, etc. */
const KenmeiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kenmei" {...props} />

/** Kentico mark — compose with Select, Button, menus, etc. */
const KenticoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kentico" {...props} />

/** Keploy mark — compose with Select, Button, menus, etc. */
const KeployBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keploy" {...props} />

/** Keras mark — compose with Select, Button, menus, etc. */
const KerasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keras" {...props} />

/** Keybase mark — compose with Select, Button, menus, etc. */
const KeybaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keybase" {...props} />

/** KeyCDN mark — compose with Select, Button, menus, etc. */
const KeyCDNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keycdn" {...props} />

/** Keycloak mark — compose with Select, Button, menus, etc. */
const KeycloakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keycloak" {...props} />

/** Keystone mark — compose with Select, Button, menus, etc. */
const KeystoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="keystone" {...props} />

/** KFC mark — compose with Select, Button, menus, etc. */
const KFCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kfc" {...props} />

/** Khan Academy mark — compose with Select, Button, menus, etc. */
const KhanAcademyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="khanacademy" {...props} />

/** Khronos Group mark — compose with Select, Button, menus, etc. */
const KhronosGroupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="khronosgroup" {...props} />

/** Kia mark — compose with Select, Button, menus, etc. */
const KiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kia" {...props} />

/** Kibana mark — compose with Select, Button, menus, etc. */
const KibanaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kibana" {...props} />

/** KiCad mark — compose with Select, Button, menus, etc. */
const KiCadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kicad" {...props} />

/** Kick mark — compose with Select, Button, menus, etc. */
const KickBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kick" {...props} />

/** Kickstarter mark — compose with Select, Button, menus, etc. */
const KickstarterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kickstarter" {...props} />

/** Kik mark — compose with Select, Button, menus, etc. */
const KikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kik" {...props} />

/** Kimi mark — compose with Select, Button, menus, etc. */
const KimiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kimi" {...props} />

/** Kingston Technology mark — compose with Select, Button, menus, etc. */
const KingstonTechnologyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kingstontechnology" {...props} />

/** Kinopoisk mark — compose with Select, Button, menus, etc. */
const KinopoiskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kinopoisk" {...props} />

/** Kinsta mark — compose with Select, Button, menus, etc. */
const KinstaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kinsta" {...props} />

/** Kirby mark — compose with Select, Button, menus, etc. */
const KirbyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kirby" {...props} />

/** Kit mark — compose with Select, Button, menus, etc. */
const KitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kit" {...props} />

/** Kitsu mark — compose with Select, Button, menus, etc. */
const KitsuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kitsu" {...props} />

/** Kiwix mark — compose with Select, Button, menus, etc. */
const KiwixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kiwix" {...props} />

/** Klarna mark — compose with Select, Button, menus, etc. */
const KlarnaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="klarna" {...props} />

/** Kleinanzeigen mark — compose with Select, Button, menus, etc. */
const KleinanzeigenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kleinanzeigen" {...props} />

/** KLM mark — compose with Select, Button, menus, etc. */
const KLMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="klm" {...props} />

/** Klook mark — compose with Select, Button, menus, etc. */
const KlookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="klook" {...props} />

/** Knative mark — compose with Select, Button, menus, etc. */
const KnativeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="knative" {...props} />

/** Knex.js mark — compose with Select, Button, menus, etc. */
const KnexJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="knexdotjs" {...props} />

/** KNIME mark — compose with Select, Button, menus, etc. */
const KnimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="knime" {...props} />

/** Knip mark — compose with Select, Button, menus, etc. */
const KnipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="knip" {...props} />

/** KnowledgeBase mark — compose with Select, Button, menus, etc. */
const KnowledgeBaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="knowledgebase" {...props} />

/** Known mark — compose with Select, Button, menus, etc. */
const KnownBrandIcon = (props: BrandIconProps) => <BrandIcon slug="known" {...props} />

/** Ko-fi mark — compose with Select, Button, menus, etc. */
const KoFiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kofi" {...props} />

/** Koa mark — compose with Select, Button, menus, etc. */
const KoaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="koa" {...props} />

/** Koc mark — compose with Select, Button, menus, etc. */
const KocBrandIcon = (props: BrandIconProps) => <BrandIcon slug="koc" {...props} />

/** Kodak mark — compose with Select, Button, menus, etc. */
const KodakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kodak" {...props} />

/** Kodi mark — compose with Select, Button, menus, etc. */
const KodiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kodi" {...props} />

/** Kodular mark — compose with Select, Button, menus, etc. */
const KodularBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kodular" {...props} />

/** Koenigsegg mark — compose with Select, Button, menus, etc. */
const KoenigseggBrandIcon = (props: BrandIconProps) => <BrandIcon slug="koenigsegg" {...props} />

/** Kofax mark — compose with Select, Button, menus, etc. */
const KofaxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kofax" {...props} />

/** Komoot mark — compose with Select, Button, menus, etc. */
const KomootBrandIcon = (props: BrandIconProps) => <BrandIcon slug="komoot" {...props} />

/** Konami mark — compose with Select, Button, menus, etc. */
const KonamiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="konami" {...props} />

/** Kong mark — compose with Select, Button, menus, etc. */
const KongBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kong" {...props} />

/** Kongregate mark — compose with Select, Button, menus, etc. */
const KongregateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kongregate" {...props} />

/** Konva mark — compose with Select, Button, menus, etc. */
const KonvaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="konva" {...props} />

/** KOReader mark — compose with Select, Button, menus, etc. */
const KOReaderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="koreader" {...props} />

/** Kotlin mark — compose with Select, Button, menus, etc. */
const KotlinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kotlin" {...props} />

/** Koyeb mark — compose with Select, Button, menus, etc. */
const KoyebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="koyeb" {...props} />

/** Kred mark — compose with Select, Button, menus, etc. */
const KredBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kred" {...props} />

/** Krita mark — compose with Select, Button, menus, etc. */
const KritaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="krita" {...props} />

/** KTM mark — compose with Select, Button, menus, etc. */
const KTMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ktm" {...props} />

/** Ktor mark — compose with Select, Button, menus, etc. */
const KtorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ktor" {...props} />

/** Kuaishou mark — compose with Select, Button, menus, etc. */
const KuaishouBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kuaishou" {...props} />

/** Kubernetes mark — compose with Select, Button, menus, etc. */
const KubernetesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kubernetes" {...props} />

/** Kubespray mark — compose with Select, Button, menus, etc. */
const KubesprayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kubespray" {...props} />

/** Kubuntu mark — compose with Select, Button, menus, etc. */
const KubuntuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kubuntu" {...props} />

/** KuCoin mark — compose with Select, Button, menus, etc. */
const KuCoinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kucoin" {...props} />

/** Kueski mark — compose with Select, Button, menus, etc. */
const KueskiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kueski" {...props} />

/** Kuma mark — compose with Select, Button, menus, etc. */
const KumaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kuma" {...props} />

/** Kununu mark — compose with Select, Button, menus, etc. */
const KununuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kununu" {...props} />

/** Kuula mark — compose with Select, Button, menus, etc. */
const KuulaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kuula" {...props} />

/** KX mark — compose with Select, Button, menus, etc. */
const KXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kx" {...props} />

/** Kyocera mark — compose with Select, Button, menus, etc. */
const KyoceraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="kyocera" {...props} />

/** L'Équipe mark — compose with Select, Button, menus, etc. */
const LQuipeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lequipe" {...props} />

/** LabEx mark — compose with Select, Button, menus, etc. */
const LabExBrandIcon = (props: BrandIconProps) => <BrandIcon slug="labex" {...props} />

/** LabVIEW mark — compose with Select, Button, menus, etc. */
const LabVIEWBrandIcon = (props: BrandIconProps) => <BrandIcon slug="labview" {...props} />

/** LADA mark — compose with Select, Button, menus, etc. */
const LADABrandIcon = (props: BrandIconProps) => <BrandIcon slug="lada" {...props} />

/** Lamborghini mark — compose with Select, Button, menus, etc. */
const LamborghiniBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lamborghini" {...props} />

/** LangChain mark — compose with Select, Button, menus, etc. */
const LangChainBrandIcon = (props: BrandIconProps) => <BrandIcon slug="langchain" {...props} />

/** LangChain Corporate mark — compose with Select, Button, menus, etc. */
const LangChainCorporateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="langchaincorporate" {...props} />

/** Langflow mark — compose with Select, Button, menus, etc. */
const LangflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="langflow" {...props} />

/** LangGraph mark — compose with Select, Button, menus, etc. */
const LangGraphBrandIcon = (props: BrandIconProps) => <BrandIcon slug="langgraph" {...props} />

/** LanguageTool mark — compose with Select, Button, menus, etc. */
const LanguageToolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="languagetool" {...props} />

/** Lapce mark — compose with Select, Button, menus, etc. */
const LapceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lapce" {...props} />

/** Laragon mark — compose with Select, Button, menus, etc. */
const LaragonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="laragon" {...props} />

/** Laravel mark — compose with Select, Button, menus, etc. */
const LaravelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="laravel" {...props} />

/** Laravel Horizon mark — compose with Select, Button, menus, etc. */
const LaravelHorizonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="laravelhorizon" {...props} />

/** Laravel Nova mark — compose with Select, Button, menus, etc. */
const LaravelNovaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="laravelnova" {...props} />

/** Last.fm mark — compose with Select, Button, menus, etc. */
const LastFmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lastdotfm" {...props} />

/** LastPass mark — compose with Select, Button, menus, etc. */
const LastPassBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lastpass" {...props} />

/** LaTeX mark — compose with Select, Button, menus, etc. */
const LaTeXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="latex" {...props} />

/** Launchpad mark — compose with Select, Button, menus, etc. */
const LaunchpadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="launchpad" {...props} />

/** Lazarus mark — compose with Select, Button, menus, etc. */
const LazarusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lazarus" {...props} />

/** LazyVim mark — compose with Select, Button, menus, etc. */
const LazyVimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lazyvim" {...props} />

/** LBRY mark — compose with Select, Button, menus, etc. */
const LBRYBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lbry" {...props} />

/** Leader Price mark — compose with Select, Button, menus, etc. */
const LeaderPriceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leaderprice" {...props} />

/** Leaflet mark — compose with Select, Button, menus, etc. */
const LeafletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leaflet" {...props} />

/** League of Legends mark — compose with Select, Button, menus, etc. */
const LeagueOfLegendsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leagueoflegends" {...props} />

/** Leanpub mark — compose with Select, Button, menus, etc. */
const LeanpubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leanpub" {...props} />

/** LeetCode mark — compose with Select, Button, menus, etc. */
const LeetCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leetcode" {...props} />

/** Lefthook mark — compose with Select, Button, menus, etc. */
const LefthookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lefthook" {...props} />

/** Legacy Games mark — compose with Select, Button, menus, etc. */
const LegacyGamesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="legacygames" {...props} />

/** Leica mark — compose with Select, Button, menus, etc. */
const LeicaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leica" {...props} />

/** Lemmy mark — compose with Select, Button, menus, etc. */
const LemmyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lemmy" {...props} />

/** Lemon Squeezy mark — compose with Select, Button, menus, etc. */
const LemonSqueezyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lemonsqueezy" {...props} />

/** Lenovo mark — compose with Select, Button, menus, etc. */
const LenovoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lenovo" {...props} />

/** Lens mark — compose with Select, Button, menus, etc. */
const LensBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lens" {...props} />

/** Leptos mark — compose with Select, Button, menus, etc. */
const LeptosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leptos" {...props} />

/** Lerna mark — compose with Select, Button, menus, etc. */
const LernaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lerna" {...props} />

/** Leroy Merlin mark — compose with Select, Button, menus, etc. */
const LeroyMerlinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leroymerlin" {...props} />

/** Les libraires mark — compose with Select, Button, menus, etc. */
const LesLibrairesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="leslibraires" {...props} />

/** Less mark — compose with Select, Button, menus, etc. */
const LessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="less" {...props} />

/** Let's Encrypt mark — compose with Select, Button, menus, etc. */
const LetSEncryptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="letsencrypt" {...props} />

/** Letterboxd mark — compose with Select, Button, menus, etc. */
const LetterboxdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="letterboxd" {...props} />

/** levels.fyi mark — compose with Select, Button, menus, etc. */
const LevelsFyiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="levelsdotfyi" {...props} />

/** LG mark — compose with Select, Button, menus, etc. */
const LGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lg" {...props} />

/** Li-Ning mark — compose with Select, Button, menus, etc. */
const LiNingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lining" {...props} />

/** Libera.Chat mark — compose with Select, Button, menus, etc. */
const LiberaChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="liberadotchat" {...props} />

/** Liberapay mark — compose with Select, Button, menus, etc. */
const LiberapayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="liberapay" {...props} />

/** Libraries.io mark — compose with Select, Button, menus, etc. */
const LibrariesIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="librariesdotio" {...props} />

/** LibraryThing mark — compose with Select, Button, menus, etc. */
const LibraryThingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="librarything" {...props} />

/** LibreOffice mark — compose with Select, Button, menus, etc. */
const LibreOfficeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreoffice" {...props} />

/** LibreOffice Base mark — compose with Select, Button, menus, etc. */
const LibreOfficeBaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreofficebase" {...props} />

/** LibreOffice Calc mark — compose with Select, Button, menus, etc. */
const LibreOfficeCalcBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreofficecalc" {...props} />

/** LibreOffice Draw mark — compose with Select, Button, menus, etc. */
const LibreOfficeDrawBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreofficedraw" {...props} />

/** LibreOffice Impress mark — compose with Select, Button, menus, etc. */
const LibreOfficeImpressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreofficeimpress" {...props} />

/** LibreOffice Math mark — compose with Select, Button, menus, etc. */
const LibreOfficeMathBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreofficemath" {...props} />

/** LibreOffice Writer mark — compose with Select, Button, menus, etc. */
const LibreOfficeWriterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libreofficewriter" {...props} />

/** LibreTranslate mark — compose with Select, Button, menus, etc. */
const LibreTranslateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libretranslate" {...props} />

/** LibreTube mark — compose with Select, Button, menus, etc. */
const LibreTubeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libretube" {...props} />

/** LibreWolf mark — compose with Select, Button, menus, etc. */
const LibreWolfBrandIcon = (props: BrandIconProps) => <BrandIcon slug="librewolf" {...props} />

/** libuv mark — compose with Select, Button, menus, etc. */
const LibuvBrandIcon = (props: BrandIconProps) => <BrandIcon slug="libuv" {...props} />

/** Lichess mark — compose with Select, Button, menus, etc. */
const LichessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lichess" {...props} />

/** Lidl mark — compose with Select, Button, menus, etc. */
const LidlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lidl" {...props} />

/** LIFX mark — compose with Select, Button, menus, etc. */
const LIFXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lifx" {...props} />

/** LightBurn mark — compose with Select, Button, menus, etc. */
const LightBurnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lightburn" {...props} />

/** Lighthouse mark — compose with Select, Button, menus, etc. */
const LighthouseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lighthouse" {...props} />

/** Lightning mark — compose with Select, Button, menus, etc. */
const LightningBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lightning" {...props} />

/** LimeSurvey mark — compose with Select, Button, menus, etc. */
const LimeSurveyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="limesurvey" {...props} />

/** LINE mark — compose with Select, Button, menus, etc. */
const LINEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="line" {...props} />

/** LineageOS mark — compose with Select, Button, menus, etc. */
const LineageOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lineageos" {...props} />

/** Linear mark — compose with Select, Button, menus, etc. */
const LinearBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linear" {...props} />

/** LinkedIn mark — compose with Select, Button, menus, etc. */
const LinkedInBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linkedin" {...props} />

/** Linkerd mark — compose with Select, Button, menus, etc. */
const LinkerdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linkerd" {...props} />

/** Linkfire mark — compose with Select, Button, menus, etc. */
const LinkfireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linkfire" {...props} />

/** Linksys mark — compose with Select, Button, menus, etc. */
const LinksysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linksys" {...props} />

/** Linktree mark — compose with Select, Button, menus, etc. */
const LinktreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linktree" {...props} />

/** Linkvertise mark — compose with Select, Button, menus, etc. */
const LinkvertiseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linkvertise" {...props} />

/** Linphone mark — compose with Select, Button, menus, etc. */
const LinphoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linphone" {...props} />

/** LintCode mark — compose with Select, Button, menus, etc. */
const LintCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lintcode" {...props} />

/** Linux mark — compose with Select, Button, menus, etc. */
const LinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linux" {...props} />

/** Linux Containers mark — compose with Select, Button, menus, etc. */
const LinuxContainersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linuxcontainers" {...props} />

/** Linux Foundation mark — compose with Select, Button, menus, etc. */
const LinuxFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linuxfoundation" {...props} />

/** Linux Mint mark — compose with Select, Button, menus, etc. */
const LinuxMintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linuxmint" {...props} />

/** Linux Professional Institute mark — compose with Select, Button, menus, etc. */
const LinuxProfessionalInstituteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linuxprofessionalinstitute" {...props} />

/** LinuxServer mark — compose with Select, Button, menus, etc. */
const LinuxServerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="linuxserver" {...props} />

/** Lion Air mark — compose with Select, Button, menus, etc. */
const LionAirBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lionair" {...props} />

/** Liquibase mark — compose with Select, Button, menus, etc. */
const LiquibaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="liquibase" {...props} />

/** ListenHub mark — compose with Select, Button, menus, etc. */
const ListenHubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="listenhub" {...props} />

/** listmonk mark — compose with Select, Button, menus, etc. */
const ListmonkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="listmonk" {...props} />

/** Lit mark — compose with Select, Button, menus, etc. */
const LitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lit" {...props} />

/** Litecoin mark — compose with Select, Button, menus, etc. */
const LitecoinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="litecoin" {...props} />

/** Literal mark — compose with Select, Button, menus, etc. */
const LiteralBrandIcon = (props: BrandIconProps) => <BrandIcon slug="literal" {...props} />

/** LITIENGINE mark — compose with Select, Button, menus, etc. */
const LitiengineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="litiengine" {...props} />

/** LiveChat mark — compose with Select, Button, menus, etc. */
const LiveChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="livechat" {...props} />

/** LiveJournal mark — compose with Select, Button, menus, etc. */
const LiveJournalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="livejournal" {...props} />

/** LiveKit mark — compose with Select, Button, menus, etc. */
const LiveKitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="livekit" {...props} />

/** Livewire mark — compose with Select, Button, menus, etc. */
const LivewireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="livewire" {...props} />

/** LLVM mark — compose with Select, Button, menus, etc. */
const LLVMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="llvm" {...props} />

/** LM Studio mark — compose with Select, Button, menus, etc. */
const LMStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lmstudio" {...props} />

/** LMMS mark — compose with Select, Button, menus, etc. */
const LMMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lmms" {...props} />

/** Lobsters mark — compose with Select, Button, menus, etc. */
const LobstersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lobsters" {...props} />

/** Local mark — compose with Select, Button, menus, etc. */
const LocalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="local" {...props} />

/** LocalSend mark — compose with Select, Button, menus, etc. */
const LocalSendBrandIcon = (props: BrandIconProps) => <BrandIcon slug="localsend" {...props} />

/** LocalXpose mark — compose with Select, Button, menus, etc. */
const LocalXposeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="localxpose" {...props} />

/** Locust mark — compose with Select, Button, menus, etc. */
const LocustBrandIcon = (props: BrandIconProps) => <BrandIcon slug="locust" {...props} />

/** Lodash mark — compose with Select, Button, menus, etc. */
const LodashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lodash" {...props} />

/** LogMeIn mark — compose with Select, Button, menus, etc. */
const LogMeInBrandIcon = (props: BrandIconProps) => <BrandIcon slug="logmein" {...props} />

/** Logseq mark — compose with Select, Button, menus, etc. */
const LogseqBrandIcon = (props: BrandIconProps) => <BrandIcon slug="logseq" {...props} />

/** Logstash mark — compose with Select, Button, menus, etc. */
const LogstashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="logstash" {...props} />

/** Longhorn mark — compose with Select, Button, menus, etc. */
const LonghornBrandIcon = (props: BrandIconProps) => <BrandIcon slug="longhorn" {...props} />

/** Looker mark — compose with Select, Button, menus, etc. */
const LookerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="looker" {...props} />

/** Loom mark — compose with Select, Button, menus, etc. */
const LoomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="loom" {...props} />

/** Loop mark — compose with Select, Button, menus, etc. */
const LoopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="loop" {...props} />

/** LoopBack mark — compose with Select, Button, menus, etc. */
const LoopBackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="loopback" {...props} />

/** Loops mark — compose with Select, Button, menus, etc. */
const LoopsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="loops" {...props} />

/** Loot Crate mark — compose with Select, Button, menus, etc. */
const LootCrateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lootcrate" {...props} />

/** Lospec mark — compose with Select, Button, menus, etc. */
const LospecBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lospec" {...props} />

/** LOT Polish Airlines mark — compose with Select, Button, menus, etc. */
const LOTPolishAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lotpolishairlines" {...props} />

/** LottieFiles mark — compose with Select, Button, menus, etc. */
const LottieFilesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lottiefiles" {...props} />

/** LTspice mark — compose with Select, Button, menus, etc. */
const LTspiceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ltspice" {...props} />

/** Lua mark — compose with Select, Button, menus, etc. */
const LuaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lua" {...props} />

/** Luanti mark — compose with Select, Button, menus, etc. */
const LuantiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="luanti" {...props} />

/** Luau mark — compose with Select, Button, menus, etc. */
const LuauBrandIcon = (props: BrandIconProps) => <BrandIcon slug="luau" {...props} />

/** Lubuntu mark — compose with Select, Button, menus, etc. */
const LubuntuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lubuntu" {...props} />

/** Lucia mark — compose with Select, Button, menus, etc. */
const LuciaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lucia" {...props} />

/** Lucid mark — compose with Select, Button, menus, etc. */
const LucidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lucid" {...props} />

/** Lucide mark — compose with Select, Button, menus, etc. */
const LucideBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lucide" {...props} />

/** Ludwig mark — compose with Select, Button, menus, etc. */
const LudwigBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ludwig" {...props} />

/** Lufthansa mark — compose with Select, Button, menus, etc. */
const LufthansaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lufthansa" {...props} />

/** Lumen mark — compose with Select, Button, menus, etc. */
const LumenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lumen" {...props} />

/** Lunacy mark — compose with Select, Button, menus, etc. */
const LunacyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lunacy" {...props} />

/** Luogu mark — compose with Select, Button, menus, etc. */
const LuoguBrandIcon = (props: BrandIconProps) => <BrandIcon slug="luogu" {...props} />

/** Lutris mark — compose with Select, Button, menus, etc. */
const LutrisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lutris" {...props} />

/** LVGL mark — compose with Select, Button, menus, etc. */
const LVGLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lvgl" {...props} />

/** Lydia mark — compose with Select, Button, menus, etc. */
const LydiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lydia" {...props} />

/** Lyft mark — compose with Select, Button, menus, etc. */
const LyftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="lyft" {...props} />

/** M5Stack mark — compose with Select, Button, menus, etc. */
const M5StackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="m5stack" {...props} />

/** MAAS mark — compose with Select, Button, menus, etc. */
const MAASBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maas" {...props} />

/** macOS mark — compose with Select, Button, menus, etc. */
const MacOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="macos" {...props} />

/** MacPaw mark — compose with Select, Button, menus, etc. */
const MacPawBrandIcon = (props: BrandIconProps) => <BrandIcon slug="macpaw" {...props} />

/** MacPorts mark — compose with Select, Button, menus, etc. */
const MacPortsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="macports" {...props} />

/** Macy's mark — compose with Select, Button, menus, etc. */
const MacySBrandIcon = (props: BrandIconProps) => <BrandIcon slug="macys" {...props} />

/** Magasins U mark — compose with Select, Button, menus, etc. */
const MagasinsUBrandIcon = (props: BrandIconProps) => <BrandIcon slug="magasinsu" {...props} />

/** Magic mark — compose with Select, Button, menus, etc. */
const MagicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="magic" {...props} />

/** Magisk mark — compose with Select, Button, menus, etc. */
const MagiskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="magisk" {...props} />

/** Mahindra mark — compose with Select, Button, menus, etc. */
const MahindraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mahindra" {...props} />

/** mail.com mark — compose with Select, Button, menus, etc. */
const MailComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maildotcom" {...props} />

/** Mail.Ru mark — compose with Select, Button, menus, etc. */
const MailRuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maildotru" {...props} />

/** mailbox mark — compose with Select, Button, menus, etc. */
const MailboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mailbox" {...props} />

/** MailChimp mark — compose with Select, Button, menus, etc. */
const MailChimpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mailchimp" {...props} />

/** Mailgun mark — compose with Select, Button, menus, etc. */
const MailgunBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mailgun" {...props} />

/** Mailtrap mark — compose with Select, Button, menus, etc. */
const MailtrapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mailtrap" {...props} />

/** MainWP mark — compose with Select, Button, menus, etc. */
const MainWPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mainwp" {...props} />

/** Major League Hacking mark — compose with Select, Button, menus, etc. */
const MajorLeagueHackingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="majorleaguehacking" {...props} />

/** Make mark — compose with Select, Button, menus, etc. */
const MakeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="make" {...props} />

/** MakerBot mark — compose with Select, Button, menus, etc. */
const MakerBotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="makerbot" {...props} />

/** Malt mark — compose with Select, Button, menus, etc. */
const MaltBrandIcon = (props: BrandIconProps) => <BrandIcon slug="malt" {...props} />

/** Malwarebytes mark — compose with Select, Button, menus, etc. */
const MalwarebytesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="malwarebytes" {...props} />

/** Mamba UI mark — compose with Select, Button, menus, etc. */
const MambaUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mambaui" {...props} />

/** MAMP mark — compose with Select, Button, menus, etc. */
const MAMPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mamp" {...props} />

/** MAN mark — compose with Select, Button, menus, etc. */
const MANBrandIcon = (props: BrandIconProps) => <BrandIcon slug="man" {...props} />

/** ManageIQ mark — compose with Select, Button, menus, etc. */
const ManageIQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="manageiq" {...props} />

/** Mangacollec mark — compose with Select, Button, menus, etc. */
const MangacollecBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mangacollec" {...props} />

/** MangaUpdates mark — compose with Select, Button, menus, etc. */
const MangaUpdatesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mangaupdates" {...props} />

/** Manjaro mark — compose with Select, Button, menus, etc. */
const ManjaroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="manjaro" {...props} />

/** Mantine mark — compose with Select, Button, menus, etc. */
const MantineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mantine" {...props} />

/** Mapbox mark — compose with Select, Button, menus, etc. */
const MapboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mapbox" {...props} />

/** Mapillary mark — compose with Select, Button, menus, etc. */
const MapillaryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mapillary" {...props} />

/** MapLibre mark — compose with Select, Button, menus, etc. */
const MapLibreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maplibre" {...props} />

/** MapTiler mark — compose with Select, Button, menus, etc. */
const MapTilerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maptiler" {...props} />

/** MariaDB mark — compose with Select, Button, menus, etc. */
const MariaDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mariadb" {...props} />

/** MariaDB Foundation mark — compose with Select, Button, menus, etc. */
const MariaDBFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mariadbfoundation" {...props} />

/** Markdown mark — compose with Select, Button, menus, etc. */
const MarkdownBrandIcon = (props: BrandIconProps) => <BrandIcon slug="markdown" {...props} />

/** Marko mark — compose with Select, Button, menus, etc. */
const MarkoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="marko" {...props} />

/** Marriott mark — compose with Select, Button, menus, etc. */
const MarriottBrandIcon = (props: BrandIconProps) => <BrandIcon slug="marriott" {...props} />

/** MarvelApp mark — compose with Select, Button, menus, etc. */
const MarvelAppBrandIcon = (props: BrandIconProps) => <BrandIcon slug="marvelapp" {...props} />

/** Maserati mark — compose with Select, Button, menus, etc. */
const MaseratiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maserati" {...props} />

/** MasterCard mark — compose with Select, Button, menus, etc. */
const MasterCardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mastercard" {...props} />

/** mastercomfig mark — compose with Select, Button, menus, etc. */
const MastercomfigBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mastercomfig" {...props} />

/** Mastodon mark — compose with Select, Button, menus, etc. */
const MastodonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mastodon" {...props} />

/** Material Design mark — compose with Select, Button, menus, etc. */
const MaterialDesignBrandIcon = (props: BrandIconProps) => <BrandIcon slug="materialdesign" {...props} />

/** Material Design Icons mark — compose with Select, Button, menus, etc. */
const MaterialDesignIconsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="materialdesignicons" {...props} />

/** Material for MkDocs mark — compose with Select, Button, menus, etc. */
const MaterialForMkDocsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="materialformkdocs" {...props} />

/** Matillion mark — compose with Select, Button, menus, etc. */
const MatillionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="matillion" {...props} />

/** Matomo mark — compose with Select, Button, menus, etc. */
const MatomoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="matomo" {...props} />

/** Matrix mark — compose with Select, Button, menus, etc. */
const MatrixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="matrix" {...props} />

/** Matter.js mark — compose with Select, Button, menus, etc. */
const MatterJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="matterdotjs" {...props} />

/** Mattermost mark — compose with Select, Button, menus, etc. */
const MattermostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mattermost" {...props} />

/** Matternet mark — compose with Select, Button, menus, etc. */
const MatternetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="matternet" {...props} />

/** Mautic mark — compose with Select, Button, menus, etc. */
const MauticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mautic" {...props} />

/** Max mark — compose with Select, Button, menus, etc. */
const MaxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="max" {...props} />

/** Max-Planck-Gesellschaft mark — compose with Select, Button, menus, etc. */
const MaxPlanckGesellschaftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maxplanckgesellschaft" {...props} />

/** Maytag mark — compose with Select, Button, menus, etc. */
const MaytagBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maytag" {...props} />

/** Mazda mark — compose with Select, Button, menus, etc. */
const MazdaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mazda" {...props} />

/** Maze mark — compose with Select, Button, menus, etc. */
const MazeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="maze" {...props} />

/** McAfee mark — compose with Select, Button, menus, etc. */
const McAfeeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mcafee" {...props} />

/** McDonald's mark — compose with Select, Button, menus, etc. */
const McDonaldSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mcdonalds" {...props} />

/** McLaren mark — compose with Select, Button, menus, etc. */
const McLarenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mclaren" {...props} />

/** MDBList mark — compose with Select, Button, menus, etc. */
const MDBListBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mdblist" {...props} />

/** mdBook mark — compose with Select, Button, menus, etc. */
const MdBookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mdbook" {...props} />

/** MDN Web Docs mark — compose with Select, Button, menus, etc. */
const MDNWebDocsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mdnwebdocs" {...props} />

/** MDX mark — compose with Select, Button, menus, etc. */
const MDXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mdx" {...props} />

/** Mealie mark — compose with Select, Button, menus, etc. */
const MealieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mealie" {...props} />

/** MediaFire mark — compose with Select, Button, menus, etc. */
const MediaFireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mediafire" {...props} />

/** MediaMarkt mark — compose with Select, Button, menus, etc. */
const MediaMarktBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mediamarkt" {...props} />

/** MediaPipe mark — compose with Select, Button, menus, etc. */
const MediaPipeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mediapipe" {...props} />

/** MediaTek mark — compose with Select, Button, menus, etc. */
const MediaTekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mediatek" {...props} />

/** MediBang Paint mark — compose with Select, Button, menus, etc. */
const MediBangPaintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="medibangpaint" {...props} />

/** Medium mark — compose with Select, Button, menus, etc. */
const MediumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="medium" {...props} />

/** Medusa mark — compose with Select, Button, menus, etc. */
const MedusaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="medusa" {...props} />

/** Meetup mark — compose with Select, Button, menus, etc. */
const MeetupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="meetup" {...props} />

/** MEGA mark — compose with Select, Button, menus, etc. */
const MEGABrandIcon = (props: BrandIconProps) => <BrandIcon slug="mega" {...props} />

/** Meilisearch mark — compose with Select, Button, menus, etc. */
const MeilisearchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="meilisearch" {...props} />

/** Meituan mark — compose with Select, Button, menus, etc. */
const MeituanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="meituan" {...props} />

/** Meizu mark — compose with Select, Button, menus, etc. */
const MeizuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="meizu" {...props} />

/** Mendeley mark — compose with Select, Button, menus, etc. */
const MendeleyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mendeley" {...props} />

/** MentorCruise mark — compose with Select, Button, menus, etc. */
const MentorCruiseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mentorcruise" {...props} />

/** Mercado Pago mark — compose with Select, Button, menus, etc. */
const MercadoPagoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mercadopago" {...props} />

/** Merck mark — compose with Select, Button, menus, etc. */
const MerckBrandIcon = (props: BrandIconProps) => <BrandIcon slug="merck" {...props} />

/** Mercurial mark — compose with Select, Button, menus, etc. */
const MercurialBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mercurial" {...props} />

/** Mermaid mark — compose with Select, Button, menus, etc. */
const MermaidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mermaid" {...props} />

/** Messenger mark — compose with Select, Button, menus, etc. */
const MessengerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="messenger" {...props} />

/** Meta mark — compose with Select, Button, menus, etc. */
const MetaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="meta" {...props} />

/** Meta AI mark — compose with Select, Button, menus, etc. */
const MetaAIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metaai" {...props} />

/** Metabase mark — compose with Select, Button, menus, etc. */
const MetabaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metabase" {...props} />

/** Metacritic mark — compose with Select, Button, menus, etc. */
const MetacriticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metacritic" {...props} />

/** MetaFilter mark — compose with Select, Button, menus, etc. */
const MetaFilterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metafilter" {...props} />

/** MetaGer mark — compose with Select, Button, menus, etc. */
const MetaGerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metager" {...props} />

/** Metasploit mark — compose with Select, Button, menus, etc. */
const MetasploitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metasploit" {...props} />

/** Meteor mark — compose with Select, Button, menus, etc. */
const MeteorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="meteor" {...props} />

/** Metro mark — compose with Select, Button, menus, etc. */
const MetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metro" {...props} />

/** Metro de la Ciudad de México mark — compose with Select, Button, menus, etc. */
const MetroDeLaCiudadDeMXicoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metrodelaciudaddemexico" {...props} />

/** Metro de Madrid mark — compose with Select, Button, menus, etc. */
const MetroDeMadridBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metrodemadrid" {...props} />

/** Métro de Paris mark — compose with Select, Button, menus, etc. */
const MTroDeParisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="metrodeparis" {...props} />

/** MeWe mark — compose with Select, Button, menus, etc. */
const MeWeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mewe" {...props} />

/** Mezmo mark — compose with Select, Button, menus, etc. */
const MezmoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mezmo" {...props} />

/** MG mark — compose with Select, Button, menus, etc. */
const MGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mg" {...props} />

/** Micro Editor mark — compose with Select, Button, menus, etc. */
const MicroEditorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="microeditor" {...props} />

/** micro:bit mark — compose with Select, Button, menus, etc. */
const MicroBitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="microbit" {...props} />

/** Micro.blog mark — compose with Select, Button, menus, etc. */
const MicroBlogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="microdotblog" {...props} />

/** MicroPython mark — compose with Select, Button, menus, etc. */
const MicroPythonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="micropython" {...props} />

/** Microsoft mark — compose with Select, Button, menus, etc. */
const MicrosoftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="microsoft" {...props} />

/** Microstation mark — compose with Select, Button, menus, etc. */
const MicrostationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="microstation" {...props} />

/** MicroStrategy mark — compose with Select, Button, menus, etc. */
const MicroStrategyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="microstrategy" {...props} />

/** MIDI mark — compose with Select, Button, menus, etc. */
const MIDIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="midi" {...props} />

/** Migadu mark — compose with Select, Button, menus, etc. */
const MigaduBrandIcon = (props: BrandIconProps) => <BrandIcon slug="migadu" {...props} />

/** Mihon mark — compose with Select, Button, menus, etc. */
const MihonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mihon" {...props} />

/** miHoYo mark — compose with Select, Button, menus, etc. */
const MiHoYoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mihoyo" {...props} />

/** MikroTik mark — compose with Select, Button, menus, etc. */
const MikroTikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mikrotik" {...props} />

/** Milanote mark — compose with Select, Button, menus, etc. */
const MilanoteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="milanote" {...props} />

/** Milvus mark — compose with Select, Button, menus, etc. */
const MilvusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="milvus" {...props} />

/** Minds mark — compose with Select, Button, menus, etc. */
const MindsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="minds" {...props} />

/** MinGW-w64 mark — compose with Select, Button, menus, etc. */
const MinGWW64BrandIcon = (props: BrandIconProps) => <BrandIcon slug="mingww64" {...props} />

/** Mini mark — compose with Select, Button, menus, etc. */
const MiniBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mini" {...props} />

/** MiniMax mark — compose with Select, Button, menus, etc. */
const MiniMaxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="minimax" {...props} />

/** MinIO mark — compose with Select, Button, menus, etc. */
const MinIOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="minio" {...props} />

/** Mintlify mark — compose with Select, Button, menus, etc. */
const MintlifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mintlify" {...props} />

/** Minutemailer mark — compose with Select, Button, menus, etc. */
const MinutemailerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="minutemailer" {...props} />

/** Miraheze mark — compose with Select, Button, menus, etc. */
const MirahezeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="miraheze" {...props} />

/** Miro mark — compose with Select, Button, menus, etc. */
const MiroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="miro" {...props} />

/** Misskey mark — compose with Select, Button, menus, etc. */
const MisskeyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="misskey" {...props} />

/** Mistral AI mark — compose with Select, Button, menus, etc. */
const MistralAIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mistralai" {...props} />

/** Mitsubishi mark — compose with Select, Button, menus, etc. */
const MitsubishiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mitsubishi" {...props} />

/** Mix mark — compose with Select, Button, menus, etc. */
const MixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mix" {...props} />

/** Mixcloud mark — compose with Select, Button, menus, etc. */
const MixcloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mixcloud" {...props} />

/** Mixpanel mark — compose with Select, Button, menus, etc. */
const MixpanelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mixpanel" {...props} />

/** MLB mark — compose with Select, Button, menus, etc. */
const MLBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mlb" {...props} />

/** MLflow mark — compose with Select, Button, menus, etc. */
const MLflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mlflow" {...props} />

/** MobX mark — compose with Select, Button, menus, etc. */
const MobXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mobx" {...props} />

/** MobX-State-Tree mark — compose with Select, Button, menus, etc. */
const MobXStateTreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mobxstatetree" {...props} />

/** Mocha mark — compose with Select, Button, menus, etc. */
const MochaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mocha" {...props} />

/** Mock Service Worker mark — compose with Select, Button, menus, etc. */
const MockServiceWorkerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mockserviceworker" {...props} />

/** Modal mark — compose with Select, Button, menus, etc. */
const ModalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="modal" {...props} />

/** Model Context Protocol mark — compose with Select, Button, menus, etc. */
const ModelContextProtocolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="modelcontextprotocol" {...props} />

/** ModelScope mark — compose with Select, Button, menus, etc. */
const ModelScopeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="modelscope" {...props} />

/** Modin mark — compose with Select, Button, menus, etc. */
const ModinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="modin" {...props} />

/** Modrinth mark — compose with Select, Button, menus, etc. */
const ModrinthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="modrinth" {...props} />

/** MODX mark — compose with Select, Button, menus, etc. */
const MODXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="modx" {...props} />

/** Mojeek mark — compose with Select, Button, menus, etc. */
const MojeekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mojeek" {...props} />

/** Moleculer mark — compose with Select, Button, menus, etc. */
const MoleculerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moleculer" {...props} />

/** Momenteo mark — compose with Select, Button, menus, etc. */
const MomenteoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="momenteo" {...props} />

/** Monero mark — compose with Select, Button, menus, etc. */
const MoneroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monero" {...props} />

/** MoneyGram mark — compose with Select, Button, menus, etc. */
const MoneyGramBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moneygram" {...props} />

/** MongoDB mark — compose with Select, Button, menus, etc. */
const MongoDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mongodb" {...props} />

/** Mongoose mark — compose with Select, Button, menus, etc. */
const MongooseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mongoose" {...props} />

/** Mongoose mark — compose with Select, Button, menus, etc. */
const MongoosedotwsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mongoosedotws" {...props} />

/** Monica mark — compose with Select, Button, menus, etc. */
const MonicaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monica" {...props} />

/** monkey tie mark — compose with Select, Button, menus, etc. */
const MonkeyTieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monkeytie" {...props} />

/** Monkeytype mark — compose with Select, Button, menus, etc. */
const MonkeytypeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monkeytype" {...props} />

/** MonoGame mark — compose with Select, Button, menus, etc. */
const MonoGameBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monogame" {...props} />

/** Monoprix mark — compose with Select, Button, menus, etc. */
const MonoprixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monoprix" {...props} />

/** Monster mark — compose with Select, Button, menus, etc. */
const MonsterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monster" {...props} />

/** Monzo mark — compose with Select, Button, menus, etc. */
const MonzoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="monzo" {...props} />

/** Moo mark — compose with Select, Button, menus, etc. */
const MooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moo" {...props} />

/** Moodle mark — compose with Select, Button, menus, etc. */
const MoodleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moodle" {...props} />

/** Moonrepo mark — compose with Select, Button, menus, etc. */
const MoonrepoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moonrepo" {...props} />

/** Moonshot AI mark — compose with Select, Button, menus, etc. */
const MoonshotAIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moonshotai" {...props} />

/** Moq mark — compose with Select, Button, menus, etc. */
const MoqBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moq" {...props} />

/** Moqups mark — compose with Select, Button, menus, etc. */
const MoqupsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moqups" {...props} />

/** Morrisons mark — compose with Select, Button, menus, etc. */
const MorrisonsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="morrisons" {...props} />

/** Moscow Metro mark — compose with Select, Button, menus, etc. */
const MoscowMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="moscowmetro" {...props} />

/** Motorola mark — compose with Select, Button, menus, etc. */
const MotorolaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="motorola" {...props} />

/** Movistar mark — compose with Select, Button, menus, etc. */
const MovistarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="movistar" {...props} />

/** Mozilla mark — compose with Select, Button, menus, etc. */
const MozillaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mozilla" {...props} />

/** mpv mark — compose with Select, Button, menus, etc. */
const MpvBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mpv" {...props} />

/** MQTT mark — compose with Select, Button, menus, etc. */
const MQTTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mqtt" {...props} />

/** MSI mark — compose with Select, Button, menus, etc. */
const MSIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="msi" {...props} />

/** MSI Business mark — compose with Select, Button, menus, etc. */
const MSIBusinessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="msibusiness" {...props} />

/** MTA mark — compose with Select, Button, menus, etc. */
const MTABrandIcon = (props: BrandIconProps) => <BrandIcon slug="mta" {...props} />

/** MTR mark — compose with Select, Button, menus, etc. */
const MTRBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mtr" {...props} />

/** MUBI mark — compose with Select, Button, menus, etc. */
const MUBIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mubi" {...props} />

/** MUI mark — compose with Select, Button, menus, etc. */
const MUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mui" {...props} />

/** Müller mark — compose with Select, Button, menus, etc. */
const MLlerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="muller" {...props} />

/** Mullvad mark — compose with Select, Button, menus, etc. */
const MullvadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mullvad" {...props} />

/** Multisim mark — compose with Select, Button, menus, etc. */
const MultisimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="multisim" {...props} />

/** Mumble mark — compose with Select, Button, menus, etc. */
const MumbleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mumble" {...props} />

/** MUO mark — compose with Select, Button, menus, etc. */
const MUOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="muo" {...props} />

/** Mural mark — compose with Select, Button, menus, etc. */
const MuralBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mural" {...props} />

/** MusicBrainz mark — compose with Select, Button, menus, etc. */
const MusicBrainzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="musicbrainz" {...props} />

/** MX Linux mark — compose with Select, Button, menus, etc. */
const MXLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mxlinux" {...props} />

/** MyAnimeList mark — compose with Select, Button, menus, etc. */
const MyAnimeListBrandIcon = (props: BrandIconProps) => <BrandIcon slug="myanimelist" {...props} />

/** MyGet mark — compose with Select, Button, menus, etc. */
const MyGetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="myget" {...props} />

/** MYOB mark — compose with Select, Button, menus, etc. */
const MYOBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="myob" {...props} />

/** MyShows mark — compose with Select, Button, menus, etc. */
const MyShowsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="myshows" {...props} />

/** Myspace mark — compose with Select, Button, menus, etc. */
const MyspaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="myspace" {...props} />

/** MySQL mark — compose with Select, Button, menus, etc. */
const MySQLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="mysql" {...props} />

/** N26 mark — compose with Select, Button, menus, etc. */
const N26BrandIcon = (props: BrandIconProps) => <BrandIcon slug="n26" {...props} />

/** n8n mark — compose with Select, Button, menus, etc. */
const N8nBrandIcon = (props: BrandIconProps) => <BrandIcon slug="n8n" {...props} />

/** Namebase mark — compose with Select, Button, menus, etc. */
const NamebaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="namebase" {...props} />

/** Namecheap mark — compose with Select, Button, menus, etc. */
const NamecheapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="namecheap" {...props} />

/** NameMC mark — compose with Select, Button, menus, etc. */
const NameMCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="namemc" {...props} />

/** NameSilo mark — compose with Select, Button, menus, etc. */
const NameSiloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="namesilo" {...props} />

/** Namu Wiki mark — compose with Select, Button, menus, etc. */
const NamuWikiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="namuwiki" {...props} />

/** Nano mark — compose with Select, Button, menus, etc. */
const NanoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nano" {...props} />

/** Nano Stores mark — compose with Select, Button, menus, etc. */
const NanoStoresBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nanostores" {...props} />

/** Napster mark — compose with Select, Button, menus, etc. */
const NapsterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="napster" {...props} />

/** NASA mark — compose with Select, Button, menus, etc. */
const NASABrandIcon = (props: BrandIconProps) => <BrandIcon slug="nasa" {...props} />

/** National Grid mark — compose with Select, Button, menus, etc. */
const NationalGridBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nationalgrid" {...props} />

/** National Rail mark — compose with Select, Button, menus, etc. */
const NationalRailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nationalrail" {...props} />

/** NativeScript mark — compose with Select, Button, menus, etc. */
const NativeScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nativescript" {...props} />

/** NATS.io mark — compose with Select, Button, menus, etc. */
const NATSIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="natsdotio" {...props} />

/** Naver mark — compose with Select, Button, menus, etc. */
const NaverBrandIcon = (props: BrandIconProps) => <BrandIcon slug="naver" {...props} />

/** NBA mark — compose with Select, Button, menus, etc. */
const NBABrandIcon = (props: BrandIconProps) => <BrandIcon slug="nba" {...props} />

/** NBB mark — compose with Select, Button, menus, etc. */
const NBBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nbb" {...props} />

/** NBC mark — compose with Select, Button, menus, etc. */
const NBCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nbc" {...props} />

/** NDI mark — compose with Select, Button, menus, etc. */
const NDIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ndi" {...props} />

/** NDR mark — compose with Select, Button, menus, etc. */
const NDRBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ndr" {...props} />

/** NEAR mark — compose with Select, Button, menus, etc. */
const NEARBrandIcon = (props: BrandIconProps) => <BrandIcon slug="near" {...props} />

/** Nebula mark — compose with Select, Button, menus, etc. */
const NebulaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nebula" {...props} />

/** NEC mark — compose with Select, Button, menus, etc. */
const NECBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nec" {...props} />

/** Nederlandse Spoorwegen mark — compose with Select, Button, menus, etc. */
const NederlandseSpoorwegenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nederlandsespoorwegen" {...props} />

/** Neo4j mark — compose with Select, Button, menus, etc. */
const Neo4jBrandIcon = (props: BrandIconProps) => <BrandIcon slug="neo4j" {...props} />

/** Neon mark — compose with Select, Button, menus, etc. */
const NeonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="neon" {...props} />

/** Neovim mark — compose with Select, Button, menus, etc. */
const NeovimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="neovim" {...props} />

/** Neptune mark — compose with Select, Button, menus, etc. */
const NeptuneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="neptune" {...props} />

/** NestJS mark — compose with Select, Button, menus, etc. */
const NestJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nestjs" {...props} />

/** NetApp mark — compose with Select, Button, menus, etc. */
const NetAppBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netapp" {...props} />

/** NetBSD mark — compose with Select, Button, menus, etc. */
const NetBSDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netbsd" {...props} />

/** netcup mark — compose with Select, Button, menus, etc. */
const NetcupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netcup" {...props} />

/** Netdata mark — compose with Select, Button, menus, etc. */
const NetdataBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netdata" {...props} />

/** NetEase Cloud Music mark — compose with Select, Button, menus, etc. */
const NetEaseCloudMusicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="neteasecloudmusic" {...props} />

/** Netflix mark — compose with Select, Button, menus, etc. */
const NetflixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netflix" {...props} />

/** NETGEAR mark — compose with Select, Button, menus, etc. */
const NetgearBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netgear" {...props} />

/** Netim mark — compose with Select, Button, menus, etc. */
const NetimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netim" {...props} />

/** Netlify mark — compose with Select, Button, menus, etc. */
const NetlifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netlify" {...props} />

/** Nette mark — compose with Select, Button, menus, etc. */
const NetteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nette" {...props} />

/** Netto mark — compose with Select, Button, menus, etc. */
const NettoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="netto" {...props} />

/** Neutralinojs mark — compose with Select, Button, menus, etc. */
const NeutralinojsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="neutralinojs" {...props} />

/** New Balance mark — compose with Select, Button, menus, etc. */
const NewBalanceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newbalance" {...props} />

/** New Japan Pro-Wrestling mark — compose with Select, Button, menus, etc. */
const NewJapanProWrestlingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newjapanprowrestling" {...props} />

/** New Relic mark — compose with Select, Button, menus, etc. */
const NewRelicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newrelic" {...props} />

/** New York Times mark — compose with Select, Button, menus, etc. */
const NewYorkTimesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newyorktimes" {...props} />

/** Newegg mark — compose with Select, Button, menus, etc. */
const NeweggBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newegg" {...props} />

/** Newgrounds mark — compose with Select, Button, menus, etc. */
const NewgroundsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newgrounds" {...props} />

/** NewPipe mark — compose with Select, Button, menus, etc. */
const NewPipeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="newpipe" {...props} />

/** NEXON mark — compose with Select, Button, menus, etc. */
const NexonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nexon" {...props} />

/** Next.js mark — compose with Select, Button, menus, etc. */
const NextJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextdotjs" {...props} />

/** nextbike mark — compose with Select, Button, menus, etc. */
const NextbikeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextbike" {...props} />

/** NextBillion.ai mark — compose with Select, Button, menus, etc. */
const NextBillionAiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextbilliondotai" {...props} />

/** Nextcloud mark — compose with Select, Button, menus, etc. */
const NextcloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextcloud" {...props} />

/** NextDNS mark — compose with Select, Button, menus, etc. */
const NextDNSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextdns" {...props} />

/** Nextdoor mark — compose with Select, Button, menus, etc. */
const NextdoorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextdoor" {...props} />

/** Nextflow mark — compose with Select, Button, menus, etc. */
const NextflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextflow" {...props} />

/** Nextra mark — compose with Select, Button, menus, etc. */
const NextraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nextra" {...props} />

/** nf-core mark — compose with Select, Button, menus, etc. */
const NfCoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nfcore" {...props} />

/** NFC mark — compose with Select, Button, menus, etc. */
const NFCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nfc" {...props} />

/** NGINX mark — compose with Select, Button, menus, etc. */
const NginxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nginx" {...props} />

/** Nginx Proxy Manager mark — compose with Select, Button, menus, etc. */
const NginxProxyManagerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nginxproxymanager" {...props} />

/** ngrok mark — compose with Select, Button, menus, etc. */
const NgrokBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ngrok" {...props} />

/** NgRx mark — compose with Select, Button, menus, etc. */
const NgRxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ngrx" {...props} />

/** NHL mark — compose with Select, Button, menus, etc. */
const NHLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nhl" {...props} />

/** Nhost mark — compose with Select, Button, menus, etc. */
const NhostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nhost" {...props} />

/** NiceHash mark — compose with Select, Button, menus, etc. */
const NiceHashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nicehash" {...props} />

/** niconico mark — compose with Select, Button, menus, etc. */
const NiconicoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="niconico" {...props} />

/** Nike mark — compose with Select, Button, menus, etc. */
const NikeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nike" {...props} />

/** Nikon mark — compose with Select, Button, menus, etc. */
const NikonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nikon" {...props} />

/** Nim mark — compose with Select, Button, menus, etc. */
const NimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nim" {...props} />

/** niri mark — compose with Select, Button, menus, etc. */
const NiriBrandIcon = (props: BrandIconProps) => <BrandIcon slug="niri" {...props} />

/** Nissan mark — compose with Select, Button, menus, etc. */
const NissanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nissan" {...props} />

/** NixOS mark — compose with Select, Button, menus, etc. */
const NixOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nixos" {...props} />

/** Nobara Linux mark — compose with Select, Button, menus, etc. */
const NobaraLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nobaralinux" {...props} />

/** Node-RED mark — compose with Select, Button, menus, etc. */
const NodeREDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nodered" {...props} />

/** Node.js mark — compose with Select, Button, menus, etc. */
const NodeJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nodedotjs" {...props} />

/** NodeBB mark — compose with Select, Button, menus, etc. */
const NodeBBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nodebb" {...props} />

/** NodeGui mark — compose with Select, Button, menus, etc. */
const NodeGuiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nodegui" {...props} />

/** Nodemon mark — compose with Select, Button, menus, etc. */
const NodemonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nodemon" {...props} />

/** Nokia mark — compose with Select, Button, menus, etc. */
const NokiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nokia" {...props} />

/** Nomad mark — compose with Select, Button, menus, etc. */
const NomadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nomad" {...props} />

/** Norco mark — compose with Select, Button, menus, etc. */
const NorcoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="norco" {...props} />

/** Nordic Semiconductor mark — compose with Select, Button, menus, etc. */
const NordicSemiconductorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nordicsemiconductor" {...props} />

/** NordVPN mark — compose with Select, Button, menus, etc. */
const NordVPNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nordvpn" {...props} />

/** Normalize.css mark — compose with Select, Button, menus, etc. */
const NormalizeCssBrandIcon = (props: BrandIconProps) => <BrandIcon slug="normalizedotcss" {...props} />

/** Norton mark — compose with Select, Button, menus, etc. */
const NortonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="norton" {...props} />

/** Norwegian mark — compose with Select, Button, menus, etc. */
const NorwegianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="norwegian" {...props} />

/** Note mark — compose with Select, Button, menus, etc. */
const NoteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="note" {...props} />

/** NotebookLM mark — compose with Select, Button, menus, etc. */
const NotebookLMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="notebooklm" {...props} />

/** Notepad++ mark — compose with Select, Button, menus, etc. */
const NotepadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="notepadplusplus" {...props} />

/** Notesnook mark — compose with Select, Button, menus, etc. */
const NotesnookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="notesnook" {...props} />

/** Notion mark — compose with Select, Button, menus, etc. */
const NotionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="notion" {...props} />

/** Notist mark — compose with Select, Button, menus, etc. */
const NotistBrandIcon = (props: BrandIconProps) => <BrandIcon slug="notist" {...props} />

/** Noun Project mark — compose with Select, Button, menus, etc. */
const NounProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nounproject" {...props} />

/** Novu mark — compose with Select, Button, menus, etc. */
const NovuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="novu" {...props} />

/** NOW mark — compose with Select, Button, menus, etc. */
const NOWBrandIcon = (props: BrandIconProps) => <BrandIcon slug="now" {...props} />

/** npm mark — compose with Select, Button, menus, etc. */
const NpmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="npm" {...props} />

/** Nrwl mark — compose with Select, Button, menus, etc. */
const NrwlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nrwl" {...props} />

/** NSIS mark — compose with Select, Button, menus, etc. */
const NSISBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nsis" {...props} />

/** ntfy mark — compose with Select, Button, menus, etc. */
const NtfyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ntfy" {...props} />

/** Nubank mark — compose with Select, Button, menus, etc. */
const NubankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nubank" {...props} />

/** Nucleo mark — compose with Select, Button, menus, etc. */
const NucleoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nucleo" {...props} />

/** NuGet mark — compose with Select, Button, menus, etc. */
const NuGetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nuget" {...props} />

/** Nuke mark — compose with Select, Button, menus, etc. */
const NukeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nuke" {...props} />

/** Numba mark — compose with Select, Button, menus, etc. */
const NumbaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="numba" {...props} />

/** NumPy mark — compose with Select, Button, menus, etc. */
const NumPyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="numpy" {...props} />

/** Nunjucks mark — compose with Select, Button, menus, etc. */
const NunjucksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nunjucks" {...props} />

/** Nushell mark — compose with Select, Button, menus, etc. */
const NushellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nushell" {...props} />

/** Nutanix mark — compose with Select, Button, menus, etc. */
const NutanixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nutanix" {...props} />

/** Nuxt mark — compose with Select, Button, menus, etc. */
const NuxtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nuxt" {...props} />

/** NVIDIA mark — compose with Select, Button, menus, etc. */
const NvidiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nvidia" {...props} />

/** nvm mark — compose with Select, Button, menus, etc. */
const NvmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nvm" {...props} />

/** Nx mark — compose with Select, Button, menus, etc. */
const NxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nx" {...props} />

/** NXP mark — compose with Select, Button, menus, etc. */
const NXPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nxp" {...props} />

/** NZXT mark — compose with Select, Button, menus, etc. */
const NZXTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="nzxt" {...props} />

/** O'Reilly mark — compose with Select, Button, menus, etc. */
const OReillyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oreilly" {...props} />

/** O2 mark — compose with Select, Button, menus, etc. */
const O2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="o2" {...props} />

/** ÖBB mark — compose with Select, Button, menus, etc. */
const BBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="obb" {...props} />

/** OBS Studio mark — compose with Select, Button, menus, etc. */
const OBSStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="obsstudio" {...props} />

/** Observable mark — compose with Select, Button, menus, etc. */
const ObservableBrandIcon = (props: BrandIconProps) => <BrandIcon slug="observable" {...props} />

/** Obsidian mark — compose with Select, Button, menus, etc. */
const ObsidianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="obsidian" {...props} />

/** Obtainium mark — compose with Select, Button, menus, etc. */
const ObtainiumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="obtainium" {...props} />

/** OCaml mark — compose with Select, Button, menus, etc. */
const OCamlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ocaml" {...props} />

/** OCLC mark — compose with Select, Button, menus, etc. */
const OCLCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oclc" {...props} />

/** oclif mark — compose with Select, Button, menus, etc. */
const OclifBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oclif" {...props} />

/** Octane Render mark — compose with Select, Button, menus, etc. */
const OctaneRenderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="octanerender" {...props} />

/** Octave mark — compose with Select, Button, menus, etc. */
const OctaveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="octave" {...props} />

/** October CMS mark — compose with Select, Button, menus, etc. */
const OctoberCMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="octobercms" {...props} />

/** OctoPrint mark — compose with Select, Button, menus, etc. */
const OctoPrintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="octoprint" {...props} />

/** Octopus Deploy mark — compose with Select, Button, menus, etc. */
const OctopusDeployBrandIcon = (props: BrandIconProps) => <BrandIcon slug="octopusdeploy" {...props} />

/** Oculus mark — compose with Select, Button, menus, etc. */
const OculusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oculus" {...props} />

/** Odido mark — compose with Select, Button, menus, etc. */
const OdidoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="odido" {...props} />

/** Odin mark — compose with Select, Button, menus, etc. */
const OdinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="odin" {...props} />

/** Odnoklassniki mark — compose with Select, Button, menus, etc. */
const OdnoklassnikiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="odnoklassniki" {...props} />

/** Odoo mark — compose with Select, Button, menus, etc. */
const OdooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="odoo" {...props} />

/** Odysee mark — compose with Select, Button, menus, etc. */
const OdyseeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="odysee" {...props} />

/** Oh Dear mark — compose with Select, Button, menus, etc. */
const OhDearBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ohdear" {...props} />

/** okcupid mark — compose with Select, Button, menus, etc. */
const OkcupidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="okcupid" {...props} />

/** Okta mark — compose with Select, Button, menus, etc. */
const OktaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="okta" {...props} />

/** OKX mark — compose with Select, Button, menus, etc. */
const OKXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="okx" {...props} />

/** Ollama mark — compose with Select, Button, menus, etc. */
const OllamaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ollama" {...props} />

/** Omada Cloud mark — compose with Select, Button, menus, etc. */
const OmadaCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="omadacloud" {...props} />

/** Omarchy mark — compose with Select, Button, menus, etc. */
const OmarchyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="omarchy" {...props} />

/** OnePlus mark — compose with Select, Button, menus, etc. */
const OnePlusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oneplus" {...props} />

/** OneStream mark — compose with Select, Button, menus, etc. */
const OneStreamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="onestream" {...props} />

/** OnlyFans mark — compose with Select, Button, menus, etc. */
const OnlyFansBrandIcon = (props: BrandIconProps) => <BrandIcon slug="onlyfans" {...props} />

/** ONLYOFFICE mark — compose with Select, Button, menus, etc. */
const OnlyofficeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="onlyoffice" {...props} />

/** ONNX mark — compose with Select, Button, menus, etc. */
const ONNXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="onnx" {...props} />

/** OnStar mark — compose with Select, Button, menus, etc. */
const OnStarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="onstar" {...props} />

/** OOMOL mark — compose with Select, Button, menus, etc. */
const OomolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oomol" {...props} />

/** Opel mark — compose with Select, Button, menus, etc. */
const OpelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opel" {...props} />

/** Open Access mark — compose with Select, Button, menus, etc. */
const OpenAccessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openaccess" {...props} />

/** Open Badges mark — compose with Select, Button, menus, etc. */
const OpenBadgesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openbadges" {...props} />

/** Open Bug Bounty mark — compose with Select, Button, menus, etc. */
const OpenBugBountyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openbugbounty" {...props} />

/** Open Collective mark — compose with Select, Button, menus, etc. */
const OpenCollectiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opencollective" {...props} />

/** Open Containers Initiative mark — compose with Select, Button, menus, etc. */
const OpenContainersInitiativeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opencontainersinitiative" {...props} />

/** Open Source Hardware mark — compose with Select, Button, menus, etc. */
const OpenSourceHardwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opensourcehardware" {...props} />

/** Open Source Initiative mark — compose with Select, Button, menus, etc. */
const OpenSourceInitiativeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opensourceinitiative" {...props} />

/** Open3D mark — compose with Select, Button, menus, etc. */
const Open3DBrandIcon = (props: BrandIconProps) => <BrandIcon slug="open3d" {...props} />

/** OpenAI mark — compose with Select, Button, menus, etc. */
const OpenAIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openai" {...props} />

/** OpenAI Gym mark — compose with Select, Button, menus, etc. */
const OpenAIGymBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openaigym" {...props} />

/** OpenAPI Initiative mark — compose with Select, Button, menus, etc. */
const OpenAPIInitiativeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openapiinitiative" {...props} />

/** OpenBao mark — compose with Select, Button, menus, etc. */
const OpenBaoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openbao" {...props} />

/** OpenBSD mark — compose with Select, Button, menus, etc. */
const OpenBSDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openbsd" {...props} />

/** OpenCage mark — compose with Select, Button, menus, etc. */
const OpenCageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opencage" {...props} />

/** OpenCode mark — compose with Select, Button, menus, etc. */
const OpenCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opencode" {...props} />

/** OpenCritic mark — compose with Select, Button, menus, etc. */
const OpenCriticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opencritic" {...props} />

/** OpenCV mark — compose with Select, Button, menus, etc. */
const OpenCVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opencv" {...props} />

/** OpenFaaS mark — compose with Select, Button, menus, etc. */
const OpenFaaSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openfaas" {...props} />

/** OpenGL mark — compose with Select, Button, menus, etc. */
const OpenGLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opengl" {...props} />

/** openHAB mark — compose with Select, Button, menus, etc. */
const OpenHABBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openhab" {...props} />

/** OpenID mark — compose with Select, Button, menus, etc. */
const OpenIDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openid" {...props} />

/** OpenJDK mark — compose with Select, Button, menus, etc. */
const OpenJDKBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openjdk" {...props} />

/** OpenJS Foundation mark — compose with Select, Button, menus, etc. */
const OpenJSFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openjsfoundation" {...props} />

/** Openlayers mark — compose with Select, Button, menus, etc. */
const OpenlayersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openlayers" {...props} />

/** openmediavault mark — compose with Select, Button, menus, etc. */
const OpenmediavaultBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openmediavault" {...props} />

/** OpenMined mark — compose with Select, Button, menus, etc. */
const OpenMinedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openmined" {...props} />

/** OpenNebula mark — compose with Select, Button, menus, etc. */
const OpenNebulaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opennebula" {...props} />

/** OpenProject mark — compose with Select, Button, menus, etc. */
const OpenProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openproject" {...props} />

/** OpenRouter mark — compose with Select, Button, menus, etc. */
const OpenRouterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openrouter" {...props} />

/** OpenSCAD mark — compose with Select, Button, menus, etc. */
const OpenSCADBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openscad" {...props} />

/** OpenSea mark — compose with Select, Button, menus, etc. */
const OpenSeaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opensea" {...props} />

/** OpenSearch mark — compose with Select, Button, menus, etc. */
const OpenSearchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opensearch" {...props} />

/** OpenSSL mark — compose with Select, Button, menus, etc. */
const OpenSSLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openssl" {...props} />

/** OpenStack mark — compose with Select, Button, menus, etc. */
const OpenStackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openstack" {...props} />

/** OpenStreetMap mark — compose with Select, Button, menus, etc. */
const OpenStreetMapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openstreetmap" {...props} />

/** openSUSE mark — compose with Select, Button, menus, etc. */
const OpenSUSEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opensuse" {...props} />

/** OpenTelemetry mark — compose with Select, Button, menus, etc. */
const OpenTelemetryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opentelemetry" {...props} />

/** OpenText mark — compose with Select, Button, menus, etc. */
const OpenTextBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opentext" {...props} />

/** OpenTofu mark — compose with Select, Button, menus, etc. */
const OpenTofuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opentofu" {...props} />

/** OpenTUI mark — compose with Select, Button, menus, etc. */
const OpenTUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opentui" {...props} />

/** Openverse mark — compose with Select, Button, menus, etc. */
const OpenverseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openverse" {...props} />

/** OpenVPN mark — compose with Select, Button, menus, etc. */
const OpenVPNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openvpn" {...props} />

/** OpenWrt mark — compose with Select, Button, menus, etc. */
const OpenWrtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openwrt" {...props} />

/** OpenZeppelin mark — compose with Select, Button, menus, etc. */
const OpenZeppelinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openzeppelin" {...props} />

/** OpenZFS mark — compose with Select, Button, menus, etc. */
const OpenZFSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="openzfs" {...props} />

/** Opera mark — compose with Select, Button, menus, etc. */
const OperaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opera" {...props} />

/** Opera GX mark — compose with Select, Button, menus, etc. */
const OperaGXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="operagx" {...props} />

/** OPNsense mark — compose with Select, Button, menus, etc. */
const OPNsenseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opnsense" {...props} />

/** OPPO mark — compose with Select, Button, menus, etc. */
const OPPOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oppo" {...props} />

/** Opsgenie mark — compose with Select, Button, menus, etc. */
const OpsgenieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opsgenie" {...props} />

/** OpsLevel mark — compose with Select, Button, menus, etc. */
const OpsLevelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="opslevel" {...props} />

/** Optimism mark — compose with Select, Button, menus, etc. */
const OptimismBrandIcon = (props: BrandIconProps) => <BrandIcon slug="optimism" {...props} />

/** Optuna mark — compose with Select, Button, menus, etc. */
const OptunaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="optuna" {...props} />

/** Orange mark — compose with Select, Button, menus, etc. */
const OrangeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="orange" {...props} />

/** Orchard Core mark — compose with Select, Button, menus, etc. */
const OrchardCoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="orchardcore" {...props} />

/** ORCID mark — compose with Select, Button, menus, etc. */
const OrcidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="orcid" {...props} />

/** Org mark — compose with Select, Button, menus, etc. */
const OrgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="org" {...props} />

/** Organic Maps mark — compose with Select, Button, menus, etc. */
const OrganicMapsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="organicmaps" {...props} />

/** Origin mark — compose with Select, Button, menus, etc. */
const OriginBrandIcon = (props: BrandIconProps) => <BrandIcon slug="origin" {...props} />

/** Ory mark — compose with Select, Button, menus, etc. */
const OryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ory" {...props} />

/** Osano mark — compose with Select, Button, menus, etc. */
const OsanoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="osano" {...props} />

/** OSF mark — compose with Select, Button, menus, etc. */
const OSFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="osf" {...props} />

/** OSGeo mark — compose with Select, Button, menus, etc. */
const OSGeoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="osgeo" {...props} />

/** Oshkosh mark — compose with Select, Button, menus, etc. */
const OshkoshBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oshkosh" {...props} />

/** OsmAnd mark — compose with Select, Button, menus, etc. */
const OsmAndBrandIcon = (props: BrandIconProps) => <BrandIcon slug="osmand" {...props} />

/** OSMC mark — compose with Select, Button, menus, etc. */
const OSMCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="osmc" {...props} />

/** osu! mark — compose with Select, Button, menus, etc. */
const OsuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="osu" {...props} />

/** Otto mark — compose with Select, Button, menus, etc. */
const OttoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="otto" {...props} />

/** Outline mark — compose with Select, Button, menus, etc. */
const OutlineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="outline" {...props} />

/** Overcast mark — compose with Select, Button, menus, etc. */
const OvercastBrandIcon = (props: BrandIconProps) => <BrandIcon slug="overcast" {...props} />

/** Overleaf mark — compose with Select, Button, menus, etc. */
const OverleafBrandIcon = (props: BrandIconProps) => <BrandIcon slug="overleaf" {...props} />

/** OVH mark — compose with Select, Button, menus, etc. */
const OVHBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ovh" {...props} />

/** OWASP mark — compose with Select, Button, menus, etc. */
const OwaspBrandIcon = (props: BrandIconProps) => <BrandIcon slug="owasp" {...props} />

/** OWASP Dependency-Check mark — compose with Select, Button, menus, etc. */
const OwaspDependencyCheckBrandIcon = (props: BrandIconProps) => <BrandIcon slug="dependencycheck" {...props} />

/** ownCloud mark — compose with Select, Button, menus, etc. */
const OwnCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="owncloud" {...props} />

/** Oxc mark — compose with Select, Button, menus, etc. */
const OxcBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oxc" {...props} />

/** Oxygen mark — compose with Select, Button, menus, etc. */
const OxygenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oxygen" {...props} />

/** OYO mark — compose with Select, Button, menus, etc. */
const OYOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="oyo" {...props} />

/** p5.js mark — compose with Select, Button, menus, etc. */
const P5JsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="p5dotjs" {...props} />

/** Packagist mark — compose with Select, Button, menus, etc. */
const PackagistBrandIcon = (props: BrandIconProps) => <BrandIcon slug="packagist" {...props} />

/** Packer mark — compose with Select, Button, menus, etc. */
const PackerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="packer" {...props} />

/** Packt mark — compose with Select, Button, menus, etc. */
const PacktBrandIcon = (props: BrandIconProps) => <BrandIcon slug="packt" {...props} />

/** Paddle mark — compose with Select, Button, menus, etc. */
const PaddleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paddle" {...props} />

/** PaddlePaddle mark — compose with Select, Button, menus, etc. */
const PaddlePaddleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paddlepaddle" {...props} />

/** Paddy Power mark — compose with Select, Button, menus, etc. */
const PaddyPowerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paddypower" {...props} />

/** Padlet mark — compose with Select, Button, menus, etc. */
const PadletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="padlet" {...props} />

/** Pagekit mark — compose with Select, Button, menus, etc. */
const PagekitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pagekit" {...props} />

/** PagerDuty mark — compose with Select, Button, menus, etc. */
const PagerDutyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pagerduty" {...props} />

/** PageSpeed Insights mark — compose with Select, Button, menus, etc. */
const PageSpeedInsightsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pagespeedinsights" {...props} />

/** PagSeguro mark — compose with Select, Button, menus, etc. */
const PagSeguroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pagseguro" {...props} />

/** Palantir mark — compose with Select, Button, menus, etc. */
const PalantirBrandIcon = (props: BrandIconProps) => <BrandIcon slug="palantir" {...props} />

/** Palo Alto Networks mark — compose with Select, Button, menus, etc. */
const PaloAltoNetworksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paloaltonetworks" {...props} />

/** Palo Alto Software mark — compose with Select, Button, menus, etc. */
const PaloAltoSoftwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paloaltosoftware" {...props} />

/** Panasonic mark — compose with Select, Button, menus, etc. */
const PanasonicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="panasonic" {...props} />

/** pandas mark — compose with Select, Button, menus, etc. */
const PandasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pandas" {...props} />

/** Pandoc mark — compose with Select, Button, menus, etc. */
const PandocBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pandoc" {...props} />

/** Pandora mark — compose with Select, Button, menus, etc. */
const PandoraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pandora" {...props} />

/** Pangolin mark — compose with Select, Button, menus, etc. */
const PangolinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pangolin" {...props} />

/** Pantheon mark — compose with Select, Button, menus, etc. */
const PantheonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pantheon" {...props} />

/** Paperless-ngx mark — compose with Select, Button, menus, etc. */
const PaperlessNgxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paperlessngx" {...props} />

/** Papers With Code mark — compose with Select, Button, menus, etc. */
const PapersWithCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paperswithcode" {...props} />

/** Paperspace mark — compose with Select, Button, menus, etc. */
const PaperspaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paperspace" {...props} />

/** Paradox Interactive mark — compose with Select, Button, menus, etc. */
const ParadoxInteractiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paradoxinteractive" {...props} />

/** Paramount+ mark — compose with Select, Button, menus, etc. */
const ParamountBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paramountplus" {...props} />

/** Parity Substrate mark — compose with Select, Button, menus, etc. */
const ParitySubstrateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paritysubstrate" {...props} />

/** Parrot Security mark — compose with Select, Button, menus, etc. */
const ParrotSecurityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="parrotsecurity" {...props} />

/** Parse.ly mark — compose with Select, Button, menus, etc. */
const ParseLyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="parsedotly" {...props} />

/** Passbolt mark — compose with Select, Button, menus, etc. */
const PassboltBrandIcon = (props: BrandIconProps) => <BrandIcon slug="passbolt" {...props} />

/** Passport mark — compose with Select, Button, menus, etc. */
const PassportBrandIcon = (props: BrandIconProps) => <BrandIcon slug="passport" {...props} />

/** Pastebin mark — compose with Select, Button, menus, etc. */
const PastebinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pastebin" {...props} />

/** Patreon mark — compose with Select, Button, menus, etc. */
const PatreonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="patreon" {...props} />

/** PAYBACK mark — compose with Select, Button, menus, etc. */
const PaybackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="payback" {...props} />

/** Paychex mark — compose with Select, Button, menus, etc. */
const PaychexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paychex" {...props} />

/** Payhip mark — compose with Select, Button, menus, etc. */
const PayhipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="payhip" {...props} />

/** Payload CMS mark — compose with Select, Button, menus, etc. */
const PayloadCMSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="payloadcms" {...props} />

/** Payoneer mark — compose with Select, Button, menus, etc. */
const PayoneerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="payoneer" {...props} />

/** PayPal mark — compose with Select, Button, menus, etc. */
const PayPalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paypal" {...props} />

/** Paysafe mark — compose with Select, Button, menus, etc. */
const PaysafeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paysafe" {...props} />

/** Paytm mark — compose with Select, Button, menus, etc. */
const PaytmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="paytm" {...props} />

/** PCGamingWiki mark — compose with Select, Button, menus, etc. */
const PCGamingWikiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pcgamingwiki" {...props} />

/** PDM mark — compose with Select, Button, menus, etc. */
const PDMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pdm" {...props} />

/** PDQ mark — compose with Select, Button, menus, etc. */
const PDQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pdq" {...props} />

/** Peak Design mark — compose with Select, Button, menus, etc. */
const PeakDesignBrandIcon = (props: BrandIconProps) => <BrandIcon slug="peakdesign" {...props} />

/** Pearson mark — compose with Select, Button, menus, etc. */
const PearsonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pearson" {...props} />

/** Peerlist mark — compose with Select, Button, menus, etc. */
const PeerlistBrandIcon = (props: BrandIconProps) => <BrandIcon slug="peerlist" {...props} />

/** PeerTube mark — compose with Select, Button, menus, etc. */
const PeerTubeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="peertube" {...props} />

/** Pegasus Airlines mark — compose with Select, Button, menus, etc. */
const PegasusAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pegasusairlines" {...props} />

/** Pelican mark — compose with Select, Button, menus, etc. */
const PelicanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pelican" {...props} />

/** Peloton mark — compose with Select, Button, menus, etc. */
const PelotonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="peloton" {...props} />

/** Penny mark — compose with Select, Button, menus, etc. */
const PennyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="penny" {...props} />

/** Penpot mark — compose with Select, Button, menus, etc. */
const PenpotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="penpot" {...props} />

/** Percy mark — compose with Select, Button, menus, etc. */
const PercyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="percy" {...props} />

/** Perforce mark — compose with Select, Button, menus, etc. */
const PerforceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="perforce" {...props} />

/** Perl mark — compose with Select, Button, menus, etc. */
const PerlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="perl" {...props} />

/** Perplexity mark — compose with Select, Button, menus, etc. */
const PerplexityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="perplexity" {...props} />

/** Persistent mark — compose with Select, Button, menus, etc. */
const PersistentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="persistent" {...props} />

/** Personio mark — compose with Select, Button, menus, etc. */
const PersonioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="personio" {...props} />

/** Pets at Home mark — compose with Select, Button, menus, etc. */
const PetsAtHomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="petsathome" {...props} />

/** Peugeot mark — compose with Select, Button, menus, etc. */
const PeugeotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="peugeot" {...props} />

/** Pexels mark — compose with Select, Button, menus, etc. */
const PexelsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pexels" {...props} />

/** pfSense mark — compose with Select, Button, menus, etc. */
const PfSenseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pfsense" {...props} />

/** Phabricator mark — compose with Select, Button, menus, etc. */
const PhabricatorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phabricator" {...props} />

/** Philips Hue mark — compose with Select, Button, menus, etc. */
const PhilipsHueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="philipshue" {...props} />

/** Phoenix Framework mark — compose with Select, Button, menus, etc. */
const PhoenixFrameworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phoenixframework" {...props} />

/** PhonePe mark — compose with Select, Button, menus, etc. */
const PhonePeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phonepe" {...props} />

/** Phosphor Icons mark — compose with Select, Button, menus, etc. */
const PhosphorIconsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phosphoricons" {...props} />

/** Photobucket mark — compose with Select, Button, menus, etc. */
const PhotobucketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="photobucket" {...props} />

/** Photocrowd mark — compose with Select, Button, menus, etc. */
const PhotocrowdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="photocrowd" {...props} />

/** Photon mark — compose with Select, Button, menus, etc. */
const PhotonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="photon" {...props} />

/** Photopea mark — compose with Select, Button, menus, etc. */
const PhotopeaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="photopea" {...props} />

/** PHP mark — compose with Select, Button, menus, etc. */
const PHPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="php" {...props} />

/** phpBB mark — compose with Select, Button, menus, etc. */
const PhpBBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phpbb" {...props} />

/** phpMyAdmin mark — compose with Select, Button, menus, etc. */
const PhpMyAdminBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phpmyadmin" {...props} />

/** PhpStorm mark — compose with Select, Button, menus, etc. */
const PhpStormBrandIcon = (props: BrandIconProps) => <BrandIcon slug="phpstorm" {...props} />

/** Pi mark — compose with Select, Button, menus, etc. */
const PiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pi" {...props} />

/** Pi Network mark — compose with Select, Button, menus, etc. */
const PiNetworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pinetwork" {...props} />

/** Pi-hole mark — compose with Select, Button, menus, etc. */
const PiHoleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pihole" {...props} />

/** Piaggio Group mark — compose with Select, Button, menus, etc. */
const PiaggioGroupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="piaggiogroup" {...props} />

/** Piapro mark — compose with Select, Button, menus, etc. */
const PiaproBrandIcon = (props: BrandIconProps) => <BrandIcon slug="piapro" {...props} />

/** Picard Surgelés mark — compose with Select, Button, menus, etc. */
const PicardSurgelSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picardsurgeles" {...props} />

/** Picarto.TV mark — compose with Select, Button, menus, etc. */
const PicartoTVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picartodottv" {...props} />

/** Picnic mark — compose with Select, Button, menus, etc. */
const PicnicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picnic" {...props} />

/** PicPay mark — compose with Select, Button, menus, etc. */
const PicPayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picpay" {...props} />

/** Picrew mark — compose with Select, Button, menus, etc. */
const PicrewBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picrew" {...props} />

/** Picsart mark — compose with Select, Button, menus, etc. */
const PicsartBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picsart" {...props} />

/** Picxy mark — compose with Select, Button, menus, etc. */
const PicxyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="picxy" {...props} />

/** Pimcore mark — compose with Select, Button, menus, etc. */
const PimcoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pimcore" {...props} />

/** Pinboard mark — compose with Select, Button, menus, etc. */
const PinboardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pinboard" {...props} />

/** Pine Script mark — compose with Select, Button, menus, etc. */
const PineScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pinescript" {...props} />

/** Pingdom mark — compose with Select, Button, menus, etc. */
const PingdomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pingdom" {...props} />

/** Pinia mark — compose with Select, Button, menus, etc. */
const PiniaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pinia" {...props} />

/** pino mark — compose with Select, Button, menus, etc. */
const PinoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pino" {...props} />

/** Pinterest mark — compose with Select, Button, menus, etc. */
const PinterestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pinterest" {...props} />

/** Pioneer DJ mark — compose with Select, Button, menus, etc. */
const PioneerDJBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pioneerdj" {...props} />

/** Pipecat mark — compose with Select, Button, menus, etc. */
const PipecatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pipecat" {...props} />

/** Piped mark — compose with Select, Button, menus, etc. */
const PipedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="piped" {...props} />

/** pipx mark — compose with Select, Button, menus, etc. */
const PipxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pipx" {...props} />

/** Pivotal Tracker mark — compose with Select, Button, menus, etc. */
const PivotalTrackerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pivotaltracker" {...props} />

/** Piwigo mark — compose with Select, Button, menus, etc. */
const PiwigoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="piwigo" {...props} />

/** Pix mark — compose with Select, Button, menus, etc. */
const PixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pix" {...props} />

/** Pixabay mark — compose with Select, Button, menus, etc. */
const PixabayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pixabay" {...props} />

/** Pixelfed mark — compose with Select, Button, menus, etc. */
const PixelfedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pixelfed" {...props} />

/** pixiv mark — compose with Select, Button, menus, etc. */
const PixivBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pixiv" {...props} />

/** Pixlr mark — compose with Select, Button, menus, etc. */
const PixlrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pixlr" {...props} />

/** pkgsrc mark — compose with Select, Button, menus, etc. */
const PkgsrcBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pkgsrc" {...props} />

/** Plane mark — compose with Select, Button, menus, etc. */
const PlaneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plane" {...props} />

/** Planet mark — compose with Select, Button, menus, etc. */
const PlanetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="planet" {...props} />

/** PlanetScale mark — compose with Select, Button, menus, etc. */
const PlanetScaleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="planetscale" {...props} />

/** PlanGrid mark — compose with Select, Button, menus, etc. */
const PlanGridBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plangrid" {...props} />

/** Platform.sh mark — compose with Select, Button, menus, etc. */
const PlatformShBrandIcon = (props: BrandIconProps) => <BrandIcon slug="platformdotsh" {...props} />

/** PlatformIO mark — compose with Select, Button, menus, etc. */
const PlatformIOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="platformio" {...props} />

/** Platzi mark — compose with Select, Button, menus, etc. */
const PlatziBrandIcon = (props: BrandIconProps) => <BrandIcon slug="platzi" {...props} />

/** Plausible Analytics mark — compose with Select, Button, menus, etc. */
const PlausibleAnalyticsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plausibleanalytics" {...props} />

/** PlayCanvas mark — compose with Select, Button, menus, etc. */
const PlayCanvasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="playcanvas" {...props} />

/** Player FM mark — compose with Select, Button, menus, etc. */
const PlayerFMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="playerfm" {...props} />

/** Player.me mark — compose with Select, Button, menus, etc. */
const PlayerMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="playerdotme" {...props} />

/** PlayStation mark — compose with Select, Button, menus, etc. */
const PlayStationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstation" {...props} />

/** PlayStation 2 mark — compose with Select, Button, menus, etc. */
const PlayStation2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstation2" {...props} />

/** PlayStation 3 mark — compose with Select, Button, menus, etc. */
const PlayStation3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstation3" {...props} />

/** PlayStation 4 mark — compose with Select, Button, menus, etc. */
const PlayStation4BrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstation4" {...props} />

/** PlayStation 5 mark — compose with Select, Button, menus, etc. */
const PlayStation5BrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstation5" {...props} />

/** PlayStation Portable mark — compose with Select, Button, menus, etc. */
const PlayStationPortableBrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstationportable" {...props} />

/** PlayStation Vita mark — compose with Select, Button, menus, etc. */
const PlayStationVitaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="playstationvita" {...props} />

/** Pleroma mark — compose with Select, Button, menus, etc. */
const PleromaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pleroma" {...props} />

/** Plesk mark — compose with Select, Button, menus, etc. */
const PleskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plesk" {...props} />

/** Plex mark — compose with Select, Button, menus, etc. */
const PlexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plex" {...props} />

/** Plotly mark — compose with Select, Button, menus, etc. */
const PlotlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plotly" {...props} />

/** Plume mark — compose with Select, Button, menus, etc. */
const PlumeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plume" {...props} />

/** Pluralsight mark — compose with Select, Button, menus, etc. */
const PluralsightBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pluralsight" {...props} />

/** Plurk mark — compose with Select, Button, menus, etc. */
const PlurkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="plurk" {...props} />

/** PM2 mark — compose with Select, Button, menus, etc. */
const PM2BrandIcon = (props: BrandIconProps) => <BrandIcon slug="pm2" {...props} />

/** pnpm mark — compose with Select, Button, menus, etc. */
const PnpmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pnpm" {...props} />

/** Pocket Casts mark — compose with Select, Button, menus, etc. */
const PocketCastsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pocketcasts" {...props} />

/** PocketBase mark — compose with Select, Button, menus, etc. */
const PocketBaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pocketbase" {...props} />

/** Podcast Addict mark — compose with Select, Button, menus, etc. */
const PodcastAddictBrandIcon = (props: BrandIconProps) => <BrandIcon slug="podcastaddict" {...props} />

/** Podcast Index mark — compose with Select, Button, menus, etc. */
const PodcastIndexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="podcastindex" {...props} />

/** Podman mark — compose with Select, Button, menus, etc. */
const PodmanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="podman" {...props} />

/** Poe mark — compose with Select, Button, menus, etc. */
const PoeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="poe" {...props} />

/** Poetry mark — compose with Select, Button, menus, etc. */
const PoetryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="poetry" {...props} />

/** Polars mark — compose with Select, Button, menus, etc. */
const PolarsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="polars" {...props} />

/** Polestar mark — compose with Select, Button, menus, etc. */
const PolestarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="polestar" {...props} />

/** Polkadot mark — compose with Select, Button, menus, etc. */
const PolkadotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="polkadot" {...props} />

/** Poly mark — compose with Select, Button, menus, etc. */
const PolyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="poly" {...props} />

/** Polygon mark — compose with Select, Button, menus, etc. */
const PolygonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="polygon" {...props} />

/** Polymer Project mark — compose with Select, Button, menus, etc. */
const PolymerProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="polymerproject" {...props} />

/** Polywork mark — compose with Select, Button, menus, etc. */
const PolyworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="polywork" {...props} />

/** Pomerium mark — compose with Select, Button, menus, etc. */
const PomeriumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pomerium" {...props} />

/** Pond5 mark — compose with Select, Button, menus, etc. */
const Pond5BrandIcon = (props: BrandIconProps) => <BrandIcon slug="pond5" {...props} />

/** Pop!_OS mark — compose with Select, Button, menus, etc. */
const PopOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="popos" {...props} />

/** Porkbun mark — compose with Select, Button, menus, etc. */
const PorkbunBrandIcon = (props: BrandIconProps) => <BrandIcon slug="porkbun" {...props} />

/** Porsche mark — compose with Select, Button, menus, etc. */
const PorscheBrandIcon = (props: BrandIconProps) => <BrandIcon slug="porsche" {...props} />

/** PortableApps.com mark — compose with Select, Button, menus, etc. */
const PortableAppsComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="portableappsdotcom" {...props} />

/** Portainer mark — compose with Select, Button, menus, etc. */
const PortainerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="portainer" {...props} />

/** PortSwigger mark — compose with Select, Button, menus, etc. */
const PortSwiggerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="portswigger" {...props} />

/** Posit mark — compose with Select, Button, menus, etc. */
const PositBrandIcon = (props: BrandIconProps) => <BrandIcon slug="posit" {...props} />

/** PostCSS mark — compose with Select, Button, menus, etc. */
const PostCSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="postcss" {...props} />

/** PostgreSQL mark — compose with Select, Button, menus, etc. */
const PostgreSQLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="postgresql" {...props} />

/** PostHog mark — compose with Select, Button, menus, etc. */
const PostHogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="posthog" {...props} />

/** Postiz mark — compose with Select, Button, menus, etc. */
const PostizBrandIcon = (props: BrandIconProps) => <BrandIcon slug="postiz" {...props} />

/** Postman mark — compose with Select, Button, menus, etc. */
const PostmanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="postman" {...props} />

/** Postmates mark — compose with Select, Button, menus, etc. */
const PostmatesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="postmates" {...props} />

/** POWERS mark — compose with Select, Button, menus, etc. */
const PowersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="powers" {...props} />

/** pr.co mark — compose with Select, Button, menus, etc. */
const PrCoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prdotco" {...props} />

/** pre-commit mark — compose with Select, Button, menus, etc. */
const PreCommitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="precommit" {...props} />

/** Preact mark — compose with Select, Button, menus, etc. */
const PreactBrandIcon = (props: BrandIconProps) => <BrandIcon slug="preact" {...props} />

/** Prefect mark — compose with Select, Button, menus, etc. */
const PrefectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prefect" {...props} />

/** prek mark — compose with Select, Button, menus, etc. */
const PrekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prek" {...props} />

/** PreMiD mark — compose with Select, Button, menus, etc. */
const PreMiDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="premid" {...props} />

/** Premier League mark — compose with Select, Button, menus, etc. */
const PremierLeagueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="premierleague" {...props} />

/** PrepBytes mark — compose with Select, Button, menus, etc. */
const PrepBytesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prepbytes" {...props} />

/** PrestaShop mark — compose with Select, Button, menus, etc. */
const PrestaShopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prestashop" {...props} />

/** Presto mark — compose with Select, Button, menus, etc. */
const PrestoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="presto" {...props} />

/** Prettier mark — compose with Select, Button, menus, etc. */
const PrettierBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prettier" {...props} />

/** Pretzel mark — compose with Select, Button, menus, etc. */
const PretzelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pretzel" {...props} />

/** Prevention mark — compose with Select, Button, menus, etc. */
const PreventionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prevention" {...props} />

/** Prezi mark — compose with Select, Button, menus, etc. */
const PreziBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prezi" {...props} />

/** PrimeFaces mark — compose with Select, Button, menus, etc. */
const PrimeFacesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="primefaces" {...props} />

/** PrimeNG mark — compose with Select, Button, menus, etc. */
const PrimeNGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="primeng" {...props} />

/** PrimeReact mark — compose with Select, Button, menus, etc. */
const PrimeReactBrandIcon = (props: BrandIconProps) => <BrandIcon slug="primereact" {...props} />

/** PrimeVue mark — compose with Select, Button, menus, etc. */
const PrimeVueBrandIcon = (props: BrandIconProps) => <BrandIcon slug="primevue" {...props} />

/** Printables mark — compose with Select, Button, menus, etc. */
const PrintablesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="printables" {...props} />

/** Prisma mark — compose with Select, Button, menus, etc. */
const PrismaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prisma" {...props} />

/** Prismic mark — compose with Select, Button, menus, etc. */
const PrismicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prismic" {...props} />

/** Private Division mark — compose with Select, Button, menus, etc. */
const PrivateDivisionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="privatedivision" {...props} />

/** Private Internet Access mark — compose with Select, Button, menus, etc. */
const PrivateInternetAccessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="privateinternetaccess" {...props} />

/** Pro Tools mark — compose with Select, Button, menus, etc. */
const ProToolsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protools" {...props} />

/** Probot mark — compose with Select, Button, menus, etc. */
const ProbotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="probot" {...props} />

/** Processing Foundation mark — compose with Select, Button, menus, etc. */
const ProcessingFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="processingfoundation" {...props} />

/** ProcessOn mark — compose with Select, Button, menus, etc. */
const ProcessOnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="processon" {...props} />

/** ProcessWire mark — compose with Select, Button, menus, etc. */
const ProcessWireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="processwire" {...props} />

/** Product Hunt mark — compose with Select, Button, menus, etc. */
const ProductHuntBrandIcon = (props: BrandIconProps) => <BrandIcon slug="producthunt" {...props} />

/** Progate mark — compose with Select, Button, menus, etc. */
const ProgateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="progate" {...props} />

/** Progress mark — compose with Select, Button, menus, etc. */
const ProgressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="progress" {...props} />

/** Prometheus mark — compose with Select, Button, menus, etc. */
const PrometheusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prometheus" {...props} />

/** Pronouns.page mark — compose with Select, Button, menus, etc. */
const PronounsPageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pronounsdotpage" {...props} />

/** ProseMirror mark — compose with Select, Button, menus, etc. */
const ProseMirrorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prosemirror" {...props} />

/** ProSieben mark — compose with Select, Button, menus, etc. */
const ProSiebenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="prosieben" {...props} />

/** Proteus mark — compose with Select, Button, menus, etc. */
const ProteusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="proteus" {...props} />

/** Proto.io mark — compose with Select, Button, menus, etc. */
const ProtoIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protodotio" {...props} />

/** protocols.io mark — compose with Select, Button, menus, etc. */
const ProtocolsIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protocolsdotio" {...props} />

/** Proton mark — compose with Select, Button, menus, etc. */
const ProtonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="proton" {...props} />

/** Proton Calendar mark — compose with Select, Button, menus, etc. */
const ProtonCalendarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protoncalendar" {...props} />

/** Proton Drive mark — compose with Select, Button, menus, etc. */
const ProtonDriveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protondrive" {...props} />

/** Proton Mail mark — compose with Select, Button, menus, etc. */
const ProtonMailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protonmail" {...props} />

/** Proton VPN mark — compose with Select, Button, menus, etc. */
const ProtonVPNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protonvpn" {...props} />

/** ProtonDB mark — compose with Select, Button, menus, etc. */
const ProtonDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protondb" {...props} />

/** Protractor mark — compose with Select, Button, menus, etc. */
const ProtractorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="protractor" {...props} />

/** Proxmox mark — compose with Select, Button, menus, etc. */
const ProxmoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="proxmox" {...props} />

/** Pterodactyl mark — compose with Select, Button, menus, etc. */
const PterodactylBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pterodactyl" {...props} />

/** PUBG mark — compose with Select, Button, menus, etc. */
const PUBGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pubg" {...props} />

/** Publons mark — compose with Select, Button, menus, etc. */
const PublonsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="publons" {...props} />

/** PubMed mark — compose with Select, Button, menus, etc. */
const PubMedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pubmed" {...props} />

/** Pug mark — compose with Select, Button, menus, etc. */
const PugBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pug" {...props} />

/** Pulumi mark — compose with Select, Button, menus, etc. */
const PulumiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pulumi" {...props} />

/** Puma mark — compose with Select, Button, menus, etc. */
const PumaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="puma" {...props} />

/** Puppet mark — compose with Select, Button, menus, etc. */
const PuppetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="puppet" {...props} />

/** Puppeteer mark — compose with Select, Button, menus, etc. */
const PuppeteerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="puppeteer" {...props} />

/** PureScript mark — compose with Select, Button, menus, etc. */
const PureScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="purescript" {...props} />

/** PurgeCSS mark — compose with Select, Button, menus, etc. */
const PurgeCSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="purgecss" {...props} />

/** Purism mark — compose with Select, Button, menus, etc. */
const PurismBrandIcon = (props: BrandIconProps) => <BrandIcon slug="purism" {...props} />

/** Pushbullet mark — compose with Select, Button, menus, etc. */
const PushbulletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pushbullet" {...props} />

/** Pusher mark — compose with Select, Button, menus, etc. */
const PusherBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pusher" {...props} />

/** PWA mark — compose with Select, Button, menus, etc. */
const PWABrandIcon = (props: BrandIconProps) => <BrandIcon slug="pwa" {...props} />

/** PyCharm mark — compose with Select, Button, menus, etc. */
const PyCharmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pycharm" {...props} />

/** PyCQA mark — compose with Select, Button, menus, etc. */
const PyCQABrandIcon = (props: BrandIconProps) => <BrandIcon slug="pycqa" {...props} />

/** Pydantic mark — compose with Select, Button, menus, etc. */
const PydanticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pydantic" {...props} />

/** PyG mark — compose with Select, Button, menus, etc. */
const PyGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pyg" {...props} />

/** PyPI mark — compose with Select, Button, menus, etc. */
const PyPIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pypi" {...props} />

/** PyPy mark — compose with Select, Button, menus, etc. */
const PyPyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pypy" {...props} />

/** PyScaffold mark — compose with Select, Button, menus, etc. */
const PyScaffoldBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pyscaffold" {...props} />

/** PySyft mark — compose with Select, Button, menus, etc. */
const PySyftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pysyft" {...props} />

/** Pytest mark — compose with Select, Button, menus, etc. */
const PytestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pytest" {...props} />

/** Python mark — compose with Select, Button, menus, etc. */
const PythonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="python" {...props} />

/** PythonAnywhere mark — compose with Select, Button, menus, etc. */
const PythonAnywhereBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pythonanywhere" {...props} />

/** PyTorch mark — compose with Select, Button, menus, etc. */
const PyTorchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pytorch" {...props} />

/** PyUp mark — compose with Select, Button, menus, etc. */
const PyUpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="pyup" {...props} />

/** Qantas mark — compose with Select, Button, menus, etc. */
const QantasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qantas" {...props} />

/** Qase mark — compose with Select, Button, menus, etc. */
const QaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qase" {...props} />

/** Qatar Airways mark — compose with Select, Button, menus, etc. */
const QatarAirwaysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qatarairways" {...props} />

/** qbittorrent mark — compose with Select, Button, menus, etc. */
const QbittorrentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qbittorrent" {...props} />

/** Qdrant mark — compose with Select, Button, menus, etc. */
const QdrantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qdrant" {...props} />

/** QEMU mark — compose with Select, Button, menus, etc. */
const QEMUBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qemu" {...props} />

/** QGIS mark — compose with Select, Button, menus, etc. */
const QGISBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qgis" {...props} />

/** Qi mark — compose with Select, Button, menus, etc. */
const QiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qi" {...props} />

/** Qiita mark — compose with Select, Button, menus, etc. */
const QiitaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qiita" {...props} />

/** Qiskit mark — compose with Select, Button, menus, etc. */
const QiskitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qiskit" {...props} />

/** QIWI mark — compose with Select, Button, menus, etc. */
const QIWIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qiwi" {...props} />

/** Qlik mark — compose with Select, Button, menus, etc. */
const QlikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qlik" {...props} />

/** Qlty mark — compose with Select, Button, menus, etc. */
const QltyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qlty" {...props} />

/** QMK mark — compose with Select, Button, menus, etc. */
const QMKBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qmk" {...props} />

/** QNAP mark — compose with Select, Button, menus, etc. */
const QNAPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qnap" {...props} />

/** Qodo mark — compose with Select, Button, menus, etc. */
const QodoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qodo" {...props} />

/** QQ mark — compose with Select, Button, menus, etc. */
const QQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qq" {...props} />

/** Qt mark — compose with Select, Button, menus, etc. */
const QtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qt" {...props} />

/** Quad9 mark — compose with Select, Button, menus, etc. */
const Quad9BrandIcon = (props: BrandIconProps) => <BrandIcon slug="quad9" {...props} />

/** Qualcomm mark — compose with Select, Button, menus, etc. */
const QualcommBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qualcomm" {...props} />

/** Qualtrics mark — compose with Select, Button, menus, etc. */
const QualtricsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qualtrics" {...props} />

/** Qualys mark — compose with Select, Button, menus, etc. */
const QualysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qualys" {...props} />

/** Quantcast mark — compose with Select, Button, menus, etc. */
const QuantcastBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quantcast" {...props} />

/** QuantConnect mark — compose with Select, Button, menus, etc. */
const QuantConnectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quantconnect" {...props} />

/** Quarkus mark — compose with Select, Button, menus, etc. */
const QuarkusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quarkus" {...props} />

/** Quarto mark — compose with Select, Button, menus, etc. */
const QuartoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quarto" {...props} />

/** Quasar mark — compose with Select, Button, menus, etc. */
const QuasarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quasar" {...props} />

/** Qubes OS mark — compose with Select, Button, menus, etc. */
const QubesOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qubesos" {...props} />

/** Quest mark — compose with Select, Button, menus, etc. */
const QuestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quest" {...props} />

/** QuickBooks mark — compose with Select, Button, menus, etc. */
const QuickBooksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quickbooks" {...props} />

/** QuickLook mark — compose with Select, Button, menus, etc. */
const QuickLookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quicklook" {...props} />

/** QuickTime mark — compose with Select, Button, menus, etc. */
const QuickTimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quicktime" {...props} />

/** quicktype mark — compose with Select, Button, menus, etc. */
const QuicktypeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quicktype" {...props} />

/** Quizlet mark — compose with Select, Button, menus, etc. */
const QuizletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quizlet" {...props} />

/** Quora mark — compose with Select, Button, menus, etc. */
const QuoraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="quora" {...props} />

/** Qwant mark — compose with Select, Button, menus, etc. */
const QwantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qwant" {...props} />

/** QWen mark — compose with Select, Button, menus, etc. */
const QWenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qwen" {...props} />

/** Qwik mark — compose with Select, Button, menus, etc. */
const QwikBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qwik" {...props} />

/** Qwiklabs mark — compose with Select, Button, menus, etc. */
const QwiklabsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qwiklabs" {...props} />

/** Qzone mark — compose with Select, Button, menus, etc. */
const QzoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="qzone" {...props} />

/** R mark — compose with Select, Button, menus, etc. */
const RBrandIcon = (props: BrandIconProps) => <BrandIcon slug="r" {...props} />

/** R3 mark — compose with Select, Button, menus, etc. */
const R3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="r3" {...props} />

/** RabbitMQ mark — compose with Select, Button, menus, etc. */
const RabbitMQBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rabbitmq" {...props} />

/** Racket mark — compose with Select, Button, menus, etc. */
const RacketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="racket" {...props} />

/** RAD Studio mark — compose with Select, Button, menus, etc. */
const RADStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="radstudio" {...props} />

/** Radar mark — compose with Select, Button, menus, etc. */
const RadarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="radar" {...props} />

/** radarr mark — compose with Select, Button, menus, etc. */
const RadarrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="radarr" {...props} />

/** Radiant Earth mark — compose with Select, Button, menus, etc. */
const RadiantEarthBrandIcon = (props: BrandIconProps) => <BrandIcon slug="radiantearth" {...props} />

/** Radio France mark — compose with Select, Button, menus, etc. */
const RadioFranceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="radiofrance" {...props} />

/** Radix UI mark — compose with Select, Button, menus, etc. */
const RadixUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="radixui" {...props} />

/** Railway mark — compose with Select, Button, menus, etc. */
const RailwayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="railway" {...props} />

/** Rainmeter mark — compose with Select, Button, menus, etc. */
const RainmeterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rainmeter" {...props} />

/** RainYun mark — compose with Select, Button, menus, etc. */
const RainYunBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rainyun" {...props} />

/** Rakuten mark — compose with Select, Button, menus, etc. */
const RakutenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rakuten" {...props} />

/** Rakuten Kobo mark — compose with Select, Button, menus, etc. */
const RakutenKoboBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rakutenkobo" {...props} />

/** Ram mark — compose with Select, Button, menus, etc. */
const RamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ram" {...props} />

/** Rancher mark — compose with Select, Button, menus, etc. */
const RancherBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rancher" {...props} />

/** Rapid mark — compose with Select, Button, menus, etc. */
const RapidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rapid" {...props} />

/** Rarible mark — compose with Select, Button, menus, etc. */
const RaribleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rarible" {...props} />

/** Rasa mark — compose with Select, Button, menus, etc. */
const RasaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rasa" {...props} />

/** Raspberry Pi mark — compose with Select, Button, menus, etc. */
const RaspberryPiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="raspberrypi" {...props} />

/** Ratatui mark — compose with Select, Button, menus, etc. */
const RatatuiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ratatui" {...props} />

/** Ravelry mark — compose with Select, Button, menus, etc. */
const RavelryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ravelry" {...props} />

/** Ray mark — compose with Select, Button, menus, etc. */
const RayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ray" {...props} />

/** Raycast mark — compose with Select, Button, menus, etc. */
const RaycastBrandIcon = (props: BrandIconProps) => <BrandIcon slug="raycast" {...props} />

/** Raylib mark — compose with Select, Button, menus, etc. */
const RaylibBrandIcon = (props: BrandIconProps) => <BrandIcon slug="raylib" {...props} />

/** Razer mark — compose with Select, Button, menus, etc. */
const RazerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="razer" {...props} />

/** Razorpay mark — compose with Select, Button, menus, etc. */
const RazorpayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="razorpay" {...props} />

/** Rclone mark — compose with Select, Button, menus, etc. */
const RcloneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rclone" {...props} />

/** React mark — compose with Select, Button, menus, etc. */
const ReactBrandIcon = (props: BrandIconProps) => <BrandIcon slug="react" {...props} />

/** React Bootstrap mark — compose with Select, Button, menus, etc. */
const ReactBootstrapBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reactbootstrap" {...props} />

/** React Hook Form mark — compose with Select, Button, menus, etc. */
const ReactHookFormBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reacthookform" {...props} />

/** React Query mark — compose with Select, Button, menus, etc. */
const ReactQueryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reactquery" {...props} />

/** React Router mark — compose with Select, Button, menus, etc. */
const ReactRouterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reactrouter" {...props} />

/** React Table mark — compose with Select, Button, menus, etc. */
const ReactTableBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reacttable" {...props} />

/** Reactive Resume mark — compose with Select, Button, menus, etc. */
const ReactiveResumeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reactiveresume" {...props} />

/** ReactiveX mark — compose with Select, Button, menus, etc. */
const ReactiveXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reactivex" {...props} />

/** ReactOS mark — compose with Select, Button, menus, etc. */
const ReactOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reactos" {...props} />

/** Read the Docs mark — compose with Select, Button, menus, etc. */
const ReadTheDocsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="readthedocs" {...props} />

/** Read.cv mark — compose with Select, Button, menus, etc. */
const ReadCvBrandIcon = (props: BrandIconProps) => <BrandIcon slug="readdotcv" {...props} />

/** ReadMe mark — compose with Select, Button, menus, etc. */
const ReadMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="readme" {...props} />

/** Reason mark — compose with Select, Button, menus, etc. */
const ReasonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reason" {...props} />

/** Reason Studios mark — compose with Select, Button, menus, etc. */
const ReasonStudiosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reasonstudios" {...props} />

/** Recoil mark — compose with Select, Button, menus, etc. */
const RecoilBrandIcon = (props: BrandIconProps) => <BrandIcon slug="recoil" {...props} />

/** Red mark — compose with Select, Button, menus, etc. */
const RedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="red" {...props} />

/** Red Bull mark — compose with Select, Button, menus, etc. */
const RedBullBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redbull" {...props} />

/** Red Candle Games mark — compose with Select, Button, menus, etc. */
const RedCandleGamesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redcandlegames" {...props} />

/** Red Hat mark — compose with Select, Button, menus, etc. */
const RedHatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redhat" {...props} />

/** Red Hat Open Shift mark — compose with Select, Button, menus, etc. */
const RedHatOpenShiftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redhatopenshift" {...props} />

/** Redash mark — compose with Select, Button, menus, etc. */
const RedashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redash" {...props} />

/** Redbubble mark — compose with Select, Button, menus, etc. */
const RedbubbleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redbubble" {...props} />

/** Reddit mark — compose with Select, Button, menus, etc. */
const RedditBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reddit" {...props} />

/** Redis mark — compose with Select, Button, menus, etc. */
const RedisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redis" {...props} />

/** Redmine mark — compose with Select, Button, menus, etc. */
const RedmineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redmine" {...props} />

/** Redox mark — compose with Select, Button, menus, etc. */
const RedoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redox" {...props} />

/** Redragon mark — compose with Select, Button, menus, etc. */
const RedragonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redragon" {...props} />

/** Redsys mark — compose with Select, Button, menus, etc. */
const RedsysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redsys" {...props} />

/** Redux mark — compose with Select, Button, menus, etc. */
const ReduxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redux" {...props} />

/** Redux-Saga mark — compose with Select, Button, menus, etc. */
const ReduxSagaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reduxsaga" {...props} />

/** RedwoodJS mark — compose with Select, Button, menus, etc. */
const RedwoodJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="redwoodjs" {...props} />

/** Reebok mark — compose with Select, Button, menus, etc. */
const ReebokBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reebok" {...props} />

/** Refine mark — compose with Select, Button, menus, etc. */
const RefineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="refine" {...props} />

/** Refined GitHub mark — compose with Select, Button, menus, etc. */
const RefinedGitHubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="refinedgithub" {...props} />

/** Reflex mark — compose with Select, Button, menus, etc. */
const ReflexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reflex" {...props} />

/** Reka UI mark — compose with Select, Button, menus, etc. */
const RekaUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rekaui" {...props} />

/** Relay mark — compose with Select, Button, menus, etc. */
const RelayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="relay" {...props} />

/** Reliance Industries Limited mark — compose with Select, Button, menus, etc. */
const RelianceIndustriesLimitedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="relianceindustrieslimited" {...props} />

/** remark mark — compose with Select, Button, menus, etc. */
const RemarkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="remark" {...props} />

/** Remedy Entertainment mark — compose with Select, Button, menus, etc. */
const RemedyEntertainmentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="remedyentertainment" {...props} />

/** Remix mark — compose with Select, Button, menus, etc. */
const RemixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="remix" {...props} />

/** remove.bg mark — compose with Select, Button, menus, etc. */
const RemoveBgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="removedotbg" {...props} />

/** Ren'Py mark — compose with Select, Button, menus, etc. */
const RenPyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="renpy" {...props} />

/** Renault mark — compose with Select, Button, menus, etc. */
const RenaultBrandIcon = (props: BrandIconProps) => <BrandIcon slug="renault" {...props} />

/** Render mark — compose with Select, Button, menus, etc. */
const RenderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="render" {...props} />

/** Renovate mark — compose with Select, Button, menus, etc. */
const RenovateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="renovate" {...props} />

/** Renren mark — compose with Select, Button, menus, etc. */
const RenrenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="renren" {...props} />

/** Replicate mark — compose with Select, Button, menus, etc. */
const ReplicateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="replicate" {...props} />

/** Replit mark — compose with Select, Button, menus, etc. */
const ReplitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="replit" {...props} />

/** Republic of Gamers mark — compose with Select, Button, menus, etc. */
const RepublicOfGamersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="republicofgamers" {...props} />

/** ReScript mark — compose with Select, Button, menus, etc. */
const ReScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rescript" {...props} />

/** RescueTime mark — compose with Select, Button, menus, etc. */
const RescueTimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rescuetime" {...props} />

/** ResearchGate mark — compose with Select, Button, menus, etc. */
const ResearchGateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="researchgate" {...props} />

/** Resend mark — compose with Select, Button, menus, etc. */
const ResendBrandIcon = (props: BrandIconProps) => <BrandIcon slug="resend" {...props} />

/** ReSharper mark — compose with Select, Button, menus, etc. */
const ReSharperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="resharper" {...props} />

/** Resurrection Remix OS mark — compose with Select, Button, menus, etc. */
const ResurrectionRemixOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="resurrectionremixos" {...props} />

/** Retool mark — compose with Select, Button, menus, etc. */
const RetoolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="retool" {...props} />

/** Retro Achievements mark — compose with Select, Button, menus, etc. */
const RetroAchievementsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="retroachievements" {...props} />

/** RetroArch mark — compose with Select, Button, menus, etc. */
const RetroArchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="retroarch" {...props} />

/** RetroPie mark — compose with Select, Button, menus, etc. */
const RetroPieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="retropie" {...props} />

/** ReVanced mark — compose with Select, Button, menus, etc. */
const ReVancedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="revanced" {...props} />

/** reveal.js mark — compose with Select, Button, menus, etc. */
const RevealJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="revealdotjs" {...props} />

/** RevenueCat mark — compose with Select, Button, menus, etc. */
const RevenueCatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="revenuecat" {...props} />

/** ReverbNation mark — compose with Select, Button, menus, etc. */
const ReverbNationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="reverbnation" {...props} />

/** Revolt.chat mark — compose with Select, Button, menus, etc. */
const RevoltChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="revoltdotchat" {...props} />

/** Revolut mark — compose with Select, Button, menus, etc. */
const RevolutBrandIcon = (props: BrandIconProps) => <BrandIcon slug="revolut" {...props} />

/** REWE mark — compose with Select, Button, menus, etc. */
const REWEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rewe" {...props} />

/** Rezgo mark — compose with Select, Button, menus, etc. */
const RezgoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rezgo" {...props} />

/** Rhinoceros mark — compose with Select, Button, menus, etc. */
const RhinocerosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rhinoceros" {...props} />

/** Rich mark — compose with Select, Button, menus, etc. */
const RichBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rich" {...props} />

/** Rider mark — compose with Select, Button, menus, etc. */
const RiderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rider" {...props} />

/** Rimac Automobili mark — compose with Select, Button, menus, etc. */
const RimacAutomobiliBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rimacautomobili" {...props} />

/** Rime mark — compose with Select, Button, menus, etc. */
const RimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rime" {...props} />

/** Ring mark — compose with Select, Button, menus, etc. */
const RingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ring" {...props} />

/** Riot Games mark — compose with Select, Button, menus, etc. */
const RiotGamesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="riotgames" {...props} />

/** Ripple mark — compose with Select, Button, menus, etc. */
const RippleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ripple" {...props} />

/** RISC-V mark — compose with Select, Button, menus, etc. */
const RISCVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="riscv" {...props} />

/** Riseup mark — compose with Select, Button, menus, etc. */
const RiseupBrandIcon = (props: BrandIconProps) => <BrandIcon slug="riseup" {...props} />

/** Ritz Carlton mark — compose with Select, Button, menus, etc. */
const RitzCarltonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ritzcarlton" {...props} />

/** Rive mark — compose with Select, Button, menus, etc. */
const RiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rive" {...props} />

/** roadmap.sh mark — compose with Select, Button, menus, etc. */
const RoadmapShBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roadmapdotsh" {...props} />

/** Roam Research mark — compose with Select, Button, menus, etc. */
const RoamResearchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roamresearch" {...props} />

/** Robinhood mark — compose with Select, Button, menus, etc. */
const RobinhoodBrandIcon = (props: BrandIconProps) => <BrandIcon slug="robinhood" {...props} />

/** Roblox mark — compose with Select, Button, menus, etc. */
const RobloxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roblox" {...props} />

/** Roblox Studio mark — compose with Select, Button, menus, etc. */
const RobloxStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="robloxstudio" {...props} />

/** Roboflow mark — compose with Select, Button, menus, etc. */
const RoboflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roboflow" {...props} />

/** Robot Framework mark — compose with Select, Button, menus, etc. */
const RobotFrameworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="robotframework" {...props} />

/** Rocket mark — compose with Select, Button, menus, etc. */
const RocketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rocket" {...props} />

/** Rocket.Chat mark — compose with Select, Button, menus, etc. */
const RocketChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rocketdotchat" {...props} />

/** RocksDB mark — compose with Select, Button, menus, etc. */
const RocksDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rocksdb" {...props} />

/** Rockstar Games mark — compose with Select, Button, menus, etc. */
const RockstarGamesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rockstargames" {...props} />

/** Rockwell Automation mark — compose with Select, Button, menus, etc. */
const RockwellAutomationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rockwellautomation" {...props} />

/** Rocky Linux mark — compose with Select, Button, menus, etc. */
const RockyLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rockylinux" {...props} />

/** Roku mark — compose with Select, Button, menus, etc. */
const RokuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roku" {...props} />

/** Roll20 mark — compose with Select, Button, menus, etc. */
const Roll20BrandIcon = (props: BrandIconProps) => <BrandIcon slug="roll20" {...props} />

/** Rollbar mark — compose with Select, Button, menus, etc. */
const RollbarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rollbar" {...props} />

/** Rolldown mark — compose with Select, Button, menus, etc. */
const RolldownBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rolldown" {...props} />

/** Rolls-Royce mark — compose with Select, Button, menus, etc. */
const RollsRoyceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rollsroyce" {...props} />

/** rollup.js mark — compose with Select, Button, menus, etc. */
const RollupJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rollupdotjs" {...props} />

/** Rook mark — compose with Select, Button, menus, etc. */
const RookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rook" {...props} />

/** Roon mark — compose with Select, Button, menus, etc. */
const RoonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roon" {...props} />

/** ROOT mark — compose with Select, Button, menus, etc. */
const ROOTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="root" {...props} />

/** Root Me mark — compose with Select, Button, menus, etc. */
const RootMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rootme" {...props} />

/** Roots mark — compose with Select, Button, menus, etc. */
const RootsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roots" {...props} />

/** Roots Bedrock mark — compose with Select, Button, menus, etc. */
const RootsBedrockBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rootsbedrock" {...props} />

/** Roots Sage mark — compose with Select, Button, menus, etc. */
const RootsSageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rootssage" {...props} />

/** ROS mark — compose with Select, Button, menus, etc. */
const ROSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ros" {...props} />

/** Rossmann mark — compose with Select, Button, menus, etc. */
const RossmannBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rossmann" {...props} />

/** Rotary International mark — compose with Select, Button, menus, etc. */
const RotaryInternationalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rotaryinternational" {...props} />

/** Rotten Tomatoes mark — compose with Select, Button, menus, etc. */
const RottenTomatoesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rottentomatoes" {...props} />

/** Roundcube mark — compose with Select, Button, menus, etc. */
const RoundcubeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="roundcube" {...props} />

/** RSocket mark — compose with Select, Button, menus, etc. */
const RSocketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rsocket" {...props} />

/** RSS mark — compose with Select, Button, menus, etc. */
const RSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rss" {...props} />

/** RStudio IDE mark — compose with Select, Button, menus, etc. */
const RStudioIDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rstudioide" {...props} />

/** RTÉ mark — compose with Select, Button, menus, etc. */
const RTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rte" {...props} />

/** RTL mark — compose with Select, Button, menus, etc. */
const RTLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rtl" {...props} />

/** RTLZWEI mark — compose with Select, Button, menus, etc. */
const RtlzweiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rtlzwei" {...props} />

/** RTM mark — compose with Select, Button, menus, etc. */
const RTMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rtm" {...props} />

/** RuboCop mark — compose with Select, Button, menus, etc. */
const RuboCopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rubocop" {...props} />

/** Ruby mark — compose with Select, Button, menus, etc. */
const RubyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ruby" {...props} />

/** Ruby on Rails mark — compose with Select, Button, menus, etc. */
const RubyOnRailsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rubyonrails" {...props} />

/** Ruby Sinatra mark — compose with Select, Button, menus, etc. */
const RubySinatraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rubysinatra" {...props} />

/** RubyGems mark — compose with Select, Button, menus, etc. */
const RubyGemsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rubygems" {...props} />

/** RubyMine mark — compose with Select, Button, menus, etc. */
const RubyMineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rubymine" {...props} />

/** Ruff mark — compose with Select, Button, menus, etc. */
const RuffBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ruff" {...props} />

/** Rumahweb mark — compose with Select, Button, menus, etc. */
const RumahwebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rumahweb" {...props} />

/** Rumble mark — compose with Select, Button, menus, etc. */
const RumbleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rumble" {...props} />

/** Rundeck mark — compose with Select, Button, menus, etc. */
const RundeckBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rundeck" {...props} />

/** Runkeeper mark — compose with Select, Button, menus, etc. */
const RunkeeperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="runkeeper" {...props} />

/** RunKit mark — compose with Select, Button, menus, etc. */
const RunKitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="runkit" {...props} />

/** Runrun.it mark — compose with Select, Button, menus, etc. */
const RunrunItBrandIcon = (props: BrandIconProps) => <BrandIcon slug="runrundotit" {...props} />

/** Rust mark — compose with Select, Button, menus, etc. */
const RustBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rust" {...props} />

/** RustDesk mark — compose with Select, Button, menus, etc. */
const RustDeskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rustdesk" {...props} />

/** RustFS mark — compose with Select, Button, menus, etc. */
const RustFSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rustfs" {...props} />

/** RxDB mark — compose with Select, Button, menus, etc. */
const RxDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rxdb" {...props} />

/** Ryanair mark — compose with Select, Button, menus, etc. */
const RyanairBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ryanair" {...props} />

/** Rye mark — compose with Select, Button, menus, etc. */
const RyeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="rye" {...props} />

/** S7 Airlines mark — compose with Select, Button, menus, etc. */
const S7AirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="s7airlines" {...props} />

/** Sabanci mark — compose with Select, Button, menus, etc. */
const SabanciBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sabanci" {...props} />

/** Safari mark — compose with Select, Button, menus, etc. */
const SafariBrandIcon = (props: BrandIconProps) => <BrandIcon slug="safari" {...props} />

/** Sage mark — compose with Select, Button, menus, etc. */
const SageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sage" {...props} />

/** SageMath mark — compose with Select, Button, menus, etc. */
const SageMathBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sagemath" {...props} />

/** Sahibinden mark — compose with Select, Button, menus, etc. */
const SahibindenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sahibinden" {...props} />

/** Sailfish OS mark — compose with Select, Button, menus, etc. */
const SailfishOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sailfishos" {...props} />

/** Sails.js mark — compose with Select, Button, menus, etc. */
const SailsJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sailsdotjs" {...props} />

/** Salla mark — compose with Select, Button, menus, etc. */
const SallaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="salla" {...props} />

/** Salt Project mark — compose with Select, Button, menus, etc. */
const SaltProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="saltproject" {...props} />

/** Sam's Club mark — compose with Select, Button, menus, etc. */
const SamSClubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="samsclub" {...props} />

/** Samsung mark — compose with Select, Button, menus, etc. */
const SamsungBrandIcon = (props: BrandIconProps) => <BrandIcon slug="samsung" {...props} />

/** Samsung Pay mark — compose with Select, Button, menus, etc. */
const SamsungPayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="samsungpay" {...props} />

/** San Francisco Municipal Railway mark — compose with Select, Button, menus, etc. */
const SanFranciscoMunicipalRailwayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sanfranciscomunicipalrailway" {...props} />

/** Sanic mark — compose with Select, Button, menus, etc. */
const SanicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sanic" {...props} />

/** Sanity mark — compose with Select, Button, menus, etc. */
const SanityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sanity" {...props} />

/** São Paulo Metro mark — compose with Select, Button, menus, etc. */
const SOPauloMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="saopaulometro" {...props} />

/** SAP mark — compose with Select, Button, menus, etc. */
const SAPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sap" {...props} />

/** Sartorius mark — compose with Select, Button, menus, etc. */
const SartoriusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sartorius" {...props} />

/** Sass mark — compose with Select, Button, menus, etc. */
const SassBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sass" {...props} />

/** Sat.1 mark — compose with Select, Button, menus, etc. */
const Sat1BrandIcon = (props: BrandIconProps) => <BrandIcon slug="sat1" {...props} />

/** Satellite mark — compose with Select, Button, menus, etc. */
const SatelliteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="satellite" {...props} />

/** Saturn mark — compose with Select, Button, menus, etc. */
const SaturnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="saturn" {...props} />

/** Sauce Labs mark — compose with Select, Button, menus, etc. */
const SauceLabsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="saucelabs" {...props} />

/** Saudia mark — compose with Select, Button, menus, etc. */
const SaudiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="saudia" {...props} />

/** Scala mark — compose with Select, Button, menus, etc. */
const ScalaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scala" {...props} />

/** Scalar mark — compose with Select, Button, menus, etc. */
const ScalarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scalar" {...props} />

/** Scaleway mark — compose with Select, Button, menus, etc. */
const ScalewayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scaleway" {...props} />

/** Scan mark — compose with Select, Button, menus, etc. */
const ScanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scan" {...props} />

/** Scania mark — compose with Select, Button, menus, etc. */
const ScaniaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scania" {...props} />

/** Schneider Electric mark — compose with Select, Button, menus, etc. */
const SchneiderElectricBrandIcon = (props: BrandIconProps) => <BrandIcon slug="schneiderelectric" {...props} />

/** scikit-learn mark — compose with Select, Button, menus, etc. */
const ScikitLearnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scikitlearn" {...props} />

/** Scilab mark — compose with Select, Button, menus, etc. */
const ScilabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scilab" {...props} />

/** SciPy mark — compose with Select, Button, menus, etc. */
const SciPyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scipy" {...props} />

/** Scopus mark — compose with Select, Button, menus, etc. */
const ScopusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scopus" {...props} />

/** SCP Foundation mark — compose with Select, Button, menus, etc. */
const SCPFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scpfoundation" {...props} />

/** Scrapbox mark — compose with Select, Button, menus, etc. */
const ScrapboxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scrapbox" {...props} />

/** Scrapy mark — compose with Select, Button, menus, etc. */
const ScrapyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scrapy" {...props} />

/** Scratch mark — compose with Select, Button, menus, etc. */
const ScratchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scratch" {...props} />

/** Screencastify mark — compose with Select, Button, menus, etc. */
const ScreencastifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="screencastify" {...props} />

/** Scrimba mark — compose with Select, Button, menus, etc. */
const ScrimbaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scrimba" {...props} />

/** ScrollReveal mark — compose with Select, Button, menus, etc. */
const ScrollRevealBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scrollreveal" {...props} />

/** Scrum Alliance mark — compose with Select, Button, menus, etc. */
const ScrumAllianceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scrumalliance" {...props} />

/** Scrutinizer CI mark — compose with Select, Button, menus, etc. */
const ScrutinizerCIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scrutinizerci" {...props} />

/** ScyllaDB mark — compose with Select, Button, menus, etc. */
const ScyllaDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="scylladb" {...props} />

/** Seafile mark — compose with Select, Button, menus, etc. */
const SeafileBrandIcon = (props: BrandIconProps) => <BrandIcon slug="seafile" {...props} />

/** Seagate mark — compose with Select, Button, menus, etc. */
const SeagateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="seagate" {...props} />

/** SearXNG mark — compose with Select, Button, menus, etc. */
const SearXNGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="searxng" {...props} />

/** SEAT mark — compose with Select, Button, menus, etc. */
const SEATBrandIcon = (props: BrandIconProps) => <BrandIcon slug="seat" {...props} />

/** SeatGeek mark — compose with Select, Button, menus, etc. */
const SeatGeekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="seatgeek" {...props} />

/** SecurityScorecard mark — compose with Select, Button, menus, etc. */
const SecurityScorecardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="securityscorecard" {...props} />

/** Sefaria mark — compose with Select, Button, menus, etc. */
const SefariaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sefaria" {...props} />

/** Sega mark — compose with Select, Button, menus, etc. */
const SegaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sega" {...props} />

/** Selenium mark — compose with Select, Button, menus, etc. */
const SeleniumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="selenium" {...props} />

/** Sellfy mark — compose with Select, Button, menus, etc. */
const SellfyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sellfy" {...props} />

/** Semantic Scholar mark — compose with Select, Button, menus, etc. */
const SemanticScholarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semanticscholar" {...props} />

/** Semantic UI mark — compose with Select, Button, menus, etc. */
const SemanticUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semanticui" {...props} />

/** Semantic UI React mark — compose with Select, Button, menus, etc. */
const SemanticUIReactBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semanticuireact" {...props} />

/** Semantic Web mark — compose with Select, Button, menus, etc. */
const SemanticWebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semanticweb" {...props} />

/** semantic-release mark — compose with Select, Button, menus, etc. */
const SemanticReleaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semanticrelease" {...props} />

/** Semaphore CI mark — compose with Select, Button, menus, etc. */
const SemaphoreCIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semaphoreci" {...props} />

/** Semrush mark — compose with Select, Button, menus, etc. */
const SemrushBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semrush" {...props} />

/** SemVer mark — compose with Select, Button, menus, etc. */
const SemVerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="semver" {...props} />

/** Sencha mark — compose with Select, Button, menus, etc. */
const SenchaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sencha" {...props} />

/** Sennheiser mark — compose with Select, Button, menus, etc. */
const SennheiserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sennheiser" {...props} />

/** Sensu mark — compose with Select, Button, menus, etc. */
const SensuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sensu" {...props} />

/** Sentry mark — compose with Select, Button, menus, etc. */
const SentryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sentry" {...props} />

/** SEPA mark — compose with Select, Button, menus, etc. */
const SEPABrandIcon = (props: BrandIconProps) => <BrandIcon slug="sepa" {...props} />

/** Sequelize mark — compose with Select, Button, menus, etc. */
const SequelizeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sequelize" {...props} />

/** ServBay mark — compose with Select, Button, menus, etc. */
const ServBayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="servbay" {...props} />

/** Server Fault mark — compose with Select, Button, menus, etc. */
const ServerFaultBrandIcon = (props: BrandIconProps) => <BrandIcon slug="serverfault" {...props} />

/** Serverless mark — compose with Select, Button, menus, etc. */
const ServerlessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="serverless" {...props} />

/** Session mark — compose with Select, Button, menus, etc. */
const SessionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="session" {...props} />

/** Sessionize mark — compose with Select, Button, menus, etc. */
const SessionizeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sessionize" {...props} />

/** Setapp mark — compose with Select, Button, menus, etc. */
const SetappBrandIcon = (props: BrandIconProps) => <BrandIcon slug="setapp" {...props} />

/** Setuptools mark — compose with Select, Button, menus, etc. */
const SetuptoolsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="setuptools" {...props} />

/** SFML mark — compose with Select, Button, menus, etc. */
const SFMLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sfml" {...props} />

/** shadcn/ui mark — compose with Select, Button, menus, etc. */
const ShadcnUiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shadcnui" {...props} />

/** Shadow mark — compose with Select, Button, menus, etc. */
const ShadowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shadow" {...props} />

/** Shanghai Metro mark — compose with Select, Button, menus, etc. */
const ShanghaiMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shanghaimetro" {...props} />

/** ShareX mark — compose with Select, Button, menus, etc. */
const ShareXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sharex" {...props} />

/** sharp mark — compose with Select, Button, menus, etc. */
const SharpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sharp" {...props} />

/** Shazam mark — compose with Select, Button, menus, etc. */
const ShazamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shazam" {...props} />

/** Shell mark — compose with Select, Button, menus, etc. */
const ShellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shell" {...props} />

/** Shelly mark — compose with Select, Button, menus, etc. */
const ShellyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shelly" {...props} />

/** Shenzhen Metro mark — compose with Select, Button, menus, etc. */
const ShenzhenMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shenzhenmetro" {...props} />

/** Shields.io mark — compose with Select, Button, menus, etc. */
const ShieldsIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shieldsdotio" {...props} />

/** Shikimori mark — compose with Select, Button, menus, etc. */
const ShikimoriBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shikimori" {...props} />

/** Shopee mark — compose with Select, Button, menus, etc. */
const ShopeeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shopee" {...props} />

/** Shopify mark — compose with Select, Button, menus, etc. */
const ShopifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shopify" {...props} />

/** Shopware mark — compose with Select, Button, menus, etc. */
const ShopwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shopware" {...props} />

/** Shortcut mark — compose with Select, Button, menus, etc. */
const ShortcutBrandIcon = (props: BrandIconProps) => <BrandIcon slug="shortcut" {...props} />

/** Showpad mark — compose with Select, Button, menus, etc. */
const ShowpadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="showpad" {...props} />

/** Showtime mark — compose with Select, Button, menus, etc. */
const ShowtimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="showtime" {...props} />

/** Showwcase mark — compose with Select, Button, menus, etc. */
const ShowwcaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="showwcase" {...props} />

/** Sidekiq mark — compose with Select, Button, menus, etc. */
const SidekiqBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sidekiq" {...props} />

/** SideQuest mark — compose with Select, Button, menus, etc. */
const SideQuestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sidequest" {...props} />

/** Siemens mark — compose with Select, Button, menus, etc. */
const SiemensBrandIcon = (props: BrandIconProps) => <BrandIcon slug="siemens" {...props} />

/** SiFive mark — compose with Select, Button, menus, etc. */
const SiFiveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sifive" {...props} />

/** Signal mark — compose with Select, Button, menus, etc. */
const SignalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="signal" {...props} />

/** Silver Airways mark — compose with Select, Button, menus, etc. */
const SilverAirwaysBrandIcon = (props: BrandIconProps) => <BrandIcon slug="silverairways" {...props} />

/** Similarweb mark — compose with Select, Button, menus, etc. */
const SimilarwebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="similarweb" {...props} />

/** Simkl mark — compose with Select, Button, menus, etc. */
const SimklBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simkl" {...props} />

/** Simple Analytics mark — compose with Select, Button, menus, etc. */
const SimpleAnalyticsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simpleanalytics" {...props} />

/** Simple Icons mark — compose with Select, Button, menus, etc. */
const SimpleIconsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simpleicons" {...props} />

/** Simple Icons CDN mark — compose with Select, Button, menus, etc. */
const SimpleIconsCDNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simpleiconscdn" {...props} />

/** SimpleLocalize mark — compose with Select, Button, menus, etc. */
const SimpleLocalizeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simplelocalize" {...props} />

/** SimpleLogin mark — compose with Select, Button, menus, etc. */
const SimpleLoginBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simplelogin" {...props} />

/** Simplenote mark — compose with Select, Button, menus, etc. */
const SimplenoteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simplenote" {...props} />

/** SimpleX mark — compose with Select, Button, menus, etc. */
const SimpleXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="simplex" {...props} />

/** Sina Weibo mark — compose with Select, Button, menus, etc. */
const SinaWeiboBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sinaweibo" {...props} />

/** Singapore Airlines mark — compose with Select, Button, menus, etc. */
const SingaporeAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="singaporeairlines" {...props} />

/** SingleStore mark — compose with Select, Button, menus, etc. */
const SingleStoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="singlestore" {...props} />

/** Sitecore mark — compose with Select, Button, menus, etc. */
const SitecoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sitecore" {...props} />

/** SitePoint mark — compose with Select, Button, menus, etc. */
const SitePointBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sitepoint" {...props} />

/** SiYuan mark — compose with Select, Button, menus, etc. */
const SiYuanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="siyuan" {...props} />

/** Skaffold mark — compose with Select, Button, menus, etc. */
const SkaffoldBrandIcon = (props: BrandIconProps) => <BrandIcon slug="skaffold" {...props} />

/** Skeleton mark — compose with Select, Button, menus, etc. */
const SkeletonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="skeleton" {...props} />

/** Sketch mark — compose with Select, Button, menus, etc. */
const SketchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sketch" {...props} />

/** Sketchfab mark — compose with Select, Button, menus, etc. */
const SketchfabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sketchfab" {...props} />

/** SketchUp mark — compose with Select, Button, menus, etc. */
const SketchUpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sketchup" {...props} />

/** Skillshare mark — compose with Select, Button, menus, etc. */
const SkillshareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="skillshare" {...props} />

/** ŠKODA mark — compose with Select, Button, menus, etc. */
const KODABrandIcon = (props: BrandIconProps) => <BrandIcon slug="skoda" {...props} />

/** Sky mark — compose with Select, Button, menus, etc. */
const SkyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sky" {...props} />

/** Skypack mark — compose with Select, Button, menus, etc. */
const SkypackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="skypack" {...props} />

/** Slack mark — compose with Select, Button, menus, etc. */
const SlackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slack" {...props} />

/** Slackware mark — compose with Select, Button, menus, etc. */
const SlackwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slackware" {...props} />

/** Slashdot mark — compose with Select, Button, menus, etc. */
const SlashdotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slashdot" {...props} />

/** SlickPic mark — compose with Select, Button, menus, etc. */
const SlickPicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slickpic" {...props} />

/** Slides mark — compose with Select, Button, menus, etc. */
const SlidesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slides" {...props} />

/** SlideShare mark — compose with Select, Button, menus, etc. */
const SlideShareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slideshare" {...props} />

/** Slint mark — compose with Select, Button, menus, etc. */
const SlintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="slint" {...props} />

/** smart mark — compose with Select, Button, menus, etc. */
const SmartBrandIcon = (props: BrandIconProps) => <BrandIcon slug="smart" {...props} />

/** SmartThings mark — compose with Select, Button, menus, etc. */
const SmartThingsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="smartthings" {...props} />

/** Smashing Magazine mark — compose with Select, Button, menus, etc. */
const SmashingMagazineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="smashingmagazine" {...props} />

/** Smoothcomp mark — compose with Select, Button, menus, etc. */
const SmoothcompBrandIcon = (props: BrandIconProps) => <BrandIcon slug="smoothcomp" {...props} />

/** SMRT mark — compose with Select, Button, menus, etc. */
const SMRTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="smrt" {...props} />

/** SmugMug mark — compose with Select, Button, menus, etc. */
const SmugMugBrandIcon = (props: BrandIconProps) => <BrandIcon slug="smugmug" {...props} />

/** Snapchat mark — compose with Select, Button, menus, etc. */
const SnapchatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snapchat" {...props} />

/** Snapcraft mark — compose with Select, Button, menus, etc. */
const SnapcraftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snapcraft" {...props} />

/** Snapdragon mark — compose with Select, Button, menus, etc. */
const SnapdragonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snapdragon" {...props} />

/** SNCF mark — compose with Select, Button, menus, etc. */
const SNCFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sncf" {...props} />

/** Snort mark — compose with Select, Button, menus, etc. */
const SnortBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snort" {...props} />

/** Snowflake mark — compose with Select, Button, menus, etc. */
const SnowflakeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snowflake" {...props} />

/** Snowpack mark — compose with Select, Button, menus, etc. */
const SnowpackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snowpack" {...props} />

/** Snyk mark — compose with Select, Button, menus, etc. */
const SnykBrandIcon = (props: BrandIconProps) => <BrandIcon slug="snyk" {...props} />

/** Social Blade mark — compose with Select, Button, menus, etc. */
const SocialBladeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="socialblade" {...props} />

/** Society6 mark — compose with Select, Button, menus, etc. */
const Society6BrandIcon = (props: BrandIconProps) => <BrandIcon slug="society6" {...props} />

/** Socket mark — compose with Select, Button, menus, etc. */
const SocketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="socket" {...props} />

/** Socket.io mark — compose with Select, Button, menus, etc. */
const SocketIoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="socketdotio" {...props} />

/** Softcatalà mark — compose with Select, Button, menus, etc. */
const SoftcatalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="softcatala" {...props} />

/** Softpedia mark — compose with Select, Button, menus, etc. */
const SoftpediaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="softpedia" {...props} />

/** Sogou mark — compose with Select, Button, menus, etc. */
const SogouBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sogou" {...props} />

/** Solana mark — compose with Select, Button, menus, etc. */
const SolanaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="solana" {...props} />

/** Solid mark — compose with Select, Button, menus, etc. */
const SolidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="solid" {...props} />

/** Solidity mark — compose with Select, Button, menus, etc. */
const SolidityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="solidity" {...props} />

/** Sololearn mark — compose with Select, Button, menus, etc. */
const SololearnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sololearn" {...props} />

/** Solus mark — compose with Select, Button, menus, etc. */
const SolusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="solus" {...props} />

/** solved.ac mark — compose with Select, Button, menus, etc. */
const SolvedAcBrandIcon = (props: BrandIconProps) => <BrandIcon slug="solveddotac" {...props} />

/** Sonar mark — compose with Select, Button, menus, etc. */
const SonarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonar" {...props} />

/** SonarQube Cloud mark — compose with Select, Button, menus, etc. */
const SonarQubeCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonarqubecloud" {...props} />

/** SonarQube for IDE mark — compose with Select, Button, menus, etc. */
const SonarQubeForIDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonarqubeforide" {...props} />

/** SonarQube Server mark — compose with Select, Button, menus, etc. */
const SonarQubeServerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonarqubeserver" {...props} />

/** sonarr mark — compose with Select, Button, menus, etc. */
const SonarrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonarr" {...props} />

/** Sonatype mark — compose with Select, Button, menus, etc. */
const SonatypeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonatype" {...props} />

/** Songkick mark — compose with Select, Button, menus, etc. */
const SongkickBrandIcon = (props: BrandIconProps) => <BrandIcon slug="songkick" {...props} />

/** Songoda mark — compose with Select, Button, menus, etc. */
const SongodaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="songoda" {...props} />

/** SonicWall mark — compose with Select, Button, menus, etc. */
const SonicWallBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonicwall" {...props} />

/** Sonos mark — compose with Select, Button, menus, etc. */
const SonosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sonos" {...props} />

/** Sony mark — compose with Select, Button, menus, etc. */
const SonyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sony" {...props} />

/** Soriana mark — compose with Select, Button, menus, etc. */
const SorianaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="soriana" {...props} />

/** Soundcharts mark — compose with Select, Button, menus, etc. */
const SoundchartsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="soundcharts" {...props} />

/** SoundCloud mark — compose with Select, Button, menus, etc. */
const SoundCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="soundcloud" {...props} />

/** Source Engine mark — compose with Select, Button, menus, etc. */
const SourceEngineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sourceengine" {...props} />

/** SourceForge mark — compose with Select, Button, menus, etc. */
const SourceForgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sourceforge" {...props} />

/** SourceHut mark — compose with Select, Button, menus, etc. */
const SourceHutBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sourcehut" {...props} />

/** Sourcetree mark — compose with Select, Button, menus, etc. */
const SourcetreeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sourcetree" {...props} />

/** Southwest Airlines mark — compose with Select, Button, menus, etc. */
const SouthwestAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="southwestairlines" {...props} />

/** Spacemacs mark — compose with Select, Button, menus, etc. */
const SpacemacsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spacemacs" {...props} />

/** Spaceship mark — compose with Select, Button, menus, etc. */
const SpaceshipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spaceship" {...props} />

/** SpaceX mark — compose with Select, Button, menus, etc. */
const SpaceXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spacex" {...props} />

/** spaCy mark — compose with Select, Button, menus, etc. */
const SpaCyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spacy" {...props} />

/** Spark AR mark — compose with Select, Button, menus, etc. */
const SparkARBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sparkar" {...props} />

/** Sparkasse mark — compose with Select, Button, menus, etc. */
const SparkasseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sparkasse" {...props} />

/** SparkFun mark — compose with Select, Button, menus, etc. */
const SparkFunBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sparkfun" {...props} />

/** SparkPost mark — compose with Select, Button, menus, etc. */
const SparkPostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sparkpost" {...props} />

/** SPDX mark — compose with Select, Button, menus, etc. */
const SPDXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spdx" {...props} />

/** Speaker Deck mark — compose with Select, Button, menus, etc. */
const SpeakerDeckBrandIcon = (props: BrandIconProps) => <BrandIcon slug="speakerdeck" {...props} />

/** Spectrum mark — compose with Select, Button, menus, etc. */
const SpectrumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spectrum" {...props} />

/** Speedtest mark — compose with Select, Button, menus, etc. */
const SpeedtestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="speedtest" {...props} />

/** SpeedyPage mark — compose with Select, Button, menus, etc. */
const SpeedyPageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="speedypage" {...props} />

/** Sphere Online Judge mark — compose with Select, Button, menus, etc. */
const SphereOnlineJudgeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spoj" {...props} />

/** Sphinx mark — compose with Select, Button, menus, etc. */
const SphinxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sphinx" {...props} />

/** SpiderMonkey mark — compose with Select, Button, menus, etc. */
const SpiderMonkeyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spidermonkey" {...props} />

/** SpigotMC mark — compose with Select, Button, menus, etc. */
const SpigotMCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spigotmc" {...props} />

/** Spine mark — compose with Select, Button, menus, etc. */
const SpineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spine" {...props} />

/** Spinnaker mark — compose with Select, Button, menus, etc. */
const SpinnakerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spinnaker" {...props} />

/** Splunk mark — compose with Select, Button, menus, etc. */
const SplunkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="splunk" {...props} />

/** Spond mark — compose with Select, Button, menus, etc. */
const SpondBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spond" {...props} />

/** Spotify mark — compose with Select, Button, menus, etc. */
const SpotifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spotify" {...props} />

/** Spotlight mark — compose with Select, Button, menus, etc. */
const SpotlightBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spotlight" {...props} />

/** Spreadshirt mark — compose with Select, Button, menus, etc. */
const SpreadshirtBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spreadshirt" {...props} />

/** Spreaker mark — compose with Select, Button, menus, etc. */
const SpreakerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spreaker" {...props} />

/** Spring mark — compose with Select, Button, menus, etc. */
const SpringBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spring" {...props} />

/** Spring mark — compose with Select, Button, menus, etc. */
const SpringCreatorsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spring_creators" {...props} />

/** Spring Boot mark — compose with Select, Button, menus, etc. */
const SpringBootBrandIcon = (props: BrandIconProps) => <BrandIcon slug="springboot" {...props} />

/** Spring Security mark — compose with Select, Button, menus, etc. */
const SpringSecurityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="springsecurity" {...props} />

/** Spyder IDE mark — compose with Select, Button, menus, etc. */
const SpyderIDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="spyderide" {...props} />

/** SQLAlchemy mark — compose with Select, Button, menus, etc. */
const SQLAlchemyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sqlalchemy" {...props} />

/** SQLite mark — compose with Select, Button, menus, etc. */
const SQLiteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sqlite" {...props} />

/** Square mark — compose with Select, Button, menus, etc. */
const SquareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="square" {...props} />

/** Square Enix mark — compose with Select, Button, menus, etc. */
const SquareEnixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="squareenix" {...props} />

/** Squarespace mark — compose with Select, Button, menus, etc. */
const SquarespaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="squarespace" {...props} />

/** SRG SSR mark — compose with Select, Button, menus, etc. */
const SRGSSRBrandIcon = (props: BrandIconProps) => <BrandIcon slug="srgssr" {...props} />

/** SSRN mark — compose with Select, Button, menus, etc. */
const SSRNBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ssrn" {...props} />

/** SST mark — compose with Select, Button, menus, etc. */
const SSTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sst" {...props} />

/** Stack Exchange mark — compose with Select, Button, menus, etc. */
const StackExchangeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackexchange" {...props} />

/** Stack Overflow mark — compose with Select, Button, menus, etc. */
const StackOverflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackoverflow" {...props} />

/** Stackbit mark — compose with Select, Button, menus, etc. */
const StackbitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackbit" {...props} />

/** StackBlitz mark — compose with Select, Button, menus, etc. */
const StackBlitzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackblitz" {...props} />

/** StackEdit mark — compose with Select, Button, menus, etc. */
const StackEditBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackedit" {...props} />

/** StackHawk mark — compose with Select, Button, menus, etc. */
const StackHawkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackhawk" {...props} />

/** StackShare mark — compose with Select, Button, menus, etc. */
const StackShareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stackshare" {...props} />

/** Stadia mark — compose with Select, Button, menus, etc. */
const StadiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stadia" {...props} />

/** Staffbase mark — compose with Select, Button, menus, etc. */
const StaffbaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="staffbase" {...props} />

/** Stagetimer mark — compose with Select, Button, menus, etc. */
const StagetimerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stagetimer" {...props} />

/** Standard Resume mark — compose with Select, Button, menus, etc. */
const StandardResumeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="standardresume" {...props} />

/** StandardJS mark — compose with Select, Button, menus, etc. */
const StandardJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="standardjs" {...props} />

/** Star Trek mark — compose with Select, Button, menus, etc. */
const StarTrekBrandIcon = (props: BrandIconProps) => <BrandIcon slug="startrek" {...props} />

/** Starbucks mark — compose with Select, Button, menus, etc. */
const StarbucksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="starbucks" {...props} />

/** Stardock mark — compose with Select, Button, menus, etc. */
const StardockBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stardock" {...props} />

/** Starling Bank mark — compose with Select, Button, menus, etc. */
const StarlingBankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="starlingbank" {...props} />

/** Starship mark — compose with Select, Button, menus, etc. */
const StarshipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="starship" {...props} />

/** start.gg mark — compose with Select, Button, menus, etc. */
const StartGgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="startdotgg" {...props} />

/** Startpage mark — compose with Select, Button, menus, etc. */
const StartpageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="startpage" {...props} />

/** STARZ mark — compose with Select, Button, menus, etc. */
const StarzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="starz" {...props} />

/** Statamic mark — compose with Select, Button, menus, etc. */
const StatamicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="statamic" {...props} />

/** Statista mark — compose with Select, Button, menus, etc. */
const StatistaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="statista" {...props} />

/** Statuspage mark — compose with Select, Button, menus, etc. */
const StatuspageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="statuspage" {...props} />

/** Statuspal mark — compose with Select, Button, menus, etc. */
const StatuspalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="statuspal" {...props} />

/** Steam mark — compose with Select, Button, menus, etc. */
const SteamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steam" {...props} />

/** Steam Deck mark — compose with Select, Button, menus, etc. */
const SteamDeckBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steamdeck" {...props} />

/** SteamDB mark — compose with Select, Button, menus, etc. */
const SteamDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steamdb" {...props} />

/** Steamworks mark — compose with Select, Button, menus, etc. */
const SteamworksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steamworks" {...props} />

/** Steelseries mark — compose with Select, Button, menus, etc. */
const SteelseriesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steelseries" {...props} />

/** Steem mark — compose with Select, Button, menus, etc. */
const SteemBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steem" {...props} />

/** Steemit mark — compose with Select, Button, menus, etc. */
const SteemitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steemit" {...props} />

/** Steinberg mark — compose with Select, Button, menus, etc. */
const SteinbergBrandIcon = (props: BrandIconProps) => <BrandIcon slug="steinberg" {...props} />

/** Stellar mark — compose with Select, Button, menus, etc. */
const StellarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stellar" {...props} />

/** Stencil mark — compose with Select, Button, menus, etc. */
const StencilBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stencil" {...props} />

/** Stencyl mark — compose with Select, Button, menus, etc. */
const StencylBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stencyl" {...props} />

/** Stimulus mark — compose with Select, Button, menus, etc. */
const StimulusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stimulus" {...props} />

/** STMicroelectronics mark — compose with Select, Button, menus, etc. */
const STMicroelectronicsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stmicroelectronics" {...props} />

/** StockX mark — compose with Select, Button, menus, etc. */
const StockXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stockx" {...props} />

/** StopStalk mark — compose with Select, Button, menus, etc. */
const StopStalkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stopstalk" {...props} />

/** Storyblok mark — compose with Select, Button, menus, etc. */
const StoryblokBrandIcon = (props: BrandIconProps) => <BrandIcon slug="storyblok" {...props} />

/** Storybook mark — compose with Select, Button, menus, etc. */
const StorybookBrandIcon = (props: BrandIconProps) => <BrandIcon slug="storybook" {...props} />

/** Strapi mark — compose with Select, Button, menus, etc. */
const StrapiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="strapi" {...props} />

/** Strava mark — compose with Select, Button, menus, etc. */
const StravaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="strava" {...props} />

/** Streamlabs mark — compose with Select, Button, menus, etc. */
const StreamlabsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="streamlabs" {...props} />

/** Streamlit mark — compose with Select, Button, menus, etc. */
const StreamlitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="streamlit" {...props} />

/** StreamRunners mark — compose with Select, Button, menus, etc. */
const StreamRunnersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="streamrunners" {...props} />

/** Stremio mark — compose with Select, Button, menus, etc. */
const StremioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stremio" {...props} />

/** Stripe mark — compose with Select, Button, menus, etc. */
const StripeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stripe" {...props} />

/** strongSwan mark — compose with Select, Button, menus, etc. */
const StrongSwanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="strongswan" {...props} />

/** Stryker mark — compose with Select, Button, menus, etc. */
const StrykerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stryker" {...props} />

/** StubHub mark — compose with Select, Button, menus, etc. */
const StubHubBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stubhub" {...props} />

/** Studio 3T mark — compose with Select, Button, menus, etc. */
const Studio3TBrandIcon = (props: BrandIconProps) => <BrandIcon slug="studio3t" {...props} />

/** styled-components mark — compose with Select, Button, menus, etc. */
const StyledComponentsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="styledcomponents" {...props} />

/** stylelint mark — compose with Select, Button, menus, etc. */
const StylelintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stylelint" {...props} />

/** StyleShare mark — compose with Select, Button, menus, etc. */
const StyleShareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="styleshare" {...props} />

/** Stylus mark — compose with Select, Button, menus, etc. */
const StylusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="stylus" {...props} />

/** Subaru mark — compose with Select, Button, menus, etc. */
const SubaruBrandIcon = (props: BrandIconProps) => <BrandIcon slug="subaru" {...props} />

/** Sublime Text mark — compose with Select, Button, menus, etc. */
const SublimeTextBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sublimetext" {...props} />

/** Substack mark — compose with Select, Button, menus, etc. */
const SubstackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="substack" {...props} />

/** Subtitle Edit mark — compose with Select, Button, menus, etc. */
const SubtitleEditBrandIcon = (props: BrandIconProps) => <BrandIcon slug="subtitleedit" {...props} />

/** Subversion mark — compose with Select, Button, menus, etc. */
const SubversionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="subversion" {...props} />

/** suckless mark — compose with Select, Button, menus, etc. */
const SucklessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="suckless" {...props} />

/** Sui mark — compose with Select, Button, menus, etc. */
const SuiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sui" {...props} />

/** Suitest mark — compose with Select, Button, menus, etc. */
const SuitestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="suitest" {...props} />

/** Sumo Logic mark — compose with Select, Button, menus, etc. */
const SumoLogicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sumologic" {...props} />

/** SumUp mark — compose with Select, Button, menus, etc. */
const SumUpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sumup" {...props} />

/** Suno mark — compose with Select, Button, menus, etc. */
const SunoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="suno" {...props} />

/** Sunrise mark — compose with Select, Button, menus, etc. */
const SunriseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sunrise" {...props} />

/** Supabase mark — compose with Select, Button, menus, etc. */
const SupabaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="supabase" {...props} />

/** Super User mark — compose with Select, Button, menus, etc. */
const SuperUserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="superuser" {...props} />

/** Supercell mark — compose with Select, Button, menus, etc. */
const SupercellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="supercell" {...props} />

/** Supercrease mark — compose with Select, Button, menus, etc. */
const SupercreaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="supercrease" {...props} />

/** Supermicro mark — compose with Select, Button, menus, etc. */
const SupermicroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="supermicro" {...props} />

/** Surfshark mark — compose with Select, Button, menus, etc. */
const SurfsharkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="surfshark" {...props} />

/** SurrealDB mark — compose with Select, Button, menus, etc. */
const SurrealDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="surrealdb" {...props} />

/** SurveyMonkey mark — compose with Select, Button, menus, etc. */
const SurveyMonkeyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="surveymonkey" {...props} />

/** SUSE mark — compose with Select, Button, menus, etc. */
const SUSEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="suse" {...props} />

/** Suzuki mark — compose with Select, Button, menus, etc. */
const SuzukiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="suzuki" {...props} />

/** Svelte mark — compose with Select, Button, menus, etc. */
const SvelteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="svelte" {...props} />

/** SVG mark — compose with Select, Button, menus, etc. */
const SVGBrandIcon = (props: BrandIconProps) => <BrandIcon slug="svg" {...props} />

/** SVG.js mark — compose with Select, Button, menus, etc. */
const SVGJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="svgdotjs" {...props} />

/** SVGO mark — compose with Select, Button, menus, etc. */
const SVGOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="svgo" {...props} />

/** SvgTrace mark — compose with Select, Button, menus, etc. */
const SvgTraceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="svgtrace" {...props} />

/** Swagger mark — compose with Select, Button, menus, etc. */
const SwaggerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swagger" {...props} />

/** Swarm mark — compose with Select, Button, menus, etc. */
const SwarmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swarm" {...props} />

/** Sway mark — compose with Select, Button, menus, etc. */
const SwayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sway" {...props} />

/** SWC mark — compose with Select, Button, menus, etc. */
const SWCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swc" {...props} />

/** Swift mark — compose with Select, Button, menus, etc. */
const SwiftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swift" {...props} />

/** Swiggy mark — compose with Select, Button, menus, etc. */
const SwiggyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swiggy" {...props} />

/** Swiper mark — compose with Select, Button, menus, etc. */
const SwiperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swiper" {...props} />

/** Swisscows mark — compose with Select, Button, menus, etc. */
const SwisscowsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swisscows" {...props} />

/** SWR mark — compose with Select, Button, menus, etc. */
const SWRBrandIcon = (props: BrandIconProps) => <BrandIcon slug="swr" {...props} />

/** Symantec mark — compose with Select, Button, menus, etc. */
const SymantecBrandIcon = (props: BrandIconProps) => <BrandIcon slug="symantec" {...props} />

/** Symbolab mark — compose with Select, Button, menus, etc. */
const SymbolabBrandIcon = (props: BrandIconProps) => <BrandIcon slug="symbolab" {...props} />

/** Symfony mark — compose with Select, Button, menus, etc. */
const SymfonyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="symfony" {...props} />

/** Symphony mark — compose with Select, Button, menus, etc. */
const SymphonyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="symphony" {...props} />

/** SymPy mark — compose with Select, Button, menus, etc. */
const SymPyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="sympy" {...props} />

/** Syncthing mark — compose with Select, Button, menus, etc. */
const SyncthingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="syncthing" {...props} />

/** Synology mark — compose with Select, Button, menus, etc. */
const SynologyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="synology" {...props} />

/** System76 mark — compose with Select, Button, menus, etc. */
const System76BrandIcon = (props: BrandIconProps) => <BrandIcon slug="system76" {...props} />

/** Tabelog mark — compose with Select, Button, menus, etc. */
const TabelogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tabelog" {...props} />

/** TableCheck mark — compose with Select, Button, menus, etc. */
const TableCheckBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tablecheck" {...props} />

/** Taco Bell mark — compose with Select, Button, menus, etc. */
const TacoBellBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tacobell" {...props} />

/** tado° mark — compose with Select, Button, menus, etc. */
const TadoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tado" {...props} />

/** Taichi Graphics mark — compose with Select, Button, menus, etc. */
const TaichiGraphicsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="taichigraphics" {...props} />

/** Taichi Lang mark — compose with Select, Button, menus, etc. */
const TaichiLangBrandIcon = (props: BrandIconProps) => <BrandIcon slug="taichilang" {...props} />

/** Tails mark — compose with Select, Button, menus, etc. */
const TailsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tails" {...props} />

/** Tailscale mark — compose with Select, Button, menus, etc. */
const TailscaleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tailscale" {...props} />

/** Tailwind CSS mark — compose with Select, Button, menus, etc. */
const TailwindCSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tailwindcss" {...props} />

/** Taipy mark — compose with Select, Button, menus, etc. */
const TaipyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="taipy" {...props} />

/** Take-Two Interactive Software mark — compose with Select, Button, menus, etc. */
const TakeTwoInteractiveSoftwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="taketwointeractivesoftware" {...props} />

/** Talend mark — compose with Select, Button, menus, etc. */
const TalendBrandIcon = (props: BrandIconProps) => <BrandIcon slug="talend" {...props} />

/** Talenthouse mark — compose with Select, Button, menus, etc. */
const TalenthouseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="talenthouse" {...props} />

/** Talos mark — compose with Select, Button, menus, etc. */
const TalosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="talos" {...props} />

/** Tamiya mark — compose with Select, Button, menus, etc. */
const TamiyaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tamiya" {...props} />

/** Tampermonkey mark — compose with Select, Button, menus, etc. */
const TampermonkeyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tampermonkey" {...props} />

/** Tangled mark — compose with Select, Button, menus, etc. */
const TangledBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tangled" {...props} />

/** TanStack mark — compose with Select, Button, menus, etc. */
const TanStackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tanstack" {...props} />

/** Taobao mark — compose with Select, Button, menus, etc. */
const TaobaoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="taobao" {...props} />

/** Tapas mark — compose with Select, Button, menus, etc. */
const TapasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tapas" {...props} />

/** Target mark — compose with Select, Button, menus, etc. */
const TargetBrandIcon = (props: BrandIconProps) => <BrandIcon slug="target" {...props} />

/** TAROM mark — compose with Select, Button, menus, etc. */
const TaromBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tarom" {...props} />

/** Tarteaucitron mark — compose with Select, Button, menus, etc. */
const TarteaucitronBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tarteaucitron" {...props} />

/** Task mark — compose with Select, Button, menus, etc. */
const TaskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="task" {...props} />

/** Tasmota mark — compose with Select, Button, menus, etc. */
const TasmotaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tasmota" {...props} />

/** Tata mark — compose with Select, Button, menus, etc. */
const TataBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tata" {...props} />

/** Tata Consultancy Services mark — compose with Select, Button, menus, etc. */
const TataConsultancyServicesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tcs" {...props} />

/** Tauri mark — compose with Select, Button, menus, etc. */
const TauriBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tauri" {...props} />

/** TaxBuzz mark — compose with Select, Button, menus, etc. */
const TaxBuzzBrandIcon = (props: BrandIconProps) => <BrandIcon slug="taxbuzz" {...props} />

/** Teal mark — compose with Select, Button, menus, etc. */
const TealBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teal" {...props} />

/** TeamCity mark — compose with Select, Button, menus, etc. */
const TeamCityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teamcity" {...props} />

/** TeamSpeak mark — compose with Select, Button, menus, etc. */
const TeamSpeakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teamspeak" {...props} />

/** TeamViewer mark — compose with Select, Button, menus, etc. */
const TeamViewerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teamviewer" {...props} />

/** TechCrunch mark — compose with Select, Button, menus, etc. */
const TechCrunchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="techcrunch" {...props} />

/** TED mark — compose with Select, Button, menus, etc. */
const TEDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ted" {...props} />

/** TeePublic mark — compose with Select, Button, menus, etc. */
const TeePublicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teepublic" {...props} />

/** Teespring mark — compose with Select, Button, menus, etc. */
const TeespringBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teespring" {...props} />

/** Tekton mark — compose with Select, Button, menus, etc. */
const TektonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tekton" {...props} />

/** TELE 5 mark — compose with Select, Button, menus, etc. */
const TELE5BrandIcon = (props: BrandIconProps) => <BrandIcon slug="tele5" {...props} />

/** Télé-Québec mark — compose with Select, Button, menus, etc. */
const TLQuBecBrandIcon = (props: BrandIconProps) => <BrandIcon slug="telequebec" {...props} />

/** Telefónica mark — compose with Select, Button, menus, etc. */
const TelefNicaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="telefonica" {...props} />

/** Telegram mark — compose with Select, Button, menus, etc. */
const TelegramBrandIcon = (props: BrandIconProps) => <BrandIcon slug="telegram" {...props} />

/** Telegraph mark — compose with Select, Button, menus, etc. */
const TelegraphBrandIcon = (props: BrandIconProps) => <BrandIcon slug="telegraph" {...props} />

/** Telenor mark — compose with Select, Button, menus, etc. */
const TelenorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="telenor" {...props} />

/** Temporal mark — compose with Select, Button, menus, etc. */
const TemporalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="temporal" {...props} />

/** Tencent Hy mark — compose with Select, Button, menus, etc. */
const TencentHyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tencenthy" {...props} />

/** TensorFlow mark — compose with Select, Button, menus, etc. */
const TensorFlowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tensorflow" {...props} />

/** Teradata mark — compose with Select, Button, menus, etc. */
const TeradataBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teradata" {...props} />

/** teratail mark — compose with Select, Button, menus, etc. */
const TeratailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="teratail" {...props} />

/** Termius mark — compose with Select, Button, menus, etc. */
const TermiusBrandIcon = (props: BrandIconProps) => <BrandIcon slug="termius" {...props} />

/** Terraform mark — compose with Select, Button, menus, etc. */
const TerraformBrandIcon = (props: BrandIconProps) => <BrandIcon slug="terraform" {...props} />

/** Tesco mark — compose with Select, Button, menus, etc. */
const TescoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tesco" {...props} />

/** Tesla mark — compose with Select, Button, menus, etc. */
const TeslaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tesla" {...props} />

/** TestCafe mark — compose with Select, Button, menus, etc. */
const TestCafeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="testcafe" {...props} />

/** Testin mark — compose with Select, Button, menus, etc. */
const TestinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="testin" {...props} />

/** Testing Library mark — compose with Select, Button, menus, etc. */
const TestingLibraryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="testinglibrary" {...props} />

/** TestRail mark — compose with Select, Button, menus, etc. */
const TestRailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="testrail" {...props} />

/** Tether mark — compose with Select, Button, menus, etc. */
const TetherBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tether" {...props} />

/** Textpattern mark — compose with Select, Button, menus, etc. */
const TextpatternBrandIcon = (props: BrandIconProps) => <BrandIcon slug="textpattern" {...props} />

/** Textual mark — compose with Select, Button, menus, etc. */
const TextualBrandIcon = (props: BrandIconProps) => <BrandIcon slug="textual" {...props} />

/** TGA mark — compose with Select, Button, menus, etc. */
const TGABrandIcon = (props: BrandIconProps) => <BrandIcon slug="tga" {...props} />

/** Thangs mark — compose with Select, Button, menus, etc. */
const ThangsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thangs" {...props} />

/** Thanos mark — compose with Select, Button, menus, etc. */
const ThanosBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thanos" {...props} />

/** The Algorithms mark — compose with Select, Button, menus, etc. */
const TheAlgorithmsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thealgorithms" {...props} />

/** The Boring Company mark — compose with Select, Button, menus, etc. */
const TheBoringCompanyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theboringcompany" {...props} />

/** The Conversation mark — compose with Select, Button, menus, etc. */
const TheConversationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theconversation" {...props} />

/** THE FINALS mark — compose with Select, Button, menus, etc. */
const THEFinalsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thefinals" {...props} />

/** The Guardian mark — compose with Select, Button, menus, etc. */
const TheGuardianBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theguardian" {...props} />

/** The Irish Times mark — compose with Select, Button, menus, etc. */
const TheIrishTimesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theirishtimes" {...props} />

/** The Mighty mark — compose with Select, Button, menus, etc. */
const TheMightyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="themighty" {...props} />

/** The Models Resource mark — compose with Select, Button, menus, etc. */
const TheModelsResourceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="themodelsresource" {...props} />

/** The Movie Database mark — compose with Select, Button, menus, etc. */
const TheMovieDatabaseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="themoviedatabase" {...props} />

/** The North Face mark — compose with Select, Button, menus, etc. */
const TheNorthFaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thenorthface" {...props} />

/** The Odin Project mark — compose with Select, Button, menus, etc. */
const TheOdinProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theodinproject" {...props} />

/** The Planetary Society mark — compose with Select, Button, menus, etc. */
const ThePlanetarySocietyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theplanetarysociety" {...props} />

/** The Register mark — compose with Select, Button, menus, etc. */
const TheRegisterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theregister" {...props} />

/** The Sounds Resource mark — compose with Select, Button, menus, etc. */
const TheSoundsResourceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thesoundsresource" {...props} />

/** The Spriters Resource mark — compose with Select, Button, menus, etc. */
const TheSpritersResourceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thespritersresource" {...props} />

/** The StoryGraph mark — compose with Select, Button, menus, etc. */
const TheStoryGraphBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thestorygraph" {...props} />

/** The Washington Post mark — compose with Select, Button, menus, etc. */
const TheWashingtonPostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thewashingtonpost" {...props} />

/** The Weather Channel mark — compose with Select, Button, menus, etc. */
const TheWeatherChannelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="theweatherchannel" {...props} />

/** Thingiverse mark — compose with Select, Button, menus, etc. */
const ThingiverseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thingiverse" {...props} />

/** Things mark — compose with Select, Button, menus, etc. */
const ThingsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="things" {...props} />

/** ThinkPad mark — compose with Select, Button, menus, etc. */
const ThinkPadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thinkpad" {...props} />

/** thirdweb mark — compose with Select, Button, menus, etc. */
const ThirdwebBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thirdweb" {...props} />

/** Threadless mark — compose with Select, Button, menus, etc. */
const ThreadlessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="threadless" {...props} />

/** Threads mark — compose with Select, Button, menus, etc. */
const ThreadsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="threads" {...props} />

/** Three.js mark — compose with Select, Button, menus, etc. */
const ThreeJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="threedotjs" {...props} />

/** Threema mark — compose with Select, Button, menus, etc. */
const ThreemaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="threema" {...props} />

/** Thumbtack mark — compose with Select, Button, menus, etc. */
const ThumbtackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thumbtack" {...props} />

/** Thunderbird mark — compose with Select, Button, menus, etc. */
const ThunderbirdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thunderbird" {...props} />

/** Thunderstore mark — compose with Select, Button, menus, etc. */
const ThunderstoreBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thunderstore" {...props} />

/** Thurgauer Kantonalbank mark — compose with Select, Button, menus, etc. */
const ThurgauerKantonalbankBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thurgauerkantonalbank" {...props} />

/** Thymeleaf mark — compose with Select, Button, menus, etc. */
const ThymeleafBrandIcon = (props: BrandIconProps) => <BrandIcon slug="thymeleaf" {...props} />

/** Ticket Tailor mark — compose with Select, Button, menus, etc. */
const TicketTailorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tickettailor" {...props} />

/** Ticketmaster mark — compose with Select, Button, menus, etc. */
const TicketmasterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ticketmaster" {...props} />

/** TickTick mark — compose with Select, Button, menus, etc. */
const TickTickBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ticktick" {...props} />

/** TIDAL mark — compose with Select, Button, menus, etc. */
const TidalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tidal" {...props} />

/** TiDB mark — compose with Select, Button, menus, etc. */
const TiDBBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tidb" {...props} />

/** TiddlyWiki mark — compose with Select, Button, menus, etc. */
const TiddlyWikiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tiddlywiki" {...props} />

/** Tide mark — compose with Select, Button, menus, etc. */
const TideBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tide" {...props} />

/** Tidyverse mark — compose with Select, Button, menus, etc. */
const TidyverseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tidyverse" {...props} />

/** TietoEVRY mark — compose with Select, Button, menus, etc. */
const TietoEVRYBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tietoevry" {...props} />

/** TikTok mark — compose with Select, Button, menus, etc. */
const TikTokBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tiktok" {...props} />

/** Tilda Publishing mark — compose with Select, Button, menus, etc. */
const TildaPublishingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tildapublishing" {...props} />

/** Tile mark — compose with Select, Button, menus, etc. */
const TileBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tile" {...props} />

/** Timescale mark — compose with Select, Button, menus, etc. */
const TimescaleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="timescale" {...props} />

/** Tina mark — compose with Select, Button, menus, etc. */
const TinaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tina" {...props} />

/** Tinder mark — compose with Select, Button, menus, etc. */
const TinderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tinder" {...props} />

/** Tindie mark — compose with Select, Button, menus, etc. */
const TindieBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tindie" {...props} />

/** Tinkercad mark — compose with Select, Button, menus, etc. */
const TinkercadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tinkercad" {...props} />

/** tinygrad mark — compose with Select, Button, menus, etc. */
const TinygradBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tinygrad" {...props} />

/** TinyLetter mark — compose with Select, Button, menus, etc. */
const TinyLetterBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tinyletter" {...props} />

/** Tistory mark — compose with Select, Button, menus, etc. */
const TistoryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tistory" {...props} />

/** tldraw mark — compose with Select, Button, menus, etc. */
const TldrawBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tldraw" {...props} />

/** tmux mark — compose with Select, Button, menus, etc. */
const TmuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tmux" {...props} />

/** Todoist mark — compose with Select, Button, menus, etc. */
const TodoistBrandIcon = (props: BrandIconProps) => <BrandIcon slug="todoist" {...props} />

/** Toggl mark — compose with Select, Button, menus, etc. */
const TogglBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toggl" {...props} />

/** Toggl Track mark — compose with Select, Button, menus, etc. */
const TogglTrackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toggltrack" {...props} />

/** Tokio mark — compose with Select, Button, menus, etc. */
const TokioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tokio" {...props} />

/** Tokyo Metro mark — compose with Select, Button, menus, etc. */
const TokyoMetroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tokyometro" {...props} />

/** Toll mark — compose with Select, Button, menus, etc. */
const TollBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toll" {...props} />

/** TOML mark — compose with Select, Button, menus, etc. */
const TOMLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toml" {...props} />

/** Tomorrowland mark — compose with Select, Button, menus, etc. */
const TomorrowlandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tomorrowland" {...props} />

/** TomTom mark — compose with Select, Button, menus, etc. */
const TomTomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tomtom" {...props} />

/** TON mark — compose with Select, Button, menus, etc. */
const TONBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ton" {...props} />

/** Top.gg mark — compose with Select, Button, menus, etc. */
const TopGgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="topdotgg" {...props} />

/** Topcoder mark — compose with Select, Button, menus, etc. */
const TopcoderBrandIcon = (props: BrandIconProps) => <BrandIcon slug="topcoder" {...props} />

/** Toptal mark — compose with Select, Button, menus, etc. */
const ToptalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toptal" {...props} />

/** Tor Browser mark — compose with Select, Button, menus, etc. */
const TorBrowserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="torbrowser" {...props} />

/** Tor Project mark — compose with Select, Button, menus, etc. */
const TorProjectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="torproject" {...props} />

/** Torizon mark — compose with Select, Button, menus, etc. */
const TorizonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="torizon" {...props} />

/** Toshiba mark — compose with Select, Button, menus, etc. */
const ToshibaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toshiba" {...props} />

/** TOTVS mark — compose with Select, Button, menus, etc. */
const TotvsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="totvs" {...props} />

/** TourBox mark — compose with Select, Button, menus, etc. */
const TourBoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tourbox" {...props} />

/** Tower mark — compose with Select, Button, menus, etc. */
const TowerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tower" {...props} />

/** Toyota mark — compose with Select, Button, menus, etc. */
const ToyotaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="toyota" {...props} />

/** TP-Link mark — compose with Select, Button, menus, etc. */
const TPLinkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tplink" {...props} />

/** tqdm mark — compose with Select, Button, menus, etc. */
const TqdmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tqdm" {...props} />

/** Traccar mark — compose with Select, Button, menus, etc. */
const TraccarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="traccar" {...props} />

/** TradingView mark — compose with Select, Button, menus, etc. */
const TradingViewBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tradingview" {...props} />

/** TRAE mark — compose with Select, Button, menus, etc. */
const TRAEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trae" {...props} />

/** Traefik Mesh mark — compose with Select, Button, menus, etc. */
const TraefikMeshBrandIcon = (props: BrandIconProps) => <BrandIcon slug="traefikmesh" {...props} />

/** Traefik Proxy mark — compose with Select, Button, menus, etc. */
const TraefikProxyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="traefikproxy" {...props} />

/** Trailforks mark — compose with Select, Button, menus, etc. */
const TrailforksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trailforks" {...props} />

/** TrainerRoad mark — compose with Select, Button, menus, etc. */
const TrainerRoadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trainerroad" {...props} />

/** Trakt mark — compose with Select, Button, menus, etc. */
const TraktBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trakt" {...props} />

/** Transifex mark — compose with Select, Button, menus, etc. */
const TransifexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="transifex" {...props} />

/** Transmission mark — compose with Select, Button, menus, etc. */
const TransmissionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="transmission" {...props} />

/** Transport for Ireland mark — compose with Select, Button, menus, etc. */
const TransportForIrelandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="transportforireland" {...props} />

/** Transport for London mark — compose with Select, Button, menus, etc. */
const TransportForLondonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="transportforlondon" {...props} />

/** Travis CI mark — compose with Select, Button, menus, etc. */
const TravisCIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="travisci" {...props} />

/** Traxsource mark — compose with Select, Button, menus, etc. */
const TraxsourceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="traxsource" {...props} />

/** Treehouse mark — compose with Select, Button, menus, etc. */
const TreehouseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="treehouse" {...props} />

/** Trello mark — compose with Select, Button, menus, etc. */
const TrelloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trello" {...props} />

/** Trend Micro mark — compose with Select, Button, menus, etc. */
const TrendMicroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trendmicro" {...props} />

/** Tresorit mark — compose with Select, Button, menus, etc. */
const TresoritBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tresorit" {...props} />

/** Treyarch mark — compose with Select, Button, menus, etc. */
const TreyarchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="treyarch" {...props} />

/** Trezor mark — compose with Select, Button, menus, etc. */
const TrezorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trezor" {...props} />

/** Tricentis mark — compose with Select, Button, menus, etc. */
const TricentisBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tricentis" {...props} />

/** Trilium mark — compose with Select, Button, menus, etc. */
const TriliumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trilium" {...props} />

/** Triller mark — compose with Select, Button, menus, etc. */
const TrillerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="triller" {...props} />

/** TrillerTV mark — compose with Select, Button, menus, etc. */
const TrillerTVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trillertv" {...props} />

/** Trimble mark — compose with Select, Button, menus, etc. */
const TrimbleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trimble" {...props} />

/** Trino mark — compose with Select, Button, menus, etc. */
const TrinoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trino" {...props} />

/** Trip.com mark — compose with Select, Button, menus, etc. */
const TripComBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tripdotcom" {...props} />

/** Tripadvisor mark — compose with Select, Button, menus, etc. */
const TripadvisorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tripadvisor" {...props} />

/** trivago mark — compose with Select, Button, menus, etc. */
const TrivagoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trivago" {...props} />

/** Trivy mark — compose with Select, Button, menus, etc. */
const TrivyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trivy" {...props} />

/** TRMNL mark — compose with Select, Button, menus, etc. */
const TrmnlBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trmnl" {...props} />

/** Trove mark — compose with Select, Button, menus, etc. */
const TroveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trove" {...props} />

/** tRPC mark — compose with Select, Button, menus, etc. */
const TRPCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trpc" {...props} />

/** TrueNAS mark — compose with Select, Button, menus, etc. */
const TrueNASBrandIcon = (props: BrandIconProps) => <BrandIcon slug="truenas" {...props} />

/** TrueUp mark — compose with Select, Button, menus, etc. */
const TrueUpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trueup" {...props} />

/** trulia mark — compose with Select, Button, menus, etc. */
const TruliaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trulia" {...props} />

/** Trusted Shops mark — compose with Select, Button, menus, etc. */
const TrustedShopsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trustedshops" {...props} />

/** Trustpilot mark — compose with Select, Button, menus, etc. */
const TrustpilotBrandIcon = (props: BrandIconProps) => <BrandIcon slug="trustpilot" {...props} />

/** Try It Online mark — compose with Select, Button, menus, etc. */
const TryItOnlineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tryitonline" {...props} />

/** TryHackMe mark — compose with Select, Button, menus, etc. */
const TryHackMeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tryhackme" {...props} />

/** ts-node mark — compose with Select, Button, menus, etc. */
const TsNodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tsnode" {...props} />

/** Tubi mark — compose with Select, Button, menus, etc. */
const TubiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tubi" {...props} />

/** TUI mark — compose with Select, Button, menus, etc. */
const TUIBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tui" {...props} />

/** Tumblr mark — compose with Select, Button, menus, etc. */
const TumblrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tumblr" {...props} />

/** Turbo mark — compose with Select, Button, menus, etc. */
const TurboBrandIcon = (props: BrandIconProps) => <BrandIcon slug="turbo" {...props} />

/** Turborepo mark — compose with Select, Button, menus, etc. */
const TurborepoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="turborepo" {...props} />

/** TurboSquid mark — compose with Select, Button, menus, etc. */
const TurboSquidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="turbosquid" {...props} />

/** Turkish Airlines mark — compose with Select, Button, menus, etc. */
const TurkishAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="turkishairlines" {...props} />

/** Turso mark — compose with Select, Button, menus, etc. */
const TursoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="turso" {...props} />

/** Tuta mark — compose with Select, Button, menus, etc. */
const TutaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tuta" {...props} />

/** TUXEDO Computers mark — compose with Select, Button, menus, etc. */
const TuxedoComputersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tuxedocomputers" {...props} />

/** TV Time mark — compose with Select, Button, menus, etc. */
const TVTimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tvtime" {...props} />

/** TV4 Play mark — compose with Select, Button, menus, etc. */
const TV4PlayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="tv4play" {...props} />

/** Twenty mark — compose with Select, Button, menus, etc. */
const TwentyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="twenty" {...props} />

/** Twinkly mark — compose with Select, Button, menus, etc. */
const TwinklyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="twinkly" {...props} />

/** Twinmotion mark — compose with Select, Button, menus, etc. */
const TwinmotionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="twinmotion" {...props} />

/** Twitch mark — compose with Select, Button, menus, etc. */
const TwitchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="twitch" {...props} />

/** ty mark — compose with Select, Button, menus, etc. */
const TyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ty" {...props} />

/** Typeform mark — compose with Select, Button, menus, etc. */
const TypeformBrandIcon = (props: BrandIconProps) => <BrandIcon slug="typeform" {...props} />

/** TypeORM mark — compose with Select, Button, menus, etc. */
const TypeORMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="typeorm" {...props} />

/** Typer mark — compose with Select, Button, menus, etc. */
const TyperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="typer" {...props} />

/** TypeScript mark — compose with Select, Button, menus, etc. */
const TypeScriptBrandIcon = (props: BrandIconProps) => <BrandIcon slug="typescript" {...props} />

/** TYPO3 mark — compose with Select, Button, menus, etc. */
const Typo3BrandIcon = (props: BrandIconProps) => <BrandIcon slug="typo3" {...props} />

/** Typst mark — compose with Select, Button, menus, etc. */
const TypstBrandIcon = (props: BrandIconProps) => <BrandIcon slug="typst" {...props} />

/** U.S. News mark — compose with Select, Button, menus, etc. */
const USNewsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="udotsdotnews" {...props} />

/** Uber mark — compose with Select, Button, menus, etc. */
const UberBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uber" {...props} />

/** Uber Eats mark — compose with Select, Button, menus, etc. */
const UberEatsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ubereats" {...props} />

/** Ubiquiti mark — compose with Select, Button, menus, etc. */
const UbiquitiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ubiquiti" {...props} />

/** Ubisoft mark — compose with Select, Button, menus, etc. */
const UbisoftBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ubisoft" {...props} />

/** uBlock Origin mark — compose with Select, Button, menus, etc. */
const UBlockOriginBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ublockorigin" {...props} />

/** Ubuntu mark — compose with Select, Button, menus, etc. */
const UbuntuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ubuntu" {...props} />

/** Ubuntu MATE mark — compose with Select, Button, menus, etc. */
const UbuntuMATEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ubuntumate" {...props} />

/** Udacity mark — compose with Select, Button, menus, etc. */
const UdacityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="udacity" {...props} />

/** Udemy mark — compose with Select, Button, menus, etc. */
const UdemyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="udemy" {...props} />

/** UFC mark — compose with Select, Button, menus, etc. */
const UFCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ufc" {...props} />

/** UIkit mark — compose with Select, Button, menus, etc. */
const UIkitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uikit" {...props} />

/** UiPath mark — compose with Select, Button, menus, etc. */
const UiPathBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uipath" {...props} />

/** UKCA mark — compose with Select, Button, menus, etc. */
const UKCABrandIcon = (props: BrandIconProps) => <BrandIcon slug="ukca" {...props} />

/** Ultralytics mark — compose with Select, Button, menus, etc. */
const UltralyticsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ultralytics" {...props} />

/** Ulule mark — compose with Select, Button, menus, etc. */
const UluleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ulule" {...props} />

/** Umami mark — compose with Select, Button, menus, etc. */
const UmamiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="umami" {...props} />

/** Umbraco mark — compose with Select, Button, menus, etc. */
const UmbracoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="umbraco" {...props} />

/** Umbrel mark — compose with Select, Button, menus, etc. */
const UmbrelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="umbrel" {...props} />

/** UML mark — compose with Select, Button, menus, etc. */
const UMLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uml" {...props} />

/** Unacademy mark — compose with Select, Button, menus, etc. */
const UnacademyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unacademy" {...props} />

/** Under Armour mark — compose with Select, Button, menus, etc. */
const UnderArmourBrandIcon = (props: BrandIconProps) => <BrandIcon slug="underarmour" {...props} />

/** Underscore.js mark — compose with Select, Button, menus, etc. */
const UnderscoreJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="underscoredotjs" {...props} />

/** Undertale mark — compose with Select, Button, menus, etc. */
const UndertaleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="undertale" {...props} />

/** Unicode mark — compose with Select, Button, menus, etc. */
const UnicodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unicode" {...props} />

/** Unilever mark — compose with Select, Button, menus, etc. */
const UnileverBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unilever" {...props} />

/** Uniqlo mark — compose with Select, Button, menus, etc. */
const UniqloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uniqlo" {...props} />

/** Uniqlo mark — compose with Select, Button, menus, etc. */
const UniqloJaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uniqlo_ja" {...props} />

/** United Airlines mark — compose with Select, Button, menus, etc. */
const UnitedAirlinesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unitedairlines" {...props} />

/** United Nations mark — compose with Select, Button, menus, etc. */
const UnitedNationsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unitednations" {...props} />

/** Unity mark — compose with Select, Button, menus, etc. */
const UnityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unity" {...props} />

/** UnJS mark — compose with Select, Button, menus, etc. */
const UnJSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unjs" {...props} />

/** Unlicense mark — compose with Select, Button, menus, etc. */
const UnlicenseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unlicense" {...props} />

/** UnoCSS mark — compose with Select, Button, menus, etc. */
const UnoCSSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unocss" {...props} />

/** unpkg mark — compose with Select, Button, menus, etc. */
const UnpkgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unpkg" {...props} />

/** Unraid mark — compose with Select, Button, menus, etc. */
const UnraidBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unraid" {...props} />

/** Unreal Engine mark — compose with Select, Button, menus, etc. */
const UnrealEngineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unrealengine" {...props} />

/** Unsplash mark — compose with Select, Button, menus, etc. */
const UnsplashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unsplash" {...props} />

/** Unstop mark — compose with Select, Button, menus, etc. */
const UnstopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="unstop" {...props} />

/** Untappd mark — compose with Select, Button, menus, etc. */
const UntappdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="untappd" {...props} />

/** UpCloud mark — compose with Select, Button, menus, etc. */
const UpCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="upcloud" {...props} />

/** Uphold mark — compose with Select, Button, menus, etc. */
const UpholdBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uphold" {...props} />

/** UpLabs mark — compose with Select, Button, menus, etc. */
const UpLabsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uplabs" {...props} />

/** Upptime mark — compose with Select, Button, menus, etc. */
const UpptimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="upptime" {...props} />

/** UPS mark — compose with Select, Button, menus, etc. */
const UPSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ups" {...props} />

/** Upstash mark — compose with Select, Button, menus, etc. */
const UpstashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="upstash" {...props} />

/** Uptime Kuma mark — compose with Select, Button, menus, etc. */
const UptimeKumaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uptimekuma" {...props} />

/** Upwork mark — compose with Select, Button, menus, etc. */
const UpworkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="upwork" {...props} />

/** UserVoice mark — compose with Select, Button, menus, etc. */
const UserVoiceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uservoice" {...props} />

/** USPS mark — compose with Select, Button, menus, etc. */
const USPSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="usps" {...props} />

/** uTorrent mark — compose with Select, Button, menus, etc. */
const UTorrentBrandIcon = (props: BrandIconProps) => <BrandIcon slug="utorrent" {...props} />

/** uv mark — compose with Select, Button, menus, etc. */
const UvBrandIcon = (props: BrandIconProps) => <BrandIcon slug="uv" {...props} />

/** V mark — compose with Select, Button, menus, etc. */
const VBrandIcon = (props: BrandIconProps) => <BrandIcon slug="v" {...props} />

/** v0 mark — compose with Select, Button, menus, etc. */
const V0BrandIcon = (props: BrandIconProps) => <BrandIcon slug="v0" {...props} />

/** V2EX mark — compose with Select, Button, menus, etc. */
const V2EXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="v2ex" {...props} />

/** V8 mark — compose with Select, Button, menus, etc. */
const V8BrandIcon = (props: BrandIconProps) => <BrandIcon slug="v8" {...props} />

/** Vaadin mark — compose with Select, Button, menus, etc. */
const VaadinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vaadin" {...props} />

/** Vagrant mark — compose with Select, Button, menus, etc. */
const VagrantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vagrant" {...props} />

/** Vala mark — compose with Select, Button, menus, etc. */
const ValaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vala" {...props} />

/** Valorant mark — compose with Select, Button, menus, etc. */
const ValorantBrandIcon = (props: BrandIconProps) => <BrandIcon slug="valorant" {...props} />

/** Valve mark — compose with Select, Button, menus, etc. */
const ValveBrandIcon = (props: BrandIconProps) => <BrandIcon slug="valve" {...props} />

/** Vanilla Extract mark — compose with Select, Button, menus, etc. */
const VanillaExtractBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vanillaextract" {...props} />

/** Vapor mark — compose with Select, Button, menus, etc. */
const VaporBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vapor" {...props} />

/** Vault mark — compose with Select, Button, menus, etc. */
const VaultBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vault" {...props} />

/** Vaultwarden mark — compose with Select, Button, menus, etc. */
const VaultwardenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vaultwarden" {...props} />

/** Vauxhall mark — compose with Select, Button, menus, etc. */
const VauxhallBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vauxhall" {...props} />

/** vBulletin mark — compose with Select, Button, menus, etc. */
const VBulletinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vbulletin" {...props} />

/** Vectary mark — compose with Select, Button, menus, etc. */
const VectaryBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vectary" {...props} />

/** Vector Logo Zone mark — compose with Select, Button, menus, etc. */
const VectorLogoZoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vectorlogozone" {...props} />

/** Vectorworks mark — compose with Select, Button, menus, etc. */
const VectorworksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vectorworks" {...props} />

/** Veeam mark — compose with Select, Button, menus, etc. */
const VeeamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="veeam" {...props} />

/** VEED mark — compose with Select, Button, menus, etc. */
const VEEDBrandIcon = (props: BrandIconProps) => <BrandIcon slug="veed" {...props} />

/** Veepee mark — compose with Select, Button, menus, etc. */
const VeepeeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="veepee" {...props} />

/** Vega mark — compose with Select, Button, menus, etc. */
const VegaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vega" {...props} />

/** VEGAS mark — compose with Select, Button, menus, etc. */
const VegasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vegas" {...props} />

/** Velocity mark — compose with Select, Button, menus, etc. */
const VelocityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="velocity" {...props} />

/** Velog mark — compose with Select, Button, menus, etc. */
const VelogBrandIcon = (props: BrandIconProps) => <BrandIcon slug="velog" {...props} />

/** Vencord mark — compose with Select, Button, menus, etc. */
const VencordBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vencord" {...props} />

/** Venmo mark — compose with Select, Button, menus, etc. */
const VenmoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="venmo" {...props} />

/** Vercel mark — compose with Select, Button, menus, etc. */
const VercelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vercel" {...props} />

/** Verdaccio mark — compose with Select, Button, menus, etc. */
const VerdaccioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="verdaccio" {...props} />

/** Veritas mark — compose with Select, Button, menus, etc. */
const VeritasBrandIcon = (props: BrandIconProps) => <BrandIcon slug="veritas" {...props} />

/** Verizon mark — compose with Select, Button, menus, etc. */
const VerizonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="verizon" {...props} />

/** Vespa mark — compose with Select, Button, menus, etc. */
const VespaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vespa" {...props} />

/** Vestel mark — compose with Select, Button, menus, etc. */
const VestelBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vestel" {...props} />

/** VEXXHOST mark — compose with Select, Button, menus, etc. */
const VexxhostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vexxhost" {...props} />

/** vFairs mark — compose with Select, Button, menus, etc. */
const VFairsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vfairs" {...props} />

/** Viadeo mark — compose with Select, Button, menus, etc. */
const ViadeoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="viadeo" {...props} />

/** Viaplay mark — compose with Select, Button, menus, etc. */
const ViaplayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="viaplay" {...props} />

/** Viber mark — compose with Select, Button, menus, etc. */
const ViberBrandIcon = (props: BrandIconProps) => <BrandIcon slug="viber" {...props} />

/** Viblo mark — compose with Select, Button, menus, etc. */
const VibloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="viblo" {...props} />

/** VictoriaMetrics mark — compose with Select, Button, menus, etc. */
const VictoriaMetricsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="victoriametrics" {...props} />

/** Victron Energy mark — compose with Select, Button, menus, etc. */
const VictronEnergyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="victronenergy" {...props} />

/** Vikunja mark — compose with Select, Button, menus, etc. */
const VikunjaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vikunja" {...props} />

/** Vim mark — compose with Select, Button, menus, etc. */
const VimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vim" {...props} />

/** Vimeo mark — compose with Select, Button, menus, etc. */
const VimeoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vimeo" {...props} />

/** Vimeo Livestream mark — compose with Select, Button, menus, etc. */
const VimeoLivestreamBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vimeolivestream" {...props} />

/** Vinted mark — compose with Select, Button, menus, etc. */
const VintedBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vinted" {...props} />

/** Virgin mark — compose with Select, Button, menus, etc. */
const VirginBrandIcon = (props: BrandIconProps) => <BrandIcon slug="virgin" {...props} />

/** Virgin Atlantic mark — compose with Select, Button, menus, etc. */
const VirginAtlanticBrandIcon = (props: BrandIconProps) => <BrandIcon slug="virginatlantic" {...props} />

/** Virgin Media mark — compose with Select, Button, menus, etc. */
const VirginMediaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="virginmedia" {...props} />

/** VirtualBox mark — compose with Select, Button, menus, etc. */
const VirtualBoxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="virtualbox" {...props} />

/** VirusTotal mark — compose with Select, Button, menus, etc. */
const VirusTotalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="virustotal" {...props} />

/** Visa mark — compose with Select, Button, menus, etc. */
const VisaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="visa" {...props} />

/** Visual Paradigm mark — compose with Select, Button, menus, etc. */
const VisualParadigmBrandIcon = (props: BrandIconProps) => <BrandIcon slug="visualparadigm" {...props} />

/** Visual Studio Code mark — compose with Select, Button, menus, etc. */
const VisualStudioCodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="visualstudiocode" {...props} />

/** visx mark — compose with Select, Button, menus, etc. */
const VisxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="visx" {...props} />

/** Vite mark — compose with Select, Button, menus, etc. */
const ViteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vite" {...props} />

/** VitePress mark — compose with Select, Button, menus, etc. */
const VitePressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vitepress" {...props} />

/** Vitess mark — compose with Select, Button, menus, etc. */
const VitessBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vitess" {...props} />

/** Vitest mark — compose with Select, Button, menus, etc. */
const VitestBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vitest" {...props} />

/** Viva Wallet mark — compose with Select, Button, menus, etc. */
const VivaWalletBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vivawallet" {...props} />

/** Vivaldi mark — compose with Select, Button, menus, etc. */
const VivaldiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vivaldi" {...props} />

/** Vivino mark — compose with Select, Button, menus, etc. */
const VivinoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vivino" {...props} />

/** Vivint mark — compose with Select, Button, menus, etc. */
const VivintBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vivint" {...props} />

/** vivo mark — compose with Select, Button, menus, etc. */
const VivoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vivo" {...props} />

/** VK mark — compose with Select, Button, menus, etc. */
const VKBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vk" {...props} />

/** VLC media player mark — compose with Select, Button, menus, etc. */
const VLCMediaPlayerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vlcmediaplayer" {...props} />

/** vLLM mark — compose with Select, Button, menus, etc. */
const VLLMBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vllm" {...props} />

/** VMware mark — compose with Select, Button, menus, etc. */
const VMwareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vmware" {...props} />

/** Vodafone mark — compose with Select, Button, menus, etc. */
const VodafoneBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vodafone" {...props} />

/** voelkner mark — compose with Select, Button, menus, etc. */
const VoelknerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="voelkner" {...props} />

/** Void Linux mark — compose with Select, Button, menus, etc. */
const VoidLinuxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="voidlinux" {...props} />

/** VoIP.ms mark — compose with Select, Button, menus, etc. */
const VoIPMsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="voipdotms" {...props} />

/** Volkswagen mark — compose with Select, Button, menus, etc. */
const VolkswagenBrandIcon = (props: BrandIconProps) => <BrandIcon slug="volkswagen" {...props} />

/** Volvo mark — compose with Select, Button, menus, etc. */
const VolvoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="volvo" {...props} />

/** Vonage mark — compose with Select, Button, menus, etc. */
const VonageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vonage" {...props} />

/** Voron Design mark — compose with Select, Button, menus, etc. */
const VoronDesignBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vorondesign" {...props} />

/** Vowpal Wabbit mark — compose with Select, Button, menus, etc. */
const VowpalWabbitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vowpalwabbit" {...props} />

/** VOX mark — compose with Select, Button, menus, etc. */
const VOXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vox" {...props} />

/** VRChat mark — compose with Select, Button, menus, etc. */
const VRChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vrchat" {...props} />

/** VSCO mark — compose with Select, Button, menus, etc. */
const VSCOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vsco" {...props} />

/** VSCodium mark — compose with Select, Button, menus, etc. */
const VSCodiumBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vscodium" {...props} />

/** VTEX mark — compose with Select, Button, menus, etc. */
const VTEXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vtex" {...props} />

/** Vue.js mark — compose with Select, Button, menus, etc. */
const VueJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vuedotjs" {...props} />

/** Vuetify mark — compose with Select, Button, menus, etc. */
const VuetifyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vuetify" {...props} />

/** VueUse mark — compose with Select, Button, menus, etc. */
const VueUseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vueuse" {...props} />

/** Vulkan mark — compose with Select, Button, menus, etc. */
const VulkanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vulkan" {...props} />

/** Vultr mark — compose with Select, Button, menus, etc. */
const VultrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vultr" {...props} />

/** Vyond mark — compose with Select, Button, menus, etc. */
const VyondBrandIcon = (props: BrandIconProps) => <BrandIcon slug="vyond" {...props} />

/** W3Schools mark — compose with Select, Button, menus, etc. */
const W3SchoolsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="w3schools" {...props} />

/** Wacom mark — compose with Select, Button, menus, etc. */
const WacomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wacom" {...props} />

/** Wagmi mark — compose with Select, Button, menus, etc. */
const WagmiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wagmi" {...props} />

/** Wagtail mark — compose with Select, Button, menus, etc. */
const WagtailBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wagtail" {...props} />

/** Wails mark — compose with Select, Button, menus, etc. */
const WailsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wails" {...props} />

/** WakaTime mark — compose with Select, Button, menus, etc. */
const WakaTimeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wakatime" {...props} />

/** WALKMAN mark — compose with Select, Button, menus, etc. */
const WalkmanBrandIcon = (props: BrandIconProps) => <BrandIcon slug="walkman" {...props} />

/** Wallabag mark — compose with Select, Button, menus, etc. */
const WallabagBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wallabag" {...props} />

/** WalletConnect mark — compose with Select, Button, menus, etc. */
const WalletConnectBrandIcon = (props: BrandIconProps) => <BrandIcon slug="walletconnect" {...props} />

/** Wantedly mark — compose with Select, Button, menus, etc. */
const WantedlyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wantedly" {...props} />

/** Wappalyzer mark — compose with Select, Button, menus, etc. */
const WappalyzerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wappalyzer" {...props} />

/** Warp mark — compose with Select, Button, menus, etc. */
const WarpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="warp" {...props} />

/** Wasabi mark — compose with Select, Button, menus, etc. */
const WasabiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wasabi" {...props} />

/** wasmCloud mark — compose with Select, Button, menus, etc. */
const WasmCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wasmcloud" {...props} />

/** Wasmer mark — compose with Select, Button, menus, etc. */
const WasmerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wasmer" {...props} />

/** Watchtower mark — compose with Select, Button, menus, etc. */
const WatchtowerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="watchtower" {...props} />

/** Wattpad mark — compose with Select, Button, menus, etc. */
const WattpadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wattpad" {...props} />

/** Wayland mark — compose with Select, Button, menus, etc. */
const WaylandBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wayland" {...props} />

/** Waze mark — compose with Select, Button, menus, etc. */
const WazeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="waze" {...props} />

/** WazirX mark — compose with Select, Button, menus, etc. */
const WazirXBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wazirx" {...props} />

/** Wear OS mark — compose with Select, Button, menus, etc. */
const WearOSBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wearos" {...props} />

/** Weasyl mark — compose with Select, Button, menus, etc. */
const WeasylBrandIcon = (props: BrandIconProps) => <BrandIcon slug="weasyl" {...props} />

/** Web Awesome mark — compose with Select, Button, menus, etc. */
const WebAwesomeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webawesome" {...props} />

/** WEB.DE mark — compose with Select, Button, menus, etc. */
const WEBDEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webdotde" {...props} />

/** Web3.js mark — compose with Select, Button, menus, etc. */
const Web3JsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="web3dotjs" {...props} />

/** WebAssembly mark — compose with Select, Button, menus, etc. */
const WebAssemblyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webassembly" {...props} />

/** WebAuthn mark — compose with Select, Button, menus, etc. */
const WebAuthnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webauthn" {...props} />

/** webcomponents.org mark — compose with Select, Button, menus, etc. */
const WebcomponentsOrgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webcomponentsdotorg" {...props} />

/** WebdriverIO mark — compose with Select, Button, menus, etc. */
const WebdriverIOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webdriverio" {...props} />

/** Webex mark — compose with Select, Button, menus, etc. */
const WebexBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webex" {...props} />

/** Webflow mark — compose with Select, Button, menus, etc. */
const WebflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webflow" {...props} />

/** WebGL mark — compose with Select, Button, menus, etc. */
const WebGLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webgl" {...props} />

/** WebGPU mark — compose with Select, Button, menus, etc. */
const WebGPUBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webgpu" {...props} />

/** Weblate mark — compose with Select, Button, menus, etc. */
const WeblateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="weblate" {...props} />

/** Webmin mark — compose with Select, Button, menus, etc. */
const WebminBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webmin" {...props} />

/** WebMoney mark — compose with Select, Button, menus, etc. */
const WebMoneyBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webmoney" {...props} />

/** Webpack mark — compose with Select, Button, menus, etc. */
const WebpackBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webpack" {...props} />

/** WebRTC mark — compose with Select, Button, menus, etc. */
const WebRTCBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webrtc" {...props} />

/** WebStorm mark — compose with Select, Button, menus, etc. */
const WebStormBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webstorm" {...props} />

/** WEBTOON mark — compose with Select, Button, menus, etc. */
const WebtoonBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webtoon" {...props} />

/** webtrees mark — compose with Select, Button, menus, etc. */
const WebtreesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="webtrees" {...props} />

/** WeChat mark — compose with Select, Button, menus, etc. */
const WeChatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wechat" {...props} />

/** WeGame mark — compose with Select, Button, menus, etc. */
const WeGameBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wegame" {...props} />

/** Weights & Biases mark — compose with Select, Button, menus, etc. */
const WeightsBiasesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="weightsandbiases" {...props} />

/** Welcome to the Jungle mark — compose with Select, Button, menus, etc. */
const WelcomeToTheJungleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="welcometothejungle" {...props} />

/** Wellfound mark — compose with Select, Button, menus, etc. */
const WellfoundBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wellfound" {...props} />

/** Wells Fargo mark — compose with Select, Button, menus, etc. */
const WellsFargoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wellsfargo" {...props} />

/** WEMO mark — compose with Select, Button, menus, etc. */
const WEMOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wemo" {...props} />

/** WeRead mark — compose with Select, Button, menus, etc. */
const WeReadBrandIcon = (props: BrandIconProps) => <BrandIcon slug="weread" {...props} />

/** Western Union mark — compose with Select, Button, menus, etc. */
const WesternUnionBrandIcon = (props: BrandIconProps) => <BrandIcon slug="westernunion" {...props} />

/** WeTransfer mark — compose with Select, Button, menus, etc. */
const WeTransferBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wetransfer" {...props} />

/** WezTerm mark — compose with Select, Button, menus, etc. */
const WezTermBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wezterm" {...props} />

/** wgpu mark — compose with Select, Button, menus, etc. */
const WgpuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wgpu" {...props} />

/** what3words mark — compose with Select, Button, menus, etc. */
const What3wordsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="what3words" {...props} />

/** WhatsApp mark — compose with Select, Button, menus, etc. */
const WhatsAppBrandIcon = (props: BrandIconProps) => <BrandIcon slug="whatsapp" {...props} />

/** When I Work mark — compose with Select, Button, menus, etc. */
const WhenIWorkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wheniwork" {...props} />

/** wiki.gg mark — compose with Select, Button, menus, etc. */
const WikiGgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikidotgg" {...props} />

/** Wiki.js mark — compose with Select, Button, menus, etc. */
const WikiJsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikidotjs" {...props} />

/** Wikibooks mark — compose with Select, Button, menus, etc. */
const WikibooksBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikibooks" {...props} />

/** Wikidata mark — compose with Select, Button, menus, etc. */
const WikidataBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikidata" {...props} />

/** Wikimedia Commons mark — compose with Select, Button, menus, etc. */
const WikimediaCommonsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikimediacommons" {...props} />

/** Wikimedia Foundation mark — compose with Select, Button, menus, etc. */
const WikimediaFoundationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikimediafoundation" {...props} />

/** Wikipedia mark — compose with Select, Button, menus, etc. */
const WikipediaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikipedia" {...props} />

/** Wikiquote mark — compose with Select, Button, menus, etc. */
const WikiquoteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikiquote" {...props} />

/** Wikisource mark — compose with Select, Button, menus, etc. */
const WikisourceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikisource" {...props} />

/** Wikiversity mark — compose with Select, Button, menus, etc. */
const WikiversityBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikiversity" {...props} />

/** Wikivoyage mark — compose with Select, Button, menus, etc. */
const WikivoyageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wikivoyage" {...props} />

/** Winamp mark — compose with Select, Button, menus, etc. */
const WinampBrandIcon = (props: BrandIconProps) => <BrandIcon slug="winamp" {...props} />

/** Windsurf mark — compose with Select, Button, menus, etc. */
const WindsurfBrandIcon = (props: BrandIconProps) => <BrandIcon slug="windsurf" {...props} />

/** Wine mark — compose with Select, Button, menus, etc. */
const WineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wine" {...props} />

/** Wipro mark — compose with Select, Button, menus, etc. */
const WiproBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wipro" {...props} />

/** Wire mark — compose with Select, Button, menus, etc. */
const WireBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wire" {...props} />

/** WireGuard mark — compose with Select, Button, menus, etc. */
const WireGuardBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wireguard" {...props} />

/** Wireshark mark — compose with Select, Button, menus, etc. */
const WiresharkBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wireshark" {...props} />

/** Wise mark — compose with Select, Button, menus, etc. */
const WiseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wise" {...props} />

/** Wish mark — compose with Select, Button, menus, etc. */
const WishBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wish" {...props} />

/** Wistia mark — compose with Select, Button, menus, etc. */
const WistiaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wistia" {...props} />

/** Wix mark — compose with Select, Button, menus, etc. */
const WixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wix" {...props} />

/** Wizz Air mark — compose with Select, Button, menus, etc. */
const WizzAirBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wizzair" {...props} />

/** Wolfram mark — compose with Select, Button, menus, etc. */
const WolframBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wolfram" {...props} />

/** Wolfram Language mark — compose with Select, Button, menus, etc. */
const WolframLanguageBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wolframlanguage" {...props} />

/** Wolfram Mathematica mark — compose with Select, Button, menus, etc. */
const WolframMathematicaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wolframmathematica" {...props} />

/** Wondershare mark — compose with Select, Button, menus, etc. */
const WondershareBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wondershare" {...props} />

/** Wondershare Filmora mark — compose with Select, Button, menus, etc. */
const WondershareFilmoraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wondersharefilmora" {...props} />

/** Woo mark — compose with Select, Button, menus, etc. */
const WooBrandIcon = (props: BrandIconProps) => <BrandIcon slug="woo" {...props} />

/** WooCommerce mark — compose with Select, Button, menus, etc. */
const WooCommerceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="woocommerce" {...props} />

/** WordPress mark — compose with Select, Button, menus, etc. */
const WordPressBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wordpress" {...props} />

/** Workplace mark — compose with Select, Button, menus, etc. */
const WorkplaceBrandIcon = (props: BrandIconProps) => <BrandIcon slug="workplace" {...props} />

/** World Health Organization mark — compose with Select, Button, menus, etc. */
const WorldHealthOrganizationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="worldhealthorganization" {...props} />

/** WP Engine mark — compose with Select, Button, menus, etc. */
const WPEngineBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wpengine" {...props} />

/** WP Rocket mark — compose with Select, Button, menus, etc. */
const WPRocketBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wprocket" {...props} />

/** WPExplorer mark — compose with Select, Button, menus, etc. */
const WPExplorerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wpexplorer" {...props} />

/** Write.as mark — compose with Select, Button, menus, etc. */
const WriteAsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="writedotas" {...props} />

/** WWE mark — compose with Select, Button, menus, etc. */
const WWEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wwe" {...props} />

/** Wwise mark — compose with Select, Button, menus, etc. */
const WwiseBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wwise" {...props} />

/** WXT mark — compose with Select, Button, menus, etc. */
const WXTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wxt" {...props} />

/** Wykop mark — compose with Select, Button, menus, etc. */
const WykopBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wykop" {...props} />

/** Wyze mark — compose with Select, Button, menus, etc. */
const WyzeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="wyze" {...props} />

/** X mark — compose with Select, Button, menus, etc. */
const XBrandIcon = (props: BrandIconProps) => <BrandIcon slug="x" {...props} />

/** X.Org mark — compose with Select, Button, menus, etc. */
const XOrgBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xdotorg" {...props} />

/** XAMPP mark — compose with Select, Button, menus, etc. */
const XamppBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xampp" {...props} />

/** Xcode mark — compose with Select, Button, menus, etc. */
const XcodeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xcode" {...props} />

/** XDA Developers mark — compose with Select, Button, menus, etc. */
const XDADevelopersBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xdadevelopers" {...props} />

/** Xendit mark — compose with Select, Button, menus, etc. */
const XenditBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xendit" {...props} />

/** Xero mark — compose with Select, Button, menus, etc. */
const XeroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xero" {...props} />

/** XFCE mark — compose with Select, Button, menus, etc. */
const XFCEBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xfce" {...props} />

/** Xiaohongshu mark — compose with Select, Button, menus, etc. */
const XiaohongshuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xiaohongshu" {...props} />

/** Xiaomi mark — compose with Select, Button, menus, etc. */
const XiaomiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xiaomi" {...props} />

/** Xing mark — compose with Select, Button, menus, etc. */
const XingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xing" {...props} />

/** XML mark — compose with Select, Button, menus, etc. */
const XMLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xml" {...props} />

/** XMPP mark — compose with Select, Button, menus, etc. */
const XMPPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xmpp" {...props} />

/** XO mark — compose with Select, Button, menus, etc. */
const XOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xo" {...props} />

/** XRP mark — compose with Select, Button, menus, etc. */
const XRPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xrp" {...props} />

/** XSplit mark — compose with Select, Button, menus, etc. */
const XSplitBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xsplit" {...props} />

/** XState mark — compose with Select, Button, menus, etc. */
const XStateBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xstate" {...props} />

/** Xubuntu mark — compose with Select, Button, menus, etc. */
const XubuntuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xubuntu" {...props} />

/** xyflow mark — compose with Select, Button, menus, etc. */
const XyflowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="xyflow" {...props} />

/** Y Combinator mark — compose with Select, Button, menus, etc. */
const YCombinatorBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ycombinator" {...props} />

/** Yaak mark — compose with Select, Button, menus, etc. */
const YaakBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yaak" {...props} />

/** yabai mark — compose with Select, Button, menus, etc. */
const YabaiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yabai" {...props} />

/** Yale mark — compose with Select, Button, menus, etc. */
const YaleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yale" {...props} />

/** Yamaha Corporation mark — compose with Select, Button, menus, etc. */
const YamahaCorporationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yamahacorporation" {...props} />

/** Yamaha Motor Corporation mark — compose with Select, Button, menus, etc. */
const YamahaMotorCorporationBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yamahamotorcorporation" {...props} />

/** YAML mark — compose with Select, Button, menus, etc. */
const YAMLBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yaml" {...props} />

/** Yandex Cloud mark — compose with Select, Button, menus, etc. */
const YandexCloudBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yandexcloud" {...props} />

/** Yarn mark — compose with Select, Button, menus, etc. */
const YarnBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yarn" {...props} />

/** Yelp mark — compose with Select, Button, menus, etc. */
const YelpBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yelp" {...props} />

/** Yeti mark — compose with Select, Button, menus, etc. */
const YetiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yeti" {...props} />

/** Yew mark — compose with Select, Button, menus, etc. */
const YewBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yew" {...props} />

/** Yii mark — compose with Select, Button, menus, etc. */
const YiiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yii" {...props} />

/** Yoast mark — compose with Select, Button, menus, etc. */
const YoastBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yoast" {...props} />

/** YOLO mark — compose with Select, Button, menus, etc. */
const YOLOBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yolo" {...props} />

/** YouHodler mark — compose with Select, Button, menus, etc. */
const YouHodlerBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youhodler" {...props} />

/** YouTube mark — compose with Select, Button, menus, etc. */
const YouTubeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtube" {...props} />

/** YouTube Gaming mark — compose with Select, Button, menus, etc. */
const YouTubeGamingBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtubegaming" {...props} />

/** YouTube Kids mark — compose with Select, Button, menus, etc. */
const YouTubeKidsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtubekids" {...props} />

/** YouTube Music mark — compose with Select, Button, menus, etc. */
const YouTubeMusicBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtubemusic" {...props} />

/** YouTube Shorts mark — compose with Select, Button, menus, etc. */
const YouTubeShortsBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtubeshorts" {...props} />

/** YouTube Studio mark — compose with Select, Button, menus, etc. */
const YouTubeStudioBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtubestudio" {...props} />

/** YouTube TV mark — compose with Select, Button, menus, etc. */
const YouTubeTVBrandIcon = (props: BrandIconProps) => <BrandIcon slug="youtubetv" {...props} />

/** Yr mark — compose with Select, Button, menus, etc. */
const YrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yr" {...props} />

/** Yubico mark — compose with Select, Button, menus, etc. */
const YubicoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yubico" {...props} />

/** YunoHost mark — compose with Select, Button, menus, etc. */
const YunoHostBrandIcon = (props: BrandIconProps) => <BrandIcon slug="yunohost" {...props} />

/** Z.ai mark — compose with Select, Button, menus, etc. */
const ZAiBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zdotai" {...props} />

/** Żabka mark — compose with Select, Button, menus, etc. */
const AbkaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zabka" {...props} />

/** Zaim mark — compose with Select, Button, menus, etc. */
const ZaimBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zaim" {...props} />

/** Zalando mark — compose with Select, Button, menus, etc. */
const ZalandoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zalando" {...props} />

/** Zalo mark — compose with Select, Button, menus, etc. */
const ZaloBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zalo" {...props} />

/** ZAP mark — compose with Select, Button, menus, etc. */
const ZAPBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zap" {...props} />

/** Zapier mark — compose with Select, Button, menus, etc. */
const ZapierBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zapier" {...props} />

/** Zara mark — compose with Select, Button, menus, etc. */
const ZaraBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zara" {...props} />

/** Zazzle mark — compose with Select, Button, menus, etc. */
const ZazzleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zazzle" {...props} />

/** Zcash mark — compose with Select, Button, menus, etc. */
const ZcashBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zcash" {...props} />

/** ZCOOL mark — compose with Select, Button, menus, etc. */
const ZcoolBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zcool" {...props} />

/** ZDF mark — compose with Select, Button, menus, etc. */
const ZDFBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zdf" {...props} />

/** ZebPay mark — compose with Select, Button, menus, etc. */
const ZebPayBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zebpay" {...props} />

/** Zebra Technologies mark — compose with Select, Button, menus, etc. */
const ZebraTechnologiesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zebratechnologies" {...props} />

/** ZecTrix mark — compose with Select, Button, menus, etc. */
const ZecTrixBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zectrix" {...props} />

/** Zed Industries mark — compose with Select, Button, menus, etc. */
const ZedIndustriesBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zedindustries" {...props} />

/** Zelle mark — compose with Select, Button, menus, etc. */
const ZelleBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zelle" {...props} />

/** Zen Browser mark — compose with Select, Button, menus, etc. */
const ZenBrowserBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zenbrowser" {...props} />

/** Zend mark — compose with Select, Button, menus, etc. */
const ZendBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zend" {...props} />

/** Zendesk mark — compose with Select, Button, menus, etc. */
const ZendeskBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zendesk" {...props} />

/** Zenn mark — compose with Select, Button, menus, etc. */
const ZennBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zenn" {...props} />

/** Zenodo mark — compose with Select, Button, menus, etc. */
const ZenodoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zenodo" {...props} />

/** Zensar mark — compose with Select, Button, menus, etc. */
const ZensarBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zensar" {...props} />

/** Zensical mark — compose with Select, Button, menus, etc. */
const ZensicalBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zensical" {...props} />

/** Zerodha mark — compose with Select, Button, menus, etc. */
const ZerodhaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zerodha" {...props} />

/** ZeroTier mark — compose with Select, Button, menus, etc. */
const ZeroTierBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zerotier" {...props} />

/** Zettlr mark — compose with Select, Button, menus, etc. */
const ZettlrBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zettlr" {...props} />

/** Zhihu mark — compose with Select, Button, menus, etc. */
const ZhihuBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zhihu" {...props} />

/** Zig mark — compose with Select, Button, menus, etc. */
const ZigBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zig" {...props} />

/** Zigbee mark — compose with Select, Button, menus, etc. */
const ZigbeeBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zigbee" {...props} />

/** Zigbee2MQTT mark — compose with Select, Button, menus, etc. */
const Zigbee2MQTTBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zigbee2mqtt" {...props} />

/** Ziggo mark — compose with Select, Button, menus, etc. */
const ZiggoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="ziggo" {...props} />

/** Zilch mark — compose with Select, Button, menus, etc. */
const ZilchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zilch" {...props} />

/** Zillow mark — compose with Select, Button, menus, etc. */
const ZillowBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zillow" {...props} />

/** ZincSearch mark — compose with Select, Button, menus, etc. */
const ZincSearchBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zincsearch" {...props} />

/** Zingat mark — compose with Select, Button, menus, etc. */
const ZingatBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zingat" {...props} />

/** Zod mark — compose with Select, Button, menus, etc. */
const ZodBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zod" {...props} />

/** Zoho mark — compose with Select, Button, menus, etc. */
const ZohoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zoho" {...props} />

/** Zoiper mark — compose with Select, Button, menus, etc. */
const ZoiperBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zoiper" {...props} />

/** Zola mark — compose with Select, Button, menus, etc. */
const ZolaBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zola" {...props} />

/** Zomato mark — compose with Select, Button, menus, etc. */
const ZomatoBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zomato" {...props} />

/** Zoom mark — compose with Select, Button, menus, etc. */
const ZoomBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zoom" {...props} />

/** Zorin mark — compose with Select, Button, menus, etc. */
const ZorinBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zorin" {...props} />

/** Zotero mark — compose with Select, Button, menus, etc. */
const ZoteroBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zotero" {...props} />

/** Zsh mark — compose with Select, Button, menus, etc. */
const ZshBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zsh" {...props} />

/** Zulip mark — compose with Select, Button, menus, etc. */
const ZulipBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zulip" {...props} />

/** zx mark — compose with Select, Button, menus, etc. */
const ZxBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zx" {...props} />

/** Zyte mark — compose with Select, Button, menus, etc. */
const ZyteBrandIcon = (props: BrandIconProps) => <BrandIcon slug="zyte" {...props} />

/** Ordered catalog of every published brand mark (for docs grids). */
const brandIconsCatalog: readonly BrandIconsCatalogEntry[] = [
  { name: ".ENV", slug: "dotenv", Icon: ENVBrandIcon },
  { name: ".NET", slug: "dotnet", Icon: NETBrandIcon },
  { name: "/e/", slug: "e", Icon: EBrandIcon },
  { name: "1.1.1.1", slug: "1dot1dot1dot1", Icon: Brand1111BrandIcon },
  { name: "1&1", slug: "1and1", Icon: Brand11BrandIcon },
  { name: "1001Tracklists", slug: "1001tracklists", Icon: Brand1001TracklistsBrandIcon },
  { name: "1Panel", slug: "1panel", Icon: Brand1PanelBrandIcon },
  { name: "1Password", slug: "1password", Icon: Brand1PasswordBrandIcon },
  { name: "2FAS", slug: "2fas", Icon: Brand2FASBrandIcon },
  { name: "2K", slug: "2k", Icon: Brand2KBrandIcon },
  { name: "30 seconds of code", slug: "30secondsofcode", Icon: Brand30SecondsOfCodeBrandIcon },
  { name: "365 Data Science", slug: "365datascience", Icon: Brand365DataScienceBrandIcon },
  { name: "3M", slug: "3m", Icon: Brand3MBrandIcon },
  { name: "42", slug: "42", Icon: Brand42BrandIcon },
  { name: "4chan", slug: "4chan", Icon: Brand4chanBrandIcon },
  { name: "4D", slug: "4d", Icon: Brand4DBrandIcon },
  { name: "500px", slug: "500px", Icon: Brand500pxBrandIcon },
  { name: "7Zip", slug: "7zip", Icon: Brand7ZipBrandIcon },
  { name: "99designs", slug: "99designs", Icon: Brand99designsBrandIcon },
  { name: "9GAG", slug: "9gag", Icon: Brand9GAGBrandIcon },
  { name: "A-Frame", slug: "aframe", Icon: AFrameBrandIcon },
  { name: "AB Download Manager", slug: "abdownloadmanager", Icon: ABDownloadManagerBrandIcon },
  { name: "ABB", slug: "abb", Icon: ABBBrandIcon },
  { name: "Abbott", slug: "abbott", Icon: AbbottBrandIcon },
  { name: "Abbvie", slug: "abbvie", Icon: AbbvieBrandIcon },
  { name: "about.me", slug: "aboutdotme", Icon: AboutMeBrandIcon },
  { name: "Abstract", slug: "abstract", Icon: AbstractBrandIcon },
  { name: "abuse.ch", slug: "abusedotch", Icon: AbuseChBrandIcon },
  { name: "Academia", slug: "academia", Icon: AcademiaBrandIcon },
  { name: "Accenture", slug: "accenture", Icon: AccentureBrandIcon },
  { name: "Accusoft", slug: "accusoft", Icon: AccusoftBrandIcon },
  { name: "AccuWeather", slug: "accuweather", Icon: AccuWeatherBrandIcon },
  { name: "Acer", slug: "acer", Icon: AcerBrandIcon },
  { name: "ACM", slug: "acm", Icon: ACMBrandIcon },
  { name: "Acode", slug: "acode", Icon: AcodeBrandIcon },
  { name: "ActiGraph", slug: "actigraph", Icon: ActiGraphBrandIcon },
  { name: "Activeloop", slug: "activeloop", Icon: ActiveloopBrandIcon },
  { name: "Activision", slug: "activision", Icon: ActivisionBrandIcon },
  { name: "ActivityPub", slug: "activitypub", Icon: ActivityPubBrandIcon },
  { name: "Actix", slug: "actix", Icon: ActixBrandIcon },
  { name: "Actual Budget", slug: "actualbudget", Icon: ActualBudgetBrandIcon },
  { name: "Acura", slug: "acura", Icon: AcuraBrandIcon },
  { name: "Ada", slug: "ada", Icon: AdaBrandIcon },
  { name: "Adafruit", slug: "adafruit", Icon: AdafruitBrandIcon },
  { name: "AdAway", slug: "adaway", Icon: AdAwayBrandIcon },
  { name: "AdBlock", slug: "adblock", Icon: AdBlockBrandIcon },
  { name: "Adblock Plus", slug: "adblockplus", Icon: AdblockPlusBrandIcon },
  { name: "addy.io", slug: "addydotio", Icon: AddyIoBrandIcon },
  { name: "AdGuard", slug: "adguard", Icon: AdGuardBrandIcon },
  { name: "Adidas", slug: "adidas", Icon: AdidasBrandIcon },
  { name: "Adminer", slug: "adminer", Icon: AdminerBrandIcon },
  { name: "AdonisJS", slug: "adonisjs", Icon: AdonisJSBrandIcon },
  { name: "ADP", slug: "adp", Icon: ADPBrandIcon },
  { name: "Adroll", slug: "adroll", Icon: AdrollBrandIcon },
  { name: "Advent Of Code", slug: "adventofcode", Icon: AdventOfCodeBrandIcon },
  { name: "Adyen", slug: "adyen", Icon: AdyenBrandIcon },
  { name: "Aegis Authenticator", slug: "aegisauthenticator", Icon: AegisAuthenticatorBrandIcon },
  { name: "Aeroflot", slug: "aeroflot", Icon: AeroflotBrandIcon },
  { name: "Aeroméxico", slug: "aeromexico", Icon: AeromXicoBrandIcon },
  { name: "AFDIAN", slug: "afdian", Icon: AfdianBrandIcon },
  { name: "AFFiNE", slug: "affine", Icon: AFFiNEBrandIcon },
  { name: "Afterpay", slug: "afterpay", Icon: AfterpayBrandIcon },
  { name: "AfterShip", slug: "aftership", Icon: AfterShipBrandIcon },
  { name: "Agent Skills", slug: "agentskills", Icon: AgentSkillsBrandIcon },
  { name: "Agora", slug: "agora", Icon: AgoraBrandIcon },
  { name: "AI Dungeon", slug: "aidungeon", Icon: AIDungeonBrandIcon },
  { name: "AIB", slug: "aib", Icon: AIBBrandIcon },
  { name: "AIOHTTP", slug: "aiohttp", Icon: AiohttpBrandIcon },
  { name: "Aiqfome", slug: "aiqfome", Icon: AiqfomeBrandIcon },
  { name: "Air Canada", slug: "aircanada", Icon: AirCanadaBrandIcon },
  { name: "Air China", slug: "airchina", Icon: AirChinaBrandIcon },
  { name: "Air France", slug: "airfrance", Icon: AirFranceBrandIcon },
  { name: "Air India", slug: "airindia", Icon: AirIndiaBrandIcon },
  { name: "Air Serbia", slug: "airserbia", Icon: AirSerbiaBrandIcon },
  { name: "Air Transat", slug: "airtransat", Icon: AirTransatBrandIcon },
  { name: "AirAsia", slug: "airasia", Icon: AirAsiaBrandIcon },
  { name: "Airbnb", slug: "airbnb", Icon: AirbnbBrandIcon },
  { name: "Airbrake", slug: "airbrake", Icon: AirbrakeBrandIcon },
  { name: "Airbus", slug: "airbus", Icon: AirbusBrandIcon },
  { name: "Airbyte", slug: "airbyte", Icon: AirbyteBrandIcon },
  { name: "Aircall", slug: "aircall", Icon: AircallBrandIcon },
  { name: "AirPlay Audio", slug: "airplayaudio", Icon: AirPlayAudioBrandIcon },
  { name: "AirPlay Video", slug: "airplayvideo", Icon: AirPlayVideoBrandIcon },
  { name: "Airtable", slug: "airtable", Icon: AirtableBrandIcon },
  { name: "Airtel", slug: "airtel", Icon: AirtelBrandIcon },
  { name: "Ajv", slug: "ajv", Icon: AjvBrandIcon },
  { name: "Akamai", slug: "akamai", Icon: AkamaiBrandIcon },
  { name: "Akasa Air", slug: "akasaair", Icon: AkasaAirBrandIcon },
  { name: "Akaunting", slug: "akaunting", Icon: AkauntingBrandIcon },
  { name: "Akiflow", slug: "akiflow", Icon: AkiflowBrandIcon },
  { name: "Alacritty", slug: "alacritty", Icon: AlacrittyBrandIcon },
  { name: "Alamy", slug: "alamy", Icon: AlamyBrandIcon },
  { name: "Albert Heijn", slug: "albertheijn", Icon: AlbertHeijnBrandIcon },
  { name: "Album of the Year", slug: "albumoftheyear", Icon: AlbumOfTheYearBrandIcon },
  { name: "Alby", slug: "alby", Icon: AlbyBrandIcon },
  { name: "Alchemy", slug: "alchemy", Icon: AlchemyBrandIcon },
  { name: "Aldi Nord", slug: "aldinord", Icon: AldiNordBrandIcon },
  { name: "Aldi Süd", slug: "aldisud", Icon: AldiSDBrandIcon },
  { name: "Alfred", slug: "alfred", Icon: AlfredBrandIcon },
  { name: "Algolia", slug: "algolia", Icon: AlgoliaBrandIcon },
  { name: "Algorand", slug: "algorand", Icon: AlgorandBrandIcon },
  { name: "Alibaba Cloud", slug: "alibabacloud", Icon: AlibabaCloudBrandIcon },
  { name: "Alibaba.com", slug: "alibabadotcom", Icon: AlibabaComBrandIcon },
  { name: "Alienware", slug: "alienware", Icon: AlienwareBrandIcon },
  { name: "AliExpress", slug: "aliexpress", Icon: AliExpressBrandIcon },
  { name: "Alipay", slug: "alipay", Icon: AlipayBrandIcon },
  { name: "AList", slug: "alist", Icon: AListBrandIcon },
  { name: "Allegro", slug: "allegro", Icon: AllegroBrandIcon },
  { name: "AlliedModders", slug: "alliedmodders", Icon: AlliedModdersBrandIcon },
  { name: "AllTrails", slug: "alltrails", Icon: AllTrailsBrandIcon },
  { name: "AlmaLinux", slug: "almalinux", Icon: AlmaLinuxBrandIcon },
  { name: "alphaXiv", slug: "alphaxiv", Icon: AlphaXivBrandIcon },
  { name: "Alpine Linux", slug: "alpinelinux", Icon: AlpineLinuxBrandIcon },
  { name: "Alpine.js", slug: "alpinedotjs", Icon: AlpineJsBrandIcon },
  { name: "AlternativeTo", slug: "alternativeto", Icon: AlternativeToBrandIcon },
  { name: "Alwaysdata", slug: "alwaysdata", Icon: AlwaysdataBrandIcon },
  { name: "Amazon Web Services", slug: "amazonwebservices", Icon: AmazonWebServicesBrandIcon },
  { name: "AMD", slug: "amd", Icon: AMDBrandIcon },
  { name: "Ameba", slug: "ameba", Icon: AmebaBrandIcon },
  { name: "American Airlines", slug: "americanairlines", Icon: AmericanAirlinesBrandIcon },
  { name: "American Express", slug: "americanexpress", Icon: AmericanExpressBrandIcon },
  { name: "AMG", slug: "amg", Icon: AMGBrandIcon },
  { name: "AMP", slug: "amp", Icon: AMPBrandIcon },
  { name: "Amul", slug: "amul", Icon: AmulBrandIcon },
  { name: "ANA", slug: "ana", Icon: ANABrandIcon },
  { name: "Anaconda", slug: "anaconda", Icon: AnacondaBrandIcon },
  { name: "Analogue", slug: "analogue", Icon: AnalogueBrandIcon },
  { name: "Andela", slug: "andela", Icon: AndelaBrandIcon },
  { name: "Android", slug: "android", Icon: AndroidBrandIcon },
  { name: "Android Auto", slug: "androidauto", Icon: AndroidAutoBrandIcon },
  { name: "Android Studio", slug: "androidstudio", Icon: AndroidStudioBrandIcon },
  { name: "Angular", slug: "angular", Icon: AngularBrandIcon },
  { name: "AniChart", slug: "anichart", Icon: AniChartBrandIcon },
  { name: "AniList", slug: "anilist", Icon: AniListBrandIcon },
  { name: "Animal Planet", slug: "animalplanet", Icon: AnimalPlanetBrandIcon },
  { name: "Anime.js", slug: "animedotjs", Icon: AnimeJsBrandIcon },
  { name: "AnkerMake", slug: "ankermake", Icon: AnkerMakeBrandIcon },
  { name: "Anki", slug: "anki", Icon: AnkiBrandIcon },
  { name: "Ansible", slug: "ansible", Icon: AnsibleBrandIcon },
  { name: "Answer", slug: "answer", Icon: AnswerBrandIcon },
  { name: "Ansys", slug: "ansys", Icon: AnsysBrandIcon },
  { name: "Ant Design", slug: "antdesign", Icon: AntDesignBrandIcon },
  { name: "Anta", slug: "anta", Icon: AntaBrandIcon },
  { name: "Antena 3", slug: "antena3", Icon: Antena3BrandIcon },
  { name: "AntennaPod", slug: "antennapod", Icon: AntennaPodBrandIcon },
  { name: "Anthropic", slug: "anthropic", Icon: AnthropicBrandIcon },
  { name: "AntV", slug: "antv", Icon: AntVBrandIcon },
  { name: "Anycubic", slug: "anycubic", Icon: AnycubicBrandIcon },
  { name: "AnyDesk", slug: "anydesk", Icon: AnyDeskBrandIcon },
  { name: "Anytype", slug: "anytype", Icon: AnytypeBrandIcon },
  { name: "Apache", slug: "apache", Icon: ApacheBrandIcon },
  { name: "Apache Airflow", slug: "apacheairflow", Icon: ApacheAirflowBrandIcon },
  { name: "Apache Ant", slug: "apacheant", Icon: ApacheAntBrandIcon },
  { name: "Apache Arrow", slug: "apachearrow", Icon: ApacheArrowBrandIcon },
  { name: "Apache Avro", slug: "apacheavro", Icon: ApacheAvroBrandIcon },
  { name: "Apache Cassandra", slug: "apachecassandra", Icon: ApacheCassandraBrandIcon },
  { name: "Apache CloudStack", slug: "apachecloudstack", Icon: ApacheCloudStackBrandIcon },
  { name: "Apache Cordova", slug: "apachecordova", Icon: ApacheCordovaBrandIcon },
  { name: "Apache CouchDB", slug: "apachecouchdb", Icon: ApacheCouchDBBrandIcon },
  { name: "Apache DolphinScheduler", slug: "apachedolphinscheduler", Icon: ApacheDolphinSchedulerBrandIcon },
  { name: "Apache Doris", slug: "apachedoris", Icon: ApacheDorisBrandIcon },
  { name: "Apache Druid", slug: "apachedruid", Icon: ApacheDruidBrandIcon },
  { name: "Apache ECharts", slug: "apacheecharts", Icon: ApacheEChartsBrandIcon },
  { name: "Apache Flink", slug: "apacheflink", Icon: ApacheFlinkBrandIcon },
  { name: "Apache FreeMarker", slug: "apachefreemarker", Icon: ApacheFreeMarkerBrandIcon },
  { name: "Apache Groovy", slug: "apachegroovy", Icon: ApacheGroovyBrandIcon },
  { name: "Apache Guacamole", slug: "apacheguacamole", Icon: ApacheGuacamoleBrandIcon },
  { name: "Apache Hadoop", slug: "apachehadoop", Icon: ApacheHadoopBrandIcon },
  { name: "Apache HBase", slug: "apachehbase", Icon: ApacheHBaseBrandIcon },
  { name: "Apache Hive", slug: "apachehive", Icon: ApacheHiveBrandIcon },
  { name: "Apache JMeter", slug: "apachejmeter", Icon: ApacheJMeterBrandIcon },
  { name: "Apache Kafka", slug: "apachekafka", Icon: ApacheKafkaBrandIcon },
  { name: "Apache Kylin", slug: "apachekylin", Icon: ApacheKylinBrandIcon },
  { name: "Apache Lucene", slug: "apachelucene", Icon: ApacheLuceneBrandIcon },
  { name: "Apache Maven", slug: "apachemaven", Icon: ApacheMavenBrandIcon },
  { name: "Apache NetBeans IDE", slug: "apachenetbeanside", Icon: ApacheNetBeansIDEBrandIcon },
  { name: "Apache NiFi", slug: "apachenifi", Icon: ApacheNiFiBrandIcon },
  { name: "Apache OpenOffice", slug: "apacheopenoffice", Icon: ApacheOpenOfficeBrandIcon },
  { name: "Apache Parquet", slug: "apacheparquet", Icon: ApacheParquetBrandIcon },
  { name: "Apache PDFBox", slug: "apachepdfbox", Icon: ApachePDFBoxBrandIcon },
  { name: "Apache Pulsar", slug: "apachepulsar", Icon: ApachePulsarBrandIcon },
  { name: "Apache RocketMQ", slug: "apacherocketmq", Icon: ApacheRocketMQBrandIcon },
  { name: "Apache Solr", slug: "apachesolr", Icon: ApacheSolrBrandIcon },
  { name: "Apache Spark", slug: "apachespark", Icon: ApacheSparkBrandIcon },
  { name: "Apache Storm", slug: "apachestorm", Icon: ApacheStormBrandIcon },
  { name: "Apache Superset", slug: "apachesuperset", Icon: ApacheSupersetBrandIcon },
  { name: "Apache Tomcat", slug: "apachetomcat", Icon: ApacheTomcatBrandIcon },
  { name: "Aparat", slug: "aparat", Icon: AparatBrandIcon },
  { name: "Apifox", slug: "apifox", Icon: ApifoxBrandIcon },
  { name: "APM Terminals", slug: "apmterminals", Icon: APMTerminalsBrandIcon },
  { name: "Apollo GraphQL", slug: "apollographql", Icon: ApolloGraphQLBrandIcon },
  { name: "Apostrophe", slug: "apostrophe", Icon: ApostropheBrandIcon },
  { name: "App Store", slug: "appstore", Icon: AppStoreBrandIcon },
  { name: "AppGallery", slug: "appgallery", Icon: AppGalleryBrandIcon },
  { name: "Appian", slug: "appian", Icon: AppianBrandIcon },
  { name: "AppImage", slug: "appimage", Icon: AppImageBrandIcon },
  { name: "Appium", slug: "appium", Icon: AppiumBrandIcon },
  { name: "Apple", slug: "apple", Icon: AppleBrandIcon },
  { name: "Apple Arcade", slug: "applearcade", Icon: AppleArcadeBrandIcon },
  { name: "Apple Music", slug: "applemusic", Icon: AppleMusicBrandIcon },
  { name: "Apple News", slug: "applenews", Icon: AppleNewsBrandIcon },
  { name: "Apple Pay", slug: "applepay", Icon: ApplePayBrandIcon },
  { name: "Apple Podcasts", slug: "applepodcasts", Icon: ApplePodcastsBrandIcon },
  { name: "Apple TV", slug: "appletv", Icon: AppleTVBrandIcon },
  { name: "AppManager", slug: "appmanager", Icon: AppManagerBrandIcon },
  { name: "AppSignal", slug: "appsignal", Icon: AppSignalBrandIcon },
  { name: "Appsmith", slug: "appsmith", Icon: AppsmithBrandIcon },
  { name: "AppVeyor", slug: "appveyor", Icon: AppVeyorBrandIcon },
  { name: "Appwrite", slug: "appwrite", Icon: AppwriteBrandIcon },
  { name: "Aqua", slug: "aqua", Icon: AquaBrandIcon },
  { name: "ARAL", slug: "aral", Icon: ARALBrandIcon },
  { name: "ArangoDB", slug: "arangodb", Icon: ArangoDBBrandIcon },
  { name: "Arc", slug: "arc", Icon: ArcBrandIcon },
  { name: "ArcGIS", slug: "arcgis", Icon: ArcGISBrandIcon },
  { name: "Arch Linux", slug: "archlinux", Icon: ArchLinuxBrandIcon },
  { name: "Archicad", slug: "archicad", Icon: ArchicadBrandIcon },
  { name: "Archive of Our Own", slug: "archiveofourown", Icon: ArchiveOfOurOwnBrandIcon },
  { name: "Ardour", slug: "ardour", Icon: ArdourBrandIcon },
  { name: "Arduino", slug: "arduino", Icon: ArduinoBrandIcon },
  { name: "Argo", slug: "argo", Icon: ArgoBrandIcon },
  { name: "Argos", slug: "argos", Icon: ArgosBrandIcon },
  { name: "Ariakit", slug: "ariakit", Icon: AriakitBrandIcon },
  { name: "ARK Ecosystem", slug: "arkecosystem", Icon: ARKEcosystemBrandIcon },
  { name: "Arlo", slug: "arlo", Icon: ArloBrandIcon },
  { name: "Arm", slug: "arm", Icon: ArmBrandIcon },
  { name: "Arm Keil", slug: "armkeil", Icon: ArmKeilBrandIcon },
  { name: "Ars Technica", slug: "arstechnica", Icon: ArsTechnicaBrandIcon },
  { name: "Artifact Hub", slug: "artifacthub", Icon: ArtifactHubBrandIcon },
  { name: "Artix Linux", slug: "artixlinux", Icon: ArtixLinuxBrandIcon },
  { name: "ArtStation", slug: "artstation", Icon: ArtStationBrandIcon },
  { name: "arXiv", slug: "arxiv", Icon: ArXivBrandIcon },
  { name: "Asahi Linux", slug: "asahilinux", Icon: AsahiLinuxBrandIcon },
  { name: "Asana", slug: "asana", Icon: AsanaBrandIcon },
  { name: "Asciidoctor", slug: "asciidoctor", Icon: AsciidoctorBrandIcon },
  { name: "asciinema", slug: "asciinema", Icon: AsciinemaBrandIcon },
  { name: "ASDA", slug: "asda", Icon: ASDABrandIcon },
  { name: "Aseprite", slug: "aseprite", Icon: AsepriteBrandIcon },
  { name: "Aspire", slug: "aspire", Icon: AspireBrandIcon },
  { name: "AssemblyScript", slug: "assemblyscript", Icon: AssemblyScriptBrandIcon },
  { name: "Asterisk", slug: "asterisk", Icon: AsteriskBrandIcon },
  { name: "Aston Martin", slug: "astonmartin", Icon: AstonMartinBrandIcon },
  { name: "Astra", slug: "astra", Icon: AstraBrandIcon },
  { name: "Astral", slug: "astral", Icon: AstralBrandIcon },
  { name: "Astro", slug: "astro", Icon: AstroBrandIcon },
  { name: "ASUS", slug: "asus", Icon: ASUSBrandIcon },
  { name: "AT&T", slug: "atandt", Icon: ATTBrandIcon },
  { name: "Atari", slug: "atari", Icon: AtariBrandIcon },
  { name: "AtlasOS", slug: "atlasos", Icon: AtlasOSBrandIcon },
  { name: "Atlassian", slug: "atlassian", Icon: AtlassianBrandIcon },
  { name: "AtomGit", slug: "atomgit", Icon: AtomGitBrandIcon },
  { name: "Auchan", slug: "auchan", Icon: AuchanBrandIcon },
  { name: "Audacity", slug: "audacity", Icon: AudacityBrandIcon },
  { name: "Audi", slug: "audi", Icon: AudiBrandIcon },
  { name: "Audible", slug: "audible", Icon: AudibleBrandIcon },
  { name: "Audio-Technica", slug: "audiotechnica", Icon: AudioTechnicaBrandIcon },
  { name: "Audiobookshelf", slug: "audiobookshelf", Icon: AudiobookshelfBrandIcon },
  { name: "Audioboom", slug: "audioboom", Icon: AudioboomBrandIcon },
  { name: "Audiomack", slug: "audiomack", Icon: AudiomackBrandIcon },
  { name: "Aurelia", slug: "aurelia", Icon: AureliaBrandIcon },
  { name: "Autentique", slug: "autentique", Icon: AutentiqueBrandIcon },
  { name: "Auth0", slug: "auth0", Icon: Auth0BrandIcon },
  { name: "Authelia", slug: "authelia", Icon: AutheliaBrandIcon },
  { name: "Authentik", slug: "authentik", Icon: AuthentikBrandIcon },
  { name: "AutoCAD", slug: "autocad", Icon: AutoCADBrandIcon },
  { name: "AutoCannon", slug: "autocannon", Icon: AutoCannonBrandIcon },
  { name: "Autodesk", slug: "autodesk", Icon: AutodeskBrandIcon },
  { name: "Autodesk Maya", slug: "autodeskmaya", Icon: AutodeskMayaBrandIcon },
  { name: "Autodesk Revit", slug: "autodeskrevit", Icon: AutodeskRevitBrandIcon },
  { name: "AutoHotkey", slug: "autohotkey", Icon: AutoHotkeyBrandIcon },
  { name: "AutoIt", slug: "autoit", Icon: AutoItBrandIcon },
  { name: "Automattic", slug: "automattic", Icon: AutomatticBrandIcon },
  { name: "Autoprefixer", slug: "autoprefixer", Icon: AutoprefixerBrandIcon },
  { name: "AutoZone", slug: "autozone", Icon: AutoZoneBrandIcon },
  { name: "avajs", slug: "avajs", Icon: AvajsBrandIcon },
  { name: "AvaloniaUI", slug: "avaloniaui", Icon: AvaloniaUIBrandIcon },
  { name: "Avast", slug: "avast", Icon: AvastBrandIcon },
  { name: "avianca", slug: "avianca", Icon: AviancaBrandIcon },
  { name: "Avira", slug: "avira", Icon: AviraBrandIcon },
  { name: "AVM", slug: "avm", Icon: AVMBrandIcon },
  { name: "Await", slug: "await", Icon: AwaitBrandIcon },
  { name: "Awesome Lists", slug: "awesomelists", Icon: AwesomeListsBrandIcon },
  { name: "awesomeWM", slug: "awesomewm", Icon: AwesomeWMBrandIcon },
  { name: "Awwwards", slug: "awwwards", Icon: AwwwardsBrandIcon },
  { name: "Axios", slug: "axios", Icon: AxiosBrandIcon },
  { name: "Axis Bank", slug: "axisbank", Icon: AxisBankBrandIcon },
  { name: "B&R Automation", slug: "bandrautomation", Icon: BRAutomationBrandIcon },
  { name: "B4X", slug: "b4x", Icon: B4XBrandIcon },
  { name: "Babel", slug: "babel", Icon: BabelBrandIcon },
  { name: "Babelio", slug: "babelio", Icon: BabelioBrandIcon },
  { name: "Babylon.js", slug: "babylondotjs", Icon: BabylonJsBrandIcon },
  { name: "Backblaze", slug: "backblaze", Icon: BackblazeBrandIcon },
  { name: "Backbone", slug: "backbone", Icon: BackboneBrandIcon },
  { name: "Backbone.js", slug: "backbonedotjs", Icon: BackboneJsBrandIcon },
  { name: "Backendless", slug: "backendless", Icon: BackendlessBrandIcon },
  { name: "Backstage", slug: "backstage", Icon: BackstageBrandIcon },
  { name: "Backstage", slug: "backstage_casting", Icon: BackstageCastingBrandIcon },
  { name: "Badoo", slug: "badoo", Icon: BadooBrandIcon },
  { name: "Baidu", slug: "baidu", Icon: BaiduBrandIcon },
  { name: "Bakaláři", slug: "bakalari", Icon: BakalIBrandIcon },
  { name: "Bamboo", slug: "bamboo", Icon: BambooBrandIcon },
  { name: "Bambu Lab", slug: "bambulab", Icon: BambuLabBrandIcon },
  { name: "Bandcamp", slug: "bandcamp", Icon: BandcampBrandIcon },
  { name: "BandLab", slug: "bandlab", Icon: BandLabBrandIcon },
  { name: "Bandsintown", slug: "bandsintown", Icon: BandsintownBrandIcon },
  { name: "Bank of America", slug: "bankofamerica", Icon: BankOfAmericaBrandIcon },
  { name: "Barclays", slug: "barclays", Icon: BarclaysBrandIcon },
  { name: "Baremetrics", slug: "baremetrics", Icon: BaremetricsBrandIcon },
  { name: "Barmenia", slug: "barmenia", Icon: BarmeniaBrandIcon },
  { name: "Base UI", slug: "baseui", Icon: BaseUIBrandIcon },
  { name: "Basecamp", slug: "basecamp", Icon: BasecampBrandIcon },
  { name: "Baserow", slug: "baserow", Icon: BaserowBrandIcon },
  { name: "Basic Attention Token", slug: "basicattentiontoken", Icon: BasicAttentionTokenBrandIcon },
  { name: "Bastyon", slug: "bastyon", Icon: BastyonBrandIcon },
  { name: "bat", slug: "bat", Icon: BatBrandIcon },
  { name: "Bata", slug: "bata", Icon: BataBrandIcon },
  { name: "Battle.net", slug: "battledotnet", Icon: BattleNetBrandIcon },
  { name: "Bazel", slug: "bazel", Icon: BazelBrandIcon },
  { name: "Beatport", slug: "beatport", Icon: BeatportBrandIcon },
  { name: "Beats", slug: "beats", Icon: BeatsBrandIcon },
  { name: "Beats by Dre", slug: "beatsbydre", Icon: BeatsByDreBrandIcon },
  { name: "BeatStars", slug: "beatstars", Icon: BeatStarsBrandIcon },
  { name: "Beekeeper Studio", slug: "beekeeperstudio", Icon: BeekeeperStudioBrandIcon },
  { name: "Behance", slug: "behance", Icon: BehanceBrandIcon },
  { name: "Beijing Subway", slug: "beijingsubway", Icon: BeijingSubwayBrandIcon },
  { name: "BEM", slug: "bem", Icon: BEMBrandIcon },
  { name: "Bentley", slug: "bentley", Icon: BentleyBrandIcon },
  { name: "Bento", slug: "bento", Icon: BentoBrandIcon },
  { name: "BentoBox", slug: "bentobox", Icon: BentoBoxBrandIcon },
  { name: "BentoML", slug: "bentoml", Icon: BentoMLBrandIcon },
  { name: "BeReal", slug: "bereal", Icon: BeRealBrandIcon },
  { name: "Betfair", slug: "betfair", Icon: BetfairBrandIcon },
  { name: "Better Auth", slug: "betterauth", Icon: BetterAuthBrandIcon },
  { name: "Better Stack", slug: "betterstack", Icon: BetterStackBrandIcon },
  { name: "BetterDiscord", slug: "betterdiscord", Icon: BetterDiscordBrandIcon },
  { name: "Bevy", slug: "bevy", Icon: BevyBrandIcon },
  { name: "Big Cartel", slug: "bigcartel", Icon: BigCartelBrandIcon },
  { name: "bigbasket", slug: "bigbasket", Icon: BigbasketBrandIcon },
  { name: "BigBlueButton", slug: "bigbluebutton", Icon: BigBlueButtonBrandIcon },
  { name: "BigCommerce", slug: "bigcommerce", Icon: BigCommerceBrandIcon },
  { name: "Bilibili", slug: "bilibili", Icon: BilibiliBrandIcon },
  { name: "Billboard", slug: "billboard", Icon: BillboardBrandIcon },
  { name: "BIM", slug: "bim", Icon: BIMBrandIcon },
  { name: "Binance", slug: "binance", Icon: BinanceBrandIcon },
  { name: "Bio Link", slug: "biolink", Icon: BioLinkBrandIcon },
  { name: "Bioconductor", slug: "bioconductor", Icon: BioconductorBrandIcon },
  { name: "Biome", slug: "biome", Icon: BiomeBrandIcon },
  { name: "BisectHosting", slug: "bisecthosting", Icon: BisectHostingBrandIcon },
  { name: "Bit", slug: "bit", Icon: BitBrandIcon },
  { name: "Bitbucket", slug: "bitbucket", Icon: BitbucketBrandIcon },
  { name: "Bitcoin", slug: "bitcoin", Icon: BitcoinBrandIcon },
  { name: "Bitcoin Cash", slug: "bitcoincash", Icon: BitcoinCashBrandIcon },
  { name: "Bitcoin SV", slug: "bitcoinsv", Icon: BitcoinSVBrandIcon },
  { name: "BitComet", slug: "bitcomet", Icon: BitCometBrandIcon },
  { name: "Bitdefender", slug: "bitdefender", Icon: BitdefenderBrandIcon },
  { name: "Bitly", slug: "bitly", Icon: BitlyBrandIcon },
  { name: "Bitrise", slug: "bitrise", Icon: BitriseBrandIcon },
  { name: "Bitsy", slug: "bitsy", Icon: BitsyBrandIcon },
  { name: "BitTorrent", slug: "bittorrent", Icon: BitTorrentBrandIcon },
  { name: "Bitwarden", slug: "bitwarden", Icon: BitwardenBrandIcon },
  { name: "Bitwig", slug: "bitwig", Icon: BitwigBrandIcon },
  { name: "Black", slug: "black", Icon: BlackBrandIcon },
  { name: "Blackberry", slug: "blackberry", Icon: BlackberryBrandIcon },
  { name: "Blackmagic Design", slug: "blackmagicdesign", Icon: BlackmagicDesignBrandIcon },
  { name: "Blazemeter", slug: "blazemeter", Icon: BlazemeterBrandIcon },
  { name: "Blazor", slug: "blazor", Icon: BlazorBrandIcon },
  { name: "Blender", slug: "blender", Icon: BlenderBrandIcon },
  { name: "Blibli", slug: "blibli", Icon: BlibliBrandIcon },
  { name: "Blockbench", slug: "blockbench", Icon: BlockbenchBrandIcon },
  { name: "Blockchain.com", slug: "blockchaindotcom", Icon: BlockchainComBrandIcon },
  { name: "Blogger", slug: "blogger", Icon: BloggerBrandIcon },
  { name: "Bloglovin", slug: "bloglovin", Icon: BloglovinBrandIcon },
  { name: "Blueprint", slug: "blueprint", Icon: BlueprintBrandIcon },
  { name: "Bluesky", slug: "bluesky", Icon: BlueskyBrandIcon },
  { name: "Bluesound", slug: "bluesound", Icon: BluesoundBrandIcon },
  { name: "Bluetooth", slug: "bluetooth", Icon: BluetoothBrandIcon },
  { name: "BMC Software", slug: "bmcsoftware", Icon: BMCSoftwareBrandIcon },
  { name: "BMW", slug: "bmw", Icon: BMWBrandIcon },
  { name: "BNB Chain", slug: "bnbchain", Icon: BNBChainBrandIcon },
  { name: "BoardGameGeek", slug: "boardgamegeek", Icon: BoardGameGeekBrandIcon },
  { name: "boAt", slug: "boat", Icon: BoAtBrandIcon },
  { name: "Boehringer Ingelheim", slug: "boehringeringelheim", Icon: BoehringerIngelheimBrandIcon },
  { name: "Boeing", slug: "boeing", Icon: BoeingBrandIcon },
  { name: "Bohemia Interactive", slug: "bohemiainteractive", Icon: BohemiaInteractiveBrandIcon },
  { name: "Bombardier", slug: "bombardier", Icon: BombardierBrandIcon },
  { name: "Bookalope", slug: "bookalope", Icon: BookalopeBrandIcon },
  { name: "BookBub", slug: "bookbub", Icon: BookBubBrandIcon },
  { name: "Booking.com", slug: "bookingdotcom", Icon: BookingComBrandIcon },
  { name: "Bookmeter", slug: "bookmeter", Icon: BookmeterBrandIcon },
  { name: "BookMyShow", slug: "bookmyshow", Icon: BookMyShowBrandIcon },
  { name: "BookStack", slug: "bookstack", Icon: BookStackBrandIcon },
  { name: "Boost", slug: "boost", Icon: BoostBrandIcon },
  { name: "Boosty", slug: "boosty", Icon: BoostyBrandIcon },
  { name: "Boots", slug: "boots", Icon: BootsBrandIcon },
  { name: "Bootstrap", slug: "bootstrap", Icon: BootstrapBrandIcon },
  { name: "BorgBackup", slug: "borgbackup", Icon: BorgBackupBrandIcon },
  { name: "Bosch", slug: "bosch", Icon: BoschBrandIcon },
  { name: "Bose", slug: "bose", Icon: BoseBrandIcon },
  { name: "Botble CMS", slug: "botblecms", Icon: BotbleCMSBrandIcon },
  { name: "boulanger", slug: "boulanger", Icon: BoulangerBrandIcon },
  { name: "Bower", slug: "bower", Icon: BowerBrandIcon },
  { name: "Box", slug: "box", Icon: BoxBrandIcon },
  { name: "Boxy SVG", slug: "boxysvg", Icon: BoxySVGBrandIcon },
  { name: "Braintree", slug: "braintree", Icon: BraintreeBrandIcon },
  { name: "Braintrust", slug: "braintrust", Icon: BraintrustBrandIcon },
  { name: "Brandfetch", slug: "brandfetch", Icon: BrandfetchBrandIcon },
  { name: "Brandfolder", slug: "brandfolder", Icon: BrandfolderBrandIcon },
  { name: "Brave", slug: "brave", Icon: BraveBrandIcon },
  { name: "Breaker", slug: "breaker", Icon: BreakerBrandIcon },
  { name: "Brenntag", slug: "brenntag", Icon: BrenntagBrandIcon },
  { name: "Brevo", slug: "brevo", Icon: BrevoBrandIcon },
  { name: "Brex", slug: "brex", Icon: BrexBrandIcon },
  { name: "Bricks", slug: "bricks", Icon: BricksBrandIcon },
  { name: "British Airways", slug: "britishairways", Icon: BritishAirwaysBrandIcon },
  { name: "Broadcom", slug: "broadcom", Icon: BroadcomBrandIcon },
  { name: "Bruno", slug: "bruno", Icon: BrunoBrandIcon },
  { name: "BSD", slug: "bsd", Icon: BSDBrandIcon },
  { name: "bspwm", slug: "bspwm", Icon: BspwmBrandIcon },
  { name: "BT", slug: "bt", Icon: BTBrandIcon },
  { name: "Buddy", slug: "buddy", Icon: BuddyBrandIcon },
  { name: "Budibase", slug: "budibase", Icon: BudibaseBrandIcon },
  { name: "Buefy", slug: "buefy", Icon: BuefyBrandIcon },
  { name: "Buffer", slug: "buffer", Icon: BufferBrandIcon },
  { name: "Bugatti", slug: "bugatti", Icon: BugattiBrandIcon },
  { name: "Bugcrowd", slug: "bugcrowd", Icon: BugcrowdBrandIcon },
  { name: "Buhl", slug: "buhl", Icon: BuhlBrandIcon },
  { name: "Buildkite", slug: "buildkite", Icon: BuildkiteBrandIcon },
  { name: "BuiltByBit", slug: "builtbybit", Icon: BuiltByBitBrandIcon },
  { name: "Bukalapak", slug: "bukalapak", Icon: BukalapakBrandIcon },
  { name: "Bulma", slug: "bulma", Icon: BulmaBrandIcon },
  { name: "Bun", slug: "bun", Icon: BunBrandIcon },
  { name: "Bungie", slug: "bungie", Icon: BungieBrandIcon },
  { name: "bunny.net", slug: "bunnydotnet", Icon: BunnyNetBrandIcon },
  { name: "bunq", slug: "bunq", Icon: BunqBrandIcon },
  { name: "Burger King", slug: "burgerking", Icon: BurgerKingBrandIcon },
  { name: "Burp Suite", slug: "burpsuite", Icon: BurpSuiteBrandIcon },
  { name: "Burton", slug: "burton", Icon: BurtonBrandIcon },
  { name: "Buy Me A Coffee", slug: "buymeacoffee", Icon: BuyMeACoffeeBrandIcon },
  { name: "BuySellAds", slug: "buysellads", Icon: BuySellAdsBrandIcon },
  { name: "BuzzFeed", slug: "buzzfeed", Icon: BuzzFeedBrandIcon },
  { name: "BVG", slug: "bvg", Icon: BVGBrandIcon },
  { name: "Byju's", slug: "byjus", Icon: ByjuSBrandIcon },
  { name: "ByteDance", slug: "bytedance", Icon: ByteDanceBrandIcon },
  { name: "C", slug: "c", Icon: CBrandIcon },
  { name: "C++", slug: "cplusplus", Icon: CplusplusBrandIcon },
  { name: "C++ Builder", slug: "cplusplusbuilder", Icon: CBuilderBrandIcon },
  { name: "Cachet", slug: "cachet", Icon: CachetBrandIcon },
  { name: "CachyOS", slug: "cachyos", Icon: CachyOSBrandIcon },
  { name: "Caddy", slug: "caddy", Icon: CaddyBrandIcon },
  { name: "Cadillac", slug: "cadillac", Icon: CadillacBrandIcon },
  { name: "CafePress", slug: "cafepress", Icon: CafePressBrandIcon },
  { name: "Cairo Graphics", slug: "cairographics", Icon: CairoGraphicsBrandIcon },
  { name: "Cairo Metro", slug: "cairometro", Icon: CairoMetroBrandIcon },
  { name: "CaixaBank", slug: "caixabank", Icon: CaixaBankBrandIcon },
  { name: "CakePHP", slug: "cakephp", Icon: CakePHPBrandIcon },
  { name: "Cal.com", slug: "caldotcom", Icon: CalComBrandIcon },
  { name: "Calendly", slug: "calendly", Icon: CalendlyBrandIcon },
  { name: "Calibre-Web", slug: "calibreweb", Icon: CalibreWebBrandIcon },
  { name: "Campaign Monitor", slug: "campaignmonitor", Icon: CampaignMonitorBrandIcon },
  { name: "Camunda", slug: "camunda", Icon: CamundaBrandIcon },
  { name: "Canonical", slug: "canonical", Icon: CanonicalBrandIcon },
  { name: "Canvas", slug: "canvas", Icon: CanvasBrandIcon },
  { name: "Capacitor", slug: "capacitor", Icon: CapacitorBrandIcon },
  { name: "CapRover", slug: "caprover", Icon: CapRoverBrandIcon },
  { name: "Car Throttle", slug: "carthrottle", Icon: CarThrottleBrandIcon },
  { name: "Cardano", slug: "cardano", Icon: CardanoBrandIcon },
  { name: "Cardmarket", slug: "cardmarket", Icon: CardmarketBrandIcon },
  { name: "Carlsberg Group", slug: "carlsberggroup", Icon: CarlsbergGroupBrandIcon },
  { name: "Carrd", slug: "carrd", Icon: CarrdBrandIcon },
  { name: "Carrefour", slug: "carrefour", Icon: CarrefourBrandIcon },
  { name: "Carto", slug: "carto", Icon: CartoBrandIcon },
  { name: "Cash App", slug: "cashapp", Icon: CashAppBrandIcon },
  { name: "Castbox", slug: "castbox", Icon: CastboxBrandIcon },
  { name: "Castorama", slug: "castorama", Icon: CastoramaBrandIcon },
  { name: "Castro", slug: "castro", Icon: CastroBrandIcon },
  { name: "Caterpillar", slug: "caterpillar", Icon: CaterpillarBrandIcon },
  { name: "CBC", slug: "cbc", Icon: CBCBrandIcon },
  { name: "CBS", slug: "cbs", Icon: CBSBrandIcon },
  { name: "CCC", slug: "ccc", Icon: CCCBrandIcon },
  { name: "CCleaner", slug: "ccleaner", Icon: CCleanerBrandIcon },
  { name: "CD Projekt", slug: "cdprojekt", Icon: CDProjektBrandIcon },
  { name: "CE", slug: "ce", Icon: CEBrandIcon },
  { name: "Celery", slug: "celery", Icon: CeleryBrandIcon },
  { name: "Celestron", slug: "celestron", Icon: CelestronBrandIcon },
  { name: "CentOS", slug: "centos", Icon: CentOSBrandIcon },
  { name: "Ceph", slug: "ceph", Icon: CephBrandIcon },
  { name: "Cesium", slug: "cesium", Icon: CesiumBrandIcon },
  { name: "Chai", slug: "chai", Icon: ChaiBrandIcon },
  { name: "Chainguard", slug: "chainguard", Icon: ChainguardBrandIcon },
  { name: "Chainlink", slug: "chainlink", Icon: ChainlinkBrandIcon },
  { name: "Chakra UI", slug: "chakraui", Icon: ChakraUIBrandIcon },
  { name: "Change Detection", slug: "changedetection", Icon: ChangeDetectionBrandIcon },
  { name: "Channel 4", slug: "channel4", Icon: Channel4BrandIcon },
  { name: "Charles", slug: "charles", Icon: CharlesBrandIcon },
  { name: "Chart.js", slug: "chartdotjs", Icon: ChartJsBrandIcon },
  { name: "ChartMogul", slug: "chartmogul", Icon: ChartMogulBrandIcon },
  { name: "Chase", slug: "chase", Icon: ChaseBrandIcon },
  { name: "ChatBot", slug: "chatbot", Icon: ChatBotBrandIcon },
  { name: "Chatwoot", slug: "chatwoot", Icon: ChatwootBrandIcon },
  { name: "CheckiO", slug: "checkio", Icon: CheckiOBrandIcon },
  { name: "Checkmarx", slug: "checkmarx", Icon: CheckmarxBrandIcon },
  { name: "Checkmk", slug: "checkmk", Icon: CheckmkBrandIcon },
  { name: "Chedraui", slug: "chedraui", Icon: ChedrauiBrandIcon },
  { name: "Cheerio", slug: "cheerio", Icon: CheerioBrandIcon },
  { name: "Chef", slug: "chef", Icon: ChefBrandIcon },
  { name: "Chemex", slug: "chemex", Icon: ChemexBrandIcon },
  { name: "Chess.com", slug: "chessdotcom", Icon: ChessComBrandIcon },
  { name: "Chevrolet", slug: "chevrolet", Icon: ChevroletBrandIcon },
  { name: "Chia Network", slug: "chianetwork", Icon: ChiaNetworkBrandIcon },
  { name: "China Eastern Airlines", slug: "chinaeasternairlines", Icon: ChinaEasternAirlinesBrandIcon },
  { name: "China Railway", slug: "chinarailway", Icon: ChinaRailwayBrandIcon },
  { name: "China Southern Airlines", slug: "chinasouthernairlines", Icon: ChinaSouthernAirlinesBrandIcon },
  { name: "Chocolatey", slug: "chocolatey", Icon: ChocolateyBrandIcon },
  { name: "Chromatic", slug: "chromatic", Icon: ChromaticBrandIcon },
  { name: "Chrome Web Store", slug: "chromewebstore", Icon: ChromeWebStoreBrandIcon },
  { name: "Chrysler", slug: "chrysler", Icon: ChryslerBrandIcon },
  { name: "Chupa Chups", slug: "chupachups", Icon: ChupaChupsBrandIcon },
  { name: "Cilium", slug: "cilium", Icon: CiliumBrandIcon },
  { name: "Cinema 4D", slug: "cinema4d", Icon: Cinema4DBrandIcon },
  { name: "Cinnamon", slug: "cinnamon", Icon: CinnamonBrandIcon },
  { name: "Cinny", slug: "cinny", Icon: CinnyBrandIcon },
  { name: "Circle", slug: "circle", Icon: CircleBrandIcon },
  { name: "CircleCI", slug: "circleci", Icon: CircleCIBrandIcon },
  { name: "CircuitVerse", slug: "circuitverse", Icon: CircuitVerseBrandIcon },
  { name: "Cirrus CI", slug: "cirrusci", Icon: CirrusCIBrandIcon },
  { name: "Cisco", slug: "cisco", Icon: CiscoBrandIcon },
  { name: "Citrix", slug: "citrix", Icon: CitrixBrandIcon },
  { name: "Citroën", slug: "citroen", Icon: CitroNBrandIcon },
  { name: "CiviCRM", slug: "civicrm", Icon: CiviCRMBrandIcon },
  { name: "Civo", slug: "civo", Icon: CivoBrandIcon },
  { name: "Clarifai", slug: "clarifai", Icon: ClarifaiBrandIcon },
  { name: "Claris", slug: "claris", Icon: ClarisBrandIcon },
  { name: "Clarivate", slug: "clarivate", Icon: ClarivateBrandIcon },
  { name: "Claude", slug: "claude", Icon: ClaudeBrandIcon },
  { name: "Claude Code", slug: "claudecode", Icon: ClaudeCodeBrandIcon },
  { name: "Clerk", slug: "clerk", Icon: ClerkBrandIcon },
  { name: "Clever Cloud", slug: "clevercloud", Icon: CleverCloudBrandIcon },
  { name: "ClickHouse", slug: "clickhouse", Icon: ClickHouseBrandIcon },
  { name: "ClickUp", slug: "clickup", Icon: ClickUpBrandIcon },
  { name: "Cline", slug: "cline", Icon: ClineBrandIcon },
  { name: "CLion", slug: "clion", Icon: CLionBrandIcon },
  { name: "Clockify", slug: "clockify", Icon: ClockifyBrandIcon },
  { name: "Clojure", slug: "clojure", Icon: ClojureBrandIcon },
  { name: "Cloud 66", slug: "cloud66", Icon: Cloud66BrandIcon },
  { name: "Cloud Foundry", slug: "cloudfoundry", Icon: CloudFoundryBrandIcon },
  { name: "Cloud Native Build", slug: "cloudnativebuild", Icon: CloudNativeBuildBrandIcon },
  { name: "CloudBees", slug: "cloudbees", Icon: CloudBeesBrandIcon },
  { name: "CloudCannon", slug: "cloudcannon", Icon: CloudCannonBrandIcon },
  { name: "Cloudera", slug: "cloudera", Icon: ClouderaBrandIcon },
  { name: "Cloudflare", slug: "cloudflare", Icon: CloudflareBrandIcon },
  { name: "Cloudflare Pages", slug: "cloudflarepages", Icon: CloudflarePagesBrandIcon },
  { name: "Cloudflare Workers", slug: "cloudflareworkers", Icon: CloudflareWorkersBrandIcon },
  { name: "Cloudinary", slug: "cloudinary", Icon: CloudinaryBrandIcon },
  { name: "Cloudron", slug: "cloudron", Icon: CloudronBrandIcon },
  { name: "Cloudsmith", slug: "cloudsmith", Icon: CloudsmithBrandIcon },
  { name: "Cloudways", slug: "cloudways", Icon: CloudwaysBrandIcon },
  { name: "Clubforce", slug: "clubforce", Icon: ClubforceBrandIcon },
  { name: "Clubhouse", slug: "clubhouse", Icon: ClubhouseBrandIcon },
  { name: "Clyp", slug: "clyp", Icon: ClypBrandIcon },
  { name: "CMake", slug: "cmake", Icon: CMakeBrandIcon },
  { name: "CNCF", slug: "cncf", Icon: CNCFBrandIcon },
  { name: "CNES", slug: "cnes", Icon: CNESBrandIcon },
  { name: "CNET", slug: "cnet", Icon: CNETBrandIcon },
  { name: "CNN", slug: "cnn", Icon: CNNBrandIcon },
  { name: "Co-op", slug: "coop", Icon: CoOpBrandIcon },
  { name: "cobalt", slug: "cobalt", Icon: CobaltBrandIcon },
  { name: "Coca-Cola", slug: "cocacola", Icon: CocaColaBrandIcon },
  { name: "Cockpit", slug: "cockpit", Icon: CockpitBrandIcon },
  { name: "Cockroach Labs", slug: "cockroachlabs", Icon: CockroachLabsBrandIcon },
  { name: "CocoaPods", slug: "cocoapods", Icon: CocoaPodsBrandIcon },
  { name: "Cocos", slug: "cocos", Icon: CocosBrandIcon },
  { name: "Coda", slug: "coda", Icon: CodaBrandIcon },
  { name: "Codacy", slug: "codacy", Icon: CodacyBrandIcon },
  { name: "Code Climate", slug: "codeclimate", Icon: CodeClimateBrandIcon },
  { name: "Code::Blocks", slug: "codeblocks", Icon: CodeBlocksBrandIcon },
  { name: "Codeberg", slug: "codeberg", Icon: CodebergBrandIcon },
  { name: "CodeBuddy", slug: "codebuddy", Icon: CodeBuddyBrandIcon },
  { name: "Codecademy", slug: "codecademy", Icon: CodecademyBrandIcon },
  { name: "CodeceptJS", slug: "codeceptjs", Icon: CodeceptJSBrandIcon },
  { name: "CodeChef", slug: "codechef", Icon: CodeChefBrandIcon },
  { name: "Codecov", slug: "codecov", Icon: CodecovBrandIcon },
  { name: "CodeCrafters", slug: "codecrafters", Icon: CodeCraftersBrandIcon },
  { name: "CodeFactor", slug: "codefactor", Icon: CodeFactorBrandIcon },
  { name: "Codeforces", slug: "codeforces", Icon: CodeforcesBrandIcon },
  { name: "Codefresh", slug: "codefresh", Icon: CodefreshBrandIcon },
  { name: "CodeIgniter", slug: "codeigniter", Icon: CodeIgniterBrandIcon },
  { name: "Codemagic", slug: "codemagic", Icon: CodemagicBrandIcon },
  { name: "Codementor", slug: "codementor", Icon: CodementorBrandIcon },
  { name: "CodeMirror", slug: "codemirror", Icon: CodeMirrorBrandIcon },
  { name: "CodeNewbie", slug: "codenewbie", Icon: CodeNewbieBrandIcon },
  { name: "CodeProject", slug: "codeproject", Icon: CodeProjectBrandIcon },
  { name: "Coder", slug: "coder", Icon: CoderBrandIcon },
  { name: "CodeRabbit", slug: "coderabbit", Icon: CodeRabbitBrandIcon },
  { name: "CodersRank", slug: "codersrank", Icon: CodersRankBrandIcon },
  { name: "Coderwall", slug: "coderwall", Icon: CoderwallBrandIcon },
  { name: "CodeSandbox", slug: "codesandbox", Icon: CodeSandboxBrandIcon },
  { name: "Codeship", slug: "codeship", Icon: CodeshipBrandIcon },
  { name: "CodeSignal", slug: "codesignal", Icon: CodeSignalBrandIcon },
  { name: "CodeStream", slug: "codestream", Icon: CodeStreamBrandIcon },
  { name: "Codewars", slug: "codewars", Icon: CodewarsBrandIcon },
  { name: "Coding Ninjas", slug: "codingninjas", Icon: CodingNinjasBrandIcon },
  { name: "CodinGame", slug: "codingame", Icon: CodinGameBrandIcon },
  { name: "Codio", slug: "codio", Icon: CodioBrandIcon },
  { name: "CoffeeScript", slug: "coffeescript", Icon: CoffeeScriptBrandIcon },
  { name: "Coggle", slug: "coggle", Icon: CoggleBrandIcon },
  { name: "Coinbase", slug: "coinbase", Icon: CoinbaseBrandIcon },
  { name: "CoinMarketCap", slug: "coinmarketcap", Icon: CoinMarketCapBrandIcon },
  { name: "Collabora Online", slug: "collaboraonline", Icon: CollaboraOnlineBrandIcon },
  { name: "ComicFury", slug: "comicfury", Icon: ComicFuryBrandIcon },
  { name: "comma", slug: "comma", Icon: CommaBrandIcon },
  { name: "Commerzbank", slug: "commerzbank", Icon: CommerzbankBrandIcon },
  { name: "commitlint", slug: "commitlint", Icon: CommitlintBrandIcon },
  { name: "Commodore", slug: "commodore", Icon: CommodoreBrandIcon },
  { name: "Common Lisp", slug: "commonlisp", Icon: CommonLispBrandIcon },
  { name: "Common Workflow Language", slug: "commonworkflowlanguage", Icon: CommonWorkflowLanguageBrandIcon },
  { name: "Compiler Explorer", slug: "compilerexplorer", Icon: CompilerExplorerBrandIcon },
  { name: "Composer", slug: "composer", Icon: ComposerBrandIcon },
  { name: "CompTIA", slug: "comptia", Icon: CompTIABrandIcon },
  { name: "Comsol", slug: "comsol", Icon: ComsolBrandIcon },
  { name: "Conan", slug: "conan", Icon: ConanBrandIcon },
  { name: "Concourse", slug: "concourse", Icon: ConcourseBrandIcon },
  { name: "Conda-Forge", slug: "condaforge", Icon: CondaForgeBrandIcon },
  { name: "Conekta", slug: "conekta", Icon: ConektaBrandIcon },
  { name: "Confluence", slug: "confluence", Icon: ConfluenceBrandIcon },
  { name: "Construct 3", slug: "construct3", Icon: Construct3BrandIcon },
  { name: "Consul", slug: "consul", Icon: ConsulBrandIcon },
  { name: "Contabo", slug: "contabo", Icon: ContaboBrandIcon },
  { name: "Contactless Payment", slug: "contactlesspayment", Icon: ContactlessPaymentBrandIcon },
  { name: "containerd", slug: "containerd", Icon: ContainerdBrandIcon },
  { name: "Contao", slug: "contao", Icon: ContaoBrandIcon },
  { name: "Contensis", slug: "contensis", Icon: ContensisBrandIcon },
  { name: "Contentful", slug: "contentful", Icon: ContentfulBrandIcon },
  { name: "Contentstack", slug: "contentstack", Icon: ContentstackBrandIcon },
  { name: "Continente", slug: "continente", Icon: ContinenteBrandIcon },
  { name: "Contributor Covenant", slug: "contributorcovenant", Icon: ContributorCovenantBrandIcon },
  { name: "Conventional Commits", slug: "conventionalcommits", Icon: ConventionalCommitsBrandIcon },
  { name: "Convertio", slug: "convertio", Icon: ConvertioBrandIcon },
  { name: "Convex", slug: "convex", Icon: ConvexBrandIcon },
  { name: "Cookiecutter", slug: "cookiecutter", Icon: CookiecutterBrandIcon },
  { name: "Cooler Master", slug: "coolermaster", Icon: CoolerMasterBrandIcon },
  { name: "Coolify", slug: "coolify", Icon: CoolifyBrandIcon },
  { name: "Copa Airlines", slug: "copaairlines", Icon: CopaAirlinesBrandIcon },
  { name: "Coppel", slug: "coppel", Icon: CoppelBrandIcon },
  { name: "Cora", slug: "cora", Icon: CoraBrandIcon },
  { name: "Coreboot", slug: "coreboot", Icon: CorebootBrandIcon },
  { name: "CorelDRAW", slug: "coreldraw", Icon: CorelDRAWBrandIcon },
  { name: "Corona Engine", slug: "coronaengine", Icon: CoronaEngineBrandIcon },
  { name: "Corona Renderer", slug: "coronarenderer", Icon: CoronaRendererBrandIcon },
  { name: "Corsair", slug: "corsair", Icon: CorsairBrandIcon },
  { name: "Couchbase", slug: "couchbase", Icon: CouchbaseBrandIcon },
  { name: "Counter-Strike", slug: "counterstrike", Icon: CounterStrikeBrandIcon },
  { name: "CountingWorks PRO", slug: "countingworkspro", Icon: CountingWorksPROBrandIcon },
  { name: "Coursera", slug: "coursera", Icon: CourseraBrandIcon },
  { name: "Coveralls", slug: "coveralls", Icon: CoverallsBrandIcon },
  { name: "Coze", slug: "coze", Icon: CozeBrandIcon },
  { name: "cPanel", slug: "cpanel", Icon: CPanelBrandIcon },
  { name: "Craft CMS", slug: "craftcms", Icon: CraftCMSBrandIcon },
  { name: "Craftsman", slug: "craftsman", Icon: CraftsmanBrandIcon },
  { name: "CrateDB", slug: "cratedb", Icon: CrateDBBrandIcon },
  { name: "Crayon", slug: "crayon", Icon: CrayonBrandIcon },
  { name: "Creality", slug: "creality", Icon: CrealityBrandIcon },
  { name: "Create React App", slug: "createreactapp", Icon: CreateReactAppBrandIcon },
  { name: "Creative Commons", slug: "creativecommons", Icon: CreativeCommonsBrandIcon },
  { name: "Creative Technology", slug: "creativetechnology", Icon: CreativeTechnologyBrandIcon },
  { name: "Credly", slug: "credly", Icon: CredlyBrandIcon },
  { name: "Crehana", slug: "crehana", Icon: CrehanaBrandIcon },
  { name: "Crew United", slug: "crewunited", Icon: CrewUnitedBrandIcon },
  { name: "CrewAI", slug: "crewai", Icon: CrewAIBrandIcon },
  { name: "Critical Role", slug: "criticalrole", Icon: CriticalRoleBrandIcon },
  { name: "Crowdin", slug: "crowdin", Icon: CrowdinBrandIcon },
  { name: "Crowdsource", slug: "crowdsource", Icon: CrowdsourceBrandIcon },
  { name: "Crunchbase", slug: "crunchbase", Icon: CrunchbaseBrandIcon },
  { name: "Crunchyroll", slug: "crunchyroll", Icon: CrunchyrollBrandIcon },
  { name: "CRYENGINE", slug: "cryengine", Icon: CryengineBrandIcon },
  { name: "Cryptomator", slug: "cryptomator", Icon: CryptomatorBrandIcon },
  { name: "CryptPad", slug: "cryptpad", Icon: CryptPadBrandIcon },
  { name: "Crystal", slug: "crystal", Icon: CrystalBrandIcon },
  { name: "CSDN", slug: "csdn", Icon: CSDNBrandIcon },
  { name: "CSS", slug: "css", Icon: CSSBrandIcon },
  { name: "CSS Design Awards", slug: "cssdesignawards", Icon: CSSDesignAwardsBrandIcon },
  { name: "CSS Modules", slug: "cssmodules", Icon: CSSModulesBrandIcon },
  { name: "CSS Wizardry", slug: "csswizardry", Icon: CSSWizardryBrandIcon },
  { name: "CTS", slug: "cts", Icon: CTSBrandIcon },
  { name: "Cucumber", slug: "cucumber", Icon: CucumberBrandIcon },
  { name: "Cultura", slug: "cultura", Icon: CulturaBrandIcon },
  { name: "curl", slug: "curl", Icon: CurlBrandIcon },
  { name: "CurseForge", slug: "curseforge", Icon: CurseForgeBrandIcon },
  { name: "Cursor", slug: "cursor", Icon: CursorBrandIcon },
  { name: "Custom Ink", slug: "customink", Icon: CustomInkBrandIcon },
  { name: "CyberDefenders", slug: "cyberdefenders", Icon: CyberDefendersBrandIcon },
  { name: "Cycling '74", slug: "cycling74", Icon: Cycling74BrandIcon },
  { name: "Cypress", slug: "cypress", Icon: CypressBrandIcon },
  { name: "Cytoscape.js", slug: "cytoscapedotjs", Icon: CytoscapeJsBrandIcon },
  { name: "D", slug: "d", Icon: DBrandIcon },
  { name: "D-EDGE", slug: "dedge", Icon: DEDGEBrandIcon },
  { name: "D-Wave Systems", slug: "dwavesystems", Icon: DWaveSystemsBrandIcon },
  { name: "D3", slug: "d3", Icon: D3BrandIcon },
  { name: "Dacia", slug: "dacia", Icon: DaciaBrandIcon },
  { name: "DAF", slug: "daf", Icon: DAFBrandIcon },
  { name: "daily.dev", slug: "dailydotdev", Icon: DailyDevBrandIcon },
  { name: "Dailymotion", slug: "dailymotion", Icon: DailymotionBrandIcon },
  { name: "daisyUI", slug: "daisyui", Icon: DaisyUIBrandIcon },
  { name: "Dapr", slug: "dapr", Icon: DaprBrandIcon },
  { name: "Dark Reader", slug: "darkreader", Icon: DarkReaderBrandIcon },
  { name: "Dart", slug: "dart", Icon: DartBrandIcon },
  { name: "Darty", slug: "darty", Icon: DartyBrandIcon },
  { name: "Das Erste", slug: "daserste", Icon: DasErsteBrandIcon },
  { name: "Dash", slug: "dash", Icon: DashBrandIcon },
  { name: "Dash0", slug: "dash0", Icon: Dash0BrandIcon },
  { name: "Dashlane", slug: "dashlane", Icon: DashlaneBrandIcon },
  { name: "Dask", slug: "dask", Icon: DaskBrandIcon },
  { name: "Dassault Systèmes", slug: "dassaultsystemes", Icon: DassaultSystMesBrandIcon },
  { name: "data.ai", slug: "datadotai", Icon: DataAiBrandIcon },
  { name: "Databricks", slug: "databricks", Icon: DatabricksBrandIcon },
  { name: "DataCamp", slug: "datacamp", Icon: DataCampBrandIcon },
  { name: "Datadog", slug: "datadog", Icon: DatadogBrandIcon },
  { name: "DataGrip", slug: "datagrip", Icon: DataGripBrandIcon },
  { name: "Dataiku", slug: "dataiku", Icon: DataikuBrandIcon },
  { name: "DataStax", slug: "datastax", Icon: DataStaxBrandIcon },
  { name: "date-fns", slug: "datefns", Icon: DateFnsBrandIcon },
  { name: "DATEV", slug: "datev", Icon: DatevBrandIcon },
  { name: "DatoCMS", slug: "datocms", Icon: DatoCMSBrandIcon },
  { name: "Datto", slug: "datto", Icon: DattoBrandIcon },
  { name: "DaVinci Resolve", slug: "davinciresolve", Icon: DaVinciResolveBrandIcon },
  { name: "Dazhong Dianping", slug: "dazhongdianping", Icon: DazhongDianpingBrandIcon },
  { name: "DAZN", slug: "dazn", Icon: DAZNBrandIcon },
  { name: "DBeaver", slug: "dbeaver", Icon: DBeaverBrandIcon },
  { name: "dblp", slug: "dblp", Icon: DblpBrandIcon },
  { name: "DC Entertainment", slug: "dcentertainment", Icon: DCEntertainmentBrandIcon },
  { name: "De'Longhi", slug: "delonghi", Icon: DeLonghiBrandIcon },
  { name: "Debian", slug: "debian", Icon: DebianBrandIcon },
  { name: "Debrid-Link", slug: "debridlink", Icon: DebridLinkBrandIcon },
  { name: "Decap CMS", slug: "decapcms", Icon: DecapCMSBrandIcon },
  { name: "Decentraland", slug: "decentraland", Icon: DecentralandBrandIcon },
  { name: "DeepCool", slug: "deepcool", Icon: DeepCoolBrandIcon },
  { name: "Deepgram", slug: "deepgram", Icon: DeepgramBrandIcon },
  { name: "deepin", slug: "deepin", Icon: DeepinBrandIcon },
  { name: "DeepL", slug: "deepl", Icon: DeepLBrandIcon },
  { name: "DeepMind", slug: "deepmind", Icon: DeepMindBrandIcon },
  { name: "Deepnote", slug: "deepnote", Icon: DeepnoteBrandIcon },
  { name: "DeepSeek", slug: "deepseek", Icon: DeepSeekBrandIcon },
  { name: "Deezer", slug: "deezer", Icon: DeezerBrandIcon },
  { name: "Deliveroo", slug: "deliveroo", Icon: DeliverooBrandIcon },
  { name: "Dell", slug: "dell", Icon: DellBrandIcon },
  { name: "Delphi", slug: "delphi", Icon: DelphiBrandIcon },
  { name: "Delta", slug: "delta", Icon: DeltaBrandIcon },
  { name: "Deluge", slug: "deluge", Icon: DelugeBrandIcon },
  { name: "Deno", slug: "deno", Icon: DenoBrandIcon },
  { name: "Deno Deploy", slug: "denodeploy", Icon: DenoDeployBrandIcon },
  { name: "Denon", slug: "denon", Icon: DenonBrandIcon },
  { name: "Dependabot", slug: "dependabot", Icon: DependabotBrandIcon },
  { name: "Depositphotos", slug: "depositphotos", Icon: DepositphotosBrandIcon },
  { name: "Der Spiegel", slug: "derspiegel", Icon: DerSpiegelBrandIcon },
  { name: "Deutsche Bahn", slug: "deutschebahn", Icon: DeutscheBahnBrandIcon },
  { name: "Deutsche Bank", slug: "deutschebank", Icon: DeutscheBankBrandIcon },
  { name: "Deutsche Post", slug: "deutschepost", Icon: DeutschePostBrandIcon },
  { name: "Deutsche Telekom", slug: "deutschetelekom", Icon: DeutscheTelekomBrandIcon },
  { name: "Deutsche Welle", slug: "deutschewelle", Icon: DeutscheWelleBrandIcon },
  { name: "dev.to", slug: "devdotto", Icon: DevToBrandIcon },
  { name: "Devbox", slug: "devbox", Icon: DevboxBrandIcon },
  { name: "Development Containers", slug: "developmentcontainers", Icon: DevelopmentContainersBrandIcon },
  { name: "DevExpress", slug: "devexpress", Icon: DevExpressBrandIcon },
  { name: "DeviantArt", slug: "deviantart", Icon: DeviantArtBrandIcon },
  { name: "Devpost", slug: "devpost", Icon: DevpostBrandIcon },
  { name: "devRant", slug: "devrant", Icon: DevRantBrandIcon },
  { name: "Devuan", slug: "devuan", Icon: DevuanBrandIcon },
  { name: "Dgraph", slug: "dgraph", Icon: DgraphBrandIcon },
  { name: "DHL", slug: "dhl", Icon: DHLBrandIcon },
  { name: "diagrams.net", slug: "diagramsdotnet", Icon: DiagramsNetBrandIcon },
  { name: "Dialogflow", slug: "dialogflow", Icon: DialogflowBrandIcon },
  { name: "Diaspora", slug: "diaspora", Icon: DiasporaBrandIcon },
  { name: "DiceBear", slug: "dicebear", Icon: DiceBearBrandIcon },
  { name: "Dictionary.com", slug: "dictionarydotcom", Icon: DictionaryComBrandIcon },
  { name: "Dify", slug: "dify", Icon: DifyBrandIcon },
  { name: "Digg", slug: "digg", Icon: DiggBrandIcon },
  { name: "Digi-Key Electronics", slug: "digikeyelectronics", Icon: DigiKeyElectronicsBrandIcon },
  { name: "DigitalOcean", slug: "digitalocean", Icon: DigitalOceanBrandIcon },
  { name: "Diners Club", slug: "dinersclub", Icon: DinersClubBrandIcon },
  { name: "Dior", slug: "dior", Icon: DiorBrandIcon },
  { name: "Directus", slug: "directus", Icon: DirectusBrandIcon },
  { name: "Discogs", slug: "discogs", Icon: DiscogsBrandIcon },
  { name: "Discord", slug: "discord", Icon: DiscordBrandIcon },
  { name: "discord.js", slug: "discorddotjs", Icon: DiscordJsBrandIcon },
  { name: "Discourse", slug: "discourse", Icon: DiscourseBrandIcon },
  { name: "Discover", slug: "discover", Icon: DiscoverBrandIcon },
  { name: "Disqus", slug: "disqus", Icon: DisqusBrandIcon },
  { name: "Disroot", slug: "disroot", Icon: DisrootBrandIcon },
  { name: "Distrobox", slug: "distrobox", Icon: DistroboxBrandIcon },
  { name: "Distrokid", slug: "distrokid", Icon: DistrokidBrandIcon },
  { name: "Django", slug: "django", Icon: DjangoBrandIcon },
  { name: "DJI", slug: "dji", Icon: DJIBrandIcon },
  { name: "Dlib", slug: "dlib", Icon: DlibBrandIcon },
  { name: "DLNA", slug: "dlna", Icon: DLNABrandIcon },
  { name: "dlthub", slug: "dlthub", Icon: DlthubBrandIcon },
  { name: "dm", slug: "dm", Icon: DmBrandIcon },
  { name: "DMM", slug: "dmm", Icon: DMMBrandIcon },
  { name: "Docker", slug: "docker", Icon: DockerBrandIcon },
  { name: "Docs.rs", slug: "docsdotrs", Icon: DocsRsBrandIcon },
  { name: "Docsify", slug: "docsify", Icon: DocsifyBrandIcon },
  { name: "Doctrine", slug: "doctrine", Icon: DoctrineBrandIcon },
  { name: "Docusaurus", slug: "docusaurus", Icon: DocusaurusBrandIcon },
  { name: "Dodo Payments", slug: "dodopayments", Icon: DodoPaymentsBrandIcon },
  { name: "Dogecoin", slug: "dogecoin", Icon: DogecoinBrandIcon },
  { name: "DOI", slug: "doi", Icon: DOIBrandIcon },
  { name: "Dolby", slug: "dolby", Icon: DolbyBrandIcon },
  { name: "Dolibarr", slug: "dolibarr", Icon: DolibarrBrandIcon },
  { name: "Dolphin", slug: "dolphin", Icon: DolphinBrandIcon },
  { name: "DoorDash", slug: "doordash", Icon: DoorDashBrandIcon },
  { name: "Dota 2", slug: "dota2", Icon: Dota2BrandIcon },
  { name: "Douban", slug: "douban", Icon: DoubanBrandIcon },
  { name: "Douban Read", slug: "doubanread", Icon: DoubanReadBrandIcon },
  { name: "Dovecot", slug: "dovecot", Icon: DovecotBrandIcon },
  { name: "Dovetail", slug: "dovetail", Icon: DovetailBrandIcon },
  { name: "Downdetector", slug: "downdetector", Icon: DowndetectorBrandIcon },
  { name: "Doxygen", slug: "doxygen", Icon: DoxygenBrandIcon },
  { name: "DPD", slug: "dpd", Icon: DPDBrandIcon },
  { name: "Dragonframe", slug: "dragonframe", Icon: DragonframeBrandIcon },
  { name: "Draugiem.lv", slug: "draugiemdotlv", Icon: DraugiemLvBrandIcon },
  { name: "Dreamstime", slug: "dreamstime", Icon: DreamstimeBrandIcon },
  { name: "Dribbble", slug: "dribbble", Icon: DribbbleBrandIcon },
  { name: "Drizzle", slug: "drizzle", Icon: DrizzleBrandIcon },
  { name: "Drone", slug: "drone", Icon: DroneBrandIcon },
  { name: "Drooble", slug: "drooble", Icon: DroobleBrandIcon },
  { name: "Dropbox", slug: "dropbox", Icon: DropboxBrandIcon },
  { name: "Drupal", slug: "drupal", Icon: DrupalBrandIcon },
  { name: "DS Automobiles", slug: "dsautomobiles", Icon: DSAutomobilesBrandIcon },
  { name: "DTS", slug: "dts", Icon: DTSBrandIcon },
  { name: "DTube", slug: "dtube", Icon: DTubeBrandIcon },
  { name: "Ducati", slug: "ducati", Icon: DucatiBrandIcon },
  { name: "DuckDB", slug: "duckdb", Icon: DuckDBBrandIcon },
  { name: "DuckDuckGo", slug: "duckduckgo", Icon: DuckDuckGoBrandIcon },
  { name: "Dungeons & Dragons", slug: "dungeonsanddragons", Icon: DungeonsDragonsBrandIcon },
  { name: "Dunked", slug: "dunked", Icon: DunkedBrandIcon },
  { name: "Dunzo", slug: "dunzo", Icon: DunzoBrandIcon },
  { name: "Duolingo", slug: "duolingo", Icon: DuolingoBrandIcon },
  { name: "Duplicati", slug: "duplicati", Icon: DuplicatiBrandIcon },
  { name: "DVC", slug: "dvc", Icon: DVCBrandIcon },
  { name: "dwm", slug: "dwm", Icon: DwmBrandIcon },
  { name: "Dynatrace", slug: "dynatrace", Icon: DynatraceBrandIcon },
  { name: "E.Leclerc", slug: "edotleclerc", Icon: ELeclercBrandIcon },
  { name: "E3", slug: "e3", Icon: E3BrandIcon },
  { name: "EA", slug: "ea", Icon: EABrandIcon },
  { name: "EAC", slug: "eac", Icon: EACBrandIcon },
  { name: "Eagle", slug: "eagle", Icon: EagleBrandIcon },
  { name: "EasyEDA", slug: "easyeda", Icon: EasyEDABrandIcon },
  { name: "easyJet", slug: "easyjet", Icon: EasyJetBrandIcon },
  { name: "eBay", slug: "ebay", Icon: EBayBrandIcon },
  { name: "EBOX", slug: "ebox", Icon: EBOXBrandIcon },
  { name: "Eclipse Adoptium", slug: "eclipseadoptium", Icon: EclipseAdoptiumBrandIcon },
  { name: "Eclipse Che", slug: "eclipseche", Icon: EclipseCheBrandIcon },
  { name: "Eclipse IDE", slug: "eclipseide", Icon: EclipseIDEBrandIcon },
  { name: "Eclipse Jetty", slug: "eclipsejetty", Icon: EclipseJettyBrandIcon },
  { name: "Eclipse Mosquitto", slug: "eclipsemosquitto", Icon: EclipseMosquittoBrandIcon },
  { name: "Eclipse Vert.x", slug: "eclipsevertdotx", Icon: EclipseVertXBrandIcon },
  { name: "Ecosia", slug: "ecosia", Icon: EcosiaBrandIcon },
  { name: "Ecovacs", slug: "ecovacs", Icon: EcovacsBrandIcon },
  { name: "EDEKA", slug: "edeka", Icon: EdekaBrandIcon },
  { name: "Edge Impulse", slug: "edgeimpulse", Icon: EdgeImpulseBrandIcon },
  { name: "EditorConfig", slug: "editorconfig", Icon: EditorConfigBrandIcon },
  { name: "Educative", slug: "educative", Icon: EducativeBrandIcon },
  { name: "edX", slug: "edx", Icon: EdXBrandIcon },
  { name: "Effect", slug: "effect", Icon: EffectBrandIcon },
  { name: "egghead", slug: "egghead", Icon: EggheadBrandIcon },
  { name: "Egnyte", slug: "egnyte", Icon: EgnyteBrandIcon },
  { name: "Eight", slug: "eight", Icon: EightBrandIcon },
  { name: "Eight Sleep", slug: "eightsleep", Icon: EightSleepBrandIcon },
  { name: "EJS", slug: "ejs", Icon: EJSBrandIcon },
  { name: "Elastic", slug: "elastic", Icon: ElasticBrandIcon },
  { name: "Elastic Cloud", slug: "elasticcloud", Icon: ElasticCloudBrandIcon },
  { name: "Elastic Stack", slug: "elasticstack", Icon: ElasticStackBrandIcon },
  { name: "Elasticsearch", slug: "elasticsearch", Icon: ElasticsearchBrandIcon },
  { name: "Elavon", slug: "elavon", Icon: ElavonBrandIcon },
  { name: "Electron", slug: "electron", Icon: ElectronBrandIcon },
  { name: "Electron Fiddle", slug: "electronfiddle", Icon: ElectronFiddleBrandIcon },
  { name: "electron-builder", slug: "electronbuilder", Icon: ElectronBuilderBrandIcon },
  { name: "Elegoo", slug: "elegoo", Icon: ElegooBrandIcon },
  { name: "Element", slug: "element", Icon: ElementBrandIcon },
  { name: "elementary", slug: "elementary", Icon: ElementaryBrandIcon },
  { name: "Elementor", slug: "elementor", Icon: ElementorBrandIcon },
  { name: "ElevenLabs", slug: "elevenlabs", Icon: ElevenLabsBrandIcon },
  { name: "Eleventy", slug: "eleventy", Icon: EleventyBrandIcon },
  { name: "Elgato", slug: "elgato", Icon: ElgatoBrandIcon },
  { name: "Elixir", slug: "elixir", Icon: ElixirBrandIcon },
  { name: "Elk", slug: "elk", Icon: ElkBrandIcon },
  { name: "Elm", slug: "elm", Icon: ElmBrandIcon },
  { name: "Elsevier", slug: "elsevier", Icon: ElsevierBrandIcon },
  { name: "Embarcadero", slug: "embarcadero", Icon: EmbarcaderoBrandIcon },
  { name: "Embark", slug: "embark", Icon: EmbarkBrandIcon },
  { name: "Ember.js", slug: "emberdotjs", Icon: EmberJsBrandIcon },
  { name: "Emby", slug: "emby", Icon: EmbyBrandIcon },
  { name: "Emirates", slug: "emirates", Icon: EmiratesBrandIcon },
  { name: "Emlakjet", slug: "emlakjet", Icon: EmlakjetBrandIcon },
  { name: "EndeavourOS", slug: "endeavouros", Icon: EndeavourOSBrandIcon },
  { name: "Enpass", slug: "enpass", Icon: EnpassBrandIcon },
  { name: "ENS", slug: "ens", Icon: ENSBrandIcon },
  { name: "Ente", slug: "ente", Icon: EnteBrandIcon },
  { name: "EnterpriseDB", slug: "enterprisedb", Icon: EnterpriseDBBrandIcon },
  { name: "Envato", slug: "envato", Icon: EnvatoBrandIcon },
  { name: "Envoy Proxy", slug: "envoyproxy", Icon: EnvoyProxyBrandIcon },
  { name: "EPEL", slug: "epel", Icon: EPELBrandIcon },
  { name: "Epic Games", slug: "epicgames", Icon: EpicGamesBrandIcon },
  { name: "Epson", slug: "epson", Icon: EpsonBrandIcon },
  { name: "Equinix Metal", slug: "equinixmetal", Icon: EquinixMetalBrandIcon },
  { name: "Eraser", slug: "eraser", Icon: EraserBrandIcon },
  { name: "Ericsson", slug: "ericsson", Icon: EricssonBrandIcon },
  { name: "Erlang", slug: "erlang", Icon: ErlangBrandIcon },
  { name: "ERPNext", slug: "erpnext", Icon: ERPNextBrandIcon },
  { name: "esbuild", slug: "esbuild", Icon: EsbuildBrandIcon },
  { name: "ESEA", slug: "esea", Icon: ESEABrandIcon },
  { name: "ESLGaming", slug: "eslgaming", Icon: ESLGamingBrandIcon },
  { name: "ESLint", slug: "eslint", Icon: ESLintBrandIcon },
  { name: "Esoteric Software", slug: "esotericsoftware", Icon: EsotericSoftwareBrandIcon },
  { name: "ESPHome", slug: "esphome", Icon: ESPHomeBrandIcon },
  { name: "Espressif", slug: "espressif", Icon: EspressifBrandIcon },
  { name: "ESRI", slug: "esri", Icon: ESRIBrandIcon },
  { name: "etcd", slug: "etcd", Icon: EtcdBrandIcon },
  { name: "Ethereum", slug: "ethereum", Icon: EthereumBrandIcon },
  { name: "Ethers", slug: "ethers", Icon: EthersBrandIcon },
  { name: "Ethiopian Airlines", slug: "ethiopianairlines", Icon: EthiopianAirlinesBrandIcon },
  { name: "Etihad Airways", slug: "etihadairways", Icon: EtihadAirwaysBrandIcon },
  { name: "Etsy", slug: "etsy", Icon: EtsyBrandIcon },
  { name: "European Union", slug: "europeanunion", Icon: EuropeanUnionBrandIcon },
  { name: "Event Store", slug: "eventstore", Icon: EventStoreBrandIcon },
  { name: "Evernote", slug: "evernote", Icon: EvernoteBrandIcon },
  { name: "Every.org", slug: "everydotorg", Icon: EveryOrgBrandIcon },
  { name: "Excalidraw", slug: "excalidraw", Icon: ExcalidrawBrandIcon },
  { name: "Exercism", slug: "exercism", Icon: ExercismBrandIcon },
  { name: "Exordo", slug: "exordo", Icon: ExordoBrandIcon },
  { name: "Exoscale", slug: "exoscale", Icon: ExoscaleBrandIcon },
  { name: "Expedia", slug: "expedia", Icon: ExpediaBrandIcon },
  { name: "Expensify", slug: "expensify", Icon: ExpensifyBrandIcon },
  { name: "Experts Exchange", slug: "expertsexchange", Icon: ExpertsExchangeBrandIcon },
  { name: "Expo", slug: "expo", Icon: ExpoBrandIcon },
  { name: "Express", slug: "express", Icon: ExpressBrandIcon },
  { name: "Express.com", slug: "expressdotcom", Icon: ExpressComBrandIcon },
  { name: "ExpressVPN", slug: "expressvpn", Icon: ExpressVPNBrandIcon },
  { name: "EyeEm", slug: "eyeem", Icon: EyeEmBrandIcon },
  { name: "F-Droid", slug: "fdroid", Icon: FDroidBrandIcon },
  { name: "F#", slug: "fsharp", Icon: FBrandIcon },
  { name: "F1", slug: "f1", Icon: F1BrandIcon },
  { name: "F5", slug: "f5", Icon: F5BrandIcon },
  { name: "Facebook", slug: "facebook", Icon: FacebookBrandIcon },
  { name: "Facebook Gaming", slug: "facebookgaming", Icon: FacebookGamingBrandIcon },
  { name: "Facebook Live", slug: "facebooklive", Icon: FacebookLiveBrandIcon },
  { name: "FACEIT", slug: "faceit", Icon: FaceitBrandIcon },
  { name: "Facepunch", slug: "facepunch", Icon: FacepunchBrandIcon },
  { name: "Fairphone", slug: "fairphone", Icon: FairphoneBrandIcon },
  { name: "Faker", slug: "faker", Icon: FakerBrandIcon },
  { name: "Falco", slug: "falco", Icon: FalcoBrandIcon },
  { name: "Falcon", slug: "falcon", Icon: FalconBrandIcon },
  { name: "FamPay", slug: "fampay", Icon: FamPayBrandIcon },
  { name: "Fandango", slug: "fandango", Icon: FandangoBrandIcon },
  { name: "Fandom", slug: "fandom", Icon: FandomBrandIcon },
  { name: "Fanfou", slug: "fanfou", Icon: FanfouBrandIcon },
  { name: "Fantom", slug: "fantom", Icon: FantomBrandIcon },
  { name: "Farcaster", slug: "farcaster", Icon: FarcasterBrandIcon },
  { name: "FareHarbor", slug: "fareharbor", Icon: FareHarborBrandIcon },
  { name: "FARFETCH", slug: "farfetch", Icon: FarfetchBrandIcon },
  { name: "FastAPI", slug: "fastapi", Icon: FastAPIBrandIcon },
  { name: "Fastify", slug: "fastify", Icon: FastifyBrandIcon },
  { name: "Fastlane", slug: "fastlane", Icon: FastlaneBrandIcon },
  { name: "Fastly", slug: "fastly", Icon: FastlyBrandIcon },
  { name: "Fathom", slug: "fathom", Icon: FathomBrandIcon },
  { name: "Fauna", slug: "fauna", Icon: FaunaBrandIcon },
  { name: "Favro", slug: "favro", Icon: FavroBrandIcon },
  { name: "Fawry", slug: "fawry", Icon: FawryBrandIcon },
  { name: "FCC", slug: "fcc", Icon: FCCBrandIcon },
  { name: "FedEx", slug: "fedex", Icon: FedExBrandIcon },
  { name: "Fedora", slug: "fedora", Icon: FedoraBrandIcon },
  { name: "Feedly", slug: "feedly", Icon: FeedlyBrandIcon },
  { name: "Ferrari", slug: "ferrari", Icon: FerrariBrandIcon },
  { name: "Ferrari N.V.", slug: "ferrarinv", Icon: FerrariNVBrandIcon },
  { name: "FerretDB", slug: "ferretdb", Icon: FerretDBBrandIcon },
  { name: "FFmpeg", slug: "ffmpeg", Icon: FFmpegBrandIcon },
  { name: "Fi", slug: "fi", Icon: FiBrandIcon },
  { name: "Fiat", slug: "fiat", Icon: FiatBrandIcon },
  { name: "Fido Alliance", slug: "fidoalliance", Icon: FidoAllianceBrandIcon },
  { name: "FIFA", slug: "fifa", Icon: FIFABrandIcon },
  { name: "Fig", slug: "fig", Icon: FigBrandIcon },
  { name: "Figma", slug: "figma", Icon: FigmaBrandIcon },
  { name: "figshare", slug: "figshare", Icon: FigshareBrandIcon },
  { name: "Fila", slug: "fila", Icon: FilaBrandIcon },
  { name: "Filament", slug: "filament", Icon: FilamentBrandIcon },
  { name: "File.io", slug: "filedotio", Icon: FileIoBrandIcon },
  { name: "Filen", slug: "filen", Icon: FilenBrandIcon },
  { name: "Files", slug: "files", Icon: FilesBrandIcon },
  { name: "FileZilla", slug: "filezilla", Icon: FileZillaBrandIcon },
  { name: "Fillout", slug: "fillout", Icon: FilloutBrandIcon },
  { name: "Fineco", slug: "fineco", Icon: FinecoBrandIcon },
  { name: "Fing", slug: "fing", Icon: FingBrandIcon },
  { name: "Firebase", slug: "firebase", Icon: FirebaseBrandIcon },
  { name: "Firefish", slug: "firefish", Icon: FirefishBrandIcon },
  { name: "Firefly III", slug: "fireflyiii", Icon: FireflyIIIBrandIcon },
  { name: "Firefox", slug: "firefox", Icon: FirefoxBrandIcon },
  { name: "Firefox Browser", slug: "firefoxbrowser", Icon: FirefoxBrowserBrandIcon },
  { name: "Fireship", slug: "fireship", Icon: FireshipBrandIcon },
  { name: "Firewalla", slug: "firewalla", Icon: FirewallaBrandIcon },
  { name: "FIRST", slug: "first", Icon: FirstBrandIcon },
  { name: "Fish Audio", slug: "fishaudio", Icon: FishAudioBrandIcon },
  { name: "fish shell", slug: "fishshell", Icon: FishShellBrandIcon },
  { name: "Fitbit", slug: "fitbit", Icon: FitbitBrandIcon },
  { name: "FiveM", slug: "fivem", Icon: FiveMBrandIcon },
  { name: "Fiverr", slug: "fiverr", Icon: FiverrBrandIcon },
  { name: "Fizz", slug: "fizz", Icon: FizzBrandIcon },
  { name: "Flashforge", slug: "flashforge", Icon: FlashforgeBrandIcon },
  { name: "Flask", slug: "flask", Icon: FlaskBrandIcon },
  { name: "Flat", slug: "flat", Icon: FlatBrandIcon },
  { name: "Flathub", slug: "flathub", Icon: FlathubBrandIcon },
  { name: "Flatpak", slug: "flatpak", Icon: FlatpakBrandIcon },
  { name: "Flickr", slug: "flickr", Icon: FlickrBrandIcon },
  { name: "Flightaware", slug: "flightaware", Icon: FlightawareBrandIcon },
  { name: "Flipboard", slug: "flipboard", Icon: FlipboardBrandIcon },
  { name: "Floatplane", slug: "floatplane", Icon: FloatplaneBrandIcon },
  { name: "Flood", slug: "flood", Icon: FloodBrandIcon },
  { name: "Floorp", slug: "floorp", Icon: FloorpBrandIcon },
  { name: "Flower", slug: "flower", Icon: FlowerBrandIcon },
  { name: "Fluent Bit", slug: "fluentbit", Icon: FluentBitBrandIcon },
  { name: "Fluentd", slug: "fluentd", Icon: FluentdBrandIcon },
  { name: "Fluke", slug: "fluke", Icon: FlukeBrandIcon },
  { name: "Flutter", slug: "flutter", Icon: FlutterBrandIcon },
  { name: "Flux", slug: "flux", Icon: FluxBrandIcon },
  { name: "Fluxer", slug: "fluxer", Icon: FluxerBrandIcon },
  { name: "Fly.io", slug: "flydotio", Icon: FlyIoBrandIcon },
  { name: "Flyway", slug: "flyway", Icon: FlywayBrandIcon },
  { name: "FMOD", slug: "fmod", Icon: FMODBrandIcon },
  { name: "Fnac", slug: "fnac", Icon: FnacBrandIcon },
  { name: "Folium", slug: "folium", Icon: FoliumBrandIcon },
  { name: "Folo", slug: "folo", Icon: FoloBrandIcon },
  { name: "Fonoma", slug: "fonoma", Icon: FonomaBrandIcon },
  { name: "Font Awesome", slug: "fontawesome", Icon: FontAwesomeBrandIcon },
  { name: "FontBase", slug: "fontbase", Icon: FontBaseBrandIcon },
  { name: "FontForge", slug: "fontforge", Icon: FontForgeBrandIcon },
  { name: "foobar2000", slug: "foobar2000", Icon: Foobar2000BrandIcon },
  { name: "foodpanda", slug: "foodpanda", Icon: FoodpandaBrandIcon },
  { name: "Ford", slug: "ford", Icon: FordBrandIcon },
  { name: "Forgejo", slug: "forgejo", Icon: ForgejoBrandIcon },
  { name: "Formbricks", slug: "formbricks", Icon: FormbricksBrandIcon },
  { name: "Formik", slug: "formik", Icon: FormikBrandIcon },
  { name: "Formspree", slug: "formspree", Icon: FormspreeBrandIcon },
  { name: "Formstack", slug: "formstack", Icon: FormstackBrandIcon },
  { name: "Fortinet", slug: "fortinet", Icon: FortinetBrandIcon },
  { name: "Fortnite", slug: "fortnite", Icon: FortniteBrandIcon },
  { name: "Fortran", slug: "fortran", Icon: FortranBrandIcon },
  { name: "Fossa", slug: "fossa", Icon: FossaBrandIcon },
  { name: "Fossil SCM", slug: "fossilscm", Icon: FossilSCMBrandIcon },
  { name: "Foundry Virtual Tabletop", slug: "foundryvirtualtabletop", Icon: FoundryVirtualTabletopBrandIcon },
  { name: "Foursquare", slug: "foursquare", Icon: FoursquareBrandIcon },
  { name: "FOX", slug: "fox", Icon: FOXBrandIcon },
  { name: "Foxtel", slug: "foxtel", Icon: FoxtelBrandIcon },
  { name: "Fozzy", slug: "fozzy", Icon: FozzyBrandIcon },
  { name: "Framer", slug: "framer", Icon: FramerBrandIcon },
  { name: "Framework", slug: "framework", Icon: FrameworkBrandIcon },
  { name: "Framework7", slug: "framework7", Icon: Framework7BrandIcon },
  { name: "Franprix", slug: "franprix", Icon: FranprixBrandIcon },
  { name: "Frappe", slug: "frappe", Icon: FrappeBrandIcon },
  { name: "Fraunhofer-Gesellschaft", slug: "fraunhofergesellschaft", Icon: FraunhoferGesellschaftBrandIcon },
  { name: "FreeBSD", slug: "freebsd", Icon: FreeBSDBrandIcon },
  { name: "FreeCAD", slug: "freecad", Icon: FreeCADBrandIcon },
  { name: "freeCodeCamp", slug: "freecodecamp", Icon: FreeCodeCampBrandIcon },
  { name: "freedesktop.org", slug: "freedesktopdotorg", Icon: FreedesktopOrgBrandIcon },
  { name: "Freelancer", slug: "freelancer", Icon: FreelancerBrandIcon },
  { name: "freelancermap", slug: "freelancermap", Icon: FreelancermapBrandIcon },
  { name: "FreeNAS", slug: "freenas", Icon: FreeNASBrandIcon },
  { name: "freenet", slug: "freenet", Icon: FreenetBrandIcon },
  { name: "Freepik", slug: "freepik", Icon: FreepikBrandIcon },
  { name: "FreeTube", slug: "freetube", Icon: FreeTubeBrandIcon },
  { name: "Fresh", slug: "fresh", Icon: FreshBrandIcon },
  { name: "FreshRSS", slug: "freshrss", Icon: FreshRSSBrandIcon },
  { name: "Frigate", slug: "frigate", Icon: FrigateBrandIcon },
  { name: "FRITZ!", slug: "fritz", Icon: FritzBrandIcon },
  { name: "Frontend Mentor", slug: "frontendmentor", Icon: FrontendMentorBrandIcon },
  { name: "Frontify", slug: "frontify", Icon: FrontifyBrandIcon },
  { name: "Fubo", slug: "fubo", Icon: FuboBrandIcon },
  { name: "Fueler", slug: "fueler", Icon: FuelerBrandIcon },
  { name: "Fuga Cloud", slug: "fugacloud", Icon: FugaCloudBrandIcon },
  { name: "Fujifilm", slug: "fujifilm", Icon: FujifilmBrandIcon },
  { name: "Fujitsu", slug: "fujitsu", Icon: FujitsuBrandIcon },
  { name: "Fur Affinity", slug: "furaffinity", Icon: FurAffinityBrandIcon },
  { name: "Furry Network", slug: "furrynetwork", Icon: FurryNetworkBrandIcon },
  { name: "FusionAuth", slug: "fusionauth", Icon: FusionAuthBrandIcon },
  { name: "FutureLearn", slug: "futurelearn", Icon: FutureLearnBrandIcon },
  { name: "Fyle", slug: "fyle", Icon: FyleBrandIcon },
  { name: "G2", slug: "g2", Icon: G2BrandIcon },
  { name: "G2A", slug: "g2a", Icon: G2ABrandIcon },
  { name: "G2G", slug: "g2g", Icon: G2GBrandIcon },
  { name: "Galaxus", slug: "galaxus", Icon: GalaxusBrandIcon },
  { name: "Game Developer", slug: "gamedeveloper", Icon: GameDeveloperBrandIcon },
  { name: "Game Jolt", slug: "gamejolt", Icon: GameJoltBrandIcon },
  { name: "Game Science", slug: "gamescience", Icon: GameScienceBrandIcon },
  { name: "GameBanana", slug: "gamebanana", Icon: GameBananaBrandIcon },
  { name: "Gameloft", slug: "gameloft", Icon: GameloftBrandIcon },
  { name: "Gamemaker", slug: "gamemaker", Icon: GamemakerBrandIcon },
  { name: "Gandi", slug: "gandi", Icon: GandiBrandIcon },
  { name: "Garmin", slug: "garmin", Icon: GarminBrandIcon },
  { name: "Garuda Linux", slug: "garudalinux", Icon: GarudaLinuxBrandIcon },
  { name: "Gatling", slug: "gatling", Icon: GatlingBrandIcon },
  { name: "Gatsby", slug: "gatsby", Icon: GatsbyBrandIcon },
  { name: "Gcore", slug: "gcore", Icon: GcoreBrandIcon },
  { name: "GDAL", slug: "gdal", Icon: GDALBrandIcon },
  { name: "GeeksforGeeks", slug: "geeksforgeeks", Icon: GeeksforGeeksBrandIcon },
  { name: "General Electric", slug: "generalelectric", Icon: GeneralElectricBrandIcon },
  { name: "General Motors", slug: "generalmotors", Icon: GeneralMotorsBrandIcon },
  { name: "Genius", slug: "genius", Icon: GeniusBrandIcon },
  { name: "Gentoo", slug: "gentoo", Icon: GentooBrandIcon },
  { name: "Geocaching", slug: "geocaching", Icon: GeocachingBrandIcon },
  { name: "Geode", slug: "geode", Icon: GeodeBrandIcon },
  { name: "GeoPandas", slug: "geopandas", Icon: GeoPandasBrandIcon },
  { name: "Gerrit", slug: "gerrit", Icon: GerritBrandIcon },
  { name: "GetX", slug: "getx", Icon: GetXBrandIcon },
  { name: "Ghost", slug: "ghost", Icon: GhostBrandIcon },
  { name: "Ghostery", slug: "ghostery", Icon: GhosteryBrandIcon },
  { name: "Ghostfolio", slug: "ghostfolio", Icon: GhostfolioBrandIcon },
  { name: "Ghostty", slug: "ghostty", Icon: GhosttyBrandIcon },
  { name: "GIMP", slug: "gimp", Icon: GIMPBrandIcon },
  { name: "Gin", slug: "gin", Icon: GinBrandIcon },
  { name: "GIPHY", slug: "giphy", Icon: GiphyBrandIcon },
  { name: "Git", slug: "git", Icon: GitBrandIcon },
  { name: "Git Extensions", slug: "gitextensions", Icon: GitExtensionsBrandIcon },
  { name: "Git for Windows", slug: "gitforwindows", Icon: GitForWindowsBrandIcon },
  { name: "Git LFS", slug: "gitlfs", Icon: GitLFSBrandIcon },
  { name: "GitBook", slug: "gitbook", Icon: GitBookBrandIcon },
  { name: "GitCode", slug: "gitcode", Icon: GitCodeBrandIcon },
  { name: "Gitconnected", slug: "gitconnected", Icon: GitconnectedBrandIcon },
  { name: "Gitea", slug: "gitea", Icon: GiteaBrandIcon },
  { name: "Gitee", slug: "gitee", Icon: GiteeBrandIcon },
  { name: "GitHub", slug: "github", Icon: GitHubBrandIcon },
  { name: "GitHub Actions", slug: "githubactions", Icon: GitHubActionsBrandIcon },
  { name: "GitHub Copilot", slug: "githubcopilot", Icon: GitHubCopilotBrandIcon },
  { name: "GitHub Pages", slug: "githubpages", Icon: GitHubPagesBrandIcon },
  { name: "GitHub Sponsors", slug: "githubsponsors", Icon: GitHubSponsorsBrandIcon },
  { name: "gitignore.io", slug: "gitignoredotio", Icon: GitignoreIoBrandIcon },
  { name: "GitKraken", slug: "gitkraken", Icon: GitKrakenBrandIcon },
  { name: "GitLab", slug: "gitlab", Icon: GitLabBrandIcon },
  { name: "Gitpod", slug: "gitpod", Icon: GitpodBrandIcon },
  { name: "Gitter", slug: "gitter", Icon: GitterBrandIcon },
  { name: "GL.iNet", slug: "gldotinet", Icon: GLINetBrandIcon },
  { name: "Glance", slug: "glance", Icon: GlanceBrandIcon },
  { name: "Glass", slug: "glass", Icon: GlassBrandIcon },
  { name: "Glassdoor", slug: "glassdoor", Icon: GlassdoorBrandIcon },
  { name: "Gleam", slug: "gleam", Icon: GleamBrandIcon },
  { name: "Glide", slug: "glide", Icon: GlideBrandIcon },
  { name: "Glitch", slug: "glitch", Icon: GlitchBrandIcon },
  { name: "Globus", slug: "globus", Icon: GlobusBrandIcon },
  { name: "Glovo", slug: "glovo", Icon: GlovoBrandIcon },
  { name: "glTF", slug: "gltf", Icon: GlTFBrandIcon },
  { name: "Gmail", slug: "gmail", Icon: GmailBrandIcon },
  { name: "GMX", slug: "gmx", Icon: GMXBrandIcon },
  { name: "GNOME", slug: "gnome", Icon: GnomeBrandIcon },
  { name: "GNOME Terminal", slug: "gnometerminal", Icon: GnomeTerminalBrandIcon },
  { name: "GNU", slug: "gnu", Icon: GNUBrandIcon },
  { name: "GNU Bash", slug: "gnubash", Icon: GNUBashBrandIcon },
  { name: "GNU Emacs", slug: "gnuemacs", Icon: GNUEmacsBrandIcon },
  { name: "GNU IceCat", slug: "gnuicecat", Icon: GNUIceCatBrandIcon },
  { name: "GNU Privacy Guard", slug: "gnuprivacyguard", Icon: GNUPrivacyGuardBrandIcon },
  { name: "GNU social", slug: "gnusocial", Icon: GNUSocialBrandIcon },
  { name: "Go", slug: "go", Icon: GoBrandIcon },
  { name: "GoCD", slug: "gocd", Icon: GoCDBrandIcon },
  { name: "GoDaddy", slug: "godaddy", Icon: GoDaddyBrandIcon },
  { name: "Godot Engine", slug: "godotengine", Icon: GodotEngineBrandIcon },
  { name: "Godox", slug: "godox", Icon: GodoxBrandIcon },
  { name: "GoFundMe", slug: "gofundme", Icon: GoFundMeBrandIcon },
  { name: "GOG.com", slug: "gogdotcom", Icon: GOGComBrandIcon },
  { name: "Gojek", slug: "gojek", Icon: GojekBrandIcon },
  { name: "GoLand", slug: "goland", Icon: GoLandBrandIcon },
  { name: "Goldman Sachs", slug: "goldmansachs", Icon: GoldmanSachsBrandIcon },
  { name: "Goodreads", slug: "goodreads", Icon: GoodreadsBrandIcon },
  { name: "Google", slug: "google", Icon: GoogleBrandIcon },
  { name: "Google AdMob", slug: "googleadmob", Icon: GoogleAdMobBrandIcon },
  { name: "Google Ads", slug: "googleads", Icon: GoogleAdsBrandIcon },
  { name: "Google AdSense", slug: "googleadsense", Icon: GoogleAdSenseBrandIcon },
  { name: "Google Analytics", slug: "googleanalytics", Icon: GoogleAnalyticsBrandIcon },
  { name: "Google Apps Script", slug: "googleappsscript", Icon: GoogleAppsScriptBrandIcon },
  { name: "Google Assistant", slug: "googleassistant", Icon: GoogleAssistantBrandIcon },
  { name: "Google Authenticator", slug: "googleauthenticator", Icon: GoogleAuthenticatorBrandIcon },
  { name: "Google BigQuery", slug: "googlebigquery", Icon: GoogleBigQueryBrandIcon },
  { name: "Google Bigtable", slug: "googlebigtable", Icon: GoogleBigtableBrandIcon },
  { name: "Google Calendar", slug: "googlecalendar", Icon: GoogleCalendarBrandIcon },
  { name: "Google Campaign Manager 360", slug: "googlecampaignmanager360", Icon: GoogleCampaignManager360BrandIcon },
  { name: "Google Cardboard", slug: "googlecardboard", Icon: GoogleCardboardBrandIcon },
  { name: "Google Cast", slug: "googlecast", Icon: GoogleCastBrandIcon },
  { name: "Google Chat", slug: "googlechat", Icon: GoogleChatBrandIcon },
  { name: "Google Chrome", slug: "googlechrome", Icon: GoogleChromeBrandIcon },
  { name: "Google Chronicle", slug: "googlechronicle", Icon: GoogleChronicleBrandIcon },
  { name: "Google Classroom", slug: "googleclassroom", Icon: GoogleClassroomBrandIcon },
  { name: "Google Cloud", slug: "googlecloud", Icon: GoogleCloudBrandIcon },
  { name: "Google Cloud Composer", slug: "googlecloudcomposer", Icon: GoogleCloudComposerBrandIcon },
  { name: "Google Cloud Spanner", slug: "googlecloudspanner", Icon: GoogleCloudSpannerBrandIcon },
  { name: "Google Cloud Storage", slug: "googlecloudstorage", Icon: GoogleCloudStorageBrandIcon },
  { name: "Google Colab", slug: "googlecolab", Icon: GoogleColabBrandIcon },
  { name: "Google Container Optimized OS", slug: "googlecontaineroptimizedos", Icon: GoogleContainerOptimizedOSBrandIcon },
  { name: "Google Dataflow", slug: "googledataflow", Icon: GoogleDataflowBrandIcon },
  { name: "Google Dataproc", slug: "googledataproc", Icon: GoogleDataprocBrandIcon },
  { name: "Google Display & Video 360", slug: "googledisplayandvideo360", Icon: GoogleDisplayVideo360BrandIcon },
  { name: "Google Docs", slug: "googledocs", Icon: GoogleDocsBrandIcon },
  { name: "Google Drive", slug: "googledrive", Icon: GoogleDriveBrandIcon },
  { name: "Google Earth", slug: "googleearth", Icon: GoogleEarthBrandIcon },
  { name: "Google Earth Engine", slug: "googleearthengine", Icon: GoogleEarthEngineBrandIcon },
  { name: "Google Fonts", slug: "googlefonts", Icon: GoogleFontsBrandIcon },
  { name: "Google Forms", slug: "googleforms", Icon: GoogleFormsBrandIcon },
  { name: "Google Gemini", slug: "googlegemini", Icon: GoogleGeminiBrandIcon },
  { name: "Google Home", slug: "googlehome", Icon: GoogleHomeBrandIcon },
  { name: "Google Jules", slug: "googlejules", Icon: GoogleJulesBrandIcon },
  { name: "Google Keep", slug: "googlekeep", Icon: GoogleKeepBrandIcon },
  { name: "Google Lens", slug: "googlelens", Icon: GoogleLensBrandIcon },
  { name: "Google Maps", slug: "googlemaps", Icon: GoogleMapsBrandIcon },
  { name: "Google Marketing Platform", slug: "googlemarketingplatform", Icon: GoogleMarketingPlatformBrandIcon },
  { name: "Google Meet", slug: "googlemeet", Icon: GoogleMeetBrandIcon },
  { name: "Google Messages", slug: "googlemessages", Icon: GoogleMessagesBrandIcon },
  { name: "Google Nearby", slug: "googlenearby", Icon: GoogleNearbyBrandIcon },
  { name: "Google News", slug: "googlenews", Icon: GoogleNewsBrandIcon },
  { name: "Google Pay", slug: "googlepay", Icon: GooglePayBrandIcon },
  { name: "Google Photos", slug: "googlephotos", Icon: GooglePhotosBrandIcon },
  { name: "Google Play", slug: "googleplay", Icon: GooglePlayBrandIcon },
  { name: "Google Pub/Sub", slug: "googlepubsub", Icon: GooglePubSubBrandIcon },
  { name: "Google Scholar", slug: "googlescholar", Icon: GoogleScholarBrandIcon },
  { name: "Google Search Console", slug: "googlesearchconsole", Icon: GoogleSearchConsoleBrandIcon },
  { name: "Google Sheets", slug: "googlesheets", Icon: GoogleSheetsBrandIcon },
  { name: "Google Slides", slug: "googleslides", Icon: GoogleSlidesBrandIcon },
  { name: "Google Street View", slug: "googlestreetview", Icon: GoogleStreetViewBrandIcon },
  { name: "Google Summer of Code", slug: "googlesummerofcode", Icon: GoogleSummerOfCodeBrandIcon },
  { name: "Google Tag Manager", slug: "googletagmanager", Icon: GoogleTagManagerBrandIcon },
  { name: "Google Tasks", slug: "googletasks", Icon: GoogleTasksBrandIcon },
  { name: "Google Translate", slug: "googletranslate", Icon: GoogleTranslateBrandIcon },
  { name: "Google TV", slug: "googletv", Icon: GoogleTVBrandIcon },
  { name: "GoToMeeting", slug: "gotomeeting", Icon: GoToMeetingBrandIcon },
  { name: "GPLv3", slug: "gplv3", Icon: GPLv3BrandIcon },
  { name: "Grab", slug: "grab", Icon: GrabBrandIcon },
  { name: "Gradio", slug: "gradio", Icon: GradioBrandIcon },
  { name: "Gradle", slug: "gradle", Icon: GradleBrandIcon },
  { name: "Gradle Play Publisher", slug: "gradleplaypublisher", Icon: GradlePlayPublisherBrandIcon },
  { name: "Grafana", slug: "grafana", Icon: GrafanaBrandIcon },
  { name: "Grammarly", slug: "grammarly", Icon: GrammarlyBrandIcon },
  { name: "Grand Frais", slug: "grandfrais", Icon: GrandFraisBrandIcon },
  { name: "GrapheneOS", slug: "grapheneos", Icon: GrapheneOSBrandIcon },
  { name: "Graphite", slug: "graphite", Icon: GraphiteBrandIcon },
  { name: "Graphite", slug: "graphite_editor", Icon: GraphiteEditorBrandIcon },
  { name: "GraphQL", slug: "graphql", Icon: GraphQLBrandIcon },
  { name: "Grav", slug: "grav", Icon: GravBrandIcon },
  { name: "Gravatar", slug: "gravatar", Icon: GravatarBrandIcon },
  { name: "Graylog", slug: "graylog", Icon: GraylogBrandIcon },
  { name: "Greasy Fork", slug: "greasyfork", Icon: GreasyForkBrandIcon },
  { name: "Great Learning", slug: "greatlearning", Icon: GreatLearningBrandIcon },
  { name: "Greenhouse", slug: "greenhouse", Icon: GreenhouseBrandIcon },
  { name: "GreenSock", slug: "greensock", Icon: GreenSockBrandIcon },
  { name: "GreptimeDB", slug: "greptimedb", Icon: GreptimeDBBrandIcon },
  { name: "Grid.ai", slug: "griddotai", Icon: GridAiBrandIcon },
  { name: "Gridsome", slug: "gridsome", Icon: GridsomeBrandIcon },
  { name: "Grocy", slug: "grocy", Icon: GrocyBrandIcon },
  { name: "GroupMe", slug: "groupme", Icon: GroupMeBrandIcon },
  { name: "Groupon", slug: "groupon", Icon: GrouponBrandIcon },
  { name: "Grunt", slug: "grunt", Icon: GruntBrandIcon },
  { name: "GSAP", slug: "gsap", Icon: GSAPBrandIcon },
  { name: "GSK", slug: "gsk", Icon: GSKBrandIcon },
  { name: "GSMA", slug: "gsma", Icon: GSMABrandIcon },
  { name: "GSMArena.com", slug: "gsmarenadotcom", Icon: GSMArenaComBrandIcon },
  { name: "GStreamer", slug: "gstreamer", Icon: GStreamerBrandIcon },
  { name: "GTK", slug: "gtk", Icon: GTKBrandIcon },
  { name: "Guangzhou Metro", slug: "guangzhoumetro", Icon: GuangzhouMetroBrandIcon },
  { name: "Guilded", slug: "guilded", Icon: GuildedBrandIcon },
  { name: "Guitar Pro", slug: "guitarpro", Icon: GuitarProBrandIcon },
  { name: "gulp", slug: "gulp", Icon: GulpBrandIcon },
  { name: "Gumroad", slug: "gumroad", Icon: GumroadBrandIcon },
  { name: "Gumtree", slug: "gumtree", Icon: GumtreeBrandIcon },
  { name: "Gunicorn", slug: "gunicorn", Icon: GunicornBrandIcon },
  { name: "Gurobi", slug: "gurobi", Icon: GurobiBrandIcon },
  { name: "Gusto", slug: "gusto", Icon: GustoBrandIcon },
  { name: "Gutenberg", slug: "gutenberg", Icon: GutenbergBrandIcon },
  { name: "H&M", slug: "handm", Icon: HMBrandIcon },
  { name: "H2 Database", slug: "h2database", Icon: H2DatabaseBrandIcon },
  { name: "H3", slug: "h3", Icon: H3BrandIcon },
  { name: "Habr", slug: "habr", Icon: HabrBrandIcon },
  { name: "Hack Club", slug: "hackclub", Icon: HackClubBrandIcon },
  { name: "Hack The Box", slug: "hackthebox", Icon: HackTheBoxBrandIcon },
  { name: "Hackaday", slug: "hackaday", Icon: HackadayBrandIcon },
  { name: "Hacker Noon", slug: "hackernoon", Icon: HackerNoonBrandIcon },
  { name: "HackerEarth", slug: "hackerearth", Icon: HackerEarthBrandIcon },
  { name: "HackerOne", slug: "hackerone", Icon: HackerOneBrandIcon },
  { name: "HackerRank", slug: "hackerrank", Icon: HackerRankBrandIcon },
  { name: "HackMD", slug: "hackmd", Icon: HackMDBrandIcon },
  { name: "Hackster", slug: "hackster", Icon: HacksterBrandIcon },
  { name: "HAL", slug: "hal", Icon: HALBrandIcon },
  { name: "Handlebars.js", slug: "handlebarsdotjs", Icon: HandlebarsJsBrandIcon },
  { name: "Handshake", slug: "handshake", Icon: HandshakeBrandIcon },
  { name: "Handshake", slug: "handshake_protocol", Icon: HandshakeProtocolBrandIcon },
  { name: "HappyCow", slug: "happycow", Icon: HappyCowBrandIcon },
  { name: "HAProxy", slug: "haproxy", Icon: HAProxyBrandIcon },
  { name: "Harbor", slug: "harbor", Icon: HarborBrandIcon },
  { name: "HarmonyOS", slug: "harmonyos", Icon: HarmonyOSBrandIcon },
  { name: "Hashcat", slug: "hashcat", Icon: HashcatBrandIcon },
  { name: "HashiCorp", slug: "hashicorp", Icon: HashiCorpBrandIcon },
  { name: "Hashnode", slug: "hashnode", Icon: HashnodeBrandIcon },
  { name: "Haskell", slug: "haskell", Icon: HaskellBrandIcon },
  { name: "Hasura", slug: "hasura", Icon: HasuraBrandIcon },
  { name: "Hatena Bookmark", slug: "hatenabookmark", Icon: HatenaBookmarkBrandIcon },
  { name: "Have I Been Pwned", slug: "haveibeenpwned", Icon: HaveIBeenPwnedBrandIcon },
  { name: "Havells", slug: "havells", Icon: HavellsBrandIcon },
  { name: "Haxe", slug: "haxe", Icon: HaxeBrandIcon },
  { name: "Haystack", slug: "haystack", Icon: HaystackBrandIcon },
  { name: "HBO", slug: "hbo", Icon: HBOBrandIcon },
  { name: "HBO Max", slug: "hbomax", Icon: HBOMaxBrandIcon },
  { name: "HCL", slug: "hcl", Icon: HCLBrandIcon },
  { name: "HDFC Bank", slug: "hdfcbank", Icon: HDFCBankBrandIcon },
  { name: "Headless UI", slug: "headlessui", Icon: HeadlessUIBrandIcon },
  { name: "Headphone Zone", slug: "headphonezone", Icon: HeadphoneZoneBrandIcon },
  { name: "Headspace", slug: "headspace", Icon: HeadspaceBrandIcon },
  { name: "Hearth", slug: "hearth", Icon: HearthBrandIcon },
  { name: "hearthis.at", slug: "hearthisdotat", Icon: HearthisAtBrandIcon },
  { name: "Hedera", slug: "hedera", Icon: HederaBrandIcon },
  { name: "HedgeDoc", slug: "hedgedoc", Icon: HedgeDocBrandIcon },
  { name: "Helium", slug: "helium", Icon: HeliumBrandIcon },
  { name: "Helium Browser", slug: "heliumbrowser", Icon: HeliumBrowserBrandIcon },
  { name: "Helix", slug: "helix", Icon: HelixBrandIcon },
  { name: "HelloFresh", slug: "hellofresh", Icon: HelloFreshBrandIcon },
  { name: "Helly Hansen", slug: "hellyhansen", Icon: HellyHansenBrandIcon },
  { name: "Helm", slug: "helm", Icon: HelmBrandIcon },
  { name: "Help Scout", slug: "helpscout", Icon: HelpScoutBrandIcon },
  { name: "HelpDesk", slug: "helpdesk", Icon: HelpDeskBrandIcon },
  { name: "Hepsiemlak", slug: "hepsiemlak", Icon: HepsiemlakBrandIcon },
  { name: "HERE", slug: "here", Icon: HEREBrandIcon },
  { name: "Hermes", slug: "hermes", Icon: HermesBrandIcon },
  { name: "Heroic Games Launcher", slug: "heroicgameslauncher", Icon: HeroicGamesLauncherBrandIcon },
  { name: "HeroUI", slug: "heroui", Icon: HeroUIBrandIcon },
  { name: "Hetzner", slug: "hetzner", Icon: HetznerBrandIcon },
  { name: "Hevy", slug: "hevy", Icon: HevyBrandIcon },
  { name: "Hexlet", slug: "hexlet", Icon: HexletBrandIcon },
  { name: "Hexo", slug: "hexo", Icon: HexoBrandIcon },
  { name: "HEY", slug: "hey", Icon: HEYBrandIcon },
  { name: "Hi Bob", slug: "hibob", Icon: HiBobBrandIcon },
  { name: "Hibernate", slug: "hibernate", Icon: HibernateBrandIcon },
  { name: "Hilton", slug: "hilton", Icon: HiltonBrandIcon },
  { name: "Hilton Hotels & Resorts", slug: "hiltonhotelsandresorts", Icon: HiltonHotelsResortsBrandIcon },
  { name: "Hitachi", slug: "hitachi", Icon: HitachiBrandIcon },
  { name: "Hive", slug: "hive", Icon: HiveBrandIcon },
  { name: "Hive", slug: "hive_blockchain", Icon: HiveBlockchainBrandIcon },
  { name: "HiveMQ", slug: "hivemq", Icon: HiveMQBrandIcon },
  { name: "Homarr", slug: "homarr", Icon: HomarrBrandIcon },
  { name: "Home Assistant", slug: "homeassistant", Icon: HomeAssistantBrandIcon },
  { name: "Home Assistant Community Store", slug: "homeassistantcommunitystore", Icon: HomeAssistantCommunityStoreBrandIcon },
  { name: "HomeAdvisor", slug: "homeadvisor", Icon: HomeAdvisorBrandIcon },
  { name: "Homebrew", slug: "homebrew", Icon: HomebrewBrandIcon },
  { name: "Homebridge", slug: "homebridge", Icon: HomebridgeBrandIcon },
  { name: "Homepage", slug: "homepage", Icon: HomepageBrandIcon },
  { name: "homify", slug: "homify", Icon: HomifyBrandIcon },
  { name: "Honda", slug: "honda", Icon: HondaBrandIcon },
  { name: "Honey", slug: "honey", Icon: HoneyBrandIcon },
  { name: "Honeybadger", slug: "honeybadger", Icon: HoneybadgerBrandIcon },
  { name: "Honeygain", slug: "honeygain", Icon: HoneygainBrandIcon },
  { name: "Hono", slug: "hono", Icon: HonoBrandIcon },
  { name: "Honor", slug: "honor", Icon: HonorBrandIcon },
  { name: "Hootsuite", slug: "hootsuite", Icon: HootsuiteBrandIcon },
  { name: "Hoppscotch", slug: "hoppscotch", Icon: HoppscotchBrandIcon },
  { name: "Hostinger", slug: "hostinger", Icon: HostingerBrandIcon },
  { name: "Hotels.com", slug: "hotelsdotcom", Icon: HotelsComBrandIcon },
  { name: "Hotjar", slug: "hotjar", Icon: HotjarBrandIcon },
  { name: "Hotwire", slug: "hotwire", Icon: HotwireBrandIcon },
  { name: "Houdini", slug: "houdini", Icon: HoudiniBrandIcon },
  { name: "Houzz", slug: "houzz", Icon: HouzzBrandIcon },
  { name: "HP", slug: "hp", Icon: HPBrandIcon },
  { name: "HSBC", slug: "hsbc", Icon: HSBCBrandIcon },
  { name: "HTC", slug: "htc", Icon: HTCBrandIcon },
  { name: "HTC Vive", slug: "htcvive", Icon: HTCViveBrandIcon },
  { name: "HTML Academy", slug: "htmlacademy", Icon: HTMLAcademyBrandIcon },
  { name: "HTML5", slug: "html5", Icon: Html5BrandIcon },
  { name: "htmx", slug: "htmx", Icon: HtmxBrandIcon },
  { name: "htop", slug: "htop", Icon: HtopBrandIcon },
  { name: "HTTPie", slug: "httpie", Icon: HTTPieBrandIcon },
  { name: "Huawei", slug: "huawei", Icon: HuaweiBrandIcon },
  { name: "HubSpot", slug: "hubspot", Icon: HubSpotBrandIcon },
  { name: "Hugging Face", slug: "huggingface", Icon: HuggingFaceBrandIcon },
  { name: "Hugo", slug: "hugo", Icon: HugoBrandIcon },
  { name: "Humble Bundle", slug: "humblebundle", Icon: HumbleBundleBrandIcon },
  { name: "HumHub", slug: "humhub", Icon: HumHubBrandIcon },
  { name: "Hungry Jack's", slug: "hungryjacks", Icon: HungryJackSBrandIcon },
  { name: "Husqvarna", slug: "husqvarna", Icon: HusqvarnaBrandIcon },
  { name: "Hyper", slug: "hyper", Icon: HyperBrandIcon },
  { name: "Hyperskill", slug: "hyperskill", Icon: HyperskillBrandIcon },
  { name: "HyperX", slug: "hyperx", Icon: HyperXBrandIcon },
  { name: "Hypit", slug: "hypit", Icon: HypitBrandIcon },
  { name: "Hypothesis", slug: "hypothesis", Icon: HypothesisBrandIcon },
  { name: "Hyprland", slug: "hyprland", Icon: HyprlandBrandIcon },
  { name: "Hyundai", slug: "hyundai", Icon: HyundaiBrandIcon },
  { name: "i18next", slug: "i18next", Icon: I18nextBrandIcon },
  { name: "i3", slug: "i3", Icon: I3BrandIcon },
  { name: "IATA", slug: "iata", Icon: IATABrandIcon },
  { name: "iBeacon", slug: "ibeacon", Icon: IBeaconBrandIcon },
  { name: "Iberia", slug: "iberia", Icon: IberiaBrandIcon },
  { name: "Iced", slug: "iced", Icon: IcedBrandIcon },
  { name: "Iceland", slug: "iceland", Icon: IcelandBrandIcon },
  { name: "ICICI Bank", slug: "icicibank", Icon: IciciBankBrandIcon },
  { name: "Icinga", slug: "icinga", Icon: IcingaBrandIcon },
  { name: "iCloud", slug: "icloud", Icon: ICloudBrandIcon },
  { name: "IcoMoon", slug: "icomoon", Icon: IcoMoonBrandIcon },
  { name: "ICON", slug: "icon", Icon: ICONBrandIcon },
  { name: "Iconfinder", slug: "iconfinder", Icon: IconfinderBrandIcon },
  { name: "Iconify", slug: "iconify", Icon: IconifyBrandIcon },
  { name: "IconJar", slug: "iconjar", Icon: IconJarBrandIcon },
  { name: "Icons8", slug: "icons8", Icon: Icons8BrandIcon },
  { name: "ICQ", slug: "icq", Icon: ICQBrandIcon },
  { name: "IEEE", slug: "ieee", Icon: IEEEBrandIcon },
  { name: "iFixit", slug: "ifixit", Icon: IFixitBrandIcon },
  { name: "iFood", slug: "ifood", Icon: IFoodBrandIcon },
  { name: "IFTTT", slug: "ifttt", Icon: IftttBrandIcon },
  { name: "IGDB", slug: "igdb", Icon: IGDBBrandIcon },
  { name: "IGN", slug: "ign", Icon: IGNBrandIcon },
  { name: "iHeartRadio", slug: "iheartradio", Icon: IHeartRadioBrandIcon },
  { name: "IKEA", slug: "ikea", Icon: IKEABrandIcon },
  { name: "Île-de-France Mobilités", slug: "iledefrancemobilites", Icon: LeDeFranceMobilitSBrandIcon },
  { name: "iLovePDF", slug: "ilovepdf", Icon: ILovePDFBrandIcon },
  { name: "Image Toolbox", slug: "imagetoolbox", Icon: ImageToolboxBrandIcon },
  { name: "Image.sc", slug: "imagedotsc", Icon: ImageScBrandIcon },
  { name: "ImageJ", slug: "imagej", Icon: ImageJBrandIcon },
  { name: "IMDb", slug: "imdb", Icon: IMDbBrandIcon },
  { name: "iMessage", slug: "imessage", Icon: IMessageBrandIcon },
  { name: "Imgur", slug: "imgur", Icon: ImgurBrandIcon },
  { name: "Immer", slug: "immer", Icon: ImmerBrandIcon },
  { name: "Immersive Translate", slug: "immersivetranslate", Icon: ImmersiveTranslateBrandIcon },
  { name: "Immich", slug: "immich", Icon: ImmichBrandIcon },
  { name: "Imou", slug: "imou", Icon: ImouBrandIcon },
  { name: "ImprovMX", slug: "improvmx", Icon: ImprovMXBrandIcon },
  { name: "Indeed", slug: "indeed", Icon: IndeedBrandIcon },
  { name: "Indian Super League", slug: "indiansuperleague", Icon: IndianSuperLeagueBrandIcon },
  { name: "Indie Hackers", slug: "indiehackers", Icon: IndieHackersBrandIcon },
  { name: "IndieWeb", slug: "indieweb", Icon: IndieWebBrandIcon },
  { name: "IndiGo", slug: "indigo", Icon: IndiGoBrandIcon },
  { name: "Inductive Automation", slug: "inductiveautomation", Icon: InductiveAutomationBrandIcon },
  { name: "Inertia", slug: "inertia", Icon: InertiaBrandIcon },
  { name: "INFINITI", slug: "infiniti", Icon: InfinitiBrandIcon },
  { name: "InfinityFree", slug: "infinityfree", Icon: InfinityFreeBrandIcon },
  { name: "InfluxDB", slug: "influxdb", Icon: InfluxDBBrandIcon },
  { name: "Infomaniak", slug: "infomaniak", Icon: InfomaniakBrandIcon },
  { name: "InfoQ", slug: "infoq", Icon: InfoQBrandIcon },
  { name: "Infosys", slug: "infosys", Icon: InfosysBrandIcon },
  { name: "Infracost", slug: "infracost", Icon: InfracostBrandIcon },
  { name: "Infuse", slug: "infuse", Icon: InfuseBrandIcon },
  { name: "Ingress", slug: "ingress", Icon: IngressBrandIcon },
  { name: "Inkdrop", slug: "inkdrop", Icon: InkdropBrandIcon },
  { name: "Inkscape", slug: "inkscape", Icon: InkscapeBrandIcon },
  { name: "Inoreader", slug: "inoreader", Icon: InoreaderBrandIcon },
  { name: "Inquirer", slug: "inquirer", Icon: InquirerBrandIcon },
  { name: "Insomnia", slug: "insomnia", Icon: InsomniaBrandIcon },
  { name: "INSPIRE", slug: "inspire", Icon: InspireBrandIcon },
  { name: "Insta360", slug: "insta360", Icon: Insta360BrandIcon },
  { name: "Instacart", slug: "instacart", Icon: InstacartBrandIcon },
  { name: "Instagram", slug: "instagram", Icon: InstagramBrandIcon },
  { name: "Instapaper", slug: "instapaper", Icon: InstapaperBrandIcon },
  { name: "Instatus", slug: "instatus", Icon: InstatusBrandIcon },
  { name: "Instructables", slug: "instructables", Icon: InstructablesBrandIcon },
  { name: "Instructure", slug: "instructure", Icon: InstructureBrandIcon },
  { name: "Intel", slug: "intel", Icon: IntelBrandIcon },
  { name: "IntelliJ IDEA", slug: "intellijidea", Icon: IntelliJIDEABrandIcon },
  { name: "Interaction Design Foundation", slug: "interactiondesignfoundation", Icon: InteractionDesignFoundationBrandIcon },
  { name: "InteractJS", slug: "interactjs", Icon: InteractJSBrandIcon },
  { name: "Interbase", slug: "interbase", Icon: InterbaseBrandIcon },
  { name: "Intercom", slug: "intercom", Icon: IntercomBrandIcon },
  { name: "Intermarche", slug: "intermarche", Icon: IntermarcheBrandIcon },
  { name: "Internet Archive", slug: "internetarchive", Icon: InternetArchiveBrandIcon },
  { name: "Internet Computer", slug: "internetcomputer", Icon: InternetComputerBrandIcon },
  { name: "Intigriti", slug: "intigriti", Icon: IntigritiBrandIcon },
  { name: "Intuit", slug: "intuit", Icon: IntuitBrandIcon },
  { name: "Invidious", slug: "invidious", Icon: InvidiousBrandIcon },
  { name: "Invoice Ninja", slug: "invoiceninja", Icon: InvoiceNinjaBrandIcon },
  { name: "ioBroker", slug: "iobroker", Icon: IoBrokerBrandIcon },
  { name: "Ionic", slug: "ionic", Icon: IonicBrandIcon },
  { name: "Ionos", slug: "ionos", Icon: IonosBrandIcon },
  { name: "iOS", slug: "ios", Icon: IOSBrandIcon },
  { name: "IOTA", slug: "iota", Icon: IOTABrandIcon },
  { name: "IPFS", slug: "ipfs", Icon: IPFSBrandIcon },
  { name: "IRIS", slug: "iris", Icon: IRISBrandIcon },
  { name: "iRobot", slug: "irobot", Icon: IRobotBrandIcon },
  { name: "ISC2", slug: "isc2", Icon: ISC2BrandIcon },
  { name: "ISRO", slug: "isro", Icon: ISROBrandIcon },
  { name: "Issuu", slug: "issuu", Icon: IssuuBrandIcon },
  { name: "Istio", slug: "istio", Icon: IstioBrandIcon },
  { name: "Itch.io", slug: "itchdotio", Icon: ItchIoBrandIcon },
  { name: "iTerm2", slug: "iterm2", Icon: ITerm2BrandIcon },
  { name: "iTunes", slug: "itunes", Icon: ITunesBrandIcon },
  { name: "ITVx", slug: "itvx", Icon: ITVxBrandIcon },
  { name: "IVECO", slug: "iveco", Icon: IvecoBrandIcon },
  { name: "Jabber", slug: "jabber", Icon: JabberBrandIcon },
  { name: "Jaeger", slug: "jaeger", Icon: JaegerBrandIcon },
  { name: "Jameson", slug: "jameson", Icon: JamesonBrandIcon },
  { name: "Jamstack", slug: "jamstack", Icon: JamstackBrandIcon },
  { name: "Japan Airlines", slug: "japanairlines", Icon: JapanAirlinesBrandIcon },
  { name: "Jasmine", slug: "jasmine", Icon: JasmineBrandIcon },
  { name: "JavaScript", slug: "javascript", Icon: JavaScriptBrandIcon },
  { name: "JBL", slug: "jbl", Icon: JBLBrandIcon },
  { name: "JCB", slug: "jcb", Icon: JCBBrandIcon },
  { name: "JDoodle", slug: "jdoodle", Icon: JDoodleBrandIcon },
  { name: "Jeep", slug: "jeep", Icon: JeepBrandIcon },
  { name: "Jekyll", slug: "jekyll", Icon: JekyllBrandIcon },
  { name: "Jellyfin", slug: "jellyfin", Icon: JellyfinBrandIcon },
  { name: "Jenkins", slug: "jenkins", Icon: JenkinsBrandIcon },
  { name: "Jest", slug: "jest", Icon: JestBrandIcon },
  { name: "JET", slug: "jet", Icon: JETBrandIcon },
  { name: "JetBlue", slug: "jetblue", Icon: JetBlueBrandIcon },
  { name: "JetBrains", slug: "jetbrains", Icon: JetBrainsBrandIcon },
  { name: "Jetpack Compose", slug: "jetpackcompose", Icon: JetpackComposeBrandIcon },
  { name: "JFrog", slug: "jfrog", Icon: JFrogBrandIcon },
  { name: "JFrog Pipelines", slug: "jfrogpipelines", Icon: JFrogPipelinesBrandIcon },
  { name: "JHipster", slug: "jhipster", Icon: JHipsterBrandIcon },
  { name: "Jinja", slug: "jinja", Icon: JinjaBrandIcon },
  { name: "Jio", slug: "jio", Icon: JioBrandIcon },
  { name: "Jira", slug: "jira", Icon: JiraBrandIcon },
  { name: "Jira Software", slug: "jirasoftware", Icon: JiraSoftwareBrandIcon },
  { name: "JitPack", slug: "jitpack", Icon: JitPackBrandIcon },
  { name: "Jitsi", slug: "jitsi", Icon: JitsiBrandIcon },
  { name: "John Deere", slug: "johndeere", Icon: JohnDeereBrandIcon },
  { name: "Joomla", slug: "joomla", Icon: JoomlaBrandIcon },
  { name: "Joplin", slug: "joplin", Icon: JoplinBrandIcon },
  { name: "Jordan", slug: "jordan", Icon: JordanBrandIcon },
  { name: "JOUAV", slug: "jouav", Icon: JouavBrandIcon },
  { name: "Jovian", slug: "jovian", Icon: JovianBrandIcon },
  { name: "JPEG", slug: "jpeg", Icon: JPEGBrandIcon },
  { name: "jQuery", slug: "jquery", Icon: JQueryBrandIcon },
  { name: "JR Group", slug: "jrgroup", Icon: JRGroupBrandIcon },
  { name: "jsDelivr", slug: "jsdelivr", Icon: JsDelivrBrandIcon },
  { name: "JSFiddle", slug: "jsfiddle", Icon: JSFiddleBrandIcon },
  { name: "JSON", slug: "json", Icon: JSONBrandIcon },
  { name: "JSON Web Tokens", slug: "jsonwebtokens", Icon: JSONWebTokensBrandIcon },
  { name: "JSR", slug: "jsr", Icon: JSRBrandIcon },
  { name: "JSS", slug: "jss", Icon: JSSBrandIcon },
  { name: "JUCE", slug: "juce", Icon: JUCEBrandIcon },
  { name: "Juejin", slug: "juejin", Icon: JuejinBrandIcon },
  { name: "JUKE", slug: "juke", Icon: JUKEBrandIcon },
  { name: "Julia", slug: "julia", Icon: JuliaBrandIcon },
  { name: "Juniper Networks", slug: "junipernetworks", Icon: JuniperNetworksBrandIcon },
  { name: "JUnit5", slug: "junit5", Icon: JUnit5BrandIcon },
  { name: "Jupyter", slug: "jupyter", Icon: JupyterBrandIcon },
  { name: "Just", slug: "just", Icon: JustBrandIcon },
  { name: "Just Eat", slug: "justeat", Icon: JustEatBrandIcon },
  { name: "JustGiving", slug: "justgiving", Icon: JustGivingBrandIcon },
  { name: "K3s", slug: "k3s", Icon: K3sBrandIcon },
  { name: "k6", slug: "k6", Icon: K6BrandIcon },
  { name: "Kaggle", slug: "kaggle", Icon: KaggleBrandIcon },
  { name: "Kagi", slug: "kagi", Icon: KagiBrandIcon },
  { name: "Kahoot!", slug: "kahoot", Icon: KahootBrandIcon },
  { name: "KaiOS", slug: "kaios", Icon: KaiOSBrandIcon },
  { name: "Kakao", slug: "kakao", Icon: KakaoBrandIcon },
  { name: "KakaoTalk", slug: "kakaotalk", Icon: KakaoTalkBrandIcon },
  { name: "Kali Linux", slug: "kalilinux", Icon: KaliLinuxBrandIcon },
  { name: "Kamailio", slug: "kamailio", Icon: KamailioBrandIcon },
  { name: "Kando", slug: "kando", Icon: KandoBrandIcon },
  { name: "Kaniko", slug: "kaniko", Icon: KanikoBrandIcon },
  { name: "Karakeep", slug: "karakeep", Icon: KarakeepBrandIcon },
  { name: "Karlsruher Verkehrsverbund", slug: "karlsruherverkehrsverbund", Icon: KarlsruherVerkehrsverbundBrandIcon },
  { name: "Kasa Smart", slug: "kasasmart", Icon: KasaSmartBrandIcon },
  { name: "KashFlow", slug: "kashflow", Icon: KashFlowBrandIcon },
  { name: "Kaspersky", slug: "kaspersky", Icon: KasperskyBrandIcon },
  { name: "Katana", slug: "katana", Icon: KatanaBrandIcon },
  { name: "Kaufland", slug: "kaufland", Icon: KauflandBrandIcon },
  { name: "KDE", slug: "kde", Icon: KDEBrandIcon },
  { name: "KDE neon", slug: "kdeneon", Icon: KDENeonBrandIcon },
  { name: "KDE Plasma", slug: "kdeplasma", Icon: KDEPlasmaBrandIcon },
  { name: "Kdenlive", slug: "kdenlive", Icon: KdenliveBrandIcon },
  { name: "Kedro", slug: "kedro", Icon: KedroBrandIcon },
  { name: "Keenetic", slug: "keenetic", Icon: KeeneticBrandIcon },
  { name: "Keep a Changelog", slug: "keepachangelog", Icon: KeepAChangelogBrandIcon },
  { name: "KeePassXC", slug: "keepassxc", Icon: KeePassXCBrandIcon },
  { name: "Keeper", slug: "keeper", Icon: KeeperBrandIcon },
  { name: "KeeWeb", slug: "keeweb", Icon: KeeWebBrandIcon },
  { name: "Kenmei", slug: "kenmei", Icon: KenmeiBrandIcon },
  { name: "Kentico", slug: "kentico", Icon: KenticoBrandIcon },
  { name: "Keploy", slug: "keploy", Icon: KeployBrandIcon },
  { name: "Keras", slug: "keras", Icon: KerasBrandIcon },
  { name: "Keybase", slug: "keybase", Icon: KeybaseBrandIcon },
  { name: "KeyCDN", slug: "keycdn", Icon: KeyCDNBrandIcon },
  { name: "Keycloak", slug: "keycloak", Icon: KeycloakBrandIcon },
  { name: "Keystone", slug: "keystone", Icon: KeystoneBrandIcon },
  { name: "KFC", slug: "kfc", Icon: KFCBrandIcon },
  { name: "Khan Academy", slug: "khanacademy", Icon: KhanAcademyBrandIcon },
  { name: "Khronos Group", slug: "khronosgroup", Icon: KhronosGroupBrandIcon },
  { name: "Kia", slug: "kia", Icon: KiaBrandIcon },
  { name: "Kibana", slug: "kibana", Icon: KibanaBrandIcon },
  { name: "KiCad", slug: "kicad", Icon: KiCadBrandIcon },
  { name: "Kick", slug: "kick", Icon: KickBrandIcon },
  { name: "Kickstarter", slug: "kickstarter", Icon: KickstarterBrandIcon },
  { name: "Kik", slug: "kik", Icon: KikBrandIcon },
  { name: "Kimi", slug: "kimi", Icon: KimiBrandIcon },
  { name: "Kingston Technology", slug: "kingstontechnology", Icon: KingstonTechnologyBrandIcon },
  { name: "Kinopoisk", slug: "kinopoisk", Icon: KinopoiskBrandIcon },
  { name: "Kinsta", slug: "kinsta", Icon: KinstaBrandIcon },
  { name: "Kirby", slug: "kirby", Icon: KirbyBrandIcon },
  { name: "Kit", slug: "kit", Icon: KitBrandIcon },
  { name: "Kitsu", slug: "kitsu", Icon: KitsuBrandIcon },
  { name: "Kiwix", slug: "kiwix", Icon: KiwixBrandIcon },
  { name: "Klarna", slug: "klarna", Icon: KlarnaBrandIcon },
  { name: "Kleinanzeigen", slug: "kleinanzeigen", Icon: KleinanzeigenBrandIcon },
  { name: "KLM", slug: "klm", Icon: KLMBrandIcon },
  { name: "Klook", slug: "klook", Icon: KlookBrandIcon },
  { name: "Knative", slug: "knative", Icon: KnativeBrandIcon },
  { name: "Knex.js", slug: "knexdotjs", Icon: KnexJsBrandIcon },
  { name: "KNIME", slug: "knime", Icon: KnimeBrandIcon },
  { name: "Knip", slug: "knip", Icon: KnipBrandIcon },
  { name: "KnowledgeBase", slug: "knowledgebase", Icon: KnowledgeBaseBrandIcon },
  { name: "Known", slug: "known", Icon: KnownBrandIcon },
  { name: "Ko-fi", slug: "kofi", Icon: KoFiBrandIcon },
  { name: "Koa", slug: "koa", Icon: KoaBrandIcon },
  { name: "Koc", slug: "koc", Icon: KocBrandIcon },
  { name: "Kodak", slug: "kodak", Icon: KodakBrandIcon },
  { name: "Kodi", slug: "kodi", Icon: KodiBrandIcon },
  { name: "Kodular", slug: "kodular", Icon: KodularBrandIcon },
  { name: "Koenigsegg", slug: "koenigsegg", Icon: KoenigseggBrandIcon },
  { name: "Kofax", slug: "kofax", Icon: KofaxBrandIcon },
  { name: "Komoot", slug: "komoot", Icon: KomootBrandIcon },
  { name: "Konami", slug: "konami", Icon: KonamiBrandIcon },
  { name: "Kong", slug: "kong", Icon: KongBrandIcon },
  { name: "Kongregate", slug: "kongregate", Icon: KongregateBrandIcon },
  { name: "Konva", slug: "konva", Icon: KonvaBrandIcon },
  { name: "KOReader", slug: "koreader", Icon: KOReaderBrandIcon },
  { name: "Kotlin", slug: "kotlin", Icon: KotlinBrandIcon },
  { name: "Koyeb", slug: "koyeb", Icon: KoyebBrandIcon },
  { name: "Kred", slug: "kred", Icon: KredBrandIcon },
  { name: "Krita", slug: "krita", Icon: KritaBrandIcon },
  { name: "KTM", slug: "ktm", Icon: KTMBrandIcon },
  { name: "Ktor", slug: "ktor", Icon: KtorBrandIcon },
  { name: "Kuaishou", slug: "kuaishou", Icon: KuaishouBrandIcon },
  { name: "Kubernetes", slug: "kubernetes", Icon: KubernetesBrandIcon },
  { name: "Kubespray", slug: "kubespray", Icon: KubesprayBrandIcon },
  { name: "Kubuntu", slug: "kubuntu", Icon: KubuntuBrandIcon },
  { name: "KuCoin", slug: "kucoin", Icon: KuCoinBrandIcon },
  { name: "Kueski", slug: "kueski", Icon: KueskiBrandIcon },
  { name: "Kuma", slug: "kuma", Icon: KumaBrandIcon },
  { name: "Kununu", slug: "kununu", Icon: KununuBrandIcon },
  { name: "Kuula", slug: "kuula", Icon: KuulaBrandIcon },
  { name: "KX", slug: "kx", Icon: KXBrandIcon },
  { name: "Kyocera", slug: "kyocera", Icon: KyoceraBrandIcon },
  { name: "L'Équipe", slug: "lequipe", Icon: LQuipeBrandIcon },
  { name: "LabEx", slug: "labex", Icon: LabExBrandIcon },
  { name: "LabVIEW", slug: "labview", Icon: LabVIEWBrandIcon },
  { name: "LADA", slug: "lada", Icon: LADABrandIcon },
  { name: "Lamborghini", slug: "lamborghini", Icon: LamborghiniBrandIcon },
  { name: "LangChain", slug: "langchain", Icon: LangChainBrandIcon },
  { name: "LangChain Corporate", slug: "langchaincorporate", Icon: LangChainCorporateBrandIcon },
  { name: "Langflow", slug: "langflow", Icon: LangflowBrandIcon },
  { name: "LangGraph", slug: "langgraph", Icon: LangGraphBrandIcon },
  { name: "LanguageTool", slug: "languagetool", Icon: LanguageToolBrandIcon },
  { name: "Lapce", slug: "lapce", Icon: LapceBrandIcon },
  { name: "Laragon", slug: "laragon", Icon: LaragonBrandIcon },
  { name: "Laravel", slug: "laravel", Icon: LaravelBrandIcon },
  { name: "Laravel Horizon", slug: "laravelhorizon", Icon: LaravelHorizonBrandIcon },
  { name: "Laravel Nova", slug: "laravelnova", Icon: LaravelNovaBrandIcon },
  { name: "Last.fm", slug: "lastdotfm", Icon: LastFmBrandIcon },
  { name: "LastPass", slug: "lastpass", Icon: LastPassBrandIcon },
  { name: "LaTeX", slug: "latex", Icon: LaTeXBrandIcon },
  { name: "Launchpad", slug: "launchpad", Icon: LaunchpadBrandIcon },
  { name: "Lazarus", slug: "lazarus", Icon: LazarusBrandIcon },
  { name: "LazyVim", slug: "lazyvim", Icon: LazyVimBrandIcon },
  { name: "LBRY", slug: "lbry", Icon: LBRYBrandIcon },
  { name: "Leader Price", slug: "leaderprice", Icon: LeaderPriceBrandIcon },
  { name: "Leaflet", slug: "leaflet", Icon: LeafletBrandIcon },
  { name: "League of Legends", slug: "leagueoflegends", Icon: LeagueOfLegendsBrandIcon },
  { name: "Leanpub", slug: "leanpub", Icon: LeanpubBrandIcon },
  { name: "LeetCode", slug: "leetcode", Icon: LeetCodeBrandIcon },
  { name: "Lefthook", slug: "lefthook", Icon: LefthookBrandIcon },
  { name: "Legacy Games", slug: "legacygames", Icon: LegacyGamesBrandIcon },
  { name: "Leica", slug: "leica", Icon: LeicaBrandIcon },
  { name: "Lemmy", slug: "lemmy", Icon: LemmyBrandIcon },
  { name: "Lemon Squeezy", slug: "lemonsqueezy", Icon: LemonSqueezyBrandIcon },
  { name: "Lenovo", slug: "lenovo", Icon: LenovoBrandIcon },
  { name: "Lens", slug: "lens", Icon: LensBrandIcon },
  { name: "Leptos", slug: "leptos", Icon: LeptosBrandIcon },
  { name: "Lerna", slug: "lerna", Icon: LernaBrandIcon },
  { name: "Leroy Merlin", slug: "leroymerlin", Icon: LeroyMerlinBrandIcon },
  { name: "Les libraires", slug: "leslibraires", Icon: LesLibrairesBrandIcon },
  { name: "Less", slug: "less", Icon: LessBrandIcon },
  { name: "Let's Encrypt", slug: "letsencrypt", Icon: LetSEncryptBrandIcon },
  { name: "Letterboxd", slug: "letterboxd", Icon: LetterboxdBrandIcon },
  { name: "levels.fyi", slug: "levelsdotfyi", Icon: LevelsFyiBrandIcon },
  { name: "LG", slug: "lg", Icon: LGBrandIcon },
  { name: "Li-Ning", slug: "lining", Icon: LiNingBrandIcon },
  { name: "Libera.Chat", slug: "liberadotchat", Icon: LiberaChatBrandIcon },
  { name: "Liberapay", slug: "liberapay", Icon: LiberapayBrandIcon },
  { name: "Libraries.io", slug: "librariesdotio", Icon: LibrariesIoBrandIcon },
  { name: "LibraryThing", slug: "librarything", Icon: LibraryThingBrandIcon },
  { name: "LibreOffice", slug: "libreoffice", Icon: LibreOfficeBrandIcon },
  { name: "LibreOffice Base", slug: "libreofficebase", Icon: LibreOfficeBaseBrandIcon },
  { name: "LibreOffice Calc", slug: "libreofficecalc", Icon: LibreOfficeCalcBrandIcon },
  { name: "LibreOffice Draw", slug: "libreofficedraw", Icon: LibreOfficeDrawBrandIcon },
  { name: "LibreOffice Impress", slug: "libreofficeimpress", Icon: LibreOfficeImpressBrandIcon },
  { name: "LibreOffice Math", slug: "libreofficemath", Icon: LibreOfficeMathBrandIcon },
  { name: "LibreOffice Writer", slug: "libreofficewriter", Icon: LibreOfficeWriterBrandIcon },
  { name: "LibreTranslate", slug: "libretranslate", Icon: LibreTranslateBrandIcon },
  { name: "LibreTube", slug: "libretube", Icon: LibreTubeBrandIcon },
  { name: "LibreWolf", slug: "librewolf", Icon: LibreWolfBrandIcon },
  { name: "libuv", slug: "libuv", Icon: LibuvBrandIcon },
  { name: "Lichess", slug: "lichess", Icon: LichessBrandIcon },
  { name: "Lidl", slug: "lidl", Icon: LidlBrandIcon },
  { name: "LIFX", slug: "lifx", Icon: LIFXBrandIcon },
  { name: "LightBurn", slug: "lightburn", Icon: LightBurnBrandIcon },
  { name: "Lighthouse", slug: "lighthouse", Icon: LighthouseBrandIcon },
  { name: "Lightning", slug: "lightning", Icon: LightningBrandIcon },
  { name: "LimeSurvey", slug: "limesurvey", Icon: LimeSurveyBrandIcon },
  { name: "LINE", slug: "line", Icon: LINEBrandIcon },
  { name: "LineageOS", slug: "lineageos", Icon: LineageOSBrandIcon },
  { name: "Linear", slug: "linear", Icon: LinearBrandIcon },
  { name: "LinkedIn", slug: "linkedin", Icon: LinkedInBrandIcon },
  { name: "Linkerd", slug: "linkerd", Icon: LinkerdBrandIcon },
  { name: "Linkfire", slug: "linkfire", Icon: LinkfireBrandIcon },
  { name: "Linksys", slug: "linksys", Icon: LinksysBrandIcon },
  { name: "Linktree", slug: "linktree", Icon: LinktreeBrandIcon },
  { name: "Linkvertise", slug: "linkvertise", Icon: LinkvertiseBrandIcon },
  { name: "Linphone", slug: "linphone", Icon: LinphoneBrandIcon },
  { name: "LintCode", slug: "lintcode", Icon: LintCodeBrandIcon },
  { name: "Linux", slug: "linux", Icon: LinuxBrandIcon },
  { name: "Linux Containers", slug: "linuxcontainers", Icon: LinuxContainersBrandIcon },
  { name: "Linux Foundation", slug: "linuxfoundation", Icon: LinuxFoundationBrandIcon },
  { name: "Linux Mint", slug: "linuxmint", Icon: LinuxMintBrandIcon },
  { name: "Linux Professional Institute", slug: "linuxprofessionalinstitute", Icon: LinuxProfessionalInstituteBrandIcon },
  { name: "LinuxServer", slug: "linuxserver", Icon: LinuxServerBrandIcon },
  { name: "Lion Air", slug: "lionair", Icon: LionAirBrandIcon },
  { name: "Liquibase", slug: "liquibase", Icon: LiquibaseBrandIcon },
  { name: "ListenHub", slug: "listenhub", Icon: ListenHubBrandIcon },
  { name: "listmonk", slug: "listmonk", Icon: ListmonkBrandIcon },
  { name: "Lit", slug: "lit", Icon: LitBrandIcon },
  { name: "Litecoin", slug: "litecoin", Icon: LitecoinBrandIcon },
  { name: "Literal", slug: "literal", Icon: LiteralBrandIcon },
  { name: "LITIENGINE", slug: "litiengine", Icon: LitiengineBrandIcon },
  { name: "LiveChat", slug: "livechat", Icon: LiveChatBrandIcon },
  { name: "LiveJournal", slug: "livejournal", Icon: LiveJournalBrandIcon },
  { name: "LiveKit", slug: "livekit", Icon: LiveKitBrandIcon },
  { name: "Livewire", slug: "livewire", Icon: LivewireBrandIcon },
  { name: "LLVM", slug: "llvm", Icon: LLVMBrandIcon },
  { name: "LM Studio", slug: "lmstudio", Icon: LMStudioBrandIcon },
  { name: "LMMS", slug: "lmms", Icon: LMMSBrandIcon },
  { name: "Lobsters", slug: "lobsters", Icon: LobstersBrandIcon },
  { name: "Local", slug: "local", Icon: LocalBrandIcon },
  { name: "LocalSend", slug: "localsend", Icon: LocalSendBrandIcon },
  { name: "LocalXpose", slug: "localxpose", Icon: LocalXposeBrandIcon },
  { name: "Locust", slug: "locust", Icon: LocustBrandIcon },
  { name: "Lodash", slug: "lodash", Icon: LodashBrandIcon },
  { name: "LogMeIn", slug: "logmein", Icon: LogMeInBrandIcon },
  { name: "Logseq", slug: "logseq", Icon: LogseqBrandIcon },
  { name: "Logstash", slug: "logstash", Icon: LogstashBrandIcon },
  { name: "Longhorn", slug: "longhorn", Icon: LonghornBrandIcon },
  { name: "Looker", slug: "looker", Icon: LookerBrandIcon },
  { name: "Loom", slug: "loom", Icon: LoomBrandIcon },
  { name: "Loop", slug: "loop", Icon: LoopBrandIcon },
  { name: "LoopBack", slug: "loopback", Icon: LoopBackBrandIcon },
  { name: "Loops", slug: "loops", Icon: LoopsBrandIcon },
  { name: "Loot Crate", slug: "lootcrate", Icon: LootCrateBrandIcon },
  { name: "Lospec", slug: "lospec", Icon: LospecBrandIcon },
  { name: "LOT Polish Airlines", slug: "lotpolishairlines", Icon: LOTPolishAirlinesBrandIcon },
  { name: "LottieFiles", slug: "lottiefiles", Icon: LottieFilesBrandIcon },
  { name: "LTspice", slug: "ltspice", Icon: LTspiceBrandIcon },
  { name: "Lua", slug: "lua", Icon: LuaBrandIcon },
  { name: "Luanti", slug: "luanti", Icon: LuantiBrandIcon },
  { name: "Luau", slug: "luau", Icon: LuauBrandIcon },
  { name: "Lubuntu", slug: "lubuntu", Icon: LubuntuBrandIcon },
  { name: "Lucia", slug: "lucia", Icon: LuciaBrandIcon },
  { name: "Lucid", slug: "lucid", Icon: LucidBrandIcon },
  { name: "Lucide", slug: "lucide", Icon: LucideBrandIcon },
  { name: "Ludwig", slug: "ludwig", Icon: LudwigBrandIcon },
  { name: "Lufthansa", slug: "lufthansa", Icon: LufthansaBrandIcon },
  { name: "Lumen", slug: "lumen", Icon: LumenBrandIcon },
  { name: "Lunacy", slug: "lunacy", Icon: LunacyBrandIcon },
  { name: "Luogu", slug: "luogu", Icon: LuoguBrandIcon },
  { name: "Lutris", slug: "lutris", Icon: LutrisBrandIcon },
  { name: "LVGL", slug: "lvgl", Icon: LVGLBrandIcon },
  { name: "Lydia", slug: "lydia", Icon: LydiaBrandIcon },
  { name: "Lyft", slug: "lyft", Icon: LyftBrandIcon },
  { name: "M5Stack", slug: "m5stack", Icon: M5StackBrandIcon },
  { name: "MAAS", slug: "maas", Icon: MAASBrandIcon },
  { name: "macOS", slug: "macos", Icon: MacOSBrandIcon },
  { name: "MacPaw", slug: "macpaw", Icon: MacPawBrandIcon },
  { name: "MacPorts", slug: "macports", Icon: MacPortsBrandIcon },
  { name: "Macy's", slug: "macys", Icon: MacySBrandIcon },
  { name: "Magasins U", slug: "magasinsu", Icon: MagasinsUBrandIcon },
  { name: "Magic", slug: "magic", Icon: MagicBrandIcon },
  { name: "Magisk", slug: "magisk", Icon: MagiskBrandIcon },
  { name: "Mahindra", slug: "mahindra", Icon: MahindraBrandIcon },
  { name: "mail.com", slug: "maildotcom", Icon: MailComBrandIcon },
  { name: "Mail.Ru", slug: "maildotru", Icon: MailRuBrandIcon },
  { name: "mailbox", slug: "mailbox", Icon: MailboxBrandIcon },
  { name: "MailChimp", slug: "mailchimp", Icon: MailChimpBrandIcon },
  { name: "Mailgun", slug: "mailgun", Icon: MailgunBrandIcon },
  { name: "Mailtrap", slug: "mailtrap", Icon: MailtrapBrandIcon },
  { name: "MainWP", slug: "mainwp", Icon: MainWPBrandIcon },
  { name: "Major League Hacking", slug: "majorleaguehacking", Icon: MajorLeagueHackingBrandIcon },
  { name: "Make", slug: "make", Icon: MakeBrandIcon },
  { name: "MakerBot", slug: "makerbot", Icon: MakerBotBrandIcon },
  { name: "Malt", slug: "malt", Icon: MaltBrandIcon },
  { name: "Malwarebytes", slug: "malwarebytes", Icon: MalwarebytesBrandIcon },
  { name: "Mamba UI", slug: "mambaui", Icon: MambaUIBrandIcon },
  { name: "MAMP", slug: "mamp", Icon: MAMPBrandIcon },
  { name: "MAN", slug: "man", Icon: MANBrandIcon },
  { name: "ManageIQ", slug: "manageiq", Icon: ManageIQBrandIcon },
  { name: "Mangacollec", slug: "mangacollec", Icon: MangacollecBrandIcon },
  { name: "MangaUpdates", slug: "mangaupdates", Icon: MangaUpdatesBrandIcon },
  { name: "Manjaro", slug: "manjaro", Icon: ManjaroBrandIcon },
  { name: "Mantine", slug: "mantine", Icon: MantineBrandIcon },
  { name: "Mapbox", slug: "mapbox", Icon: MapboxBrandIcon },
  { name: "Mapillary", slug: "mapillary", Icon: MapillaryBrandIcon },
  { name: "MapLibre", slug: "maplibre", Icon: MapLibreBrandIcon },
  { name: "MapTiler", slug: "maptiler", Icon: MapTilerBrandIcon },
  { name: "MariaDB", slug: "mariadb", Icon: MariaDBBrandIcon },
  { name: "MariaDB Foundation", slug: "mariadbfoundation", Icon: MariaDBFoundationBrandIcon },
  { name: "Markdown", slug: "markdown", Icon: MarkdownBrandIcon },
  { name: "Marko", slug: "marko", Icon: MarkoBrandIcon },
  { name: "Marriott", slug: "marriott", Icon: MarriottBrandIcon },
  { name: "MarvelApp", slug: "marvelapp", Icon: MarvelAppBrandIcon },
  { name: "Maserati", slug: "maserati", Icon: MaseratiBrandIcon },
  { name: "MasterCard", slug: "mastercard", Icon: MasterCardBrandIcon },
  { name: "mastercomfig", slug: "mastercomfig", Icon: MastercomfigBrandIcon },
  { name: "Mastodon", slug: "mastodon", Icon: MastodonBrandIcon },
  { name: "Material Design", slug: "materialdesign", Icon: MaterialDesignBrandIcon },
  { name: "Material Design Icons", slug: "materialdesignicons", Icon: MaterialDesignIconsBrandIcon },
  { name: "Material for MkDocs", slug: "materialformkdocs", Icon: MaterialForMkDocsBrandIcon },
  { name: "Matillion", slug: "matillion", Icon: MatillionBrandIcon },
  { name: "Matomo", slug: "matomo", Icon: MatomoBrandIcon },
  { name: "Matrix", slug: "matrix", Icon: MatrixBrandIcon },
  { name: "Matter.js", slug: "matterdotjs", Icon: MatterJsBrandIcon },
  { name: "Mattermost", slug: "mattermost", Icon: MattermostBrandIcon },
  { name: "Matternet", slug: "matternet", Icon: MatternetBrandIcon },
  { name: "Mautic", slug: "mautic", Icon: MauticBrandIcon },
  { name: "Max", slug: "max", Icon: MaxBrandIcon },
  { name: "Max-Planck-Gesellschaft", slug: "maxplanckgesellschaft", Icon: MaxPlanckGesellschaftBrandIcon },
  { name: "Maytag", slug: "maytag", Icon: MaytagBrandIcon },
  { name: "Mazda", slug: "mazda", Icon: MazdaBrandIcon },
  { name: "Maze", slug: "maze", Icon: MazeBrandIcon },
  { name: "McAfee", slug: "mcafee", Icon: McAfeeBrandIcon },
  { name: "McDonald's", slug: "mcdonalds", Icon: McDonaldSBrandIcon },
  { name: "McLaren", slug: "mclaren", Icon: McLarenBrandIcon },
  { name: "MDBList", slug: "mdblist", Icon: MDBListBrandIcon },
  { name: "mdBook", slug: "mdbook", Icon: MdBookBrandIcon },
  { name: "MDN Web Docs", slug: "mdnwebdocs", Icon: MDNWebDocsBrandIcon },
  { name: "MDX", slug: "mdx", Icon: MDXBrandIcon },
  { name: "Mealie", slug: "mealie", Icon: MealieBrandIcon },
  { name: "MediaFire", slug: "mediafire", Icon: MediaFireBrandIcon },
  { name: "MediaMarkt", slug: "mediamarkt", Icon: MediaMarktBrandIcon },
  { name: "MediaPipe", slug: "mediapipe", Icon: MediaPipeBrandIcon },
  { name: "MediaTek", slug: "mediatek", Icon: MediaTekBrandIcon },
  { name: "MediBang Paint", slug: "medibangpaint", Icon: MediBangPaintBrandIcon },
  { name: "Medium", slug: "medium", Icon: MediumBrandIcon },
  { name: "Medusa", slug: "medusa", Icon: MedusaBrandIcon },
  { name: "Meetup", slug: "meetup", Icon: MeetupBrandIcon },
  { name: "MEGA", slug: "mega", Icon: MEGABrandIcon },
  { name: "Meilisearch", slug: "meilisearch", Icon: MeilisearchBrandIcon },
  { name: "Meituan", slug: "meituan", Icon: MeituanBrandIcon },
  { name: "Meizu", slug: "meizu", Icon: MeizuBrandIcon },
  { name: "Mendeley", slug: "mendeley", Icon: MendeleyBrandIcon },
  { name: "MentorCruise", slug: "mentorcruise", Icon: MentorCruiseBrandIcon },
  { name: "Mercado Pago", slug: "mercadopago", Icon: MercadoPagoBrandIcon },
  { name: "Merck", slug: "merck", Icon: MerckBrandIcon },
  { name: "Mercurial", slug: "mercurial", Icon: MercurialBrandIcon },
  { name: "Mermaid", slug: "mermaid", Icon: MermaidBrandIcon },
  { name: "Messenger", slug: "messenger", Icon: MessengerBrandIcon },
  { name: "Meta", slug: "meta", Icon: MetaBrandIcon },
  { name: "Meta AI", slug: "metaai", Icon: MetaAIBrandIcon },
  { name: "Metabase", slug: "metabase", Icon: MetabaseBrandIcon },
  { name: "Metacritic", slug: "metacritic", Icon: MetacriticBrandIcon },
  { name: "MetaFilter", slug: "metafilter", Icon: MetaFilterBrandIcon },
  { name: "MetaGer", slug: "metager", Icon: MetaGerBrandIcon },
  { name: "Metasploit", slug: "metasploit", Icon: MetasploitBrandIcon },
  { name: "Meteor", slug: "meteor", Icon: MeteorBrandIcon },
  { name: "Metro", slug: "metro", Icon: MetroBrandIcon },
  { name: "Metro de la Ciudad de México", slug: "metrodelaciudaddemexico", Icon: MetroDeLaCiudadDeMXicoBrandIcon },
  { name: "Metro de Madrid", slug: "metrodemadrid", Icon: MetroDeMadridBrandIcon },
  { name: "Métro de Paris", slug: "metrodeparis", Icon: MTroDeParisBrandIcon },
  { name: "MeWe", slug: "mewe", Icon: MeWeBrandIcon },
  { name: "Mezmo", slug: "mezmo", Icon: MezmoBrandIcon },
  { name: "MG", slug: "mg", Icon: MGBrandIcon },
  { name: "Micro Editor", slug: "microeditor", Icon: MicroEditorBrandIcon },
  { name: "micro:bit", slug: "microbit", Icon: MicroBitBrandIcon },
  { name: "Micro.blog", slug: "microdotblog", Icon: MicroBlogBrandIcon },
  { name: "MicroPython", slug: "micropython", Icon: MicroPythonBrandIcon },
  { name: "Microsoft", slug: "microsoft", Icon: MicrosoftBrandIcon },
  { name: "Microstation", slug: "microstation", Icon: MicrostationBrandIcon },
  { name: "MicroStrategy", slug: "microstrategy", Icon: MicroStrategyBrandIcon },
  { name: "MIDI", slug: "midi", Icon: MIDIBrandIcon },
  { name: "Migadu", slug: "migadu", Icon: MigaduBrandIcon },
  { name: "Mihon", slug: "mihon", Icon: MihonBrandIcon },
  { name: "miHoYo", slug: "mihoyo", Icon: MiHoYoBrandIcon },
  { name: "MikroTik", slug: "mikrotik", Icon: MikroTikBrandIcon },
  { name: "Milanote", slug: "milanote", Icon: MilanoteBrandIcon },
  { name: "Milvus", slug: "milvus", Icon: MilvusBrandIcon },
  { name: "Minds", slug: "minds", Icon: MindsBrandIcon },
  { name: "MinGW-w64", slug: "mingww64", Icon: MinGWW64BrandIcon },
  { name: "Mini", slug: "mini", Icon: MiniBrandIcon },
  { name: "MiniMax", slug: "minimax", Icon: MiniMaxBrandIcon },
  { name: "MinIO", slug: "minio", Icon: MinIOBrandIcon },
  { name: "Mintlify", slug: "mintlify", Icon: MintlifyBrandIcon },
  { name: "Minutemailer", slug: "minutemailer", Icon: MinutemailerBrandIcon },
  { name: "Miraheze", slug: "miraheze", Icon: MirahezeBrandIcon },
  { name: "Miro", slug: "miro", Icon: MiroBrandIcon },
  { name: "Misskey", slug: "misskey", Icon: MisskeyBrandIcon },
  { name: "Mistral AI", slug: "mistralai", Icon: MistralAIBrandIcon },
  { name: "Mitsubishi", slug: "mitsubishi", Icon: MitsubishiBrandIcon },
  { name: "Mix", slug: "mix", Icon: MixBrandIcon },
  { name: "Mixcloud", slug: "mixcloud", Icon: MixcloudBrandIcon },
  { name: "Mixpanel", slug: "mixpanel", Icon: MixpanelBrandIcon },
  { name: "MLB", slug: "mlb", Icon: MLBBrandIcon },
  { name: "MLflow", slug: "mlflow", Icon: MLflowBrandIcon },
  { name: "MobX", slug: "mobx", Icon: MobXBrandIcon },
  { name: "MobX-State-Tree", slug: "mobxstatetree", Icon: MobXStateTreeBrandIcon },
  { name: "Mocha", slug: "mocha", Icon: MochaBrandIcon },
  { name: "Mock Service Worker", slug: "mockserviceworker", Icon: MockServiceWorkerBrandIcon },
  { name: "Modal", slug: "modal", Icon: ModalBrandIcon },
  { name: "Model Context Protocol", slug: "modelcontextprotocol", Icon: ModelContextProtocolBrandIcon },
  { name: "ModelScope", slug: "modelscope", Icon: ModelScopeBrandIcon },
  { name: "Modin", slug: "modin", Icon: ModinBrandIcon },
  { name: "Modrinth", slug: "modrinth", Icon: ModrinthBrandIcon },
  { name: "MODX", slug: "modx", Icon: MODXBrandIcon },
  { name: "Mojeek", slug: "mojeek", Icon: MojeekBrandIcon },
  { name: "Moleculer", slug: "moleculer", Icon: MoleculerBrandIcon },
  { name: "Momenteo", slug: "momenteo", Icon: MomenteoBrandIcon },
  { name: "Monero", slug: "monero", Icon: MoneroBrandIcon },
  { name: "MoneyGram", slug: "moneygram", Icon: MoneyGramBrandIcon },
  { name: "MongoDB", slug: "mongodb", Icon: MongoDBBrandIcon },
  { name: "Mongoose", slug: "mongoose", Icon: MongooseBrandIcon },
  { name: "Mongoose", slug: "mongoosedotws", Icon: MongoosedotwsBrandIcon },
  { name: "Monica", slug: "monica", Icon: MonicaBrandIcon },
  { name: "monkey tie", slug: "monkeytie", Icon: MonkeyTieBrandIcon },
  { name: "Monkeytype", slug: "monkeytype", Icon: MonkeytypeBrandIcon },
  { name: "MonoGame", slug: "monogame", Icon: MonoGameBrandIcon },
  { name: "Monoprix", slug: "monoprix", Icon: MonoprixBrandIcon },
  { name: "Monster", slug: "monster", Icon: MonsterBrandIcon },
  { name: "Monzo", slug: "monzo", Icon: MonzoBrandIcon },
  { name: "Moo", slug: "moo", Icon: MooBrandIcon },
  { name: "Moodle", slug: "moodle", Icon: MoodleBrandIcon },
  { name: "Moonrepo", slug: "moonrepo", Icon: MoonrepoBrandIcon },
  { name: "Moonshot AI", slug: "moonshotai", Icon: MoonshotAIBrandIcon },
  { name: "Moq", slug: "moq", Icon: MoqBrandIcon },
  { name: "Moqups", slug: "moqups", Icon: MoqupsBrandIcon },
  { name: "Morrisons", slug: "morrisons", Icon: MorrisonsBrandIcon },
  { name: "Moscow Metro", slug: "moscowmetro", Icon: MoscowMetroBrandIcon },
  { name: "Motorola", slug: "motorola", Icon: MotorolaBrandIcon },
  { name: "Movistar", slug: "movistar", Icon: MovistarBrandIcon },
  { name: "Mozilla", slug: "mozilla", Icon: MozillaBrandIcon },
  { name: "mpv", slug: "mpv", Icon: MpvBrandIcon },
  { name: "MQTT", slug: "mqtt", Icon: MQTTBrandIcon },
  { name: "MSI", slug: "msi", Icon: MSIBrandIcon },
  { name: "MSI Business", slug: "msibusiness", Icon: MSIBusinessBrandIcon },
  { name: "MTA", slug: "mta", Icon: MTABrandIcon },
  { name: "MTR", slug: "mtr", Icon: MTRBrandIcon },
  { name: "MUBI", slug: "mubi", Icon: MUBIBrandIcon },
  { name: "MUI", slug: "mui", Icon: MUIBrandIcon },
  { name: "Müller", slug: "muller", Icon: MLlerBrandIcon },
  { name: "Mullvad", slug: "mullvad", Icon: MullvadBrandIcon },
  { name: "Multisim", slug: "multisim", Icon: MultisimBrandIcon },
  { name: "Mumble", slug: "mumble", Icon: MumbleBrandIcon },
  { name: "MUO", slug: "muo", Icon: MUOBrandIcon },
  { name: "Mural", slug: "mural", Icon: MuralBrandIcon },
  { name: "MusicBrainz", slug: "musicbrainz", Icon: MusicBrainzBrandIcon },
  { name: "MX Linux", slug: "mxlinux", Icon: MXLinuxBrandIcon },
  { name: "MyAnimeList", slug: "myanimelist", Icon: MyAnimeListBrandIcon },
  { name: "MyGet", slug: "myget", Icon: MyGetBrandIcon },
  { name: "MYOB", slug: "myob", Icon: MYOBBrandIcon },
  { name: "MyShows", slug: "myshows", Icon: MyShowsBrandIcon },
  { name: "Myspace", slug: "myspace", Icon: MyspaceBrandIcon },
  { name: "MySQL", slug: "mysql", Icon: MySQLBrandIcon },
  { name: "N26", slug: "n26", Icon: N26BrandIcon },
  { name: "n8n", slug: "n8n", Icon: N8nBrandIcon },
  { name: "Namebase", slug: "namebase", Icon: NamebaseBrandIcon },
  { name: "Namecheap", slug: "namecheap", Icon: NamecheapBrandIcon },
  { name: "NameMC", slug: "namemc", Icon: NameMCBrandIcon },
  { name: "NameSilo", slug: "namesilo", Icon: NameSiloBrandIcon },
  { name: "Namu Wiki", slug: "namuwiki", Icon: NamuWikiBrandIcon },
  { name: "Nano", slug: "nano", Icon: NanoBrandIcon },
  { name: "Nano Stores", slug: "nanostores", Icon: NanoStoresBrandIcon },
  { name: "Napster", slug: "napster", Icon: NapsterBrandIcon },
  { name: "NASA", slug: "nasa", Icon: NASABrandIcon },
  { name: "National Grid", slug: "nationalgrid", Icon: NationalGridBrandIcon },
  { name: "National Rail", slug: "nationalrail", Icon: NationalRailBrandIcon },
  { name: "NativeScript", slug: "nativescript", Icon: NativeScriptBrandIcon },
  { name: "NATS.io", slug: "natsdotio", Icon: NATSIoBrandIcon },
  { name: "Naver", slug: "naver", Icon: NaverBrandIcon },
  { name: "NBA", slug: "nba", Icon: NBABrandIcon },
  { name: "NBB", slug: "nbb", Icon: NBBBrandIcon },
  { name: "NBC", slug: "nbc", Icon: NBCBrandIcon },
  { name: "NDI", slug: "ndi", Icon: NDIBrandIcon },
  { name: "NDR", slug: "ndr", Icon: NDRBrandIcon },
  { name: "NEAR", slug: "near", Icon: NEARBrandIcon },
  { name: "Nebula", slug: "nebula", Icon: NebulaBrandIcon },
  { name: "NEC", slug: "nec", Icon: NECBrandIcon },
  { name: "Nederlandse Spoorwegen", slug: "nederlandsespoorwegen", Icon: NederlandseSpoorwegenBrandIcon },
  { name: "Neo4j", slug: "neo4j", Icon: Neo4jBrandIcon },
  { name: "Neon", slug: "neon", Icon: NeonBrandIcon },
  { name: "Neovim", slug: "neovim", Icon: NeovimBrandIcon },
  { name: "Neptune", slug: "neptune", Icon: NeptuneBrandIcon },
  { name: "NestJS", slug: "nestjs", Icon: NestJSBrandIcon },
  { name: "NetApp", slug: "netapp", Icon: NetAppBrandIcon },
  { name: "NetBSD", slug: "netbsd", Icon: NetBSDBrandIcon },
  { name: "netcup", slug: "netcup", Icon: NetcupBrandIcon },
  { name: "Netdata", slug: "netdata", Icon: NetdataBrandIcon },
  { name: "NetEase Cloud Music", slug: "neteasecloudmusic", Icon: NetEaseCloudMusicBrandIcon },
  { name: "Netflix", slug: "netflix", Icon: NetflixBrandIcon },
  { name: "NETGEAR", slug: "netgear", Icon: NetgearBrandIcon },
  { name: "Netim", slug: "netim", Icon: NetimBrandIcon },
  { name: "Netlify", slug: "netlify", Icon: NetlifyBrandIcon },
  { name: "Nette", slug: "nette", Icon: NetteBrandIcon },
  { name: "Netto", slug: "netto", Icon: NettoBrandIcon },
  { name: "Neutralinojs", slug: "neutralinojs", Icon: NeutralinojsBrandIcon },
  { name: "New Balance", slug: "newbalance", Icon: NewBalanceBrandIcon },
  { name: "New Japan Pro-Wrestling", slug: "newjapanprowrestling", Icon: NewJapanProWrestlingBrandIcon },
  { name: "New Relic", slug: "newrelic", Icon: NewRelicBrandIcon },
  { name: "New York Times", slug: "newyorktimes", Icon: NewYorkTimesBrandIcon },
  { name: "Newegg", slug: "newegg", Icon: NeweggBrandIcon },
  { name: "Newgrounds", slug: "newgrounds", Icon: NewgroundsBrandIcon },
  { name: "NewPipe", slug: "newpipe", Icon: NewPipeBrandIcon },
  { name: "NEXON", slug: "nexon", Icon: NexonBrandIcon },
  { name: "Next.js", slug: "nextdotjs", Icon: NextJsBrandIcon },
  { name: "nextbike", slug: "nextbike", Icon: NextbikeBrandIcon },
  { name: "NextBillion.ai", slug: "nextbilliondotai", Icon: NextBillionAiBrandIcon },
  { name: "Nextcloud", slug: "nextcloud", Icon: NextcloudBrandIcon },
  { name: "NextDNS", slug: "nextdns", Icon: NextDNSBrandIcon },
  { name: "Nextdoor", slug: "nextdoor", Icon: NextdoorBrandIcon },
  { name: "Nextflow", slug: "nextflow", Icon: NextflowBrandIcon },
  { name: "Nextra", slug: "nextra", Icon: NextraBrandIcon },
  { name: "nf-core", slug: "nfcore", Icon: NfCoreBrandIcon },
  { name: "NFC", slug: "nfc", Icon: NFCBrandIcon },
  { name: "NGINX", slug: "nginx", Icon: NginxBrandIcon },
  { name: "Nginx Proxy Manager", slug: "nginxproxymanager", Icon: NginxProxyManagerBrandIcon },
  { name: "ngrok", slug: "ngrok", Icon: NgrokBrandIcon },
  { name: "NgRx", slug: "ngrx", Icon: NgRxBrandIcon },
  { name: "NHL", slug: "nhl", Icon: NHLBrandIcon },
  { name: "Nhost", slug: "nhost", Icon: NhostBrandIcon },
  { name: "NiceHash", slug: "nicehash", Icon: NiceHashBrandIcon },
  { name: "niconico", slug: "niconico", Icon: NiconicoBrandIcon },
  { name: "Nike", slug: "nike", Icon: NikeBrandIcon },
  { name: "Nikon", slug: "nikon", Icon: NikonBrandIcon },
  { name: "Nim", slug: "nim", Icon: NimBrandIcon },
  { name: "niri", slug: "niri", Icon: NiriBrandIcon },
  { name: "Nissan", slug: "nissan", Icon: NissanBrandIcon },
  { name: "NixOS", slug: "nixos", Icon: NixOSBrandIcon },
  { name: "Nobara Linux", slug: "nobaralinux", Icon: NobaraLinuxBrandIcon },
  { name: "Node-RED", slug: "nodered", Icon: NodeREDBrandIcon },
  { name: "Node.js", slug: "nodedotjs", Icon: NodeJsBrandIcon },
  { name: "NodeBB", slug: "nodebb", Icon: NodeBBBrandIcon },
  { name: "NodeGui", slug: "nodegui", Icon: NodeGuiBrandIcon },
  { name: "Nodemon", slug: "nodemon", Icon: NodemonBrandIcon },
  { name: "Nokia", slug: "nokia", Icon: NokiaBrandIcon },
  { name: "Nomad", slug: "nomad", Icon: NomadBrandIcon },
  { name: "Norco", slug: "norco", Icon: NorcoBrandIcon },
  { name: "Nordic Semiconductor", slug: "nordicsemiconductor", Icon: NordicSemiconductorBrandIcon },
  { name: "NordVPN", slug: "nordvpn", Icon: NordVPNBrandIcon },
  { name: "Normalize.css", slug: "normalizedotcss", Icon: NormalizeCssBrandIcon },
  { name: "Norton", slug: "norton", Icon: NortonBrandIcon },
  { name: "Norwegian", slug: "norwegian", Icon: NorwegianBrandIcon },
  { name: "Note", slug: "note", Icon: NoteBrandIcon },
  { name: "NotebookLM", slug: "notebooklm", Icon: NotebookLMBrandIcon },
  { name: "Notepad++", slug: "notepadplusplus", Icon: NotepadBrandIcon },
  { name: "Notesnook", slug: "notesnook", Icon: NotesnookBrandIcon },
  { name: "Notion", slug: "notion", Icon: NotionBrandIcon },
  { name: "Notist", slug: "notist", Icon: NotistBrandIcon },
  { name: "Noun Project", slug: "nounproject", Icon: NounProjectBrandIcon },
  { name: "Novu", slug: "novu", Icon: NovuBrandIcon },
  { name: "NOW", slug: "now", Icon: NOWBrandIcon },
  { name: "npm", slug: "npm", Icon: NpmBrandIcon },
  { name: "Nrwl", slug: "nrwl", Icon: NrwlBrandIcon },
  { name: "NSIS", slug: "nsis", Icon: NSISBrandIcon },
  { name: "ntfy", slug: "ntfy", Icon: NtfyBrandIcon },
  { name: "Nubank", slug: "nubank", Icon: NubankBrandIcon },
  { name: "Nucleo", slug: "nucleo", Icon: NucleoBrandIcon },
  { name: "NuGet", slug: "nuget", Icon: NuGetBrandIcon },
  { name: "Nuke", slug: "nuke", Icon: NukeBrandIcon },
  { name: "Numba", slug: "numba", Icon: NumbaBrandIcon },
  { name: "NumPy", slug: "numpy", Icon: NumPyBrandIcon },
  { name: "Nunjucks", slug: "nunjucks", Icon: NunjucksBrandIcon },
  { name: "Nushell", slug: "nushell", Icon: NushellBrandIcon },
  { name: "Nutanix", slug: "nutanix", Icon: NutanixBrandIcon },
  { name: "Nuxt", slug: "nuxt", Icon: NuxtBrandIcon },
  { name: "NVIDIA", slug: "nvidia", Icon: NvidiaBrandIcon },
  { name: "nvm", slug: "nvm", Icon: NvmBrandIcon },
  { name: "Nx", slug: "nx", Icon: NxBrandIcon },
  { name: "NXP", slug: "nxp", Icon: NXPBrandIcon },
  { name: "NZXT", slug: "nzxt", Icon: NZXTBrandIcon },
  { name: "O'Reilly", slug: "oreilly", Icon: OReillyBrandIcon },
  { name: "O2", slug: "o2", Icon: O2BrandIcon },
  { name: "ÖBB", slug: "obb", Icon: BBBrandIcon },
  { name: "OBS Studio", slug: "obsstudio", Icon: OBSStudioBrandIcon },
  { name: "Observable", slug: "observable", Icon: ObservableBrandIcon },
  { name: "Obsidian", slug: "obsidian", Icon: ObsidianBrandIcon },
  { name: "Obtainium", slug: "obtainium", Icon: ObtainiumBrandIcon },
  { name: "OCaml", slug: "ocaml", Icon: OCamlBrandIcon },
  { name: "OCLC", slug: "oclc", Icon: OCLCBrandIcon },
  { name: "oclif", slug: "oclif", Icon: OclifBrandIcon },
  { name: "Octane Render", slug: "octanerender", Icon: OctaneRenderBrandIcon },
  { name: "Octave", slug: "octave", Icon: OctaveBrandIcon },
  { name: "October CMS", slug: "octobercms", Icon: OctoberCMSBrandIcon },
  { name: "OctoPrint", slug: "octoprint", Icon: OctoPrintBrandIcon },
  { name: "Octopus Deploy", slug: "octopusdeploy", Icon: OctopusDeployBrandIcon },
  { name: "Oculus", slug: "oculus", Icon: OculusBrandIcon },
  { name: "Odido", slug: "odido", Icon: OdidoBrandIcon },
  { name: "Odin", slug: "odin", Icon: OdinBrandIcon },
  { name: "Odnoklassniki", slug: "odnoklassniki", Icon: OdnoklassnikiBrandIcon },
  { name: "Odoo", slug: "odoo", Icon: OdooBrandIcon },
  { name: "Odysee", slug: "odysee", Icon: OdyseeBrandIcon },
  { name: "Oh Dear", slug: "ohdear", Icon: OhDearBrandIcon },
  { name: "okcupid", slug: "okcupid", Icon: OkcupidBrandIcon },
  { name: "Okta", slug: "okta", Icon: OktaBrandIcon },
  { name: "OKX", slug: "okx", Icon: OKXBrandIcon },
  { name: "Ollama", slug: "ollama", Icon: OllamaBrandIcon },
  { name: "Omada Cloud", slug: "omadacloud", Icon: OmadaCloudBrandIcon },
  { name: "Omarchy", slug: "omarchy", Icon: OmarchyBrandIcon },
  { name: "OnePlus", slug: "oneplus", Icon: OnePlusBrandIcon },
  { name: "OneStream", slug: "onestream", Icon: OneStreamBrandIcon },
  { name: "OnlyFans", slug: "onlyfans", Icon: OnlyFansBrandIcon },
  { name: "ONLYOFFICE", slug: "onlyoffice", Icon: OnlyofficeBrandIcon },
  { name: "ONNX", slug: "onnx", Icon: ONNXBrandIcon },
  { name: "OnStar", slug: "onstar", Icon: OnStarBrandIcon },
  { name: "OOMOL", slug: "oomol", Icon: OomolBrandIcon },
  { name: "Opel", slug: "opel", Icon: OpelBrandIcon },
  { name: "Open Access", slug: "openaccess", Icon: OpenAccessBrandIcon },
  { name: "Open Badges", slug: "openbadges", Icon: OpenBadgesBrandIcon },
  { name: "Open Bug Bounty", slug: "openbugbounty", Icon: OpenBugBountyBrandIcon },
  { name: "Open Collective", slug: "opencollective", Icon: OpenCollectiveBrandIcon },
  { name: "Open Containers Initiative", slug: "opencontainersinitiative", Icon: OpenContainersInitiativeBrandIcon },
  { name: "Open Source Hardware", slug: "opensourcehardware", Icon: OpenSourceHardwareBrandIcon },
  { name: "Open Source Initiative", slug: "opensourceinitiative", Icon: OpenSourceInitiativeBrandIcon },
  { name: "Open3D", slug: "open3d", Icon: Open3DBrandIcon },
  { name: "OpenAI", slug: "openai", Icon: OpenAIBrandIcon },
  { name: "OpenAI Gym", slug: "openaigym", Icon: OpenAIGymBrandIcon },
  { name: "OpenAPI Initiative", slug: "openapiinitiative", Icon: OpenAPIInitiativeBrandIcon },
  { name: "OpenBao", slug: "openbao", Icon: OpenBaoBrandIcon },
  { name: "OpenBSD", slug: "openbsd", Icon: OpenBSDBrandIcon },
  { name: "OpenCage", slug: "opencage", Icon: OpenCageBrandIcon },
  { name: "OpenCode", slug: "opencode", Icon: OpenCodeBrandIcon },
  { name: "OpenCritic", slug: "opencritic", Icon: OpenCriticBrandIcon },
  { name: "OpenCV", slug: "opencv", Icon: OpenCVBrandIcon },
  { name: "OpenFaaS", slug: "openfaas", Icon: OpenFaaSBrandIcon },
  { name: "OpenGL", slug: "opengl", Icon: OpenGLBrandIcon },
  { name: "openHAB", slug: "openhab", Icon: OpenHABBrandIcon },
  { name: "OpenID", slug: "openid", Icon: OpenIDBrandIcon },
  { name: "OpenJDK", slug: "openjdk", Icon: OpenJDKBrandIcon },
  { name: "OpenJS Foundation", slug: "openjsfoundation", Icon: OpenJSFoundationBrandIcon },
  { name: "Openlayers", slug: "openlayers", Icon: OpenlayersBrandIcon },
  { name: "openmediavault", slug: "openmediavault", Icon: OpenmediavaultBrandIcon },
  { name: "OpenMined", slug: "openmined", Icon: OpenMinedBrandIcon },
  { name: "OpenNebula", slug: "opennebula", Icon: OpenNebulaBrandIcon },
  { name: "OpenProject", slug: "openproject", Icon: OpenProjectBrandIcon },
  { name: "OpenRouter", slug: "openrouter", Icon: OpenRouterBrandIcon },
  { name: "OpenSCAD", slug: "openscad", Icon: OpenSCADBrandIcon },
  { name: "OpenSea", slug: "opensea", Icon: OpenSeaBrandIcon },
  { name: "OpenSearch", slug: "opensearch", Icon: OpenSearchBrandIcon },
  { name: "OpenSSL", slug: "openssl", Icon: OpenSSLBrandIcon },
  { name: "OpenStack", slug: "openstack", Icon: OpenStackBrandIcon },
  { name: "OpenStreetMap", slug: "openstreetmap", Icon: OpenStreetMapBrandIcon },
  { name: "openSUSE", slug: "opensuse", Icon: OpenSUSEBrandIcon },
  { name: "OpenTelemetry", slug: "opentelemetry", Icon: OpenTelemetryBrandIcon },
  { name: "OpenText", slug: "opentext", Icon: OpenTextBrandIcon },
  { name: "OpenTofu", slug: "opentofu", Icon: OpenTofuBrandIcon },
  { name: "OpenTUI", slug: "opentui", Icon: OpenTUIBrandIcon },
  { name: "Openverse", slug: "openverse", Icon: OpenverseBrandIcon },
  { name: "OpenVPN", slug: "openvpn", Icon: OpenVPNBrandIcon },
  { name: "OpenWrt", slug: "openwrt", Icon: OpenWrtBrandIcon },
  { name: "OpenZeppelin", slug: "openzeppelin", Icon: OpenZeppelinBrandIcon },
  { name: "OpenZFS", slug: "openzfs", Icon: OpenZFSBrandIcon },
  { name: "Opera", slug: "opera", Icon: OperaBrandIcon },
  { name: "Opera GX", slug: "operagx", Icon: OperaGXBrandIcon },
  { name: "OPNsense", slug: "opnsense", Icon: OPNsenseBrandIcon },
  { name: "OPPO", slug: "oppo", Icon: OPPOBrandIcon },
  { name: "Opsgenie", slug: "opsgenie", Icon: OpsgenieBrandIcon },
  { name: "OpsLevel", slug: "opslevel", Icon: OpsLevelBrandIcon },
  { name: "Optimism", slug: "optimism", Icon: OptimismBrandIcon },
  { name: "Optuna", slug: "optuna", Icon: OptunaBrandIcon },
  { name: "Orange", slug: "orange", Icon: OrangeBrandIcon },
  { name: "Orchard Core", slug: "orchardcore", Icon: OrchardCoreBrandIcon },
  { name: "ORCID", slug: "orcid", Icon: OrcidBrandIcon },
  { name: "Org", slug: "org", Icon: OrgBrandIcon },
  { name: "Organic Maps", slug: "organicmaps", Icon: OrganicMapsBrandIcon },
  { name: "Origin", slug: "origin", Icon: OriginBrandIcon },
  { name: "Ory", slug: "ory", Icon: OryBrandIcon },
  { name: "Osano", slug: "osano", Icon: OsanoBrandIcon },
  { name: "OSF", slug: "osf", Icon: OSFBrandIcon },
  { name: "OSGeo", slug: "osgeo", Icon: OSGeoBrandIcon },
  { name: "Oshkosh", slug: "oshkosh", Icon: OshkoshBrandIcon },
  { name: "OsmAnd", slug: "osmand", Icon: OsmAndBrandIcon },
  { name: "OSMC", slug: "osmc", Icon: OSMCBrandIcon },
  { name: "osu!", slug: "osu", Icon: OsuBrandIcon },
  { name: "Otto", slug: "otto", Icon: OttoBrandIcon },
  { name: "Outline", slug: "outline", Icon: OutlineBrandIcon },
  { name: "Overcast", slug: "overcast", Icon: OvercastBrandIcon },
  { name: "Overleaf", slug: "overleaf", Icon: OverleafBrandIcon },
  { name: "OVH", slug: "ovh", Icon: OVHBrandIcon },
  { name: "OWASP", slug: "owasp", Icon: OwaspBrandIcon },
  { name: "OWASP Dependency-Check", slug: "dependencycheck", Icon: OwaspDependencyCheckBrandIcon },
  { name: "ownCloud", slug: "owncloud", Icon: OwnCloudBrandIcon },
  { name: "Oxc", slug: "oxc", Icon: OxcBrandIcon },
  { name: "Oxygen", slug: "oxygen", Icon: OxygenBrandIcon },
  { name: "OYO", slug: "oyo", Icon: OYOBrandIcon },
  { name: "p5.js", slug: "p5dotjs", Icon: P5JsBrandIcon },
  { name: "Packagist", slug: "packagist", Icon: PackagistBrandIcon },
  { name: "Packer", slug: "packer", Icon: PackerBrandIcon },
  { name: "Packt", slug: "packt", Icon: PacktBrandIcon },
  { name: "Paddle", slug: "paddle", Icon: PaddleBrandIcon },
  { name: "PaddlePaddle", slug: "paddlepaddle", Icon: PaddlePaddleBrandIcon },
  { name: "Paddy Power", slug: "paddypower", Icon: PaddyPowerBrandIcon },
  { name: "Padlet", slug: "padlet", Icon: PadletBrandIcon },
  { name: "Pagekit", slug: "pagekit", Icon: PagekitBrandIcon },
  { name: "PagerDuty", slug: "pagerduty", Icon: PagerDutyBrandIcon },
  { name: "PageSpeed Insights", slug: "pagespeedinsights", Icon: PageSpeedInsightsBrandIcon },
  { name: "PagSeguro", slug: "pagseguro", Icon: PagSeguroBrandIcon },
  { name: "Palantir", slug: "palantir", Icon: PalantirBrandIcon },
  { name: "Palo Alto Networks", slug: "paloaltonetworks", Icon: PaloAltoNetworksBrandIcon },
  { name: "Palo Alto Software", slug: "paloaltosoftware", Icon: PaloAltoSoftwareBrandIcon },
  { name: "Panasonic", slug: "panasonic", Icon: PanasonicBrandIcon },
  { name: "pandas", slug: "pandas", Icon: PandasBrandIcon },
  { name: "Pandoc", slug: "pandoc", Icon: PandocBrandIcon },
  { name: "Pandora", slug: "pandora", Icon: PandoraBrandIcon },
  { name: "Pangolin", slug: "pangolin", Icon: PangolinBrandIcon },
  { name: "Pantheon", slug: "pantheon", Icon: PantheonBrandIcon },
  { name: "Paperless-ngx", slug: "paperlessngx", Icon: PaperlessNgxBrandIcon },
  { name: "Papers With Code", slug: "paperswithcode", Icon: PapersWithCodeBrandIcon },
  { name: "Paperspace", slug: "paperspace", Icon: PaperspaceBrandIcon },
  { name: "Paradox Interactive", slug: "paradoxinteractive", Icon: ParadoxInteractiveBrandIcon },
  { name: "Paramount+", slug: "paramountplus", Icon: ParamountBrandIcon },
  { name: "Parity Substrate", slug: "paritysubstrate", Icon: ParitySubstrateBrandIcon },
  { name: "Parrot Security", slug: "parrotsecurity", Icon: ParrotSecurityBrandIcon },
  { name: "Parse.ly", slug: "parsedotly", Icon: ParseLyBrandIcon },
  { name: "Passbolt", slug: "passbolt", Icon: PassboltBrandIcon },
  { name: "Passport", slug: "passport", Icon: PassportBrandIcon },
  { name: "Pastebin", slug: "pastebin", Icon: PastebinBrandIcon },
  { name: "Patreon", slug: "patreon", Icon: PatreonBrandIcon },
  { name: "PAYBACK", slug: "payback", Icon: PaybackBrandIcon },
  { name: "Paychex", slug: "paychex", Icon: PaychexBrandIcon },
  { name: "Payhip", slug: "payhip", Icon: PayhipBrandIcon },
  { name: "Payload CMS", slug: "payloadcms", Icon: PayloadCMSBrandIcon },
  { name: "Payoneer", slug: "payoneer", Icon: PayoneerBrandIcon },
  { name: "PayPal", slug: "paypal", Icon: PayPalBrandIcon },
  { name: "Paysafe", slug: "paysafe", Icon: PaysafeBrandIcon },
  { name: "Paytm", slug: "paytm", Icon: PaytmBrandIcon },
  { name: "PCGamingWiki", slug: "pcgamingwiki", Icon: PCGamingWikiBrandIcon },
  { name: "PDM", slug: "pdm", Icon: PDMBrandIcon },
  { name: "PDQ", slug: "pdq", Icon: PDQBrandIcon },
  { name: "Peak Design", slug: "peakdesign", Icon: PeakDesignBrandIcon },
  { name: "Pearson", slug: "pearson", Icon: PearsonBrandIcon },
  { name: "Peerlist", slug: "peerlist", Icon: PeerlistBrandIcon },
  { name: "PeerTube", slug: "peertube", Icon: PeerTubeBrandIcon },
  { name: "Pegasus Airlines", slug: "pegasusairlines", Icon: PegasusAirlinesBrandIcon },
  { name: "Pelican", slug: "pelican", Icon: PelicanBrandIcon },
  { name: "Peloton", slug: "peloton", Icon: PelotonBrandIcon },
  { name: "Penny", slug: "penny", Icon: PennyBrandIcon },
  { name: "Penpot", slug: "penpot", Icon: PenpotBrandIcon },
  { name: "Percy", slug: "percy", Icon: PercyBrandIcon },
  { name: "Perforce", slug: "perforce", Icon: PerforceBrandIcon },
  { name: "Perl", slug: "perl", Icon: PerlBrandIcon },
  { name: "Perplexity", slug: "perplexity", Icon: PerplexityBrandIcon },
  { name: "Persistent", slug: "persistent", Icon: PersistentBrandIcon },
  { name: "Personio", slug: "personio", Icon: PersonioBrandIcon },
  { name: "Pets at Home", slug: "petsathome", Icon: PetsAtHomeBrandIcon },
  { name: "Peugeot", slug: "peugeot", Icon: PeugeotBrandIcon },
  { name: "Pexels", slug: "pexels", Icon: PexelsBrandIcon },
  { name: "pfSense", slug: "pfsense", Icon: PfSenseBrandIcon },
  { name: "Phabricator", slug: "phabricator", Icon: PhabricatorBrandIcon },
  { name: "Philips Hue", slug: "philipshue", Icon: PhilipsHueBrandIcon },
  { name: "Phoenix Framework", slug: "phoenixframework", Icon: PhoenixFrameworkBrandIcon },
  { name: "PhonePe", slug: "phonepe", Icon: PhonePeBrandIcon },
  { name: "Phosphor Icons", slug: "phosphoricons", Icon: PhosphorIconsBrandIcon },
  { name: "Photobucket", slug: "photobucket", Icon: PhotobucketBrandIcon },
  { name: "Photocrowd", slug: "photocrowd", Icon: PhotocrowdBrandIcon },
  { name: "Photon", slug: "photon", Icon: PhotonBrandIcon },
  { name: "Photopea", slug: "photopea", Icon: PhotopeaBrandIcon },
  { name: "PHP", slug: "php", Icon: PHPBrandIcon },
  { name: "phpBB", slug: "phpbb", Icon: PhpBBBrandIcon },
  { name: "phpMyAdmin", slug: "phpmyadmin", Icon: PhpMyAdminBrandIcon },
  { name: "PhpStorm", slug: "phpstorm", Icon: PhpStormBrandIcon },
  { name: "Pi", slug: "pi", Icon: PiBrandIcon },
  { name: "Pi Network", slug: "pinetwork", Icon: PiNetworkBrandIcon },
  { name: "Pi-hole", slug: "pihole", Icon: PiHoleBrandIcon },
  { name: "Piaggio Group", slug: "piaggiogroup", Icon: PiaggioGroupBrandIcon },
  { name: "Piapro", slug: "piapro", Icon: PiaproBrandIcon },
  { name: "Picard Surgelés", slug: "picardsurgeles", Icon: PicardSurgelSBrandIcon },
  { name: "Picarto.TV", slug: "picartodottv", Icon: PicartoTVBrandIcon },
  { name: "Picnic", slug: "picnic", Icon: PicnicBrandIcon },
  { name: "PicPay", slug: "picpay", Icon: PicPayBrandIcon },
  { name: "Picrew", slug: "picrew", Icon: PicrewBrandIcon },
  { name: "Picsart", slug: "picsart", Icon: PicsartBrandIcon },
  { name: "Picxy", slug: "picxy", Icon: PicxyBrandIcon },
  { name: "Pimcore", slug: "pimcore", Icon: PimcoreBrandIcon },
  { name: "Pinboard", slug: "pinboard", Icon: PinboardBrandIcon },
  { name: "Pine Script", slug: "pinescript", Icon: PineScriptBrandIcon },
  { name: "Pingdom", slug: "pingdom", Icon: PingdomBrandIcon },
  { name: "Pinia", slug: "pinia", Icon: PiniaBrandIcon },
  { name: "pino", slug: "pino", Icon: PinoBrandIcon },
  { name: "Pinterest", slug: "pinterest", Icon: PinterestBrandIcon },
  { name: "Pioneer DJ", slug: "pioneerdj", Icon: PioneerDJBrandIcon },
  { name: "Pipecat", slug: "pipecat", Icon: PipecatBrandIcon },
  { name: "Piped", slug: "piped", Icon: PipedBrandIcon },
  { name: "pipx", slug: "pipx", Icon: PipxBrandIcon },
  { name: "Pivotal Tracker", slug: "pivotaltracker", Icon: PivotalTrackerBrandIcon },
  { name: "Piwigo", slug: "piwigo", Icon: PiwigoBrandIcon },
  { name: "Pix", slug: "pix", Icon: PixBrandIcon },
  { name: "Pixabay", slug: "pixabay", Icon: PixabayBrandIcon },
  { name: "Pixelfed", slug: "pixelfed", Icon: PixelfedBrandIcon },
  { name: "pixiv", slug: "pixiv", Icon: PixivBrandIcon },
  { name: "Pixlr", slug: "pixlr", Icon: PixlrBrandIcon },
  { name: "pkgsrc", slug: "pkgsrc", Icon: PkgsrcBrandIcon },
  { name: "Plane", slug: "plane", Icon: PlaneBrandIcon },
  { name: "Planet", slug: "planet", Icon: PlanetBrandIcon },
  { name: "PlanetScale", slug: "planetscale", Icon: PlanetScaleBrandIcon },
  { name: "PlanGrid", slug: "plangrid", Icon: PlanGridBrandIcon },
  { name: "Platform.sh", slug: "platformdotsh", Icon: PlatformShBrandIcon },
  { name: "PlatformIO", slug: "platformio", Icon: PlatformIOBrandIcon },
  { name: "Platzi", slug: "platzi", Icon: PlatziBrandIcon },
  { name: "Plausible Analytics", slug: "plausibleanalytics", Icon: PlausibleAnalyticsBrandIcon },
  { name: "PlayCanvas", slug: "playcanvas", Icon: PlayCanvasBrandIcon },
  { name: "Player FM", slug: "playerfm", Icon: PlayerFMBrandIcon },
  { name: "Player.me", slug: "playerdotme", Icon: PlayerMeBrandIcon },
  { name: "PlayStation", slug: "playstation", Icon: PlayStationBrandIcon },
  { name: "PlayStation 2", slug: "playstation2", Icon: PlayStation2BrandIcon },
  { name: "PlayStation 3", slug: "playstation3", Icon: PlayStation3BrandIcon },
  { name: "PlayStation 4", slug: "playstation4", Icon: PlayStation4BrandIcon },
  { name: "PlayStation 5", slug: "playstation5", Icon: PlayStation5BrandIcon },
  { name: "PlayStation Portable", slug: "playstationportable", Icon: PlayStationPortableBrandIcon },
  { name: "PlayStation Vita", slug: "playstationvita", Icon: PlayStationVitaBrandIcon },
  { name: "Pleroma", slug: "pleroma", Icon: PleromaBrandIcon },
  { name: "Plesk", slug: "plesk", Icon: PleskBrandIcon },
  { name: "Plex", slug: "plex", Icon: PlexBrandIcon },
  { name: "Plotly", slug: "plotly", Icon: PlotlyBrandIcon },
  { name: "Plume", slug: "plume", Icon: PlumeBrandIcon },
  { name: "Pluralsight", slug: "pluralsight", Icon: PluralsightBrandIcon },
  { name: "Plurk", slug: "plurk", Icon: PlurkBrandIcon },
  { name: "PM2", slug: "pm2", Icon: PM2BrandIcon },
  { name: "pnpm", slug: "pnpm", Icon: PnpmBrandIcon },
  { name: "Pocket Casts", slug: "pocketcasts", Icon: PocketCastsBrandIcon },
  { name: "PocketBase", slug: "pocketbase", Icon: PocketBaseBrandIcon },
  { name: "Podcast Addict", slug: "podcastaddict", Icon: PodcastAddictBrandIcon },
  { name: "Podcast Index", slug: "podcastindex", Icon: PodcastIndexBrandIcon },
  { name: "Podman", slug: "podman", Icon: PodmanBrandIcon },
  { name: "Poe", slug: "poe", Icon: PoeBrandIcon },
  { name: "Poetry", slug: "poetry", Icon: PoetryBrandIcon },
  { name: "Polars", slug: "polars", Icon: PolarsBrandIcon },
  { name: "Polestar", slug: "polestar", Icon: PolestarBrandIcon },
  { name: "Polkadot", slug: "polkadot", Icon: PolkadotBrandIcon },
  { name: "Poly", slug: "poly", Icon: PolyBrandIcon },
  { name: "Polygon", slug: "polygon", Icon: PolygonBrandIcon },
  { name: "Polymer Project", slug: "polymerproject", Icon: PolymerProjectBrandIcon },
  { name: "Polywork", slug: "polywork", Icon: PolyworkBrandIcon },
  { name: "Pomerium", slug: "pomerium", Icon: PomeriumBrandIcon },
  { name: "Pond5", slug: "pond5", Icon: Pond5BrandIcon },
  { name: "Pop!_OS", slug: "popos", Icon: PopOSBrandIcon },
  { name: "Porkbun", slug: "porkbun", Icon: PorkbunBrandIcon },
  { name: "Porsche", slug: "porsche", Icon: PorscheBrandIcon },
  { name: "PortableApps.com", slug: "portableappsdotcom", Icon: PortableAppsComBrandIcon },
  { name: "Portainer", slug: "portainer", Icon: PortainerBrandIcon },
  { name: "PortSwigger", slug: "portswigger", Icon: PortSwiggerBrandIcon },
  { name: "Posit", slug: "posit", Icon: PositBrandIcon },
  { name: "PostCSS", slug: "postcss", Icon: PostCSSBrandIcon },
  { name: "PostgreSQL", slug: "postgresql", Icon: PostgreSQLBrandIcon },
  { name: "PostHog", slug: "posthog", Icon: PostHogBrandIcon },
  { name: "Postiz", slug: "postiz", Icon: PostizBrandIcon },
  { name: "Postman", slug: "postman", Icon: PostmanBrandIcon },
  { name: "Postmates", slug: "postmates", Icon: PostmatesBrandIcon },
  { name: "POWERS", slug: "powers", Icon: PowersBrandIcon },
  { name: "pr.co", slug: "prdotco", Icon: PrCoBrandIcon },
  { name: "pre-commit", slug: "precommit", Icon: PreCommitBrandIcon },
  { name: "Preact", slug: "preact", Icon: PreactBrandIcon },
  { name: "Prefect", slug: "prefect", Icon: PrefectBrandIcon },
  { name: "prek", slug: "prek", Icon: PrekBrandIcon },
  { name: "PreMiD", slug: "premid", Icon: PreMiDBrandIcon },
  { name: "Premier League", slug: "premierleague", Icon: PremierLeagueBrandIcon },
  { name: "PrepBytes", slug: "prepbytes", Icon: PrepBytesBrandIcon },
  { name: "PrestaShop", slug: "prestashop", Icon: PrestaShopBrandIcon },
  { name: "Presto", slug: "presto", Icon: PrestoBrandIcon },
  { name: "Prettier", slug: "prettier", Icon: PrettierBrandIcon },
  { name: "Pretzel", slug: "pretzel", Icon: PretzelBrandIcon },
  { name: "Prevention", slug: "prevention", Icon: PreventionBrandIcon },
  { name: "Prezi", slug: "prezi", Icon: PreziBrandIcon },
  { name: "PrimeFaces", slug: "primefaces", Icon: PrimeFacesBrandIcon },
  { name: "PrimeNG", slug: "primeng", Icon: PrimeNGBrandIcon },
  { name: "PrimeReact", slug: "primereact", Icon: PrimeReactBrandIcon },
  { name: "PrimeVue", slug: "primevue", Icon: PrimeVueBrandIcon },
  { name: "Printables", slug: "printables", Icon: PrintablesBrandIcon },
  { name: "Prisma", slug: "prisma", Icon: PrismaBrandIcon },
  { name: "Prismic", slug: "prismic", Icon: PrismicBrandIcon },
  { name: "Private Division", slug: "privatedivision", Icon: PrivateDivisionBrandIcon },
  { name: "Private Internet Access", slug: "privateinternetaccess", Icon: PrivateInternetAccessBrandIcon },
  { name: "Pro Tools", slug: "protools", Icon: ProToolsBrandIcon },
  { name: "Probot", slug: "probot", Icon: ProbotBrandIcon },
  { name: "Processing Foundation", slug: "processingfoundation", Icon: ProcessingFoundationBrandIcon },
  { name: "ProcessOn", slug: "processon", Icon: ProcessOnBrandIcon },
  { name: "ProcessWire", slug: "processwire", Icon: ProcessWireBrandIcon },
  { name: "Product Hunt", slug: "producthunt", Icon: ProductHuntBrandIcon },
  { name: "Progate", slug: "progate", Icon: ProgateBrandIcon },
  { name: "Progress", slug: "progress", Icon: ProgressBrandIcon },
  { name: "Prometheus", slug: "prometheus", Icon: PrometheusBrandIcon },
  { name: "Pronouns.page", slug: "pronounsdotpage", Icon: PronounsPageBrandIcon },
  { name: "ProseMirror", slug: "prosemirror", Icon: ProseMirrorBrandIcon },
  { name: "ProSieben", slug: "prosieben", Icon: ProSiebenBrandIcon },
  { name: "Proteus", slug: "proteus", Icon: ProteusBrandIcon },
  { name: "Proto.io", slug: "protodotio", Icon: ProtoIoBrandIcon },
  { name: "protocols.io", slug: "protocolsdotio", Icon: ProtocolsIoBrandIcon },
  { name: "Proton", slug: "proton", Icon: ProtonBrandIcon },
  { name: "Proton Calendar", slug: "protoncalendar", Icon: ProtonCalendarBrandIcon },
  { name: "Proton Drive", slug: "protondrive", Icon: ProtonDriveBrandIcon },
  { name: "Proton Mail", slug: "protonmail", Icon: ProtonMailBrandIcon },
  { name: "Proton VPN", slug: "protonvpn", Icon: ProtonVPNBrandIcon },
  { name: "ProtonDB", slug: "protondb", Icon: ProtonDBBrandIcon },
  { name: "Protractor", slug: "protractor", Icon: ProtractorBrandIcon },
  { name: "Proxmox", slug: "proxmox", Icon: ProxmoxBrandIcon },
  { name: "Pterodactyl", slug: "pterodactyl", Icon: PterodactylBrandIcon },
  { name: "PUBG", slug: "pubg", Icon: PUBGBrandIcon },
  { name: "Publons", slug: "publons", Icon: PublonsBrandIcon },
  { name: "PubMed", slug: "pubmed", Icon: PubMedBrandIcon },
  { name: "Pug", slug: "pug", Icon: PugBrandIcon },
  { name: "Pulumi", slug: "pulumi", Icon: PulumiBrandIcon },
  { name: "Puma", slug: "puma", Icon: PumaBrandIcon },
  { name: "Puppet", slug: "puppet", Icon: PuppetBrandIcon },
  { name: "Puppeteer", slug: "puppeteer", Icon: PuppeteerBrandIcon },
  { name: "PureScript", slug: "purescript", Icon: PureScriptBrandIcon },
  { name: "PurgeCSS", slug: "purgecss", Icon: PurgeCSSBrandIcon },
  { name: "Purism", slug: "purism", Icon: PurismBrandIcon },
  { name: "Pushbullet", slug: "pushbullet", Icon: PushbulletBrandIcon },
  { name: "Pusher", slug: "pusher", Icon: PusherBrandIcon },
  { name: "PWA", slug: "pwa", Icon: PWABrandIcon },
  { name: "PyCharm", slug: "pycharm", Icon: PyCharmBrandIcon },
  { name: "PyCQA", slug: "pycqa", Icon: PyCQABrandIcon },
  { name: "Pydantic", slug: "pydantic", Icon: PydanticBrandIcon },
  { name: "PyG", slug: "pyg", Icon: PyGBrandIcon },
  { name: "PyPI", slug: "pypi", Icon: PyPIBrandIcon },
  { name: "PyPy", slug: "pypy", Icon: PyPyBrandIcon },
  { name: "PyScaffold", slug: "pyscaffold", Icon: PyScaffoldBrandIcon },
  { name: "PySyft", slug: "pysyft", Icon: PySyftBrandIcon },
  { name: "Pytest", slug: "pytest", Icon: PytestBrandIcon },
  { name: "Python", slug: "python", Icon: PythonBrandIcon },
  { name: "PythonAnywhere", slug: "pythonanywhere", Icon: PythonAnywhereBrandIcon },
  { name: "PyTorch", slug: "pytorch", Icon: PyTorchBrandIcon },
  { name: "PyUp", slug: "pyup", Icon: PyUpBrandIcon },
  { name: "Qantas", slug: "qantas", Icon: QantasBrandIcon },
  { name: "Qase", slug: "qase", Icon: QaseBrandIcon },
  { name: "Qatar Airways", slug: "qatarairways", Icon: QatarAirwaysBrandIcon },
  { name: "qbittorrent", slug: "qbittorrent", Icon: QbittorrentBrandIcon },
  { name: "Qdrant", slug: "qdrant", Icon: QdrantBrandIcon },
  { name: "QEMU", slug: "qemu", Icon: QEMUBrandIcon },
  { name: "QGIS", slug: "qgis", Icon: QGISBrandIcon },
  { name: "Qi", slug: "qi", Icon: QiBrandIcon },
  { name: "Qiita", slug: "qiita", Icon: QiitaBrandIcon },
  { name: "Qiskit", slug: "qiskit", Icon: QiskitBrandIcon },
  { name: "QIWI", slug: "qiwi", Icon: QIWIBrandIcon },
  { name: "Qlik", slug: "qlik", Icon: QlikBrandIcon },
  { name: "Qlty", slug: "qlty", Icon: QltyBrandIcon },
  { name: "QMK", slug: "qmk", Icon: QMKBrandIcon },
  { name: "QNAP", slug: "qnap", Icon: QNAPBrandIcon },
  { name: "Qodo", slug: "qodo", Icon: QodoBrandIcon },
  { name: "QQ", slug: "qq", Icon: QQBrandIcon },
  { name: "Qt", slug: "qt", Icon: QtBrandIcon },
  { name: "Quad9", slug: "quad9", Icon: Quad9BrandIcon },
  { name: "Qualcomm", slug: "qualcomm", Icon: QualcommBrandIcon },
  { name: "Qualtrics", slug: "qualtrics", Icon: QualtricsBrandIcon },
  { name: "Qualys", slug: "qualys", Icon: QualysBrandIcon },
  { name: "Quantcast", slug: "quantcast", Icon: QuantcastBrandIcon },
  { name: "QuantConnect", slug: "quantconnect", Icon: QuantConnectBrandIcon },
  { name: "Quarkus", slug: "quarkus", Icon: QuarkusBrandIcon },
  { name: "Quarto", slug: "quarto", Icon: QuartoBrandIcon },
  { name: "Quasar", slug: "quasar", Icon: QuasarBrandIcon },
  { name: "Qubes OS", slug: "qubesos", Icon: QubesOSBrandIcon },
  { name: "Quest", slug: "quest", Icon: QuestBrandIcon },
  { name: "QuickBooks", slug: "quickbooks", Icon: QuickBooksBrandIcon },
  { name: "QuickLook", slug: "quicklook", Icon: QuickLookBrandIcon },
  { name: "QuickTime", slug: "quicktime", Icon: QuickTimeBrandIcon },
  { name: "quicktype", slug: "quicktype", Icon: QuicktypeBrandIcon },
  { name: "Quizlet", slug: "quizlet", Icon: QuizletBrandIcon },
  { name: "Quora", slug: "quora", Icon: QuoraBrandIcon },
  { name: "Qwant", slug: "qwant", Icon: QwantBrandIcon },
  { name: "QWen", slug: "qwen", Icon: QWenBrandIcon },
  { name: "Qwik", slug: "qwik", Icon: QwikBrandIcon },
  { name: "Qwiklabs", slug: "qwiklabs", Icon: QwiklabsBrandIcon },
  { name: "Qzone", slug: "qzone", Icon: QzoneBrandIcon },
  { name: "R", slug: "r", Icon: RBrandIcon },
  { name: "R3", slug: "r3", Icon: R3BrandIcon },
  { name: "RabbitMQ", slug: "rabbitmq", Icon: RabbitMQBrandIcon },
  { name: "Racket", slug: "racket", Icon: RacketBrandIcon },
  { name: "RAD Studio", slug: "radstudio", Icon: RADStudioBrandIcon },
  { name: "Radar", slug: "radar", Icon: RadarBrandIcon },
  { name: "radarr", slug: "radarr", Icon: RadarrBrandIcon },
  { name: "Radiant Earth", slug: "radiantearth", Icon: RadiantEarthBrandIcon },
  { name: "Radio France", slug: "radiofrance", Icon: RadioFranceBrandIcon },
  { name: "Radix UI", slug: "radixui", Icon: RadixUIBrandIcon },
  { name: "Railway", slug: "railway", Icon: RailwayBrandIcon },
  { name: "Rainmeter", slug: "rainmeter", Icon: RainmeterBrandIcon },
  { name: "RainYun", slug: "rainyun", Icon: RainYunBrandIcon },
  { name: "Rakuten", slug: "rakuten", Icon: RakutenBrandIcon },
  { name: "Rakuten Kobo", slug: "rakutenkobo", Icon: RakutenKoboBrandIcon },
  { name: "Ram", slug: "ram", Icon: RamBrandIcon },
  { name: "Rancher", slug: "rancher", Icon: RancherBrandIcon },
  { name: "Rapid", slug: "rapid", Icon: RapidBrandIcon },
  { name: "Rarible", slug: "rarible", Icon: RaribleBrandIcon },
  { name: "Rasa", slug: "rasa", Icon: RasaBrandIcon },
  { name: "Raspberry Pi", slug: "raspberrypi", Icon: RaspberryPiBrandIcon },
  { name: "Ratatui", slug: "ratatui", Icon: RatatuiBrandIcon },
  { name: "Ravelry", slug: "ravelry", Icon: RavelryBrandIcon },
  { name: "Ray", slug: "ray", Icon: RayBrandIcon },
  { name: "Raycast", slug: "raycast", Icon: RaycastBrandIcon },
  { name: "Raylib", slug: "raylib", Icon: RaylibBrandIcon },
  { name: "Razer", slug: "razer", Icon: RazerBrandIcon },
  { name: "Razorpay", slug: "razorpay", Icon: RazorpayBrandIcon },
  { name: "Rclone", slug: "rclone", Icon: RcloneBrandIcon },
  { name: "React", slug: "react", Icon: ReactBrandIcon },
  { name: "React Bootstrap", slug: "reactbootstrap", Icon: ReactBootstrapBrandIcon },
  { name: "React Hook Form", slug: "reacthookform", Icon: ReactHookFormBrandIcon },
  { name: "React Query", slug: "reactquery", Icon: ReactQueryBrandIcon },
  { name: "React Router", slug: "reactrouter", Icon: ReactRouterBrandIcon },
  { name: "React Table", slug: "reacttable", Icon: ReactTableBrandIcon },
  { name: "Reactive Resume", slug: "reactiveresume", Icon: ReactiveResumeBrandIcon },
  { name: "ReactiveX", slug: "reactivex", Icon: ReactiveXBrandIcon },
  { name: "ReactOS", slug: "reactos", Icon: ReactOSBrandIcon },
  { name: "Read the Docs", slug: "readthedocs", Icon: ReadTheDocsBrandIcon },
  { name: "Read.cv", slug: "readdotcv", Icon: ReadCvBrandIcon },
  { name: "ReadMe", slug: "readme", Icon: ReadMeBrandIcon },
  { name: "Reason", slug: "reason", Icon: ReasonBrandIcon },
  { name: "Reason Studios", slug: "reasonstudios", Icon: ReasonStudiosBrandIcon },
  { name: "Recoil", slug: "recoil", Icon: RecoilBrandIcon },
  { name: "Red", slug: "red", Icon: RedBrandIcon },
  { name: "Red Bull", slug: "redbull", Icon: RedBullBrandIcon },
  { name: "Red Candle Games", slug: "redcandlegames", Icon: RedCandleGamesBrandIcon },
  { name: "Red Hat", slug: "redhat", Icon: RedHatBrandIcon },
  { name: "Red Hat Open Shift", slug: "redhatopenshift", Icon: RedHatOpenShiftBrandIcon },
  { name: "Redash", slug: "redash", Icon: RedashBrandIcon },
  { name: "Redbubble", slug: "redbubble", Icon: RedbubbleBrandIcon },
  { name: "Reddit", slug: "reddit", Icon: RedditBrandIcon },
  { name: "Redis", slug: "redis", Icon: RedisBrandIcon },
  { name: "Redmine", slug: "redmine", Icon: RedmineBrandIcon },
  { name: "Redox", slug: "redox", Icon: RedoxBrandIcon },
  { name: "Redragon", slug: "redragon", Icon: RedragonBrandIcon },
  { name: "Redsys", slug: "redsys", Icon: RedsysBrandIcon },
  { name: "Redux", slug: "redux", Icon: ReduxBrandIcon },
  { name: "Redux-Saga", slug: "reduxsaga", Icon: ReduxSagaBrandIcon },
  { name: "RedwoodJS", slug: "redwoodjs", Icon: RedwoodJSBrandIcon },
  { name: "Reebok", slug: "reebok", Icon: ReebokBrandIcon },
  { name: "Refine", slug: "refine", Icon: RefineBrandIcon },
  { name: "Refined GitHub", slug: "refinedgithub", Icon: RefinedGitHubBrandIcon },
  { name: "Reflex", slug: "reflex", Icon: ReflexBrandIcon },
  { name: "Reka UI", slug: "rekaui", Icon: RekaUIBrandIcon },
  { name: "Relay", slug: "relay", Icon: RelayBrandIcon },
  { name: "Reliance Industries Limited", slug: "relianceindustrieslimited", Icon: RelianceIndustriesLimitedBrandIcon },
  { name: "remark", slug: "remark", Icon: RemarkBrandIcon },
  { name: "Remedy Entertainment", slug: "remedyentertainment", Icon: RemedyEntertainmentBrandIcon },
  { name: "Remix", slug: "remix", Icon: RemixBrandIcon },
  { name: "remove.bg", slug: "removedotbg", Icon: RemoveBgBrandIcon },
  { name: "Ren'Py", slug: "renpy", Icon: RenPyBrandIcon },
  { name: "Renault", slug: "renault", Icon: RenaultBrandIcon },
  { name: "Render", slug: "render", Icon: RenderBrandIcon },
  { name: "Renovate", slug: "renovate", Icon: RenovateBrandIcon },
  { name: "Renren", slug: "renren", Icon: RenrenBrandIcon },
  { name: "Replicate", slug: "replicate", Icon: ReplicateBrandIcon },
  { name: "Replit", slug: "replit", Icon: ReplitBrandIcon },
  { name: "Republic of Gamers", slug: "republicofgamers", Icon: RepublicOfGamersBrandIcon },
  { name: "ReScript", slug: "rescript", Icon: ReScriptBrandIcon },
  { name: "RescueTime", slug: "rescuetime", Icon: RescueTimeBrandIcon },
  { name: "ResearchGate", slug: "researchgate", Icon: ResearchGateBrandIcon },
  { name: "Resend", slug: "resend", Icon: ResendBrandIcon },
  { name: "ReSharper", slug: "resharper", Icon: ReSharperBrandIcon },
  { name: "Resurrection Remix OS", slug: "resurrectionremixos", Icon: ResurrectionRemixOSBrandIcon },
  { name: "Retool", slug: "retool", Icon: RetoolBrandIcon },
  { name: "Retro Achievements", slug: "retroachievements", Icon: RetroAchievementsBrandIcon },
  { name: "RetroArch", slug: "retroarch", Icon: RetroArchBrandIcon },
  { name: "RetroPie", slug: "retropie", Icon: RetroPieBrandIcon },
  { name: "ReVanced", slug: "revanced", Icon: ReVancedBrandIcon },
  { name: "reveal.js", slug: "revealdotjs", Icon: RevealJsBrandIcon },
  { name: "RevenueCat", slug: "revenuecat", Icon: RevenueCatBrandIcon },
  { name: "ReverbNation", slug: "reverbnation", Icon: ReverbNationBrandIcon },
  { name: "Revolt.chat", slug: "revoltdotchat", Icon: RevoltChatBrandIcon },
  { name: "Revolut", slug: "revolut", Icon: RevolutBrandIcon },
  { name: "REWE", slug: "rewe", Icon: REWEBrandIcon },
  { name: "Rezgo", slug: "rezgo", Icon: RezgoBrandIcon },
  { name: "Rhinoceros", slug: "rhinoceros", Icon: RhinocerosBrandIcon },
  { name: "Rich", slug: "rich", Icon: RichBrandIcon },
  { name: "Rider", slug: "rider", Icon: RiderBrandIcon },
  { name: "Rimac Automobili", slug: "rimacautomobili", Icon: RimacAutomobiliBrandIcon },
  { name: "Rime", slug: "rime", Icon: RimeBrandIcon },
  { name: "Ring", slug: "ring", Icon: RingBrandIcon },
  { name: "Riot Games", slug: "riotgames", Icon: RiotGamesBrandIcon },
  { name: "Ripple", slug: "ripple", Icon: RippleBrandIcon },
  { name: "RISC-V", slug: "riscv", Icon: RISCVBrandIcon },
  { name: "Riseup", slug: "riseup", Icon: RiseupBrandIcon },
  { name: "Ritz Carlton", slug: "ritzcarlton", Icon: RitzCarltonBrandIcon },
  { name: "Rive", slug: "rive", Icon: RiveBrandIcon },
  { name: "roadmap.sh", slug: "roadmapdotsh", Icon: RoadmapShBrandIcon },
  { name: "Roam Research", slug: "roamresearch", Icon: RoamResearchBrandIcon },
  { name: "Robinhood", slug: "robinhood", Icon: RobinhoodBrandIcon },
  { name: "Roblox", slug: "roblox", Icon: RobloxBrandIcon },
  { name: "Roblox Studio", slug: "robloxstudio", Icon: RobloxStudioBrandIcon },
  { name: "Roboflow", slug: "roboflow", Icon: RoboflowBrandIcon },
  { name: "Robot Framework", slug: "robotframework", Icon: RobotFrameworkBrandIcon },
  { name: "Rocket", slug: "rocket", Icon: RocketBrandIcon },
  { name: "Rocket.Chat", slug: "rocketdotchat", Icon: RocketChatBrandIcon },
  { name: "RocksDB", slug: "rocksdb", Icon: RocksDBBrandIcon },
  { name: "Rockstar Games", slug: "rockstargames", Icon: RockstarGamesBrandIcon },
  { name: "Rockwell Automation", slug: "rockwellautomation", Icon: RockwellAutomationBrandIcon },
  { name: "Rocky Linux", slug: "rockylinux", Icon: RockyLinuxBrandIcon },
  { name: "Roku", slug: "roku", Icon: RokuBrandIcon },
  { name: "Roll20", slug: "roll20", Icon: Roll20BrandIcon },
  { name: "Rollbar", slug: "rollbar", Icon: RollbarBrandIcon },
  { name: "Rolldown", slug: "rolldown", Icon: RolldownBrandIcon },
  { name: "Rolls-Royce", slug: "rollsroyce", Icon: RollsRoyceBrandIcon },
  { name: "rollup.js", slug: "rollupdotjs", Icon: RollupJsBrandIcon },
  { name: "Rook", slug: "rook", Icon: RookBrandIcon },
  { name: "Roon", slug: "roon", Icon: RoonBrandIcon },
  { name: "ROOT", slug: "root", Icon: ROOTBrandIcon },
  { name: "Root Me", slug: "rootme", Icon: RootMeBrandIcon },
  { name: "Roots", slug: "roots", Icon: RootsBrandIcon },
  { name: "Roots Bedrock", slug: "rootsbedrock", Icon: RootsBedrockBrandIcon },
  { name: "Roots Sage", slug: "rootssage", Icon: RootsSageBrandIcon },
  { name: "ROS", slug: "ros", Icon: ROSBrandIcon },
  { name: "Rossmann", slug: "rossmann", Icon: RossmannBrandIcon },
  { name: "Rotary International", slug: "rotaryinternational", Icon: RotaryInternationalBrandIcon },
  { name: "Rotten Tomatoes", slug: "rottentomatoes", Icon: RottenTomatoesBrandIcon },
  { name: "Roundcube", slug: "roundcube", Icon: RoundcubeBrandIcon },
  { name: "RSocket", slug: "rsocket", Icon: RSocketBrandIcon },
  { name: "RSS", slug: "rss", Icon: RSSBrandIcon },
  { name: "RStudio IDE", slug: "rstudioide", Icon: RStudioIDEBrandIcon },
  { name: "RTÉ", slug: "rte", Icon: RTBrandIcon },
  { name: "RTL", slug: "rtl", Icon: RTLBrandIcon },
  { name: "RTLZWEI", slug: "rtlzwei", Icon: RtlzweiBrandIcon },
  { name: "RTM", slug: "rtm", Icon: RTMBrandIcon },
  { name: "RuboCop", slug: "rubocop", Icon: RuboCopBrandIcon },
  { name: "Ruby", slug: "ruby", Icon: RubyBrandIcon },
  { name: "Ruby on Rails", slug: "rubyonrails", Icon: RubyOnRailsBrandIcon },
  { name: "Ruby Sinatra", slug: "rubysinatra", Icon: RubySinatraBrandIcon },
  { name: "RubyGems", slug: "rubygems", Icon: RubyGemsBrandIcon },
  { name: "RubyMine", slug: "rubymine", Icon: RubyMineBrandIcon },
  { name: "Ruff", slug: "ruff", Icon: RuffBrandIcon },
  { name: "Rumahweb", slug: "rumahweb", Icon: RumahwebBrandIcon },
  { name: "Rumble", slug: "rumble", Icon: RumbleBrandIcon },
  { name: "Rundeck", slug: "rundeck", Icon: RundeckBrandIcon },
  { name: "Runkeeper", slug: "runkeeper", Icon: RunkeeperBrandIcon },
  { name: "RunKit", slug: "runkit", Icon: RunKitBrandIcon },
  { name: "Runrun.it", slug: "runrundotit", Icon: RunrunItBrandIcon },
  { name: "Rust", slug: "rust", Icon: RustBrandIcon },
  { name: "RustDesk", slug: "rustdesk", Icon: RustDeskBrandIcon },
  { name: "RustFS", slug: "rustfs", Icon: RustFSBrandIcon },
  { name: "RxDB", slug: "rxdb", Icon: RxDBBrandIcon },
  { name: "Ryanair", slug: "ryanair", Icon: RyanairBrandIcon },
  { name: "Rye", slug: "rye", Icon: RyeBrandIcon },
  { name: "S7 Airlines", slug: "s7airlines", Icon: S7AirlinesBrandIcon },
  { name: "Sabanci", slug: "sabanci", Icon: SabanciBrandIcon },
  { name: "Safari", slug: "safari", Icon: SafariBrandIcon },
  { name: "Sage", slug: "sage", Icon: SageBrandIcon },
  { name: "SageMath", slug: "sagemath", Icon: SageMathBrandIcon },
  { name: "Sahibinden", slug: "sahibinden", Icon: SahibindenBrandIcon },
  { name: "Sailfish OS", slug: "sailfishos", Icon: SailfishOSBrandIcon },
  { name: "Sails.js", slug: "sailsdotjs", Icon: SailsJsBrandIcon },
  { name: "Salla", slug: "salla", Icon: SallaBrandIcon },
  { name: "Salt Project", slug: "saltproject", Icon: SaltProjectBrandIcon },
  { name: "Sam's Club", slug: "samsclub", Icon: SamSClubBrandIcon },
  { name: "Samsung", slug: "samsung", Icon: SamsungBrandIcon },
  { name: "Samsung Pay", slug: "samsungpay", Icon: SamsungPayBrandIcon },
  { name: "San Francisco Municipal Railway", slug: "sanfranciscomunicipalrailway", Icon: SanFranciscoMunicipalRailwayBrandIcon },
  { name: "Sanic", slug: "sanic", Icon: SanicBrandIcon },
  { name: "Sanity", slug: "sanity", Icon: SanityBrandIcon },
  { name: "São Paulo Metro", slug: "saopaulometro", Icon: SOPauloMetroBrandIcon },
  { name: "SAP", slug: "sap", Icon: SAPBrandIcon },
  { name: "Sartorius", slug: "sartorius", Icon: SartoriusBrandIcon },
  { name: "Sass", slug: "sass", Icon: SassBrandIcon },
  { name: "Sat.1", slug: "sat1", Icon: Sat1BrandIcon },
  { name: "Satellite", slug: "satellite", Icon: SatelliteBrandIcon },
  { name: "Saturn", slug: "saturn", Icon: SaturnBrandIcon },
  { name: "Sauce Labs", slug: "saucelabs", Icon: SauceLabsBrandIcon },
  { name: "Saudia", slug: "saudia", Icon: SaudiaBrandIcon },
  { name: "Scala", slug: "scala", Icon: ScalaBrandIcon },
  { name: "Scalar", slug: "scalar", Icon: ScalarBrandIcon },
  { name: "Scaleway", slug: "scaleway", Icon: ScalewayBrandIcon },
  { name: "Scan", slug: "scan", Icon: ScanBrandIcon },
  { name: "Scania", slug: "scania", Icon: ScaniaBrandIcon },
  { name: "Schneider Electric", slug: "schneiderelectric", Icon: SchneiderElectricBrandIcon },
  { name: "scikit-learn", slug: "scikitlearn", Icon: ScikitLearnBrandIcon },
  { name: "Scilab", slug: "scilab", Icon: ScilabBrandIcon },
  { name: "SciPy", slug: "scipy", Icon: SciPyBrandIcon },
  { name: "Scopus", slug: "scopus", Icon: ScopusBrandIcon },
  { name: "SCP Foundation", slug: "scpfoundation", Icon: SCPFoundationBrandIcon },
  { name: "Scrapbox", slug: "scrapbox", Icon: ScrapboxBrandIcon },
  { name: "Scrapy", slug: "scrapy", Icon: ScrapyBrandIcon },
  { name: "Scratch", slug: "scratch", Icon: ScratchBrandIcon },
  { name: "Screencastify", slug: "screencastify", Icon: ScreencastifyBrandIcon },
  { name: "Scrimba", slug: "scrimba", Icon: ScrimbaBrandIcon },
  { name: "ScrollReveal", slug: "scrollreveal", Icon: ScrollRevealBrandIcon },
  { name: "Scrum Alliance", slug: "scrumalliance", Icon: ScrumAllianceBrandIcon },
  { name: "Scrutinizer CI", slug: "scrutinizerci", Icon: ScrutinizerCIBrandIcon },
  { name: "ScyllaDB", slug: "scylladb", Icon: ScyllaDBBrandIcon },
  { name: "Seafile", slug: "seafile", Icon: SeafileBrandIcon },
  { name: "Seagate", slug: "seagate", Icon: SeagateBrandIcon },
  { name: "SearXNG", slug: "searxng", Icon: SearXNGBrandIcon },
  { name: "SEAT", slug: "seat", Icon: SEATBrandIcon },
  { name: "SeatGeek", slug: "seatgeek", Icon: SeatGeekBrandIcon },
  { name: "SecurityScorecard", slug: "securityscorecard", Icon: SecurityScorecardBrandIcon },
  { name: "Sefaria", slug: "sefaria", Icon: SefariaBrandIcon },
  { name: "Sega", slug: "sega", Icon: SegaBrandIcon },
  { name: "Selenium", slug: "selenium", Icon: SeleniumBrandIcon },
  { name: "Sellfy", slug: "sellfy", Icon: SellfyBrandIcon },
  { name: "Semantic Scholar", slug: "semanticscholar", Icon: SemanticScholarBrandIcon },
  { name: "Semantic UI", slug: "semanticui", Icon: SemanticUIBrandIcon },
  { name: "Semantic UI React", slug: "semanticuireact", Icon: SemanticUIReactBrandIcon },
  { name: "Semantic Web", slug: "semanticweb", Icon: SemanticWebBrandIcon },
  { name: "semantic-release", slug: "semanticrelease", Icon: SemanticReleaseBrandIcon },
  { name: "Semaphore CI", slug: "semaphoreci", Icon: SemaphoreCIBrandIcon },
  { name: "Semrush", slug: "semrush", Icon: SemrushBrandIcon },
  { name: "SemVer", slug: "semver", Icon: SemVerBrandIcon },
  { name: "Sencha", slug: "sencha", Icon: SenchaBrandIcon },
  { name: "Sennheiser", slug: "sennheiser", Icon: SennheiserBrandIcon },
  { name: "Sensu", slug: "sensu", Icon: SensuBrandIcon },
  { name: "Sentry", slug: "sentry", Icon: SentryBrandIcon },
  { name: "SEPA", slug: "sepa", Icon: SEPABrandIcon },
  { name: "Sequelize", slug: "sequelize", Icon: SequelizeBrandIcon },
  { name: "ServBay", slug: "servbay", Icon: ServBayBrandIcon },
  { name: "Server Fault", slug: "serverfault", Icon: ServerFaultBrandIcon },
  { name: "Serverless", slug: "serverless", Icon: ServerlessBrandIcon },
  { name: "Session", slug: "session", Icon: SessionBrandIcon },
  { name: "Sessionize", slug: "sessionize", Icon: SessionizeBrandIcon },
  { name: "Setapp", slug: "setapp", Icon: SetappBrandIcon },
  { name: "Setuptools", slug: "setuptools", Icon: SetuptoolsBrandIcon },
  { name: "SFML", slug: "sfml", Icon: SFMLBrandIcon },
  { name: "shadcn/ui", slug: "shadcnui", Icon: ShadcnUiBrandIcon },
  { name: "Shadow", slug: "shadow", Icon: ShadowBrandIcon },
  { name: "Shanghai Metro", slug: "shanghaimetro", Icon: ShanghaiMetroBrandIcon },
  { name: "ShareX", slug: "sharex", Icon: ShareXBrandIcon },
  { name: "sharp", slug: "sharp", Icon: SharpBrandIcon },
  { name: "Shazam", slug: "shazam", Icon: ShazamBrandIcon },
  { name: "Shell", slug: "shell", Icon: ShellBrandIcon },
  { name: "Shelly", slug: "shelly", Icon: ShellyBrandIcon },
  { name: "Shenzhen Metro", slug: "shenzhenmetro", Icon: ShenzhenMetroBrandIcon },
  { name: "Shields.io", slug: "shieldsdotio", Icon: ShieldsIoBrandIcon },
  { name: "Shikimori", slug: "shikimori", Icon: ShikimoriBrandIcon },
  { name: "Shopee", slug: "shopee", Icon: ShopeeBrandIcon },
  { name: "Shopify", slug: "shopify", Icon: ShopifyBrandIcon },
  { name: "Shopware", slug: "shopware", Icon: ShopwareBrandIcon },
  { name: "Shortcut", slug: "shortcut", Icon: ShortcutBrandIcon },
  { name: "Showpad", slug: "showpad", Icon: ShowpadBrandIcon },
  { name: "Showtime", slug: "showtime", Icon: ShowtimeBrandIcon },
  { name: "Showwcase", slug: "showwcase", Icon: ShowwcaseBrandIcon },
  { name: "Sidekiq", slug: "sidekiq", Icon: SidekiqBrandIcon },
  { name: "SideQuest", slug: "sidequest", Icon: SideQuestBrandIcon },
  { name: "Siemens", slug: "siemens", Icon: SiemensBrandIcon },
  { name: "SiFive", slug: "sifive", Icon: SiFiveBrandIcon },
  { name: "Signal", slug: "signal", Icon: SignalBrandIcon },
  { name: "Silver Airways", slug: "silverairways", Icon: SilverAirwaysBrandIcon },
  { name: "Similarweb", slug: "similarweb", Icon: SimilarwebBrandIcon },
  { name: "Simkl", slug: "simkl", Icon: SimklBrandIcon },
  { name: "Simple Analytics", slug: "simpleanalytics", Icon: SimpleAnalyticsBrandIcon },
  { name: "Simple Icons", slug: "simpleicons", Icon: SimpleIconsBrandIcon },
  { name: "Simple Icons CDN", slug: "simpleiconscdn", Icon: SimpleIconsCDNBrandIcon },
  { name: "SimpleLocalize", slug: "simplelocalize", Icon: SimpleLocalizeBrandIcon },
  { name: "SimpleLogin", slug: "simplelogin", Icon: SimpleLoginBrandIcon },
  { name: "Simplenote", slug: "simplenote", Icon: SimplenoteBrandIcon },
  { name: "SimpleX", slug: "simplex", Icon: SimpleXBrandIcon },
  { name: "Sina Weibo", slug: "sinaweibo", Icon: SinaWeiboBrandIcon },
  { name: "Singapore Airlines", slug: "singaporeairlines", Icon: SingaporeAirlinesBrandIcon },
  { name: "SingleStore", slug: "singlestore", Icon: SingleStoreBrandIcon },
  { name: "Sitecore", slug: "sitecore", Icon: SitecoreBrandIcon },
  { name: "SitePoint", slug: "sitepoint", Icon: SitePointBrandIcon },
  { name: "SiYuan", slug: "siyuan", Icon: SiYuanBrandIcon },
  { name: "Skaffold", slug: "skaffold", Icon: SkaffoldBrandIcon },
  { name: "Skeleton", slug: "skeleton", Icon: SkeletonBrandIcon },
  { name: "Sketch", slug: "sketch", Icon: SketchBrandIcon },
  { name: "Sketchfab", slug: "sketchfab", Icon: SketchfabBrandIcon },
  { name: "SketchUp", slug: "sketchup", Icon: SketchUpBrandIcon },
  { name: "Skillshare", slug: "skillshare", Icon: SkillshareBrandIcon },
  { name: "ŠKODA", slug: "skoda", Icon: KODABrandIcon },
  { name: "Sky", slug: "sky", Icon: SkyBrandIcon },
  { name: "Skypack", slug: "skypack", Icon: SkypackBrandIcon },
  { name: "Slack", slug: "slack", Icon: SlackBrandIcon },
  { name: "Slackware", slug: "slackware", Icon: SlackwareBrandIcon },
  { name: "Slashdot", slug: "slashdot", Icon: SlashdotBrandIcon },
  { name: "SlickPic", slug: "slickpic", Icon: SlickPicBrandIcon },
  { name: "Slides", slug: "slides", Icon: SlidesBrandIcon },
  { name: "SlideShare", slug: "slideshare", Icon: SlideShareBrandIcon },
  { name: "Slint", slug: "slint", Icon: SlintBrandIcon },
  { name: "smart", slug: "smart", Icon: SmartBrandIcon },
  { name: "SmartThings", slug: "smartthings", Icon: SmartThingsBrandIcon },
  { name: "Smashing Magazine", slug: "smashingmagazine", Icon: SmashingMagazineBrandIcon },
  { name: "Smoothcomp", slug: "smoothcomp", Icon: SmoothcompBrandIcon },
  { name: "SMRT", slug: "smrt", Icon: SMRTBrandIcon },
  { name: "SmugMug", slug: "smugmug", Icon: SmugMugBrandIcon },
  { name: "Snapchat", slug: "snapchat", Icon: SnapchatBrandIcon },
  { name: "Snapcraft", slug: "snapcraft", Icon: SnapcraftBrandIcon },
  { name: "Snapdragon", slug: "snapdragon", Icon: SnapdragonBrandIcon },
  { name: "SNCF", slug: "sncf", Icon: SNCFBrandIcon },
  { name: "Snort", slug: "snort", Icon: SnortBrandIcon },
  { name: "Snowflake", slug: "snowflake", Icon: SnowflakeBrandIcon },
  { name: "Snowpack", slug: "snowpack", Icon: SnowpackBrandIcon },
  { name: "Snyk", slug: "snyk", Icon: SnykBrandIcon },
  { name: "Social Blade", slug: "socialblade", Icon: SocialBladeBrandIcon },
  { name: "Society6", slug: "society6", Icon: Society6BrandIcon },
  { name: "Socket", slug: "socket", Icon: SocketBrandIcon },
  { name: "Socket.io", slug: "socketdotio", Icon: SocketIoBrandIcon },
  { name: "Softcatalà", slug: "softcatala", Icon: SoftcatalBrandIcon },
  { name: "Softpedia", slug: "softpedia", Icon: SoftpediaBrandIcon },
  { name: "Sogou", slug: "sogou", Icon: SogouBrandIcon },
  { name: "Solana", slug: "solana", Icon: SolanaBrandIcon },
  { name: "Solid", slug: "solid", Icon: SolidBrandIcon },
  { name: "Solidity", slug: "solidity", Icon: SolidityBrandIcon },
  { name: "Sololearn", slug: "sololearn", Icon: SololearnBrandIcon },
  { name: "Solus", slug: "solus", Icon: SolusBrandIcon },
  { name: "solved.ac", slug: "solveddotac", Icon: SolvedAcBrandIcon },
  { name: "Sonar", slug: "sonar", Icon: SonarBrandIcon },
  { name: "SonarQube Cloud", slug: "sonarqubecloud", Icon: SonarQubeCloudBrandIcon },
  { name: "SonarQube for IDE", slug: "sonarqubeforide", Icon: SonarQubeForIDEBrandIcon },
  { name: "SonarQube Server", slug: "sonarqubeserver", Icon: SonarQubeServerBrandIcon },
  { name: "sonarr", slug: "sonarr", Icon: SonarrBrandIcon },
  { name: "Sonatype", slug: "sonatype", Icon: SonatypeBrandIcon },
  { name: "Songkick", slug: "songkick", Icon: SongkickBrandIcon },
  { name: "Songoda", slug: "songoda", Icon: SongodaBrandIcon },
  { name: "SonicWall", slug: "sonicwall", Icon: SonicWallBrandIcon },
  { name: "Sonos", slug: "sonos", Icon: SonosBrandIcon },
  { name: "Sony", slug: "sony", Icon: SonyBrandIcon },
  { name: "Soriana", slug: "soriana", Icon: SorianaBrandIcon },
  { name: "Soundcharts", slug: "soundcharts", Icon: SoundchartsBrandIcon },
  { name: "SoundCloud", slug: "soundcloud", Icon: SoundCloudBrandIcon },
  { name: "Source Engine", slug: "sourceengine", Icon: SourceEngineBrandIcon },
  { name: "SourceForge", slug: "sourceforge", Icon: SourceForgeBrandIcon },
  { name: "SourceHut", slug: "sourcehut", Icon: SourceHutBrandIcon },
  { name: "Sourcetree", slug: "sourcetree", Icon: SourcetreeBrandIcon },
  { name: "Southwest Airlines", slug: "southwestairlines", Icon: SouthwestAirlinesBrandIcon },
  { name: "Spacemacs", slug: "spacemacs", Icon: SpacemacsBrandIcon },
  { name: "Spaceship", slug: "spaceship", Icon: SpaceshipBrandIcon },
  { name: "SpaceX", slug: "spacex", Icon: SpaceXBrandIcon },
  { name: "spaCy", slug: "spacy", Icon: SpaCyBrandIcon },
  { name: "Spark AR", slug: "sparkar", Icon: SparkARBrandIcon },
  { name: "Sparkasse", slug: "sparkasse", Icon: SparkasseBrandIcon },
  { name: "SparkFun", slug: "sparkfun", Icon: SparkFunBrandIcon },
  { name: "SparkPost", slug: "sparkpost", Icon: SparkPostBrandIcon },
  { name: "SPDX", slug: "spdx", Icon: SPDXBrandIcon },
  { name: "Speaker Deck", slug: "speakerdeck", Icon: SpeakerDeckBrandIcon },
  { name: "Spectrum", slug: "spectrum", Icon: SpectrumBrandIcon },
  { name: "Speedtest", slug: "speedtest", Icon: SpeedtestBrandIcon },
  { name: "SpeedyPage", slug: "speedypage", Icon: SpeedyPageBrandIcon },
  { name: "Sphere Online Judge", slug: "spoj", Icon: SphereOnlineJudgeBrandIcon },
  { name: "Sphinx", slug: "sphinx", Icon: SphinxBrandIcon },
  { name: "SpiderMonkey", slug: "spidermonkey", Icon: SpiderMonkeyBrandIcon },
  { name: "SpigotMC", slug: "spigotmc", Icon: SpigotMCBrandIcon },
  { name: "Spine", slug: "spine", Icon: SpineBrandIcon },
  { name: "Spinnaker", slug: "spinnaker", Icon: SpinnakerBrandIcon },
  { name: "Splunk", slug: "splunk", Icon: SplunkBrandIcon },
  { name: "Spond", slug: "spond", Icon: SpondBrandIcon },
  { name: "Spotify", slug: "spotify", Icon: SpotifyBrandIcon },
  { name: "Spotlight", slug: "spotlight", Icon: SpotlightBrandIcon },
  { name: "Spreadshirt", slug: "spreadshirt", Icon: SpreadshirtBrandIcon },
  { name: "Spreaker", slug: "spreaker", Icon: SpreakerBrandIcon },
  { name: "Spring", slug: "spring", Icon: SpringBrandIcon },
  { name: "Spring", slug: "spring_creators", Icon: SpringCreatorsBrandIcon },
  { name: "Spring Boot", slug: "springboot", Icon: SpringBootBrandIcon },
  { name: "Spring Security", slug: "springsecurity", Icon: SpringSecurityBrandIcon },
  { name: "Spyder IDE", slug: "spyderide", Icon: SpyderIDEBrandIcon },
  { name: "SQLAlchemy", slug: "sqlalchemy", Icon: SQLAlchemyBrandIcon },
  { name: "SQLite", slug: "sqlite", Icon: SQLiteBrandIcon },
  { name: "Square", slug: "square", Icon: SquareBrandIcon },
  { name: "Square Enix", slug: "squareenix", Icon: SquareEnixBrandIcon },
  { name: "Squarespace", slug: "squarespace", Icon: SquarespaceBrandIcon },
  { name: "SRG SSR", slug: "srgssr", Icon: SRGSSRBrandIcon },
  { name: "SSRN", slug: "ssrn", Icon: SSRNBrandIcon },
  { name: "SST", slug: "sst", Icon: SSTBrandIcon },
  { name: "Stack Exchange", slug: "stackexchange", Icon: StackExchangeBrandIcon },
  { name: "Stack Overflow", slug: "stackoverflow", Icon: StackOverflowBrandIcon },
  { name: "Stackbit", slug: "stackbit", Icon: StackbitBrandIcon },
  { name: "StackBlitz", slug: "stackblitz", Icon: StackBlitzBrandIcon },
  { name: "StackEdit", slug: "stackedit", Icon: StackEditBrandIcon },
  { name: "StackHawk", slug: "stackhawk", Icon: StackHawkBrandIcon },
  { name: "StackShare", slug: "stackshare", Icon: StackShareBrandIcon },
  { name: "Stadia", slug: "stadia", Icon: StadiaBrandIcon },
  { name: "Staffbase", slug: "staffbase", Icon: StaffbaseBrandIcon },
  { name: "Stagetimer", slug: "stagetimer", Icon: StagetimerBrandIcon },
  { name: "Standard Resume", slug: "standardresume", Icon: StandardResumeBrandIcon },
  { name: "StandardJS", slug: "standardjs", Icon: StandardJSBrandIcon },
  { name: "Star Trek", slug: "startrek", Icon: StarTrekBrandIcon },
  { name: "Starbucks", slug: "starbucks", Icon: StarbucksBrandIcon },
  { name: "Stardock", slug: "stardock", Icon: StardockBrandIcon },
  { name: "Starling Bank", slug: "starlingbank", Icon: StarlingBankBrandIcon },
  { name: "Starship", slug: "starship", Icon: StarshipBrandIcon },
  { name: "start.gg", slug: "startdotgg", Icon: StartGgBrandIcon },
  { name: "Startpage", slug: "startpage", Icon: StartpageBrandIcon },
  { name: "STARZ", slug: "starz", Icon: StarzBrandIcon },
  { name: "Statamic", slug: "statamic", Icon: StatamicBrandIcon },
  { name: "Statista", slug: "statista", Icon: StatistaBrandIcon },
  { name: "Statuspage", slug: "statuspage", Icon: StatuspageBrandIcon },
  { name: "Statuspal", slug: "statuspal", Icon: StatuspalBrandIcon },
  { name: "Steam", slug: "steam", Icon: SteamBrandIcon },
  { name: "Steam Deck", slug: "steamdeck", Icon: SteamDeckBrandIcon },
  { name: "SteamDB", slug: "steamdb", Icon: SteamDBBrandIcon },
  { name: "Steamworks", slug: "steamworks", Icon: SteamworksBrandIcon },
  { name: "Steelseries", slug: "steelseries", Icon: SteelseriesBrandIcon },
  { name: "Steem", slug: "steem", Icon: SteemBrandIcon },
  { name: "Steemit", slug: "steemit", Icon: SteemitBrandIcon },
  { name: "Steinberg", slug: "steinberg", Icon: SteinbergBrandIcon },
  { name: "Stellar", slug: "stellar", Icon: StellarBrandIcon },
  { name: "Stencil", slug: "stencil", Icon: StencilBrandIcon },
  { name: "Stencyl", slug: "stencyl", Icon: StencylBrandIcon },
  { name: "Stimulus", slug: "stimulus", Icon: StimulusBrandIcon },
  { name: "STMicroelectronics", slug: "stmicroelectronics", Icon: STMicroelectronicsBrandIcon },
  { name: "StockX", slug: "stockx", Icon: StockXBrandIcon },
  { name: "StopStalk", slug: "stopstalk", Icon: StopStalkBrandIcon },
  { name: "Storyblok", slug: "storyblok", Icon: StoryblokBrandIcon },
  { name: "Storybook", slug: "storybook", Icon: StorybookBrandIcon },
  { name: "Strapi", slug: "strapi", Icon: StrapiBrandIcon },
  { name: "Strava", slug: "strava", Icon: StravaBrandIcon },
  { name: "Streamlabs", slug: "streamlabs", Icon: StreamlabsBrandIcon },
  { name: "Streamlit", slug: "streamlit", Icon: StreamlitBrandIcon },
  { name: "StreamRunners", slug: "streamrunners", Icon: StreamRunnersBrandIcon },
  { name: "Stremio", slug: "stremio", Icon: StremioBrandIcon },
  { name: "Stripe", slug: "stripe", Icon: StripeBrandIcon },
  { name: "strongSwan", slug: "strongswan", Icon: StrongSwanBrandIcon },
  { name: "Stryker", slug: "stryker", Icon: StrykerBrandIcon },
  { name: "StubHub", slug: "stubhub", Icon: StubHubBrandIcon },
  { name: "Studio 3T", slug: "studio3t", Icon: Studio3TBrandIcon },
  { name: "styled-components", slug: "styledcomponents", Icon: StyledComponentsBrandIcon },
  { name: "stylelint", slug: "stylelint", Icon: StylelintBrandIcon },
  { name: "StyleShare", slug: "styleshare", Icon: StyleShareBrandIcon },
  { name: "Stylus", slug: "stylus", Icon: StylusBrandIcon },
  { name: "Subaru", slug: "subaru", Icon: SubaruBrandIcon },
  { name: "Sublime Text", slug: "sublimetext", Icon: SublimeTextBrandIcon },
  { name: "Substack", slug: "substack", Icon: SubstackBrandIcon },
  { name: "Subtitle Edit", slug: "subtitleedit", Icon: SubtitleEditBrandIcon },
  { name: "Subversion", slug: "subversion", Icon: SubversionBrandIcon },
  { name: "suckless", slug: "suckless", Icon: SucklessBrandIcon },
  { name: "Sui", slug: "sui", Icon: SuiBrandIcon },
  { name: "Suitest", slug: "suitest", Icon: SuitestBrandIcon },
  { name: "Sumo Logic", slug: "sumologic", Icon: SumoLogicBrandIcon },
  { name: "SumUp", slug: "sumup", Icon: SumUpBrandIcon },
  { name: "Suno", slug: "suno", Icon: SunoBrandIcon },
  { name: "Sunrise", slug: "sunrise", Icon: SunriseBrandIcon },
  { name: "Supabase", slug: "supabase", Icon: SupabaseBrandIcon },
  { name: "Super User", slug: "superuser", Icon: SuperUserBrandIcon },
  { name: "Supercell", slug: "supercell", Icon: SupercellBrandIcon },
  { name: "Supercrease", slug: "supercrease", Icon: SupercreaseBrandIcon },
  { name: "Supermicro", slug: "supermicro", Icon: SupermicroBrandIcon },
  { name: "Surfshark", slug: "surfshark", Icon: SurfsharkBrandIcon },
  { name: "SurrealDB", slug: "surrealdb", Icon: SurrealDBBrandIcon },
  { name: "SurveyMonkey", slug: "surveymonkey", Icon: SurveyMonkeyBrandIcon },
  { name: "SUSE", slug: "suse", Icon: SUSEBrandIcon },
  { name: "Suzuki", slug: "suzuki", Icon: SuzukiBrandIcon },
  { name: "Svelte", slug: "svelte", Icon: SvelteBrandIcon },
  { name: "SVG", slug: "svg", Icon: SVGBrandIcon },
  { name: "SVG.js", slug: "svgdotjs", Icon: SVGJsBrandIcon },
  { name: "SVGO", slug: "svgo", Icon: SVGOBrandIcon },
  { name: "SvgTrace", slug: "svgtrace", Icon: SvgTraceBrandIcon },
  { name: "Swagger", slug: "swagger", Icon: SwaggerBrandIcon },
  { name: "Swarm", slug: "swarm", Icon: SwarmBrandIcon },
  { name: "Sway", slug: "sway", Icon: SwayBrandIcon },
  { name: "SWC", slug: "swc", Icon: SWCBrandIcon },
  { name: "Swift", slug: "swift", Icon: SwiftBrandIcon },
  { name: "Swiggy", slug: "swiggy", Icon: SwiggyBrandIcon },
  { name: "Swiper", slug: "swiper", Icon: SwiperBrandIcon },
  { name: "Swisscows", slug: "swisscows", Icon: SwisscowsBrandIcon },
  { name: "SWR", slug: "swr", Icon: SWRBrandIcon },
  { name: "Symantec", slug: "symantec", Icon: SymantecBrandIcon },
  { name: "Symbolab", slug: "symbolab", Icon: SymbolabBrandIcon },
  { name: "Symfony", slug: "symfony", Icon: SymfonyBrandIcon },
  { name: "Symphony", slug: "symphony", Icon: SymphonyBrandIcon },
  { name: "SymPy", slug: "sympy", Icon: SymPyBrandIcon },
  { name: "Syncthing", slug: "syncthing", Icon: SyncthingBrandIcon },
  { name: "Synology", slug: "synology", Icon: SynologyBrandIcon },
  { name: "System76", slug: "system76", Icon: System76BrandIcon },
  { name: "Tabelog", slug: "tabelog", Icon: TabelogBrandIcon },
  { name: "TableCheck", slug: "tablecheck", Icon: TableCheckBrandIcon },
  { name: "Taco Bell", slug: "tacobell", Icon: TacoBellBrandIcon },
  { name: "tado°", slug: "tado", Icon: TadoBrandIcon },
  { name: "Taichi Graphics", slug: "taichigraphics", Icon: TaichiGraphicsBrandIcon },
  { name: "Taichi Lang", slug: "taichilang", Icon: TaichiLangBrandIcon },
  { name: "Tails", slug: "tails", Icon: TailsBrandIcon },
  { name: "Tailscale", slug: "tailscale", Icon: TailscaleBrandIcon },
  { name: "Tailwind CSS", slug: "tailwindcss", Icon: TailwindCSSBrandIcon },
  { name: "Taipy", slug: "taipy", Icon: TaipyBrandIcon },
  { name: "Take-Two Interactive Software", slug: "taketwointeractivesoftware", Icon: TakeTwoInteractiveSoftwareBrandIcon },
  { name: "Talend", slug: "talend", Icon: TalendBrandIcon },
  { name: "Talenthouse", slug: "talenthouse", Icon: TalenthouseBrandIcon },
  { name: "Talos", slug: "talos", Icon: TalosBrandIcon },
  { name: "Tamiya", slug: "tamiya", Icon: TamiyaBrandIcon },
  { name: "Tampermonkey", slug: "tampermonkey", Icon: TampermonkeyBrandIcon },
  { name: "Tangled", slug: "tangled", Icon: TangledBrandIcon },
  { name: "TanStack", slug: "tanstack", Icon: TanStackBrandIcon },
  { name: "Taobao", slug: "taobao", Icon: TaobaoBrandIcon },
  { name: "Tapas", slug: "tapas", Icon: TapasBrandIcon },
  { name: "Target", slug: "target", Icon: TargetBrandIcon },
  { name: "TAROM", slug: "tarom", Icon: TaromBrandIcon },
  { name: "Tarteaucitron", slug: "tarteaucitron", Icon: TarteaucitronBrandIcon },
  { name: "Task", slug: "task", Icon: TaskBrandIcon },
  { name: "Tasmota", slug: "tasmota", Icon: TasmotaBrandIcon },
  { name: "Tata", slug: "tata", Icon: TataBrandIcon },
  { name: "Tata Consultancy Services", slug: "tcs", Icon: TataConsultancyServicesBrandIcon },
  { name: "Tauri", slug: "tauri", Icon: TauriBrandIcon },
  { name: "TaxBuzz", slug: "taxbuzz", Icon: TaxBuzzBrandIcon },
  { name: "Teal", slug: "teal", Icon: TealBrandIcon },
  { name: "TeamCity", slug: "teamcity", Icon: TeamCityBrandIcon },
  { name: "TeamSpeak", slug: "teamspeak", Icon: TeamSpeakBrandIcon },
  { name: "TeamViewer", slug: "teamviewer", Icon: TeamViewerBrandIcon },
  { name: "TechCrunch", slug: "techcrunch", Icon: TechCrunchBrandIcon },
  { name: "TED", slug: "ted", Icon: TEDBrandIcon },
  { name: "TeePublic", slug: "teepublic", Icon: TeePublicBrandIcon },
  { name: "Teespring", slug: "teespring", Icon: TeespringBrandIcon },
  { name: "Tekton", slug: "tekton", Icon: TektonBrandIcon },
  { name: "TELE 5", slug: "tele5", Icon: TELE5BrandIcon },
  { name: "Télé-Québec", slug: "telequebec", Icon: TLQuBecBrandIcon },
  { name: "Telefónica", slug: "telefonica", Icon: TelefNicaBrandIcon },
  { name: "Telegram", slug: "telegram", Icon: TelegramBrandIcon },
  { name: "Telegraph", slug: "telegraph", Icon: TelegraphBrandIcon },
  { name: "Telenor", slug: "telenor", Icon: TelenorBrandIcon },
  { name: "Temporal", slug: "temporal", Icon: TemporalBrandIcon },
  { name: "Tencent Hy", slug: "tencenthy", Icon: TencentHyBrandIcon },
  { name: "TensorFlow", slug: "tensorflow", Icon: TensorFlowBrandIcon },
  { name: "Teradata", slug: "teradata", Icon: TeradataBrandIcon },
  { name: "teratail", slug: "teratail", Icon: TeratailBrandIcon },
  { name: "Termius", slug: "termius", Icon: TermiusBrandIcon },
  { name: "Terraform", slug: "terraform", Icon: TerraformBrandIcon },
  { name: "Tesco", slug: "tesco", Icon: TescoBrandIcon },
  { name: "Tesla", slug: "tesla", Icon: TeslaBrandIcon },
  { name: "TestCafe", slug: "testcafe", Icon: TestCafeBrandIcon },
  { name: "Testin", slug: "testin", Icon: TestinBrandIcon },
  { name: "Testing Library", slug: "testinglibrary", Icon: TestingLibraryBrandIcon },
  { name: "TestRail", slug: "testrail", Icon: TestRailBrandIcon },
  { name: "Tether", slug: "tether", Icon: TetherBrandIcon },
  { name: "Textpattern", slug: "textpattern", Icon: TextpatternBrandIcon },
  { name: "Textual", slug: "textual", Icon: TextualBrandIcon },
  { name: "TGA", slug: "tga", Icon: TGABrandIcon },
  { name: "Thangs", slug: "thangs", Icon: ThangsBrandIcon },
  { name: "Thanos", slug: "thanos", Icon: ThanosBrandIcon },
  { name: "The Algorithms", slug: "thealgorithms", Icon: TheAlgorithmsBrandIcon },
  { name: "The Boring Company", slug: "theboringcompany", Icon: TheBoringCompanyBrandIcon },
  { name: "The Conversation", slug: "theconversation", Icon: TheConversationBrandIcon },
  { name: "THE FINALS", slug: "thefinals", Icon: THEFinalsBrandIcon },
  { name: "The Guardian", slug: "theguardian", Icon: TheGuardianBrandIcon },
  { name: "The Irish Times", slug: "theirishtimes", Icon: TheIrishTimesBrandIcon },
  { name: "The Mighty", slug: "themighty", Icon: TheMightyBrandIcon },
  { name: "The Models Resource", slug: "themodelsresource", Icon: TheModelsResourceBrandIcon },
  { name: "The Movie Database", slug: "themoviedatabase", Icon: TheMovieDatabaseBrandIcon },
  { name: "The North Face", slug: "thenorthface", Icon: TheNorthFaceBrandIcon },
  { name: "The Odin Project", slug: "theodinproject", Icon: TheOdinProjectBrandIcon },
  { name: "The Planetary Society", slug: "theplanetarysociety", Icon: ThePlanetarySocietyBrandIcon },
  { name: "The Register", slug: "theregister", Icon: TheRegisterBrandIcon },
  { name: "The Sounds Resource", slug: "thesoundsresource", Icon: TheSoundsResourceBrandIcon },
  { name: "The Spriters Resource", slug: "thespritersresource", Icon: TheSpritersResourceBrandIcon },
  { name: "The StoryGraph", slug: "thestorygraph", Icon: TheStoryGraphBrandIcon },
  { name: "The Washington Post", slug: "thewashingtonpost", Icon: TheWashingtonPostBrandIcon },
  { name: "The Weather Channel", slug: "theweatherchannel", Icon: TheWeatherChannelBrandIcon },
  { name: "Thingiverse", slug: "thingiverse", Icon: ThingiverseBrandIcon },
  { name: "Things", slug: "things", Icon: ThingsBrandIcon },
  { name: "ThinkPad", slug: "thinkpad", Icon: ThinkPadBrandIcon },
  { name: "thirdweb", slug: "thirdweb", Icon: ThirdwebBrandIcon },
  { name: "Threadless", slug: "threadless", Icon: ThreadlessBrandIcon },
  { name: "Threads", slug: "threads", Icon: ThreadsBrandIcon },
  { name: "Three.js", slug: "threedotjs", Icon: ThreeJsBrandIcon },
  { name: "Threema", slug: "threema", Icon: ThreemaBrandIcon },
  { name: "Thumbtack", slug: "thumbtack", Icon: ThumbtackBrandIcon },
  { name: "Thunderbird", slug: "thunderbird", Icon: ThunderbirdBrandIcon },
  { name: "Thunderstore", slug: "thunderstore", Icon: ThunderstoreBrandIcon },
  { name: "Thurgauer Kantonalbank", slug: "thurgauerkantonalbank", Icon: ThurgauerKantonalbankBrandIcon },
  { name: "Thymeleaf", slug: "thymeleaf", Icon: ThymeleafBrandIcon },
  { name: "Ticket Tailor", slug: "tickettailor", Icon: TicketTailorBrandIcon },
  { name: "Ticketmaster", slug: "ticketmaster", Icon: TicketmasterBrandIcon },
  { name: "TickTick", slug: "ticktick", Icon: TickTickBrandIcon },
  { name: "TIDAL", slug: "tidal", Icon: TidalBrandIcon },
  { name: "TiDB", slug: "tidb", Icon: TiDBBrandIcon },
  { name: "TiddlyWiki", slug: "tiddlywiki", Icon: TiddlyWikiBrandIcon },
  { name: "Tide", slug: "tide", Icon: TideBrandIcon },
  { name: "Tidyverse", slug: "tidyverse", Icon: TidyverseBrandIcon },
  { name: "TietoEVRY", slug: "tietoevry", Icon: TietoEVRYBrandIcon },
  { name: "TikTok", slug: "tiktok", Icon: TikTokBrandIcon },
  { name: "Tilda Publishing", slug: "tildapublishing", Icon: TildaPublishingBrandIcon },
  { name: "Tile", slug: "tile", Icon: TileBrandIcon },
  { name: "Timescale", slug: "timescale", Icon: TimescaleBrandIcon },
  { name: "Tina", slug: "tina", Icon: TinaBrandIcon },
  { name: "Tinder", slug: "tinder", Icon: TinderBrandIcon },
  { name: "Tindie", slug: "tindie", Icon: TindieBrandIcon },
  { name: "Tinkercad", slug: "tinkercad", Icon: TinkercadBrandIcon },
  { name: "tinygrad", slug: "tinygrad", Icon: TinygradBrandIcon },
  { name: "TinyLetter", slug: "tinyletter", Icon: TinyLetterBrandIcon },
  { name: "Tistory", slug: "tistory", Icon: TistoryBrandIcon },
  { name: "tldraw", slug: "tldraw", Icon: TldrawBrandIcon },
  { name: "tmux", slug: "tmux", Icon: TmuxBrandIcon },
  { name: "Todoist", slug: "todoist", Icon: TodoistBrandIcon },
  { name: "Toggl", slug: "toggl", Icon: TogglBrandIcon },
  { name: "Toggl Track", slug: "toggltrack", Icon: TogglTrackBrandIcon },
  { name: "Tokio", slug: "tokio", Icon: TokioBrandIcon },
  { name: "Tokyo Metro", slug: "tokyometro", Icon: TokyoMetroBrandIcon },
  { name: "Toll", slug: "toll", Icon: TollBrandIcon },
  { name: "TOML", slug: "toml", Icon: TOMLBrandIcon },
  { name: "Tomorrowland", slug: "tomorrowland", Icon: TomorrowlandBrandIcon },
  { name: "TomTom", slug: "tomtom", Icon: TomTomBrandIcon },
  { name: "TON", slug: "ton", Icon: TONBrandIcon },
  { name: "Top.gg", slug: "topdotgg", Icon: TopGgBrandIcon },
  { name: "Topcoder", slug: "topcoder", Icon: TopcoderBrandIcon },
  { name: "Toptal", slug: "toptal", Icon: ToptalBrandIcon },
  { name: "Tor Browser", slug: "torbrowser", Icon: TorBrowserBrandIcon },
  { name: "Tor Project", slug: "torproject", Icon: TorProjectBrandIcon },
  { name: "Torizon", slug: "torizon", Icon: TorizonBrandIcon },
  { name: "Toshiba", slug: "toshiba", Icon: ToshibaBrandIcon },
  { name: "TOTVS", slug: "totvs", Icon: TotvsBrandIcon },
  { name: "TourBox", slug: "tourbox", Icon: TourBoxBrandIcon },
  { name: "Tower", slug: "tower", Icon: TowerBrandIcon },
  { name: "Toyota", slug: "toyota", Icon: ToyotaBrandIcon },
  { name: "TP-Link", slug: "tplink", Icon: TPLinkBrandIcon },
  { name: "tqdm", slug: "tqdm", Icon: TqdmBrandIcon },
  { name: "Traccar", slug: "traccar", Icon: TraccarBrandIcon },
  { name: "TradingView", slug: "tradingview", Icon: TradingViewBrandIcon },
  { name: "TRAE", slug: "trae", Icon: TRAEBrandIcon },
  { name: "Traefik Mesh", slug: "traefikmesh", Icon: TraefikMeshBrandIcon },
  { name: "Traefik Proxy", slug: "traefikproxy", Icon: TraefikProxyBrandIcon },
  { name: "Trailforks", slug: "trailforks", Icon: TrailforksBrandIcon },
  { name: "TrainerRoad", slug: "trainerroad", Icon: TrainerRoadBrandIcon },
  { name: "Trakt", slug: "trakt", Icon: TraktBrandIcon },
  { name: "Transifex", slug: "transifex", Icon: TransifexBrandIcon },
  { name: "Transmission", slug: "transmission", Icon: TransmissionBrandIcon },
  { name: "Transport for Ireland", slug: "transportforireland", Icon: TransportForIrelandBrandIcon },
  { name: "Transport for London", slug: "transportforlondon", Icon: TransportForLondonBrandIcon },
  { name: "Travis CI", slug: "travisci", Icon: TravisCIBrandIcon },
  { name: "Traxsource", slug: "traxsource", Icon: TraxsourceBrandIcon },
  { name: "Treehouse", slug: "treehouse", Icon: TreehouseBrandIcon },
  { name: "Trello", slug: "trello", Icon: TrelloBrandIcon },
  { name: "Trend Micro", slug: "trendmicro", Icon: TrendMicroBrandIcon },
  { name: "Tresorit", slug: "tresorit", Icon: TresoritBrandIcon },
  { name: "Treyarch", slug: "treyarch", Icon: TreyarchBrandIcon },
  { name: "Trezor", slug: "trezor", Icon: TrezorBrandIcon },
  { name: "Tricentis", slug: "tricentis", Icon: TricentisBrandIcon },
  { name: "Trilium", slug: "trilium", Icon: TriliumBrandIcon },
  { name: "Triller", slug: "triller", Icon: TrillerBrandIcon },
  { name: "TrillerTV", slug: "trillertv", Icon: TrillerTVBrandIcon },
  { name: "Trimble", slug: "trimble", Icon: TrimbleBrandIcon },
  { name: "Trino", slug: "trino", Icon: TrinoBrandIcon },
  { name: "Trip.com", slug: "tripdotcom", Icon: TripComBrandIcon },
  { name: "Tripadvisor", slug: "tripadvisor", Icon: TripadvisorBrandIcon },
  { name: "trivago", slug: "trivago", Icon: TrivagoBrandIcon },
  { name: "Trivy", slug: "trivy", Icon: TrivyBrandIcon },
  { name: "TRMNL", slug: "trmnl", Icon: TrmnlBrandIcon },
  { name: "Trove", slug: "trove", Icon: TroveBrandIcon },
  { name: "tRPC", slug: "trpc", Icon: TRPCBrandIcon },
  { name: "TrueNAS", slug: "truenas", Icon: TrueNASBrandIcon },
  { name: "TrueUp", slug: "trueup", Icon: TrueUpBrandIcon },
  { name: "trulia", slug: "trulia", Icon: TruliaBrandIcon },
  { name: "Trusted Shops", slug: "trustedshops", Icon: TrustedShopsBrandIcon },
  { name: "Trustpilot", slug: "trustpilot", Icon: TrustpilotBrandIcon },
  { name: "Try It Online", slug: "tryitonline", Icon: TryItOnlineBrandIcon },
  { name: "TryHackMe", slug: "tryhackme", Icon: TryHackMeBrandIcon },
  { name: "ts-node", slug: "tsnode", Icon: TsNodeBrandIcon },
  { name: "Tubi", slug: "tubi", Icon: TubiBrandIcon },
  { name: "TUI", slug: "tui", Icon: TUIBrandIcon },
  { name: "Tumblr", slug: "tumblr", Icon: TumblrBrandIcon },
  { name: "Turbo", slug: "turbo", Icon: TurboBrandIcon },
  { name: "Turborepo", slug: "turborepo", Icon: TurborepoBrandIcon },
  { name: "TurboSquid", slug: "turbosquid", Icon: TurboSquidBrandIcon },
  { name: "Turkish Airlines", slug: "turkishairlines", Icon: TurkishAirlinesBrandIcon },
  { name: "Turso", slug: "turso", Icon: TursoBrandIcon },
  { name: "Tuta", slug: "tuta", Icon: TutaBrandIcon },
  { name: "TUXEDO Computers", slug: "tuxedocomputers", Icon: TuxedoComputersBrandIcon },
  { name: "TV Time", slug: "tvtime", Icon: TVTimeBrandIcon },
  { name: "TV4 Play", slug: "tv4play", Icon: TV4PlayBrandIcon },
  { name: "Twenty", slug: "twenty", Icon: TwentyBrandIcon },
  { name: "Twinkly", slug: "twinkly", Icon: TwinklyBrandIcon },
  { name: "Twinmotion", slug: "twinmotion", Icon: TwinmotionBrandIcon },
  { name: "Twitch", slug: "twitch", Icon: TwitchBrandIcon },
  { name: "ty", slug: "ty", Icon: TyBrandIcon },
  { name: "Typeform", slug: "typeform", Icon: TypeformBrandIcon },
  { name: "TypeORM", slug: "typeorm", Icon: TypeORMBrandIcon },
  { name: "Typer", slug: "typer", Icon: TyperBrandIcon },
  { name: "TypeScript", slug: "typescript", Icon: TypeScriptBrandIcon },
  { name: "TYPO3", slug: "typo3", Icon: Typo3BrandIcon },
  { name: "Typst", slug: "typst", Icon: TypstBrandIcon },
  { name: "U.S. News", slug: "udotsdotnews", Icon: USNewsBrandIcon },
  { name: "Uber", slug: "uber", Icon: UberBrandIcon },
  { name: "Uber Eats", slug: "ubereats", Icon: UberEatsBrandIcon },
  { name: "Ubiquiti", slug: "ubiquiti", Icon: UbiquitiBrandIcon },
  { name: "Ubisoft", slug: "ubisoft", Icon: UbisoftBrandIcon },
  { name: "uBlock Origin", slug: "ublockorigin", Icon: UBlockOriginBrandIcon },
  { name: "Ubuntu", slug: "ubuntu", Icon: UbuntuBrandIcon },
  { name: "Ubuntu MATE", slug: "ubuntumate", Icon: UbuntuMATEBrandIcon },
  { name: "Udacity", slug: "udacity", Icon: UdacityBrandIcon },
  { name: "Udemy", slug: "udemy", Icon: UdemyBrandIcon },
  { name: "UFC", slug: "ufc", Icon: UFCBrandIcon },
  { name: "UIkit", slug: "uikit", Icon: UIkitBrandIcon },
  { name: "UiPath", slug: "uipath", Icon: UiPathBrandIcon },
  { name: "UKCA", slug: "ukca", Icon: UKCABrandIcon },
  { name: "Ultralytics", slug: "ultralytics", Icon: UltralyticsBrandIcon },
  { name: "Ulule", slug: "ulule", Icon: UluleBrandIcon },
  { name: "Umami", slug: "umami", Icon: UmamiBrandIcon },
  { name: "Umbraco", slug: "umbraco", Icon: UmbracoBrandIcon },
  { name: "Umbrel", slug: "umbrel", Icon: UmbrelBrandIcon },
  { name: "UML", slug: "uml", Icon: UMLBrandIcon },
  { name: "Unacademy", slug: "unacademy", Icon: UnacademyBrandIcon },
  { name: "Under Armour", slug: "underarmour", Icon: UnderArmourBrandIcon },
  { name: "Underscore.js", slug: "underscoredotjs", Icon: UnderscoreJsBrandIcon },
  { name: "Undertale", slug: "undertale", Icon: UndertaleBrandIcon },
  { name: "Unicode", slug: "unicode", Icon: UnicodeBrandIcon },
  { name: "Unilever", slug: "unilever", Icon: UnileverBrandIcon },
  { name: "Uniqlo", slug: "uniqlo", Icon: UniqloBrandIcon },
  { name: "Uniqlo", slug: "uniqlo_ja", Icon: UniqloJaBrandIcon },
  { name: "United Airlines", slug: "unitedairlines", Icon: UnitedAirlinesBrandIcon },
  { name: "United Nations", slug: "unitednations", Icon: UnitedNationsBrandIcon },
  { name: "Unity", slug: "unity", Icon: UnityBrandIcon },
  { name: "UnJS", slug: "unjs", Icon: UnJSBrandIcon },
  { name: "Unlicense", slug: "unlicense", Icon: UnlicenseBrandIcon },
  { name: "UnoCSS", slug: "unocss", Icon: UnoCSSBrandIcon },
  { name: "unpkg", slug: "unpkg", Icon: UnpkgBrandIcon },
  { name: "Unraid", slug: "unraid", Icon: UnraidBrandIcon },
  { name: "Unreal Engine", slug: "unrealengine", Icon: UnrealEngineBrandIcon },
  { name: "Unsplash", slug: "unsplash", Icon: UnsplashBrandIcon },
  { name: "Unstop", slug: "unstop", Icon: UnstopBrandIcon },
  { name: "Untappd", slug: "untappd", Icon: UntappdBrandIcon },
  { name: "UpCloud", slug: "upcloud", Icon: UpCloudBrandIcon },
  { name: "Uphold", slug: "uphold", Icon: UpholdBrandIcon },
  { name: "UpLabs", slug: "uplabs", Icon: UpLabsBrandIcon },
  { name: "Upptime", slug: "upptime", Icon: UpptimeBrandIcon },
  { name: "UPS", slug: "ups", Icon: UPSBrandIcon },
  { name: "Upstash", slug: "upstash", Icon: UpstashBrandIcon },
  { name: "Uptime Kuma", slug: "uptimekuma", Icon: UptimeKumaBrandIcon },
  { name: "Upwork", slug: "upwork", Icon: UpworkBrandIcon },
  { name: "UserVoice", slug: "uservoice", Icon: UserVoiceBrandIcon },
  { name: "USPS", slug: "usps", Icon: USPSBrandIcon },
  { name: "uTorrent", slug: "utorrent", Icon: UTorrentBrandIcon },
  { name: "uv", slug: "uv", Icon: UvBrandIcon },
  { name: "V", slug: "v", Icon: VBrandIcon },
  { name: "v0", slug: "v0", Icon: V0BrandIcon },
  { name: "V2EX", slug: "v2ex", Icon: V2EXBrandIcon },
  { name: "V8", slug: "v8", Icon: V8BrandIcon },
  { name: "Vaadin", slug: "vaadin", Icon: VaadinBrandIcon },
  { name: "Vagrant", slug: "vagrant", Icon: VagrantBrandIcon },
  { name: "Vala", slug: "vala", Icon: ValaBrandIcon },
  { name: "Valorant", slug: "valorant", Icon: ValorantBrandIcon },
  { name: "Valve", slug: "valve", Icon: ValveBrandIcon },
  { name: "Vanilla Extract", slug: "vanillaextract", Icon: VanillaExtractBrandIcon },
  { name: "Vapor", slug: "vapor", Icon: VaporBrandIcon },
  { name: "Vault", slug: "vault", Icon: VaultBrandIcon },
  { name: "Vaultwarden", slug: "vaultwarden", Icon: VaultwardenBrandIcon },
  { name: "Vauxhall", slug: "vauxhall", Icon: VauxhallBrandIcon },
  { name: "vBulletin", slug: "vbulletin", Icon: VBulletinBrandIcon },
  { name: "Vectary", slug: "vectary", Icon: VectaryBrandIcon },
  { name: "Vector Logo Zone", slug: "vectorlogozone", Icon: VectorLogoZoneBrandIcon },
  { name: "Vectorworks", slug: "vectorworks", Icon: VectorworksBrandIcon },
  { name: "Veeam", slug: "veeam", Icon: VeeamBrandIcon },
  { name: "VEED", slug: "veed", Icon: VEEDBrandIcon },
  { name: "Veepee", slug: "veepee", Icon: VeepeeBrandIcon },
  { name: "Vega", slug: "vega", Icon: VegaBrandIcon },
  { name: "VEGAS", slug: "vegas", Icon: VegasBrandIcon },
  { name: "Velocity", slug: "velocity", Icon: VelocityBrandIcon },
  { name: "Velog", slug: "velog", Icon: VelogBrandIcon },
  { name: "Vencord", slug: "vencord", Icon: VencordBrandIcon },
  { name: "Venmo", slug: "venmo", Icon: VenmoBrandIcon },
  { name: "Vercel", slug: "vercel", Icon: VercelBrandIcon },
  { name: "Verdaccio", slug: "verdaccio", Icon: VerdaccioBrandIcon },
  { name: "Veritas", slug: "veritas", Icon: VeritasBrandIcon },
  { name: "Verizon", slug: "verizon", Icon: VerizonBrandIcon },
  { name: "Vespa", slug: "vespa", Icon: VespaBrandIcon },
  { name: "Vestel", slug: "vestel", Icon: VestelBrandIcon },
  { name: "VEXXHOST", slug: "vexxhost", Icon: VexxhostBrandIcon },
  { name: "vFairs", slug: "vfairs", Icon: VFairsBrandIcon },
  { name: "Viadeo", slug: "viadeo", Icon: ViadeoBrandIcon },
  { name: "Viaplay", slug: "viaplay", Icon: ViaplayBrandIcon },
  { name: "Viber", slug: "viber", Icon: ViberBrandIcon },
  { name: "Viblo", slug: "viblo", Icon: VibloBrandIcon },
  { name: "VictoriaMetrics", slug: "victoriametrics", Icon: VictoriaMetricsBrandIcon },
  { name: "Victron Energy", slug: "victronenergy", Icon: VictronEnergyBrandIcon },
  { name: "Vikunja", slug: "vikunja", Icon: VikunjaBrandIcon },
  { name: "Vim", slug: "vim", Icon: VimBrandIcon },
  { name: "Vimeo", slug: "vimeo", Icon: VimeoBrandIcon },
  { name: "Vimeo Livestream", slug: "vimeolivestream", Icon: VimeoLivestreamBrandIcon },
  { name: "Vinted", slug: "vinted", Icon: VintedBrandIcon },
  { name: "Virgin", slug: "virgin", Icon: VirginBrandIcon },
  { name: "Virgin Atlantic", slug: "virginatlantic", Icon: VirginAtlanticBrandIcon },
  { name: "Virgin Media", slug: "virginmedia", Icon: VirginMediaBrandIcon },
  { name: "VirtualBox", slug: "virtualbox", Icon: VirtualBoxBrandIcon },
  { name: "VirusTotal", slug: "virustotal", Icon: VirusTotalBrandIcon },
  { name: "Visa", slug: "visa", Icon: VisaBrandIcon },
  { name: "Visual Paradigm", slug: "visualparadigm", Icon: VisualParadigmBrandIcon },
  { name: "Visual Studio Code", slug: "visualstudiocode", Icon: VisualStudioCodeBrandIcon },
  { name: "visx", slug: "visx", Icon: VisxBrandIcon },
  { name: "Vite", slug: "vite", Icon: ViteBrandIcon },
  { name: "VitePress", slug: "vitepress", Icon: VitePressBrandIcon },
  { name: "Vitess", slug: "vitess", Icon: VitessBrandIcon },
  { name: "Vitest", slug: "vitest", Icon: VitestBrandIcon },
  { name: "Viva Wallet", slug: "vivawallet", Icon: VivaWalletBrandIcon },
  { name: "Vivaldi", slug: "vivaldi", Icon: VivaldiBrandIcon },
  { name: "Vivino", slug: "vivino", Icon: VivinoBrandIcon },
  { name: "Vivint", slug: "vivint", Icon: VivintBrandIcon },
  { name: "vivo", slug: "vivo", Icon: VivoBrandIcon },
  { name: "VK", slug: "vk", Icon: VKBrandIcon },
  { name: "VLC media player", slug: "vlcmediaplayer", Icon: VLCMediaPlayerBrandIcon },
  { name: "vLLM", slug: "vllm", Icon: VLLMBrandIcon },
  { name: "VMware", slug: "vmware", Icon: VMwareBrandIcon },
  { name: "Vodafone", slug: "vodafone", Icon: VodafoneBrandIcon },
  { name: "voelkner", slug: "voelkner", Icon: VoelknerBrandIcon },
  { name: "Void Linux", slug: "voidlinux", Icon: VoidLinuxBrandIcon },
  { name: "VoIP.ms", slug: "voipdotms", Icon: VoIPMsBrandIcon },
  { name: "Volkswagen", slug: "volkswagen", Icon: VolkswagenBrandIcon },
  { name: "Volvo", slug: "volvo", Icon: VolvoBrandIcon },
  { name: "Vonage", slug: "vonage", Icon: VonageBrandIcon },
  { name: "Voron Design", slug: "vorondesign", Icon: VoronDesignBrandIcon },
  { name: "Vowpal Wabbit", slug: "vowpalwabbit", Icon: VowpalWabbitBrandIcon },
  { name: "VOX", slug: "vox", Icon: VOXBrandIcon },
  { name: "VRChat", slug: "vrchat", Icon: VRChatBrandIcon },
  { name: "VSCO", slug: "vsco", Icon: VSCOBrandIcon },
  { name: "VSCodium", slug: "vscodium", Icon: VSCodiumBrandIcon },
  { name: "VTEX", slug: "vtex", Icon: VTEXBrandIcon },
  { name: "Vue.js", slug: "vuedotjs", Icon: VueJsBrandIcon },
  { name: "Vuetify", slug: "vuetify", Icon: VuetifyBrandIcon },
  { name: "VueUse", slug: "vueuse", Icon: VueUseBrandIcon },
  { name: "Vulkan", slug: "vulkan", Icon: VulkanBrandIcon },
  { name: "Vultr", slug: "vultr", Icon: VultrBrandIcon },
  { name: "Vyond", slug: "vyond", Icon: VyondBrandIcon },
  { name: "W3Schools", slug: "w3schools", Icon: W3SchoolsBrandIcon },
  { name: "Wacom", slug: "wacom", Icon: WacomBrandIcon },
  { name: "Wagmi", slug: "wagmi", Icon: WagmiBrandIcon },
  { name: "Wagtail", slug: "wagtail", Icon: WagtailBrandIcon },
  { name: "Wails", slug: "wails", Icon: WailsBrandIcon },
  { name: "WakaTime", slug: "wakatime", Icon: WakaTimeBrandIcon },
  { name: "WALKMAN", slug: "walkman", Icon: WalkmanBrandIcon },
  { name: "Wallabag", slug: "wallabag", Icon: WallabagBrandIcon },
  { name: "WalletConnect", slug: "walletconnect", Icon: WalletConnectBrandIcon },
  { name: "Wantedly", slug: "wantedly", Icon: WantedlyBrandIcon },
  { name: "Wappalyzer", slug: "wappalyzer", Icon: WappalyzerBrandIcon },
  { name: "Warp", slug: "warp", Icon: WarpBrandIcon },
  { name: "Wasabi", slug: "wasabi", Icon: WasabiBrandIcon },
  { name: "wasmCloud", slug: "wasmcloud", Icon: WasmCloudBrandIcon },
  { name: "Wasmer", slug: "wasmer", Icon: WasmerBrandIcon },
  { name: "Watchtower", slug: "watchtower", Icon: WatchtowerBrandIcon },
  { name: "Wattpad", slug: "wattpad", Icon: WattpadBrandIcon },
  { name: "Wayland", slug: "wayland", Icon: WaylandBrandIcon },
  { name: "Waze", slug: "waze", Icon: WazeBrandIcon },
  { name: "WazirX", slug: "wazirx", Icon: WazirXBrandIcon },
  { name: "Wear OS", slug: "wearos", Icon: WearOSBrandIcon },
  { name: "Weasyl", slug: "weasyl", Icon: WeasylBrandIcon },
  { name: "Web Awesome", slug: "webawesome", Icon: WebAwesomeBrandIcon },
  { name: "WEB.DE", slug: "webdotde", Icon: WEBDEBrandIcon },
  { name: "Web3.js", slug: "web3dotjs", Icon: Web3JsBrandIcon },
  { name: "WebAssembly", slug: "webassembly", Icon: WebAssemblyBrandIcon },
  { name: "WebAuthn", slug: "webauthn", Icon: WebAuthnBrandIcon },
  { name: "webcomponents.org", slug: "webcomponentsdotorg", Icon: WebcomponentsOrgBrandIcon },
  { name: "WebdriverIO", slug: "webdriverio", Icon: WebdriverIOBrandIcon },
  { name: "Webex", slug: "webex", Icon: WebexBrandIcon },
  { name: "Webflow", slug: "webflow", Icon: WebflowBrandIcon },
  { name: "WebGL", slug: "webgl", Icon: WebGLBrandIcon },
  { name: "WebGPU", slug: "webgpu", Icon: WebGPUBrandIcon },
  { name: "Weblate", slug: "weblate", Icon: WeblateBrandIcon },
  { name: "Webmin", slug: "webmin", Icon: WebminBrandIcon },
  { name: "WebMoney", slug: "webmoney", Icon: WebMoneyBrandIcon },
  { name: "Webpack", slug: "webpack", Icon: WebpackBrandIcon },
  { name: "WebRTC", slug: "webrtc", Icon: WebRTCBrandIcon },
  { name: "WebStorm", slug: "webstorm", Icon: WebStormBrandIcon },
  { name: "WEBTOON", slug: "webtoon", Icon: WebtoonBrandIcon },
  { name: "webtrees", slug: "webtrees", Icon: WebtreesBrandIcon },
  { name: "WeChat", slug: "wechat", Icon: WeChatBrandIcon },
  { name: "WeGame", slug: "wegame", Icon: WeGameBrandIcon },
  { name: "Weights & Biases", slug: "weightsandbiases", Icon: WeightsBiasesBrandIcon },
  { name: "Welcome to the Jungle", slug: "welcometothejungle", Icon: WelcomeToTheJungleBrandIcon },
  { name: "Wellfound", slug: "wellfound", Icon: WellfoundBrandIcon },
  { name: "Wells Fargo", slug: "wellsfargo", Icon: WellsFargoBrandIcon },
  { name: "WEMO", slug: "wemo", Icon: WEMOBrandIcon },
  { name: "WeRead", slug: "weread", Icon: WeReadBrandIcon },
  { name: "Western Union", slug: "westernunion", Icon: WesternUnionBrandIcon },
  { name: "WeTransfer", slug: "wetransfer", Icon: WeTransferBrandIcon },
  { name: "WezTerm", slug: "wezterm", Icon: WezTermBrandIcon },
  { name: "wgpu", slug: "wgpu", Icon: WgpuBrandIcon },
  { name: "what3words", slug: "what3words", Icon: What3wordsBrandIcon },
  { name: "WhatsApp", slug: "whatsapp", Icon: WhatsAppBrandIcon },
  { name: "When I Work", slug: "wheniwork", Icon: WhenIWorkBrandIcon },
  { name: "wiki.gg", slug: "wikidotgg", Icon: WikiGgBrandIcon },
  { name: "Wiki.js", slug: "wikidotjs", Icon: WikiJsBrandIcon },
  { name: "Wikibooks", slug: "wikibooks", Icon: WikibooksBrandIcon },
  { name: "Wikidata", slug: "wikidata", Icon: WikidataBrandIcon },
  { name: "Wikimedia Commons", slug: "wikimediacommons", Icon: WikimediaCommonsBrandIcon },
  { name: "Wikimedia Foundation", slug: "wikimediafoundation", Icon: WikimediaFoundationBrandIcon },
  { name: "Wikipedia", slug: "wikipedia", Icon: WikipediaBrandIcon },
  { name: "Wikiquote", slug: "wikiquote", Icon: WikiquoteBrandIcon },
  { name: "Wikisource", slug: "wikisource", Icon: WikisourceBrandIcon },
  { name: "Wikiversity", slug: "wikiversity", Icon: WikiversityBrandIcon },
  { name: "Wikivoyage", slug: "wikivoyage", Icon: WikivoyageBrandIcon },
  { name: "Winamp", slug: "winamp", Icon: WinampBrandIcon },
  { name: "Windsurf", slug: "windsurf", Icon: WindsurfBrandIcon },
  { name: "Wine", slug: "wine", Icon: WineBrandIcon },
  { name: "Wipro", slug: "wipro", Icon: WiproBrandIcon },
  { name: "Wire", slug: "wire", Icon: WireBrandIcon },
  { name: "WireGuard", slug: "wireguard", Icon: WireGuardBrandIcon },
  { name: "Wireshark", slug: "wireshark", Icon: WiresharkBrandIcon },
  { name: "Wise", slug: "wise", Icon: WiseBrandIcon },
  { name: "Wish", slug: "wish", Icon: WishBrandIcon },
  { name: "Wistia", slug: "wistia", Icon: WistiaBrandIcon },
  { name: "Wix", slug: "wix", Icon: WixBrandIcon },
  { name: "Wizz Air", slug: "wizzair", Icon: WizzAirBrandIcon },
  { name: "Wolfram", slug: "wolfram", Icon: WolframBrandIcon },
  { name: "Wolfram Language", slug: "wolframlanguage", Icon: WolframLanguageBrandIcon },
  { name: "Wolfram Mathematica", slug: "wolframmathematica", Icon: WolframMathematicaBrandIcon },
  { name: "Wondershare", slug: "wondershare", Icon: WondershareBrandIcon },
  { name: "Wondershare Filmora", slug: "wondersharefilmora", Icon: WondershareFilmoraBrandIcon },
  { name: "Woo", slug: "woo", Icon: WooBrandIcon },
  { name: "WooCommerce", slug: "woocommerce", Icon: WooCommerceBrandIcon },
  { name: "WordPress", slug: "wordpress", Icon: WordPressBrandIcon },
  { name: "Workplace", slug: "workplace", Icon: WorkplaceBrandIcon },
  { name: "World Health Organization", slug: "worldhealthorganization", Icon: WorldHealthOrganizationBrandIcon },
  { name: "WP Engine", slug: "wpengine", Icon: WPEngineBrandIcon },
  { name: "WP Rocket", slug: "wprocket", Icon: WPRocketBrandIcon },
  { name: "WPExplorer", slug: "wpexplorer", Icon: WPExplorerBrandIcon },
  { name: "Write.as", slug: "writedotas", Icon: WriteAsBrandIcon },
  { name: "WWE", slug: "wwe", Icon: WWEBrandIcon },
  { name: "Wwise", slug: "wwise", Icon: WwiseBrandIcon },
  { name: "WXT", slug: "wxt", Icon: WXTBrandIcon },
  { name: "Wykop", slug: "wykop", Icon: WykopBrandIcon },
  { name: "Wyze", slug: "wyze", Icon: WyzeBrandIcon },
  { name: "X", slug: "x", Icon: XBrandIcon },
  { name: "X.Org", slug: "xdotorg", Icon: XOrgBrandIcon },
  { name: "XAMPP", slug: "xampp", Icon: XamppBrandIcon },
  { name: "Xcode", slug: "xcode", Icon: XcodeBrandIcon },
  { name: "XDA Developers", slug: "xdadevelopers", Icon: XDADevelopersBrandIcon },
  { name: "Xendit", slug: "xendit", Icon: XenditBrandIcon },
  { name: "Xero", slug: "xero", Icon: XeroBrandIcon },
  { name: "XFCE", slug: "xfce", Icon: XFCEBrandIcon },
  { name: "Xiaohongshu", slug: "xiaohongshu", Icon: XiaohongshuBrandIcon },
  { name: "Xiaomi", slug: "xiaomi", Icon: XiaomiBrandIcon },
  { name: "Xing", slug: "xing", Icon: XingBrandIcon },
  { name: "XML", slug: "xml", Icon: XMLBrandIcon },
  { name: "XMPP", slug: "xmpp", Icon: XMPPBrandIcon },
  { name: "XO", slug: "xo", Icon: XOBrandIcon },
  { name: "XRP", slug: "xrp", Icon: XRPBrandIcon },
  { name: "XSplit", slug: "xsplit", Icon: XSplitBrandIcon },
  { name: "XState", slug: "xstate", Icon: XStateBrandIcon },
  { name: "Xubuntu", slug: "xubuntu", Icon: XubuntuBrandIcon },
  { name: "xyflow", slug: "xyflow", Icon: XyflowBrandIcon },
  { name: "Y Combinator", slug: "ycombinator", Icon: YCombinatorBrandIcon },
  { name: "Yaak", slug: "yaak", Icon: YaakBrandIcon },
  { name: "yabai", slug: "yabai", Icon: YabaiBrandIcon },
  { name: "Yale", slug: "yale", Icon: YaleBrandIcon },
  { name: "Yamaha Corporation", slug: "yamahacorporation", Icon: YamahaCorporationBrandIcon },
  { name: "Yamaha Motor Corporation", slug: "yamahamotorcorporation", Icon: YamahaMotorCorporationBrandIcon },
  { name: "YAML", slug: "yaml", Icon: YAMLBrandIcon },
  { name: "Yandex Cloud", slug: "yandexcloud", Icon: YandexCloudBrandIcon },
  { name: "Yarn", slug: "yarn", Icon: YarnBrandIcon },
  { name: "Yelp", slug: "yelp", Icon: YelpBrandIcon },
  { name: "Yeti", slug: "yeti", Icon: YetiBrandIcon },
  { name: "Yew", slug: "yew", Icon: YewBrandIcon },
  { name: "Yii", slug: "yii", Icon: YiiBrandIcon },
  { name: "Yoast", slug: "yoast", Icon: YoastBrandIcon },
  { name: "YOLO", slug: "yolo", Icon: YOLOBrandIcon },
  { name: "YouHodler", slug: "youhodler", Icon: YouHodlerBrandIcon },
  { name: "YouTube", slug: "youtube", Icon: YouTubeBrandIcon },
  { name: "YouTube Gaming", slug: "youtubegaming", Icon: YouTubeGamingBrandIcon },
  { name: "YouTube Kids", slug: "youtubekids", Icon: YouTubeKidsBrandIcon },
  { name: "YouTube Music", slug: "youtubemusic", Icon: YouTubeMusicBrandIcon },
  { name: "YouTube Shorts", slug: "youtubeshorts", Icon: YouTubeShortsBrandIcon },
  { name: "YouTube Studio", slug: "youtubestudio", Icon: YouTubeStudioBrandIcon },
  { name: "YouTube TV", slug: "youtubetv", Icon: YouTubeTVBrandIcon },
  { name: "Yr", slug: "yr", Icon: YrBrandIcon },
  { name: "Yubico", slug: "yubico", Icon: YubicoBrandIcon },
  { name: "YunoHost", slug: "yunohost", Icon: YunoHostBrandIcon },
  { name: "Z.ai", slug: "zdotai", Icon: ZAiBrandIcon },
  { name: "Żabka", slug: "zabka", Icon: AbkaBrandIcon },
  { name: "Zaim", slug: "zaim", Icon: ZaimBrandIcon },
  { name: "Zalando", slug: "zalando", Icon: ZalandoBrandIcon },
  { name: "Zalo", slug: "zalo", Icon: ZaloBrandIcon },
  { name: "ZAP", slug: "zap", Icon: ZAPBrandIcon },
  { name: "Zapier", slug: "zapier", Icon: ZapierBrandIcon },
  { name: "Zara", slug: "zara", Icon: ZaraBrandIcon },
  { name: "Zazzle", slug: "zazzle", Icon: ZazzleBrandIcon },
  { name: "Zcash", slug: "zcash", Icon: ZcashBrandIcon },
  { name: "ZCOOL", slug: "zcool", Icon: ZcoolBrandIcon },
  { name: "ZDF", slug: "zdf", Icon: ZDFBrandIcon },
  { name: "ZebPay", slug: "zebpay", Icon: ZebPayBrandIcon },
  { name: "Zebra Technologies", slug: "zebratechnologies", Icon: ZebraTechnologiesBrandIcon },
  { name: "ZecTrix", slug: "zectrix", Icon: ZecTrixBrandIcon },
  { name: "Zed Industries", slug: "zedindustries", Icon: ZedIndustriesBrandIcon },
  { name: "Zelle", slug: "zelle", Icon: ZelleBrandIcon },
  { name: "Zen Browser", slug: "zenbrowser", Icon: ZenBrowserBrandIcon },
  { name: "Zend", slug: "zend", Icon: ZendBrandIcon },
  { name: "Zendesk", slug: "zendesk", Icon: ZendeskBrandIcon },
  { name: "Zenn", slug: "zenn", Icon: ZennBrandIcon },
  { name: "Zenodo", slug: "zenodo", Icon: ZenodoBrandIcon },
  { name: "Zensar", slug: "zensar", Icon: ZensarBrandIcon },
  { name: "Zensical", slug: "zensical", Icon: ZensicalBrandIcon },
  { name: "Zerodha", slug: "zerodha", Icon: ZerodhaBrandIcon },
  { name: "ZeroTier", slug: "zerotier", Icon: ZeroTierBrandIcon },
  { name: "Zettlr", slug: "zettlr", Icon: ZettlrBrandIcon },
  { name: "Zhihu", slug: "zhihu", Icon: ZhihuBrandIcon },
  { name: "Zig", slug: "zig", Icon: ZigBrandIcon },
  { name: "Zigbee", slug: "zigbee", Icon: ZigbeeBrandIcon },
  { name: "Zigbee2MQTT", slug: "zigbee2mqtt", Icon: Zigbee2MQTTBrandIcon },
  { name: "Ziggo", slug: "ziggo", Icon: ZiggoBrandIcon },
  { name: "Zilch", slug: "zilch", Icon: ZilchBrandIcon },
  { name: "Zillow", slug: "zillow", Icon: ZillowBrandIcon },
  { name: "ZincSearch", slug: "zincsearch", Icon: ZincSearchBrandIcon },
  { name: "Zingat", slug: "zingat", Icon: ZingatBrandIcon },
  { name: "Zod", slug: "zod", Icon: ZodBrandIcon },
  { name: "Zoho", slug: "zoho", Icon: ZohoBrandIcon },
  { name: "Zoiper", slug: "zoiper", Icon: ZoiperBrandIcon },
  { name: "Zola", slug: "zola", Icon: ZolaBrandIcon },
  { name: "Zomato", slug: "zomato", Icon: ZomatoBrandIcon },
  { name: "Zoom", slug: "zoom", Icon: ZoomBrandIcon },
  { name: "Zorin", slug: "zorin", Icon: ZorinBrandIcon },
  { name: "Zotero", slug: "zotero", Icon: ZoteroBrandIcon },
  { name: "Zsh", slug: "zsh", Icon: ZshBrandIcon },
  { name: "Zulip", slug: "zulip", Icon: ZulipBrandIcon },
  { name: "zx", slug: "zx", Icon: ZxBrandIcon },
  { name: "Zyte", slug: "zyte", Icon: ZyteBrandIcon },
]

export {
  ABBBrandIcon,
  AbbottBrandIcon,
  AbbvieBrandIcon,
  ABDownloadManagerBrandIcon,
  AbkaBrandIcon,
  AboutMeBrandIcon,
  AbstractBrandIcon,
  AbuseChBrandIcon,
  AcademiaBrandIcon,
  AccentureBrandIcon,
  AccusoftBrandIcon,
  AccuWeatherBrandIcon,
  AcerBrandIcon,
  ACMBrandIcon,
  AcodeBrandIcon,
  ActiGraphBrandIcon,
  ActiveloopBrandIcon,
  ActivisionBrandIcon,
  ActivityPubBrandIcon,
  ActixBrandIcon,
  ActualBudgetBrandIcon,
  AcuraBrandIcon,
  AdaBrandIcon,
  AdafruitBrandIcon,
  AdAwayBrandIcon,
  AdBlockBrandIcon,
  AdblockPlusBrandIcon,
  AddyIoBrandIcon,
  AdGuardBrandIcon,
  AdidasBrandIcon,
  AdminerBrandIcon,
  AdonisJSBrandIcon,
  ADPBrandIcon,
  AdrollBrandIcon,
  AdventOfCodeBrandIcon,
  AdyenBrandIcon,
  AegisAuthenticatorBrandIcon,
  AeroflotBrandIcon,
  AeromXicoBrandIcon,
  AfdianBrandIcon,
  AFFiNEBrandIcon,
  AFrameBrandIcon,
  AfterpayBrandIcon,
  AfterShipBrandIcon,
  AgentSkillsBrandIcon,
  AgoraBrandIcon,
  AIBBrandIcon,
  AIDungeonBrandIcon,
  AiohttpBrandIcon,
  AiqfomeBrandIcon,
  AirAsiaBrandIcon,
  AirbnbBrandIcon,
  AirbrakeBrandIcon,
  AirbusBrandIcon,
  AirbyteBrandIcon,
  AircallBrandIcon,
  AirCanadaBrandIcon,
  AirChinaBrandIcon,
  AirFranceBrandIcon,
  AirIndiaBrandIcon,
  AirPlayAudioBrandIcon,
  AirPlayVideoBrandIcon,
  AirSerbiaBrandIcon,
  AirtableBrandIcon,
  AirtelBrandIcon,
  AirTransatBrandIcon,
  AjvBrandIcon,
  AkamaiBrandIcon,
  AkasaAirBrandIcon,
  AkauntingBrandIcon,
  AkiflowBrandIcon,
  AlacrittyBrandIcon,
  AlamyBrandIcon,
  AlbertHeijnBrandIcon,
  AlbumOfTheYearBrandIcon,
  AlbyBrandIcon,
  AlchemyBrandIcon,
  AldiNordBrandIcon,
  AldiSDBrandIcon,
  AlfredBrandIcon,
  AlgoliaBrandIcon,
  AlgorandBrandIcon,
  AlibabaCloudBrandIcon,
  AlibabaComBrandIcon,
  AlienwareBrandIcon,
  AliExpressBrandIcon,
  AlipayBrandIcon,
  AListBrandIcon,
  AllegroBrandIcon,
  AlliedModdersBrandIcon,
  AllTrailsBrandIcon,
  AlmaLinuxBrandIcon,
  AlphaXivBrandIcon,
  AlpineJsBrandIcon,
  AlpineLinuxBrandIcon,
  AlternativeToBrandIcon,
  AlwaysdataBrandIcon,
  AmazonWebServicesBrandIcon,
  AMDBrandIcon,
  AmebaBrandIcon,
  AmericanAirlinesBrandIcon,
  AmericanExpressBrandIcon,
  AMGBrandIcon,
  AMPBrandIcon,
  AmulBrandIcon,
  ANABrandIcon,
  AnacondaBrandIcon,
  AnalogueBrandIcon,
  AndelaBrandIcon,
  AndroidAutoBrandIcon,
  AndroidBrandIcon,
  AndroidStudioBrandIcon,
  AngularBrandIcon,
  AniChartBrandIcon,
  AniListBrandIcon,
  AnimalPlanetBrandIcon,
  AnimeJsBrandIcon,
  AnkerMakeBrandIcon,
  AnkiBrandIcon,
  AnsibleBrandIcon,
  AnswerBrandIcon,
  AnsysBrandIcon,
  AntaBrandIcon,
  AntDesignBrandIcon,
  Antena3BrandIcon,
  AntennaPodBrandIcon,
  AnthropicBrandIcon,
  AntVBrandIcon,
  AnycubicBrandIcon,
  AnyDeskBrandIcon,
  AnytypeBrandIcon,
  ApacheAirflowBrandIcon,
  ApacheAntBrandIcon,
  ApacheArrowBrandIcon,
  ApacheAvroBrandIcon,
  ApacheBrandIcon,
  ApacheCassandraBrandIcon,
  ApacheCloudStackBrandIcon,
  ApacheCordovaBrandIcon,
  ApacheCouchDBBrandIcon,
  ApacheDolphinSchedulerBrandIcon,
  ApacheDorisBrandIcon,
  ApacheDruidBrandIcon,
  ApacheEChartsBrandIcon,
  ApacheFlinkBrandIcon,
  ApacheFreeMarkerBrandIcon,
  ApacheGroovyBrandIcon,
  ApacheGuacamoleBrandIcon,
  ApacheHadoopBrandIcon,
  ApacheHBaseBrandIcon,
  ApacheHiveBrandIcon,
  ApacheJMeterBrandIcon,
  ApacheKafkaBrandIcon,
  ApacheKylinBrandIcon,
  ApacheLuceneBrandIcon,
  ApacheMavenBrandIcon,
  ApacheNetBeansIDEBrandIcon,
  ApacheNiFiBrandIcon,
  ApacheOpenOfficeBrandIcon,
  ApacheParquetBrandIcon,
  ApachePDFBoxBrandIcon,
  ApachePulsarBrandIcon,
  ApacheRocketMQBrandIcon,
  ApacheSolrBrandIcon,
  ApacheSparkBrandIcon,
  ApacheStormBrandIcon,
  ApacheSupersetBrandIcon,
  ApacheTomcatBrandIcon,
  AparatBrandIcon,
  ApifoxBrandIcon,
  APMTerminalsBrandIcon,
  ApolloGraphQLBrandIcon,
  ApostropheBrandIcon,
  AppGalleryBrandIcon,
  AppianBrandIcon,
  AppImageBrandIcon,
  AppiumBrandIcon,
  AppleArcadeBrandIcon,
  AppleBrandIcon,
  AppleMusicBrandIcon,
  AppleNewsBrandIcon,
  ApplePayBrandIcon,
  ApplePodcastsBrandIcon,
  AppleTVBrandIcon,
  AppManagerBrandIcon,
  AppSignalBrandIcon,
  AppsmithBrandIcon,
  AppStoreBrandIcon,
  AppVeyorBrandIcon,
  AppwriteBrandIcon,
  AquaBrandIcon,
  ARALBrandIcon,
  ArangoDBBrandIcon,
  ArcBrandIcon,
  ArcGISBrandIcon,
  ArchicadBrandIcon,
  ArchiveOfOurOwnBrandIcon,
  ArchLinuxBrandIcon,
  ArdourBrandIcon,
  ArduinoBrandIcon,
  ArgoBrandIcon,
  ArgosBrandIcon,
  AriakitBrandIcon,
  ARKEcosystemBrandIcon,
  ArloBrandIcon,
  ArmBrandIcon,
  ArmKeilBrandIcon,
  ArsTechnicaBrandIcon,
  ArtifactHubBrandIcon,
  ArtixLinuxBrandIcon,
  ArtStationBrandIcon,
  ArXivBrandIcon,
  AsahiLinuxBrandIcon,
  AsanaBrandIcon,
  AsciidoctorBrandIcon,
  AsciinemaBrandIcon,
  ASDABrandIcon,
  AsepriteBrandIcon,
  AspireBrandIcon,
  AssemblyScriptBrandIcon,
  AsteriskBrandIcon,
  AstonMartinBrandIcon,
  AstraBrandIcon,
  AstralBrandIcon,
  AstroBrandIcon,
  ASUSBrandIcon,
  AtariBrandIcon,
  AtlasOSBrandIcon,
  AtlassianBrandIcon,
  AtomGitBrandIcon,
  ATTBrandIcon,
  AuchanBrandIcon,
  AudacityBrandIcon,
  AudibleBrandIcon,
  AudiBrandIcon,
  AudiobookshelfBrandIcon,
  AudioboomBrandIcon,
  AudiomackBrandIcon,
  AudioTechnicaBrandIcon,
  AureliaBrandIcon,
  AutentiqueBrandIcon,
  Auth0BrandIcon,
  AutheliaBrandIcon,
  AuthentikBrandIcon,
  AutoCADBrandIcon,
  AutoCannonBrandIcon,
  AutodeskBrandIcon,
  AutodeskMayaBrandIcon,
  AutodeskRevitBrandIcon,
  AutoHotkeyBrandIcon,
  AutoItBrandIcon,
  AutomatticBrandIcon,
  AutoprefixerBrandIcon,
  AutoZoneBrandIcon,
  AvajsBrandIcon,
  AvaloniaUIBrandIcon,
  AvastBrandIcon,
  AviancaBrandIcon,
  AviraBrandIcon,
  AVMBrandIcon,
  AwaitBrandIcon,
  AwesomeListsBrandIcon,
  AwesomeWMBrandIcon,
  AwwwardsBrandIcon,
  AxiosBrandIcon,
  AxisBankBrandIcon,
  B4XBrandIcon,
  BabelBrandIcon,
  BabelioBrandIcon,
  BabylonJsBrandIcon,
  BackblazeBrandIcon,
  BackboneBrandIcon,
  BackboneJsBrandIcon,
  BackendlessBrandIcon,
  BackstageBrandIcon,
  BackstageCastingBrandIcon,
  BadooBrandIcon,
  BaiduBrandIcon,
  BakalIBrandIcon,
  BambooBrandIcon,
  BambuLabBrandIcon,
  BandcampBrandIcon,
  BandLabBrandIcon,
  BandsintownBrandIcon,
  BankOfAmericaBrandIcon,
  BarclaysBrandIcon,
  BaremetricsBrandIcon,
  BarmeniaBrandIcon,
  BasecampBrandIcon,
  BaserowBrandIcon,
  BaseUIBrandIcon,
  BasicAttentionTokenBrandIcon,
  BastyonBrandIcon,
  BataBrandIcon,
  BatBrandIcon,
  BattleNetBrandIcon,
  BazelBrandIcon,
  BBBrandIcon,
  BeatportBrandIcon,
  BeatsBrandIcon,
  BeatsByDreBrandIcon,
  BeatStarsBrandIcon,
  BeekeeperStudioBrandIcon,
  BehanceBrandIcon,
  BeijingSubwayBrandIcon,
  BEMBrandIcon,
  BentleyBrandIcon,
  BentoBoxBrandIcon,
  BentoBrandIcon,
  BentoMLBrandIcon,
  BeRealBrandIcon,
  BetfairBrandIcon,
  BetterAuthBrandIcon,
  BetterDiscordBrandIcon,
  BetterStackBrandIcon,
  BevyBrandIcon,
  BigbasketBrandIcon,
  BigBlueButtonBrandIcon,
  BigCartelBrandIcon,
  BigCommerceBrandIcon,
  BilibiliBrandIcon,
  BillboardBrandIcon,
  BIMBrandIcon,
  BinanceBrandIcon,
  BioconductorBrandIcon,
  BioLinkBrandIcon,
  BiomeBrandIcon,
  BisectHostingBrandIcon,
  BitBrandIcon,
  BitbucketBrandIcon,
  BitcoinBrandIcon,
  BitcoinCashBrandIcon,
  BitcoinSVBrandIcon,
  BitCometBrandIcon,
  BitdefenderBrandIcon,
  BitlyBrandIcon,
  BitriseBrandIcon,
  BitsyBrandIcon,
  BitTorrentBrandIcon,
  BitwardenBrandIcon,
  BitwigBrandIcon,
  BlackberryBrandIcon,
  BlackBrandIcon,
  BlackmagicDesignBrandIcon,
  BlazemeterBrandIcon,
  BlazorBrandIcon,
  BlenderBrandIcon,
  BlibliBrandIcon,
  BlockbenchBrandIcon,
  BlockchainComBrandIcon,
  BloggerBrandIcon,
  BloglovinBrandIcon,
  BlueprintBrandIcon,
  BlueskyBrandIcon,
  BluesoundBrandIcon,
  BluetoothBrandIcon,
  BMCSoftwareBrandIcon,
  BMWBrandIcon,
  BNBChainBrandIcon,
  BoardGameGeekBrandIcon,
  BoAtBrandIcon,
  BoehringerIngelheimBrandIcon,
  BoeingBrandIcon,
  BohemiaInteractiveBrandIcon,
  BombardierBrandIcon,
  BookalopeBrandIcon,
  BookBubBrandIcon,
  BookingComBrandIcon,
  BookmeterBrandIcon,
  BookMyShowBrandIcon,
  BookStackBrandIcon,
  BoostBrandIcon,
  BoostyBrandIcon,
  BootsBrandIcon,
  BootstrapBrandIcon,
  BorgBackupBrandIcon,
  BoschBrandIcon,
  BoseBrandIcon,
  BotbleCMSBrandIcon,
  BoulangerBrandIcon,
  BowerBrandIcon,
  BoxBrandIcon,
  BoxySVGBrandIcon,
  BraintreeBrandIcon,
  BraintrustBrandIcon,
  Brand1001TracklistsBrandIcon,
  Brand1111BrandIcon,
  Brand11BrandIcon,
  Brand1PanelBrandIcon,
  Brand1PasswordBrandIcon,
  Brand2FASBrandIcon,
  Brand2KBrandIcon,
  Brand30SecondsOfCodeBrandIcon,
  Brand365DataScienceBrandIcon,
  Brand3MBrandIcon,
  Brand42BrandIcon,
  Brand4chanBrandIcon,
  Brand4DBrandIcon,
  Brand500pxBrandIcon,
  Brand7ZipBrandIcon,
  Brand99designsBrandIcon,
  Brand9GAGBrandIcon,
  BrandfetchBrandIcon,
  BrandfolderBrandIcon,
  BrandIcon,
  brandIconsCatalog,
  BRAutomationBrandIcon,
  BraveBrandIcon,
  BreakerBrandIcon,
  BrenntagBrandIcon,
  BrevoBrandIcon,
  BrexBrandIcon,
  BricksBrandIcon,
  BritishAirwaysBrandIcon,
  BroadcomBrandIcon,
  BrunoBrandIcon,
  BSDBrandIcon,
  BspwmBrandIcon,
  BTBrandIcon,
  BuddyBrandIcon,
  BudibaseBrandIcon,
  BuefyBrandIcon,
  BufferBrandIcon,
  BugattiBrandIcon,
  BugcrowdBrandIcon,
  BuhlBrandIcon,
  BuildkiteBrandIcon,
  BuiltByBitBrandIcon,
  BukalapakBrandIcon,
  BulmaBrandIcon,
  BunBrandIcon,
  BungieBrandIcon,
  BunnyNetBrandIcon,
  BunqBrandIcon,
  BurgerKingBrandIcon,
  BurpSuiteBrandIcon,
  BurtonBrandIcon,
  BuyMeACoffeeBrandIcon,
  BuySellAdsBrandIcon,
  BuzzFeedBrandIcon,
  BVGBrandIcon,
  ByjuSBrandIcon,
  ByteDanceBrandIcon,
  CachetBrandIcon,
  CachyOSBrandIcon,
  CaddyBrandIcon,
  CadillacBrandIcon,
  CafePressBrandIcon,
  CairoGraphicsBrandIcon,
  CairoMetroBrandIcon,
  CaixaBankBrandIcon,
  CakePHPBrandIcon,
  CalComBrandIcon,
  CalendlyBrandIcon,
  CalibreWebBrandIcon,
  CampaignMonitorBrandIcon,
  CamundaBrandIcon,
  CanonicalBrandIcon,
  CanvasBrandIcon,
  CapacitorBrandIcon,
  CapRoverBrandIcon,
  CardanoBrandIcon,
  CardmarketBrandIcon,
  CarlsbergGroupBrandIcon,
  CarrdBrandIcon,
  CarrefourBrandIcon,
  CarThrottleBrandIcon,
  CartoBrandIcon,
  CashAppBrandIcon,
  CastboxBrandIcon,
  CastoramaBrandIcon,
  CastroBrandIcon,
  CaterpillarBrandIcon,
  CBCBrandIcon,
  CBrandIcon,
  CBSBrandIcon,
  CBuilderBrandIcon,
  CCCBrandIcon,
  CCleanerBrandIcon,
  CDProjektBrandIcon,
  CEBrandIcon,
  CeleryBrandIcon,
  CelestronBrandIcon,
  CentOSBrandIcon,
  CephBrandIcon,
  CesiumBrandIcon,
  ChaiBrandIcon,
  ChainguardBrandIcon,
  ChainlinkBrandIcon,
  ChakraUIBrandIcon,
  ChangeDetectionBrandIcon,
  Channel4BrandIcon,
  CharlesBrandIcon,
  ChartJsBrandIcon,
  ChartMogulBrandIcon,
  ChaseBrandIcon,
  ChatBotBrandIcon,
  ChatwootBrandIcon,
  CheckiOBrandIcon,
  CheckmarxBrandIcon,
  CheckmkBrandIcon,
  ChedrauiBrandIcon,
  CheerioBrandIcon,
  ChefBrandIcon,
  ChemexBrandIcon,
  ChessComBrandIcon,
  ChevroletBrandIcon,
  ChiaNetworkBrandIcon,
  ChinaEasternAirlinesBrandIcon,
  ChinaRailwayBrandIcon,
  ChinaSouthernAirlinesBrandIcon,
  ChocolateyBrandIcon,
  ChromaticBrandIcon,
  ChromeWebStoreBrandIcon,
  ChryslerBrandIcon,
  ChupaChupsBrandIcon,
  CiliumBrandIcon,
  Cinema4DBrandIcon,
  CinnamonBrandIcon,
  CinnyBrandIcon,
  CircleBrandIcon,
  CircleCIBrandIcon,
  CircuitVerseBrandIcon,
  CirrusCIBrandIcon,
  CiscoBrandIcon,
  CitrixBrandIcon,
  CitroNBrandIcon,
  CiviCRMBrandIcon,
  CivoBrandIcon,
  ClarifaiBrandIcon,
  ClarisBrandIcon,
  ClarivateBrandIcon,
  ClaudeBrandIcon,
  ClaudeCodeBrandIcon,
  ClerkBrandIcon,
  CleverCloudBrandIcon,
  ClickHouseBrandIcon,
  ClickUpBrandIcon,
  ClineBrandIcon,
  CLionBrandIcon,
  ClockifyBrandIcon,
  ClojureBrandIcon,
  Cloud66BrandIcon,
  CloudBeesBrandIcon,
  CloudCannonBrandIcon,
  ClouderaBrandIcon,
  CloudflareBrandIcon,
  CloudflarePagesBrandIcon,
  CloudflareWorkersBrandIcon,
  CloudFoundryBrandIcon,
  CloudinaryBrandIcon,
  CloudNativeBuildBrandIcon,
  CloudronBrandIcon,
  CloudsmithBrandIcon,
  CloudwaysBrandIcon,
  ClubforceBrandIcon,
  ClubhouseBrandIcon,
  ClypBrandIcon,
  CMakeBrandIcon,
  CNCFBrandIcon,
  CNESBrandIcon,
  CNETBrandIcon,
  CNNBrandIcon,
  CobaltBrandIcon,
  CocaColaBrandIcon,
  CockpitBrandIcon,
  CockroachLabsBrandIcon,
  CocoaPodsBrandIcon,
  CocosBrandIcon,
  CodaBrandIcon,
  CodacyBrandIcon,
  CodebergBrandIcon,
  CodeBlocksBrandIcon,
  CodeBuddyBrandIcon,
  CodecademyBrandIcon,
  CodeceptJSBrandIcon,
  CodeChefBrandIcon,
  CodeClimateBrandIcon,
  CodecovBrandIcon,
  CodeCraftersBrandIcon,
  CodeFactorBrandIcon,
  CodeforcesBrandIcon,
  CodefreshBrandIcon,
  CodeIgniterBrandIcon,
  CodemagicBrandIcon,
  CodementorBrandIcon,
  CodeMirrorBrandIcon,
  CodeNewbieBrandIcon,
  CodeProjectBrandIcon,
  CodeRabbitBrandIcon,
  CoderBrandIcon,
  CodersRankBrandIcon,
  CoderwallBrandIcon,
  CodeSandboxBrandIcon,
  CodeshipBrandIcon,
  CodeSignalBrandIcon,
  CodeStreamBrandIcon,
  CodewarsBrandIcon,
  CodinGameBrandIcon,
  CodingNinjasBrandIcon,
  CodioBrandIcon,
  CoffeeScriptBrandIcon,
  CoggleBrandIcon,
  CoinbaseBrandIcon,
  CoinMarketCapBrandIcon,
  CollaboraOnlineBrandIcon,
  ComicFuryBrandIcon,
  CommaBrandIcon,
  CommerzbankBrandIcon,
  CommitlintBrandIcon,
  CommodoreBrandIcon,
  CommonLispBrandIcon,
  CommonWorkflowLanguageBrandIcon,
  CompilerExplorerBrandIcon,
  ComposerBrandIcon,
  CompTIABrandIcon,
  ComsolBrandIcon,
  ConanBrandIcon,
  ConcourseBrandIcon,
  CondaForgeBrandIcon,
  ConektaBrandIcon,
  ConfluenceBrandIcon,
  Construct3BrandIcon,
  ConsulBrandIcon,
  ContaboBrandIcon,
  ContactlessPaymentBrandIcon,
  ContainerdBrandIcon,
  ContaoBrandIcon,
  ContensisBrandIcon,
  ContentfulBrandIcon,
  ContentstackBrandIcon,
  ContinenteBrandIcon,
  ContributorCovenantBrandIcon,
  ConventionalCommitsBrandIcon,
  ConvertioBrandIcon,
  ConvexBrandIcon,
  CookiecutterBrandIcon,
  CoolerMasterBrandIcon,
  CoolifyBrandIcon,
  CoOpBrandIcon,
  CopaAirlinesBrandIcon,
  CoppelBrandIcon,
  CoraBrandIcon,
  CorebootBrandIcon,
  CorelDRAWBrandIcon,
  CoronaEngineBrandIcon,
  CoronaRendererBrandIcon,
  CorsairBrandIcon,
  CouchbaseBrandIcon,
  CounterStrikeBrandIcon,
  CountingWorksPROBrandIcon,
  CourseraBrandIcon,
  CoverallsBrandIcon,
  CozeBrandIcon,
  CPanelBrandIcon,
  CplusplusBrandIcon,
  CraftCMSBrandIcon,
  CraftsmanBrandIcon,
  CrateDBBrandIcon,
  CrayonBrandIcon,
  CrealityBrandIcon,
  CreateReactAppBrandIcon,
  CreativeCommonsBrandIcon,
  CreativeTechnologyBrandIcon,
  CredlyBrandIcon,
  CrehanaBrandIcon,
  CrewAIBrandIcon,
  CrewUnitedBrandIcon,
  CriticalRoleBrandIcon,
  CrowdinBrandIcon,
  CrowdsourceBrandIcon,
  CrunchbaseBrandIcon,
  CrunchyrollBrandIcon,
  CryengineBrandIcon,
  CryptomatorBrandIcon,
  CryptPadBrandIcon,
  CrystalBrandIcon,
  CSDNBrandIcon,
  CSSBrandIcon,
  CSSDesignAwardsBrandIcon,
  CSSModulesBrandIcon,
  CSSWizardryBrandIcon,
  CTSBrandIcon,
  CucumberBrandIcon,
  CulturaBrandIcon,
  CurlBrandIcon,
  CurseForgeBrandIcon,
  CursorBrandIcon,
  CustomInkBrandIcon,
  CyberDefendersBrandIcon,
  Cycling74BrandIcon,
  CypressBrandIcon,
  CytoscapeJsBrandIcon,
  D3BrandIcon,
  DaciaBrandIcon,
  DAFBrandIcon,
  DailyDevBrandIcon,
  DailymotionBrandIcon,
  DaisyUIBrandIcon,
  DaprBrandIcon,
  DarkReaderBrandIcon,
  DartBrandIcon,
  DartyBrandIcon,
  DasErsteBrandIcon,
  Dash0BrandIcon,
  DashBrandIcon,
  DashlaneBrandIcon,
  DaskBrandIcon,
  DassaultSystMesBrandIcon,
  DataAiBrandIcon,
  DatabricksBrandIcon,
  DataCampBrandIcon,
  DatadogBrandIcon,
  DataGripBrandIcon,
  DataikuBrandIcon,
  DataStaxBrandIcon,
  DateFnsBrandIcon,
  DatevBrandIcon,
  DatoCMSBrandIcon,
  DattoBrandIcon,
  DaVinciResolveBrandIcon,
  DazhongDianpingBrandIcon,
  DAZNBrandIcon,
  DBeaverBrandIcon,
  DblpBrandIcon,
  DBrandIcon,
  DCEntertainmentBrandIcon,
  DebianBrandIcon,
  DebridLinkBrandIcon,
  DecapCMSBrandIcon,
  DecentralandBrandIcon,
  DEDGEBrandIcon,
  DeepCoolBrandIcon,
  DeepgramBrandIcon,
  DeepinBrandIcon,
  DeepLBrandIcon,
  DeepMindBrandIcon,
  DeepnoteBrandIcon,
  DeepSeekBrandIcon,
  DeezerBrandIcon,
  DeliverooBrandIcon,
  DellBrandIcon,
  DeLonghiBrandIcon,
  DelphiBrandIcon,
  DeltaBrandIcon,
  DelugeBrandIcon,
  DenoBrandIcon,
  DenoDeployBrandIcon,
  DenonBrandIcon,
  DependabotBrandIcon,
  DepositphotosBrandIcon,
  DerSpiegelBrandIcon,
  DeutscheBahnBrandIcon,
  DeutscheBankBrandIcon,
  DeutschePostBrandIcon,
  DeutscheTelekomBrandIcon,
  DeutscheWelleBrandIcon,
  DevboxBrandIcon,
  DevelopmentContainersBrandIcon,
  DevExpressBrandIcon,
  DeviantArtBrandIcon,
  DevpostBrandIcon,
  DevRantBrandIcon,
  DevToBrandIcon,
  DevuanBrandIcon,
  DgraphBrandIcon,
  DHLBrandIcon,
  DiagramsNetBrandIcon,
  DialogflowBrandIcon,
  DiasporaBrandIcon,
  DiceBearBrandIcon,
  DictionaryComBrandIcon,
  DifyBrandIcon,
  DiggBrandIcon,
  DigiKeyElectronicsBrandIcon,
  DigitalOceanBrandIcon,
  DinersClubBrandIcon,
  DiorBrandIcon,
  DirectusBrandIcon,
  DiscogsBrandIcon,
  DiscordBrandIcon,
  DiscordJsBrandIcon,
  DiscourseBrandIcon,
  DiscoverBrandIcon,
  DisqusBrandIcon,
  DisrootBrandIcon,
  DistroboxBrandIcon,
  DistrokidBrandIcon,
  DjangoBrandIcon,
  DJIBrandIcon,
  DlibBrandIcon,
  DLNABrandIcon,
  DlthubBrandIcon,
  DmBrandIcon,
  DMMBrandIcon,
  DockerBrandIcon,
  DocsifyBrandIcon,
  DocsRsBrandIcon,
  DoctrineBrandIcon,
  DocusaurusBrandIcon,
  DodoPaymentsBrandIcon,
  DogecoinBrandIcon,
  DOIBrandIcon,
  DolbyBrandIcon,
  DolibarrBrandIcon,
  DolphinBrandIcon,
  DoorDashBrandIcon,
  Dota2BrandIcon,
  DoubanBrandIcon,
  DoubanReadBrandIcon,
  DovecotBrandIcon,
  DovetailBrandIcon,
  DowndetectorBrandIcon,
  DoxygenBrandIcon,
  DPDBrandIcon,
  DragonframeBrandIcon,
  DraugiemLvBrandIcon,
  DreamstimeBrandIcon,
  DribbbleBrandIcon,
  DrizzleBrandIcon,
  DroneBrandIcon,
  DroobleBrandIcon,
  DropboxBrandIcon,
  DrupalBrandIcon,
  DSAutomobilesBrandIcon,
  DTSBrandIcon,
  DTubeBrandIcon,
  DucatiBrandIcon,
  DuckDBBrandIcon,
  DuckDuckGoBrandIcon,
  DungeonsDragonsBrandIcon,
  DunkedBrandIcon,
  DunzoBrandIcon,
  DuolingoBrandIcon,
  DuplicatiBrandIcon,
  DVCBrandIcon,
  DWaveSystemsBrandIcon,
  DwmBrandIcon,
  DynatraceBrandIcon,
  E3BrandIcon,
  EABrandIcon,
  EACBrandIcon,
  EagleBrandIcon,
  EasyEDABrandIcon,
  EasyJetBrandIcon,
  EBayBrandIcon,
  EBOXBrandIcon,
  EBrandIcon,
  EclipseAdoptiumBrandIcon,
  EclipseCheBrandIcon,
  EclipseIDEBrandIcon,
  EclipseJettyBrandIcon,
  EclipseMosquittoBrandIcon,
  EclipseVertXBrandIcon,
  EcosiaBrandIcon,
  EcovacsBrandIcon,
  EdekaBrandIcon,
  EdgeImpulseBrandIcon,
  EditorConfigBrandIcon,
  EducativeBrandIcon,
  EdXBrandIcon,
  EffectBrandIcon,
  EggheadBrandIcon,
  EgnyteBrandIcon,
  EightBrandIcon,
  EightSleepBrandIcon,
  EJSBrandIcon,
  ElasticBrandIcon,
  ElasticCloudBrandIcon,
  ElasticsearchBrandIcon,
  ElasticStackBrandIcon,
  ElavonBrandIcon,
  ELeclercBrandIcon,
  ElectronBrandIcon,
  ElectronBuilderBrandIcon,
  ElectronFiddleBrandIcon,
  ElegooBrandIcon,
  ElementaryBrandIcon,
  ElementBrandIcon,
  ElementorBrandIcon,
  ElevenLabsBrandIcon,
  EleventyBrandIcon,
  ElgatoBrandIcon,
  ElixirBrandIcon,
  ElkBrandIcon,
  ElmBrandIcon,
  ElsevierBrandIcon,
  EmbarcaderoBrandIcon,
  EmbarkBrandIcon,
  EmberJsBrandIcon,
  EmbyBrandIcon,
  EmiratesBrandIcon,
  EmlakjetBrandIcon,
  EndeavourOSBrandIcon,
  EnpassBrandIcon,
  ENSBrandIcon,
  EnteBrandIcon,
  EnterpriseDBBrandIcon,
  EnvatoBrandIcon,
  ENVBrandIcon,
  EnvoyProxyBrandIcon,
  EPELBrandIcon,
  EpicGamesBrandIcon,
  EpsonBrandIcon,
  EquinixMetalBrandIcon,
  EraserBrandIcon,
  EricssonBrandIcon,
  ErlangBrandIcon,
  ERPNextBrandIcon,
  EsbuildBrandIcon,
  ESEABrandIcon,
  ESLGamingBrandIcon,
  ESLintBrandIcon,
  EsotericSoftwareBrandIcon,
  ESPHomeBrandIcon,
  EspressifBrandIcon,
  ESRIBrandIcon,
  EtcdBrandIcon,
  EthereumBrandIcon,
  EthersBrandIcon,
  EthiopianAirlinesBrandIcon,
  EtihadAirwaysBrandIcon,
  EtsyBrandIcon,
  EuropeanUnionBrandIcon,
  EventStoreBrandIcon,
  EvernoteBrandIcon,
  EveryOrgBrandIcon,
  ExcalidrawBrandIcon,
  ExercismBrandIcon,
  ExordoBrandIcon,
  ExoscaleBrandIcon,
  ExpediaBrandIcon,
  ExpensifyBrandIcon,
  ExpertsExchangeBrandIcon,
  ExpoBrandIcon,
  ExpressBrandIcon,
  ExpressComBrandIcon,
  ExpressVPNBrandIcon,
  EyeEmBrandIcon,
  F1BrandIcon,
  F5BrandIcon,
  FacebookBrandIcon,
  FacebookGamingBrandIcon,
  FacebookLiveBrandIcon,
  FaceitBrandIcon,
  FacepunchBrandIcon,
  FairphoneBrandIcon,
  FakerBrandIcon,
  FalcoBrandIcon,
  FalconBrandIcon,
  FamPayBrandIcon,
  FandangoBrandIcon,
  FandomBrandIcon,
  FanfouBrandIcon,
  FantomBrandIcon,
  FarcasterBrandIcon,
  FareHarborBrandIcon,
  FarfetchBrandIcon,
  FastAPIBrandIcon,
  FastifyBrandIcon,
  FastlaneBrandIcon,
  FastlyBrandIcon,
  FathomBrandIcon,
  FaunaBrandIcon,
  FavroBrandIcon,
  FawryBrandIcon,
  FBrandIcon,
  FCCBrandIcon,
  FDroidBrandIcon,
  FedExBrandIcon,
  FedoraBrandIcon,
  FeedlyBrandIcon,
  FerrariBrandIcon,
  FerrariNVBrandIcon,
  FerretDBBrandIcon,
  FFmpegBrandIcon,
  FiatBrandIcon,
  FiBrandIcon,
  FidoAllianceBrandIcon,
  FIFABrandIcon,
  FigBrandIcon,
  FigmaBrandIcon,
  FigshareBrandIcon,
  FilaBrandIcon,
  FilamentBrandIcon,
  FileIoBrandIcon,
  FilenBrandIcon,
  FilesBrandIcon,
  FileZillaBrandIcon,
  FilloutBrandIcon,
  FinecoBrandIcon,
  FingBrandIcon,
  FirebaseBrandIcon,
  FirefishBrandIcon,
  FireflyIIIBrandIcon,
  FirefoxBrandIcon,
  FirefoxBrowserBrandIcon,
  FireshipBrandIcon,
  FirewallaBrandIcon,
  FirstBrandIcon,
  FishAudioBrandIcon,
  FishShellBrandIcon,
  FitbitBrandIcon,
  FiveMBrandIcon,
  FiverrBrandIcon,
  FizzBrandIcon,
  FlashforgeBrandIcon,
  FlaskBrandIcon,
  FlatBrandIcon,
  FlathubBrandIcon,
  FlatpakBrandIcon,
  FlickrBrandIcon,
  FlightawareBrandIcon,
  FlipboardBrandIcon,
  FloatplaneBrandIcon,
  FloodBrandIcon,
  FloorpBrandIcon,
  FlowerBrandIcon,
  FluentBitBrandIcon,
  FluentdBrandIcon,
  FlukeBrandIcon,
  FlutterBrandIcon,
  FluxBrandIcon,
  FluxerBrandIcon,
  FlyIoBrandIcon,
  FlywayBrandIcon,
  FMODBrandIcon,
  FnacBrandIcon,
  FoliumBrandIcon,
  FoloBrandIcon,
  FonomaBrandIcon,
  FontAwesomeBrandIcon,
  FontBaseBrandIcon,
  FontForgeBrandIcon,
  Foobar2000BrandIcon,
  FoodpandaBrandIcon,
  FordBrandIcon,
  ForgejoBrandIcon,
  FormbricksBrandIcon,
  FormikBrandIcon,
  FormspreeBrandIcon,
  FormstackBrandIcon,
  FortinetBrandIcon,
  FortniteBrandIcon,
  FortranBrandIcon,
  FossaBrandIcon,
  FossilSCMBrandIcon,
  FoundryVirtualTabletopBrandIcon,
  FoursquareBrandIcon,
  FOXBrandIcon,
  FoxtelBrandIcon,
  FozzyBrandIcon,
  FramerBrandIcon,
  Framework7BrandIcon,
  FrameworkBrandIcon,
  FranprixBrandIcon,
  FrappeBrandIcon,
  FraunhoferGesellschaftBrandIcon,
  FreeBSDBrandIcon,
  FreeCADBrandIcon,
  FreeCodeCampBrandIcon,
  FreedesktopOrgBrandIcon,
  FreelancerBrandIcon,
  FreelancermapBrandIcon,
  FreeNASBrandIcon,
  FreenetBrandIcon,
  FreepikBrandIcon,
  FreeTubeBrandIcon,
  FreshBrandIcon,
  FreshRSSBrandIcon,
  FrigateBrandIcon,
  FritzBrandIcon,
  FrontendMentorBrandIcon,
  FrontifyBrandIcon,
  FuboBrandIcon,
  FuelerBrandIcon,
  FugaCloudBrandIcon,
  FujifilmBrandIcon,
  FujitsuBrandIcon,
  FurAffinityBrandIcon,
  FurryNetworkBrandIcon,
  FusionAuthBrandIcon,
  FutureLearnBrandIcon,
  FyleBrandIcon,
  G2ABrandIcon,
  G2BrandIcon,
  G2GBrandIcon,
  GalaxusBrandIcon,
  GameBananaBrandIcon,
  GameDeveloperBrandIcon,
  GameJoltBrandIcon,
  GameloftBrandIcon,
  GamemakerBrandIcon,
  GameScienceBrandIcon,
  GandiBrandIcon,
  GarminBrandIcon,
  GarudaLinuxBrandIcon,
  GatlingBrandIcon,
  GatsbyBrandIcon,
  GcoreBrandIcon,
  GDALBrandIcon,
  GeeksforGeeksBrandIcon,
  GeneralElectricBrandIcon,
  GeneralMotorsBrandIcon,
  GeniusBrandIcon,
  GentooBrandIcon,
  GeocachingBrandIcon,
  GeodeBrandIcon,
  GeoPandasBrandIcon,
  GerritBrandIcon,
  getBrandIconData,
  GetXBrandIcon,
  GhostBrandIcon,
  GhosteryBrandIcon,
  GhostfolioBrandIcon,
  GhosttyBrandIcon,
  GIMPBrandIcon,
  GinBrandIcon,
  GiphyBrandIcon,
  GitBookBrandIcon,
  GitBrandIcon,
  GitCodeBrandIcon,
  GitconnectedBrandIcon,
  GiteaBrandIcon,
  GiteeBrandIcon,
  GitExtensionsBrandIcon,
  GitForWindowsBrandIcon,
  GitHubActionsBrandIcon,
  GitHubBrandIcon,
  GitHubCopilotBrandIcon,
  GitHubPagesBrandIcon,
  GitHubSponsorsBrandIcon,
  GitignoreIoBrandIcon,
  GitKrakenBrandIcon,
  GitLabBrandIcon,
  GitLFSBrandIcon,
  GitpodBrandIcon,
  GitterBrandIcon,
  GlanceBrandIcon,
  GlassBrandIcon,
  GlassdoorBrandIcon,
  GleamBrandIcon,
  GlideBrandIcon,
  GLINetBrandIcon,
  GlitchBrandIcon,
  GlobusBrandIcon,
  GlovoBrandIcon,
  GlTFBrandIcon,
  GmailBrandIcon,
  GMXBrandIcon,
  GnomeBrandIcon,
  GnomeTerminalBrandIcon,
  GNUBashBrandIcon,
  GNUBrandIcon,
  GNUEmacsBrandIcon,
  GNUIceCatBrandIcon,
  GNUPrivacyGuardBrandIcon,
  GNUSocialBrandIcon,
  GoBrandIcon,
  GoCDBrandIcon,
  GoDaddyBrandIcon,
  GodotEngineBrandIcon,
  GodoxBrandIcon,
  GoFundMeBrandIcon,
  GOGComBrandIcon,
  GojekBrandIcon,
  GoLandBrandIcon,
  GoldmanSachsBrandIcon,
  GoodreadsBrandIcon,
  GoogleAdMobBrandIcon,
  GoogleAdsBrandIcon,
  GoogleAdSenseBrandIcon,
  GoogleAnalyticsBrandIcon,
  GoogleAppsScriptBrandIcon,
  GoogleAssistantBrandIcon,
  GoogleAuthenticatorBrandIcon,
  GoogleBigQueryBrandIcon,
  GoogleBigtableBrandIcon,
  GoogleBrandIcon,
  GoogleCalendarBrandIcon,
  GoogleCampaignManager360BrandIcon,
  GoogleCardboardBrandIcon,
  GoogleCastBrandIcon,
  GoogleChatBrandIcon,
  GoogleChromeBrandIcon,
  GoogleChronicleBrandIcon,
  GoogleClassroomBrandIcon,
  GoogleCloudBrandIcon,
  GoogleCloudComposerBrandIcon,
  GoogleCloudSpannerBrandIcon,
  GoogleCloudStorageBrandIcon,
  GoogleColabBrandIcon,
  GoogleContainerOptimizedOSBrandIcon,
  GoogleDataflowBrandIcon,
  GoogleDataprocBrandIcon,
  GoogleDisplayVideo360BrandIcon,
  GoogleDocsBrandIcon,
  GoogleDriveBrandIcon,
  GoogleEarthBrandIcon,
  GoogleEarthEngineBrandIcon,
  GoogleFontsBrandIcon,
  GoogleFormsBrandIcon,
  GoogleGeminiBrandIcon,
  GoogleHomeBrandIcon,
  GoogleJulesBrandIcon,
  GoogleKeepBrandIcon,
  GoogleLensBrandIcon,
  GoogleMapsBrandIcon,
  GoogleMarketingPlatformBrandIcon,
  GoogleMeetBrandIcon,
  GoogleMessagesBrandIcon,
  GoogleNearbyBrandIcon,
  GoogleNewsBrandIcon,
  GooglePayBrandIcon,
  GooglePhotosBrandIcon,
  GooglePlayBrandIcon,
  GooglePubSubBrandIcon,
  GoogleScholarBrandIcon,
  GoogleSearchConsoleBrandIcon,
  GoogleSheetsBrandIcon,
  GoogleSlidesBrandIcon,
  GoogleStreetViewBrandIcon,
  GoogleSummerOfCodeBrandIcon,
  GoogleTagManagerBrandIcon,
  GoogleTasksBrandIcon,
  GoogleTranslateBrandIcon,
  GoogleTVBrandIcon,
  GoToMeetingBrandIcon,
  GPLv3BrandIcon,
  GrabBrandIcon,
  GradioBrandIcon,
  GradleBrandIcon,
  GradlePlayPublisherBrandIcon,
  GrafanaBrandIcon,
  GrammarlyBrandIcon,
  GrandFraisBrandIcon,
  GrapheneOSBrandIcon,
  GraphiteBrandIcon,
  GraphiteEditorBrandIcon,
  GraphQLBrandIcon,
  GravatarBrandIcon,
  GravBrandIcon,
  GraylogBrandIcon,
  GreasyForkBrandIcon,
  GreatLearningBrandIcon,
  GreenhouseBrandIcon,
  GreenSockBrandIcon,
  GreptimeDBBrandIcon,
  GridAiBrandIcon,
  GridsomeBrandIcon,
  GrocyBrandIcon,
  GroupMeBrandIcon,
  GrouponBrandIcon,
  GruntBrandIcon,
  GSAPBrandIcon,
  GSKBrandIcon,
  GSMABrandIcon,
  GSMArenaComBrandIcon,
  GStreamerBrandIcon,
  GTKBrandIcon,
  GuangzhouMetroBrandIcon,
  GuildedBrandIcon,
  GuitarProBrandIcon,
  GulpBrandIcon,
  GumroadBrandIcon,
  GumtreeBrandIcon,
  GunicornBrandIcon,
  GurobiBrandIcon,
  GustoBrandIcon,
  GutenbergBrandIcon,
  H2DatabaseBrandIcon,
  H3BrandIcon,
  HabrBrandIcon,
  HackadayBrandIcon,
  HackClubBrandIcon,
  HackerEarthBrandIcon,
  HackerNoonBrandIcon,
  HackerOneBrandIcon,
  HackerRankBrandIcon,
  HackMDBrandIcon,
  HacksterBrandIcon,
  HackTheBoxBrandIcon,
  HALBrandIcon,
  HandlebarsJsBrandIcon,
  HandshakeBrandIcon,
  HandshakeProtocolBrandIcon,
  HappyCowBrandIcon,
  HAProxyBrandIcon,
  HarborBrandIcon,
  HarmonyOSBrandIcon,
  HashcatBrandIcon,
  HashiCorpBrandIcon,
  HashnodeBrandIcon,
  HaskellBrandIcon,
  HasuraBrandIcon,
  HatenaBookmarkBrandIcon,
  HaveIBeenPwnedBrandIcon,
  HavellsBrandIcon,
  HaxeBrandIcon,
  HaystackBrandIcon,
  HBOBrandIcon,
  HBOMaxBrandIcon,
  HCLBrandIcon,
  HDFCBankBrandIcon,
  HeadlessUIBrandIcon,
  HeadphoneZoneBrandIcon,
  HeadspaceBrandIcon,
  HearthBrandIcon,
  HearthisAtBrandIcon,
  HederaBrandIcon,
  HedgeDocBrandIcon,
  HeliumBrandIcon,
  HeliumBrowserBrandIcon,
  HelixBrandIcon,
  HelloFreshBrandIcon,
  HellyHansenBrandIcon,
  HelmBrandIcon,
  HelpDeskBrandIcon,
  HelpScoutBrandIcon,
  HepsiemlakBrandIcon,
  HEREBrandIcon,
  HermesBrandIcon,
  HeroicGamesLauncherBrandIcon,
  HeroUIBrandIcon,
  HetznerBrandIcon,
  HevyBrandIcon,
  HexletBrandIcon,
  HexoBrandIcon,
  HEYBrandIcon,
  HibernateBrandIcon,
  HiBobBrandIcon,
  HiltonBrandIcon,
  HiltonHotelsResortsBrandIcon,
  HitachiBrandIcon,
  HiveBlockchainBrandIcon,
  HiveBrandIcon,
  HiveMQBrandIcon,
  HMBrandIcon,
  HomarrBrandIcon,
  HomeAdvisorBrandIcon,
  HomeAssistantBrandIcon,
  HomeAssistantCommunityStoreBrandIcon,
  HomebrewBrandIcon,
  HomebridgeBrandIcon,
  HomepageBrandIcon,
  HomifyBrandIcon,
  HondaBrandIcon,
  HoneybadgerBrandIcon,
  HoneyBrandIcon,
  HoneygainBrandIcon,
  HonoBrandIcon,
  HonorBrandIcon,
  HootsuiteBrandIcon,
  HoppscotchBrandIcon,
  HostingerBrandIcon,
  HotelsComBrandIcon,
  HotjarBrandIcon,
  HotwireBrandIcon,
  HoudiniBrandIcon,
  HouzzBrandIcon,
  HPBrandIcon,
  HSBCBrandIcon,
  HTCBrandIcon,
  HTCViveBrandIcon,
  Html5BrandIcon,
  HTMLAcademyBrandIcon,
  HtmxBrandIcon,
  HtopBrandIcon,
  HTTPieBrandIcon,
  HuaweiBrandIcon,
  HubSpotBrandIcon,
  HuggingFaceBrandIcon,
  HugoBrandIcon,
  HumbleBundleBrandIcon,
  HumHubBrandIcon,
  HungryJackSBrandIcon,
  HusqvarnaBrandIcon,
  HyperBrandIcon,
  HyperskillBrandIcon,
  HyperXBrandIcon,
  HypitBrandIcon,
  HypothesisBrandIcon,
  HyprlandBrandIcon,
  HyundaiBrandIcon,
  I18nextBrandIcon,
  I3BrandIcon,
  IATABrandIcon,
  IBeaconBrandIcon,
  IberiaBrandIcon,
  IcedBrandIcon,
  IcelandBrandIcon,
  IciciBankBrandIcon,
  IcingaBrandIcon,
  ICloudBrandIcon,
  IcoMoonBrandIcon,
  ICONBrandIcon,
  IconfinderBrandIcon,
  IconifyBrandIcon,
  IconJarBrandIcon,
  Icons8BrandIcon,
  ICQBrandIcon,
  IEEEBrandIcon,
  IFixitBrandIcon,
  IFoodBrandIcon,
  IftttBrandIcon,
  IGDBBrandIcon,
  IGNBrandIcon,
  IHeartRadioBrandIcon,
  IKEABrandIcon,
  ILovePDFBrandIcon,
  ImageJBrandIcon,
  ImageScBrandIcon,
  ImageToolboxBrandIcon,
  IMDbBrandIcon,
  IMessageBrandIcon,
  ImgurBrandIcon,
  ImmerBrandIcon,
  ImmersiveTranslateBrandIcon,
  ImmichBrandIcon,
  ImouBrandIcon,
  ImprovMXBrandIcon,
  IndeedBrandIcon,
  IndianSuperLeagueBrandIcon,
  IndieHackersBrandIcon,
  IndieWebBrandIcon,
  IndiGoBrandIcon,
  InductiveAutomationBrandIcon,
  InertiaBrandIcon,
  InfinitiBrandIcon,
  InfinityFreeBrandIcon,
  InfluxDBBrandIcon,
  InfomaniakBrandIcon,
  InfoQBrandIcon,
  InfosysBrandIcon,
  InfracostBrandIcon,
  InfuseBrandIcon,
  IngressBrandIcon,
  InkdropBrandIcon,
  InkscapeBrandIcon,
  InoreaderBrandIcon,
  InquirerBrandIcon,
  InsomniaBrandIcon,
  InspireBrandIcon,
  Insta360BrandIcon,
  InstacartBrandIcon,
  InstagramBrandIcon,
  InstapaperBrandIcon,
  InstatusBrandIcon,
  InstructablesBrandIcon,
  InstructureBrandIcon,
  IntelBrandIcon,
  IntelliJIDEABrandIcon,
  InteractionDesignFoundationBrandIcon,
  InteractJSBrandIcon,
  InterbaseBrandIcon,
  IntercomBrandIcon,
  IntermarcheBrandIcon,
  InternetArchiveBrandIcon,
  InternetComputerBrandIcon,
  IntigritiBrandIcon,
  IntuitBrandIcon,
  InvidiousBrandIcon,
  InvoiceNinjaBrandIcon,
  IoBrokerBrandIcon,
  IonicBrandIcon,
  IonosBrandIcon,
  IOSBrandIcon,
  IOTABrandIcon,
  IPFSBrandIcon,
  IRISBrandIcon,
  IRobotBrandIcon,
  ISC2BrandIcon,
  ISROBrandIcon,
  IssuuBrandIcon,
  IstioBrandIcon,
  ItchIoBrandIcon,
  ITerm2BrandIcon,
  ITunesBrandIcon,
  ITVxBrandIcon,
  IvecoBrandIcon,
  JabberBrandIcon,
  JaegerBrandIcon,
  JamesonBrandIcon,
  JamstackBrandIcon,
  JapanAirlinesBrandIcon,
  JasmineBrandIcon,
  JavaScriptBrandIcon,
  JBLBrandIcon,
  JCBBrandIcon,
  JDoodleBrandIcon,
  JeepBrandIcon,
  JekyllBrandIcon,
  JellyfinBrandIcon,
  JenkinsBrandIcon,
  JestBrandIcon,
  JetBlueBrandIcon,
  JetBrainsBrandIcon,
  JETBrandIcon,
  JetpackComposeBrandIcon,
  JFrogBrandIcon,
  JFrogPipelinesBrandIcon,
  JHipsterBrandIcon,
  JinjaBrandIcon,
  JioBrandIcon,
  JiraBrandIcon,
  JiraSoftwareBrandIcon,
  JitPackBrandIcon,
  JitsiBrandIcon,
  JohnDeereBrandIcon,
  JoomlaBrandIcon,
  JoplinBrandIcon,
  JordanBrandIcon,
  JouavBrandIcon,
  JovianBrandIcon,
  JPEGBrandIcon,
  JQueryBrandIcon,
  JRGroupBrandIcon,
  JsDelivrBrandIcon,
  JSFiddleBrandIcon,
  JSONBrandIcon,
  JSONWebTokensBrandIcon,
  JSRBrandIcon,
  JSSBrandIcon,
  JUCEBrandIcon,
  JuejinBrandIcon,
  JUKEBrandIcon,
  JuliaBrandIcon,
  JuniperNetworksBrandIcon,
  JUnit5BrandIcon,
  JupyterBrandIcon,
  JustBrandIcon,
  JustEatBrandIcon,
  JustGivingBrandIcon,
  K3sBrandIcon,
  K6BrandIcon,
  KaggleBrandIcon,
  KagiBrandIcon,
  KahootBrandIcon,
  KaiOSBrandIcon,
  KakaoBrandIcon,
  KakaoTalkBrandIcon,
  KaliLinuxBrandIcon,
  KamailioBrandIcon,
  KandoBrandIcon,
  KanikoBrandIcon,
  KarakeepBrandIcon,
  KarlsruherVerkehrsverbundBrandIcon,
  KasaSmartBrandIcon,
  KashFlowBrandIcon,
  KasperskyBrandIcon,
  KatanaBrandIcon,
  KauflandBrandIcon,
  KDEBrandIcon,
  KDENeonBrandIcon,
  KdenliveBrandIcon,
  KDEPlasmaBrandIcon,
  KedroBrandIcon,
  KeeneticBrandIcon,
  KeepAChangelogBrandIcon,
  KeePassXCBrandIcon,
  KeeperBrandIcon,
  KeeWebBrandIcon,
  KenmeiBrandIcon,
  KenticoBrandIcon,
  KeployBrandIcon,
  KerasBrandIcon,
  KeybaseBrandIcon,
  KeyCDNBrandIcon,
  KeycloakBrandIcon,
  KeystoneBrandIcon,
  KFCBrandIcon,
  KhanAcademyBrandIcon,
  KhronosGroupBrandIcon,
  KiaBrandIcon,
  KibanaBrandIcon,
  KiCadBrandIcon,
  KickBrandIcon,
  KickstarterBrandIcon,
  KikBrandIcon,
  KimiBrandIcon,
  KingstonTechnologyBrandIcon,
  KinopoiskBrandIcon,
  KinstaBrandIcon,
  KirbyBrandIcon,
  KitBrandIcon,
  KitsuBrandIcon,
  KiwixBrandIcon,
  KlarnaBrandIcon,
  KleinanzeigenBrandIcon,
  KLMBrandIcon,
  KlookBrandIcon,
  KnativeBrandIcon,
  KnexJsBrandIcon,
  KnimeBrandIcon,
  KnipBrandIcon,
  KnowledgeBaseBrandIcon,
  KnownBrandIcon,
  KoaBrandIcon,
  KocBrandIcon,
  KODABrandIcon,
  KodakBrandIcon,
  KodiBrandIcon,
  KodularBrandIcon,
  KoenigseggBrandIcon,
  KofaxBrandIcon,
  KoFiBrandIcon,
  KomootBrandIcon,
  KonamiBrandIcon,
  KongBrandIcon,
  KongregateBrandIcon,
  KonvaBrandIcon,
  KOReaderBrandIcon,
  KotlinBrandIcon,
  KoyebBrandIcon,
  KredBrandIcon,
  KritaBrandIcon,
  KTMBrandIcon,
  KtorBrandIcon,
  KuaishouBrandIcon,
  KubernetesBrandIcon,
  KubesprayBrandIcon,
  KubuntuBrandIcon,
  KuCoinBrandIcon,
  KueskiBrandIcon,
  KumaBrandIcon,
  KununuBrandIcon,
  KuulaBrandIcon,
  KXBrandIcon,
  KyoceraBrandIcon,
  LabExBrandIcon,
  LabVIEWBrandIcon,
  LADABrandIcon,
  LamborghiniBrandIcon,
  LangChainBrandIcon,
  LangChainCorporateBrandIcon,
  LangflowBrandIcon,
  LangGraphBrandIcon,
  LanguageToolBrandIcon,
  LapceBrandIcon,
  LaragonBrandIcon,
  LaravelBrandIcon,
  LaravelHorizonBrandIcon,
  LaravelNovaBrandIcon,
  LastFmBrandIcon,
  LastPassBrandIcon,
  LaTeXBrandIcon,
  LaunchpadBrandIcon,
  LazarusBrandIcon,
  LazyVimBrandIcon,
  LBRYBrandIcon,
  LeaderPriceBrandIcon,
  LeafletBrandIcon,
  LeagueOfLegendsBrandIcon,
  LeanpubBrandIcon,
  LeDeFranceMobilitSBrandIcon,
  LeetCodeBrandIcon,
  LefthookBrandIcon,
  LegacyGamesBrandIcon,
  LeicaBrandIcon,
  LemmyBrandIcon,
  LemonSqueezyBrandIcon,
  LenovoBrandIcon,
  LensBrandIcon,
  LeptosBrandIcon,
  LernaBrandIcon,
  LeroyMerlinBrandIcon,
  LesLibrairesBrandIcon,
  LessBrandIcon,
  LetSEncryptBrandIcon,
  LetterboxdBrandIcon,
  LevelsFyiBrandIcon,
  LGBrandIcon,
  LiberaChatBrandIcon,
  LiberapayBrandIcon,
  LibrariesIoBrandIcon,
  LibraryThingBrandIcon,
  LibreOfficeBaseBrandIcon,
  LibreOfficeBrandIcon,
  LibreOfficeCalcBrandIcon,
  LibreOfficeDrawBrandIcon,
  LibreOfficeImpressBrandIcon,
  LibreOfficeMathBrandIcon,
  LibreOfficeWriterBrandIcon,
  LibreTranslateBrandIcon,
  LibreTubeBrandIcon,
  LibreWolfBrandIcon,
  LibuvBrandIcon,
  LichessBrandIcon,
  LidlBrandIcon,
  LIFXBrandIcon,
  LightBurnBrandIcon,
  LighthouseBrandIcon,
  LightningBrandIcon,
  LimeSurveyBrandIcon,
  LineageOSBrandIcon,
  LinearBrandIcon,
  LINEBrandIcon,
  LiNingBrandIcon,
  LinkedInBrandIcon,
  LinkerdBrandIcon,
  LinkfireBrandIcon,
  LinksysBrandIcon,
  LinktreeBrandIcon,
  LinkvertiseBrandIcon,
  LinphoneBrandIcon,
  LintCodeBrandIcon,
  LinuxBrandIcon,
  LinuxContainersBrandIcon,
  LinuxFoundationBrandIcon,
  LinuxMintBrandIcon,
  LinuxProfessionalInstituteBrandIcon,
  LinuxServerBrandIcon,
  LionAirBrandIcon,
  LiquibaseBrandIcon,
  ListenHubBrandIcon,
  ListmonkBrandIcon,
  LitBrandIcon,
  LitecoinBrandIcon,
  LiteralBrandIcon,
  LitiengineBrandIcon,
  LiveChatBrandIcon,
  LiveJournalBrandIcon,
  LiveKitBrandIcon,
  LivewireBrandIcon,
  LLVMBrandIcon,
  LMMSBrandIcon,
  LMStudioBrandIcon,
  LobstersBrandIcon,
  LocalBrandIcon,
  LocalSendBrandIcon,
  LocalXposeBrandIcon,
  LocustBrandIcon,
  LodashBrandIcon,
  LogMeInBrandIcon,
  LogseqBrandIcon,
  LogstashBrandIcon,
  LonghornBrandIcon,
  LookerBrandIcon,
  LoomBrandIcon,
  LoopBackBrandIcon,
  LoopBrandIcon,
  LoopsBrandIcon,
  LootCrateBrandIcon,
  LospecBrandIcon,
  LOTPolishAirlinesBrandIcon,
  LottieFilesBrandIcon,
  LQuipeBrandIcon,
  LTspiceBrandIcon,
  LuaBrandIcon,
  LuantiBrandIcon,
  LuauBrandIcon,
  LubuntuBrandIcon,
  LuciaBrandIcon,
  LucidBrandIcon,
  LucideBrandIcon,
  LudwigBrandIcon,
  LufthansaBrandIcon,
  LumenBrandIcon,
  LunacyBrandIcon,
  LuoguBrandIcon,
  LutrisBrandIcon,
  LVGLBrandIcon,
  LydiaBrandIcon,
  LyftBrandIcon,
  M5StackBrandIcon,
  MAASBrandIcon,
  MacOSBrandIcon,
  MacPawBrandIcon,
  MacPortsBrandIcon,
  MacySBrandIcon,
  MagasinsUBrandIcon,
  MagicBrandIcon,
  MagiskBrandIcon,
  MahindraBrandIcon,
  MailboxBrandIcon,
  MailChimpBrandIcon,
  MailComBrandIcon,
  MailgunBrandIcon,
  MailRuBrandIcon,
  MailtrapBrandIcon,
  MainWPBrandIcon,
  MajorLeagueHackingBrandIcon,
  MakeBrandIcon,
  MakerBotBrandIcon,
  MaltBrandIcon,
  MalwarebytesBrandIcon,
  MambaUIBrandIcon,
  MAMPBrandIcon,
  ManageIQBrandIcon,
  MANBrandIcon,
  MangacollecBrandIcon,
  MangaUpdatesBrandIcon,
  ManjaroBrandIcon,
  MantineBrandIcon,
  MapboxBrandIcon,
  MapillaryBrandIcon,
  MapLibreBrandIcon,
  MapTilerBrandIcon,
  MariaDBBrandIcon,
  MariaDBFoundationBrandIcon,
  MarkdownBrandIcon,
  MarkoBrandIcon,
  MarriottBrandIcon,
  MarvelAppBrandIcon,
  MaseratiBrandIcon,
  MasterCardBrandIcon,
  MastercomfigBrandIcon,
  MastodonBrandIcon,
  MaterialDesignBrandIcon,
  MaterialDesignIconsBrandIcon,
  MaterialForMkDocsBrandIcon,
  MatillionBrandIcon,
  MatomoBrandIcon,
  MatrixBrandIcon,
  MatterJsBrandIcon,
  MattermostBrandIcon,
  MatternetBrandIcon,
  MauticBrandIcon,
  MaxBrandIcon,
  MaxPlanckGesellschaftBrandIcon,
  MaytagBrandIcon,
  MazdaBrandIcon,
  MazeBrandIcon,
  McAfeeBrandIcon,
  McDonaldSBrandIcon,
  McLarenBrandIcon,
  MDBListBrandIcon,
  MdBookBrandIcon,
  MDNWebDocsBrandIcon,
  MDXBrandIcon,
  MealieBrandIcon,
  MediaFireBrandIcon,
  MediaMarktBrandIcon,
  MediaPipeBrandIcon,
  MediaTekBrandIcon,
  MediBangPaintBrandIcon,
  MediumBrandIcon,
  MedusaBrandIcon,
  MeetupBrandIcon,
  MEGABrandIcon,
  MeilisearchBrandIcon,
  MeituanBrandIcon,
  MeizuBrandIcon,
  MendeleyBrandIcon,
  MentorCruiseBrandIcon,
  MercadoPagoBrandIcon,
  MerckBrandIcon,
  MercurialBrandIcon,
  MermaidBrandIcon,
  MessengerBrandIcon,
  MetaAIBrandIcon,
  MetabaseBrandIcon,
  MetaBrandIcon,
  MetacriticBrandIcon,
  MetaFilterBrandIcon,
  MetaGerBrandIcon,
  MetasploitBrandIcon,
  MeteorBrandIcon,
  MetroBrandIcon,
  MetroDeLaCiudadDeMXicoBrandIcon,
  MetroDeMadridBrandIcon,
  MeWeBrandIcon,
  MezmoBrandIcon,
  MGBrandIcon,
  MicroBitBrandIcon,
  MicroBlogBrandIcon,
  MicroEditorBrandIcon,
  MicroPythonBrandIcon,
  MicrosoftBrandIcon,
  MicrostationBrandIcon,
  MicroStrategyBrandIcon,
  MIDIBrandIcon,
  MigaduBrandIcon,
  MihonBrandIcon,
  MiHoYoBrandIcon,
  MikroTikBrandIcon,
  MilanoteBrandIcon,
  MilvusBrandIcon,
  MindsBrandIcon,
  MinGWW64BrandIcon,
  MiniBrandIcon,
  MiniMaxBrandIcon,
  MinIOBrandIcon,
  MintlifyBrandIcon,
  MinutemailerBrandIcon,
  MirahezeBrandIcon,
  MiroBrandIcon,
  MisskeyBrandIcon,
  MistralAIBrandIcon,
  MitsubishiBrandIcon,
  MixBrandIcon,
  MixcloudBrandIcon,
  MixpanelBrandIcon,
  MLBBrandIcon,
  MLflowBrandIcon,
  MLlerBrandIcon,
  MobXBrandIcon,
  MobXStateTreeBrandIcon,
  MochaBrandIcon,
  MockServiceWorkerBrandIcon,
  ModalBrandIcon,
  ModelContextProtocolBrandIcon,
  ModelScopeBrandIcon,
  ModinBrandIcon,
  ModrinthBrandIcon,
  MODXBrandIcon,
  MojeekBrandIcon,
  MoleculerBrandIcon,
  MomenteoBrandIcon,
  MoneroBrandIcon,
  MoneyGramBrandIcon,
  MongoDBBrandIcon,
  MongooseBrandIcon,
  MongoosedotwsBrandIcon,
  MonicaBrandIcon,
  MonkeyTieBrandIcon,
  MonkeytypeBrandIcon,
  MonoGameBrandIcon,
  MonoprixBrandIcon,
  MonsterBrandIcon,
  MonzoBrandIcon,
  MooBrandIcon,
  MoodleBrandIcon,
  MoonrepoBrandIcon,
  MoonshotAIBrandIcon,
  MoqBrandIcon,
  MoqupsBrandIcon,
  MorrisonsBrandIcon,
  MoscowMetroBrandIcon,
  MotorolaBrandIcon,
  MovistarBrandIcon,
  MozillaBrandIcon,
  MpvBrandIcon,
  MQTTBrandIcon,
  MSIBrandIcon,
  MSIBusinessBrandIcon,
  MTABrandIcon,
  MTRBrandIcon,
  MTroDeParisBrandIcon,
  MUBIBrandIcon,
  MUIBrandIcon,
  MullvadBrandIcon,
  MultisimBrandIcon,
  MumbleBrandIcon,
  MUOBrandIcon,
  MuralBrandIcon,
  MusicBrainzBrandIcon,
  MXLinuxBrandIcon,
  MyAnimeListBrandIcon,
  MyGetBrandIcon,
  MYOBBrandIcon,
  MyShowsBrandIcon,
  MyspaceBrandIcon,
  MySQLBrandIcon,
  N26BrandIcon,
  N8nBrandIcon,
  NamebaseBrandIcon,
  NamecheapBrandIcon,
  NameMCBrandIcon,
  NameSiloBrandIcon,
  NamuWikiBrandIcon,
  NanoBrandIcon,
  NanoStoresBrandIcon,
  NapsterBrandIcon,
  NASABrandIcon,
  NationalGridBrandIcon,
  NationalRailBrandIcon,
  NativeScriptBrandIcon,
  NATSIoBrandIcon,
  NaverBrandIcon,
  NBABrandIcon,
  NBBBrandIcon,
  NBCBrandIcon,
  NDIBrandIcon,
  NDRBrandIcon,
  NEARBrandIcon,
  NebulaBrandIcon,
  NECBrandIcon,
  NederlandseSpoorwegenBrandIcon,
  Neo4jBrandIcon,
  NeonBrandIcon,
  NeovimBrandIcon,
  NeptuneBrandIcon,
  NestJSBrandIcon,
  NetAppBrandIcon,
  NETBrandIcon,
  NetBSDBrandIcon,
  NetcupBrandIcon,
  NetdataBrandIcon,
  NetEaseCloudMusicBrandIcon,
  NetflixBrandIcon,
  NetgearBrandIcon,
  NetimBrandIcon,
  NetlifyBrandIcon,
  NetteBrandIcon,
  NettoBrandIcon,
  NeutralinojsBrandIcon,
  NewBalanceBrandIcon,
  NeweggBrandIcon,
  NewgroundsBrandIcon,
  NewJapanProWrestlingBrandIcon,
  NewPipeBrandIcon,
  NewRelicBrandIcon,
  NewYorkTimesBrandIcon,
  NexonBrandIcon,
  NextbikeBrandIcon,
  NextBillionAiBrandIcon,
  NextcloudBrandIcon,
  NextDNSBrandIcon,
  NextdoorBrandIcon,
  NextflowBrandIcon,
  NextJsBrandIcon,
  NextraBrandIcon,
  NFCBrandIcon,
  NfCoreBrandIcon,
  NginxBrandIcon,
  NginxProxyManagerBrandIcon,
  NgrokBrandIcon,
  NgRxBrandIcon,
  NHLBrandIcon,
  NhostBrandIcon,
  NiceHashBrandIcon,
  NiconicoBrandIcon,
  NikeBrandIcon,
  NikonBrandIcon,
  NimBrandIcon,
  NiriBrandIcon,
  NissanBrandIcon,
  NixOSBrandIcon,
  NobaraLinuxBrandIcon,
  NodeBBBrandIcon,
  NodeGuiBrandIcon,
  NodeJsBrandIcon,
  NodemonBrandIcon,
  NodeREDBrandIcon,
  NokiaBrandIcon,
  NomadBrandIcon,
  NorcoBrandIcon,
  NordicSemiconductorBrandIcon,
  NordVPNBrandIcon,
  NormalizeCssBrandIcon,
  NortonBrandIcon,
  NorwegianBrandIcon,
  NotebookLMBrandIcon,
  NoteBrandIcon,
  NotepadBrandIcon,
  NotesnookBrandIcon,
  NotionBrandIcon,
  NotistBrandIcon,
  NounProjectBrandIcon,
  NovuBrandIcon,
  NOWBrandIcon,
  NpmBrandIcon,
  NrwlBrandIcon,
  NSISBrandIcon,
  NtfyBrandIcon,
  NubankBrandIcon,
  NucleoBrandIcon,
  NuGetBrandIcon,
  NukeBrandIcon,
  NumbaBrandIcon,
  NumPyBrandIcon,
  NunjucksBrandIcon,
  NushellBrandIcon,
  NutanixBrandIcon,
  NuxtBrandIcon,
  NvidiaBrandIcon,
  NvmBrandIcon,
  NxBrandIcon,
  NXPBrandIcon,
  NZXTBrandIcon,
  O2BrandIcon,
  ObservableBrandIcon,
  ObsidianBrandIcon,
  OBSStudioBrandIcon,
  ObtainiumBrandIcon,
  OCamlBrandIcon,
  OCLCBrandIcon,
  OclifBrandIcon,
  OctaneRenderBrandIcon,
  OctaveBrandIcon,
  OctoberCMSBrandIcon,
  OctoPrintBrandIcon,
  OctopusDeployBrandIcon,
  OculusBrandIcon,
  OdidoBrandIcon,
  OdinBrandIcon,
  OdnoklassnikiBrandIcon,
  OdooBrandIcon,
  OdyseeBrandIcon,
  OhDearBrandIcon,
  OkcupidBrandIcon,
  OktaBrandIcon,
  OKXBrandIcon,
  OllamaBrandIcon,
  OmadaCloudBrandIcon,
  OmarchyBrandIcon,
  OnePlusBrandIcon,
  OneStreamBrandIcon,
  OnlyFansBrandIcon,
  OnlyofficeBrandIcon,
  ONNXBrandIcon,
  OnStarBrandIcon,
  OomolBrandIcon,
  OpelBrandIcon,
  Open3DBrandIcon,
  OpenAccessBrandIcon,
  OpenAIBrandIcon,
  OpenAIGymBrandIcon,
  OpenAPIInitiativeBrandIcon,
  OpenBadgesBrandIcon,
  OpenBaoBrandIcon,
  OpenBSDBrandIcon,
  OpenBugBountyBrandIcon,
  OpenCageBrandIcon,
  OpenCodeBrandIcon,
  OpenCollectiveBrandIcon,
  OpenContainersInitiativeBrandIcon,
  OpenCriticBrandIcon,
  OpenCVBrandIcon,
  OpenFaaSBrandIcon,
  OpenGLBrandIcon,
  OpenHABBrandIcon,
  OpenIDBrandIcon,
  OpenJDKBrandIcon,
  OpenJSFoundationBrandIcon,
  OpenlayersBrandIcon,
  OpenmediavaultBrandIcon,
  OpenMinedBrandIcon,
  OpenNebulaBrandIcon,
  OpenProjectBrandIcon,
  OpenRouterBrandIcon,
  OpenSCADBrandIcon,
  OpenSeaBrandIcon,
  OpenSearchBrandIcon,
  OpenSourceHardwareBrandIcon,
  OpenSourceInitiativeBrandIcon,
  OpenSSLBrandIcon,
  OpenStackBrandIcon,
  OpenStreetMapBrandIcon,
  OpenSUSEBrandIcon,
  OpenTelemetryBrandIcon,
  OpenTextBrandIcon,
  OpenTofuBrandIcon,
  OpenTUIBrandIcon,
  OpenverseBrandIcon,
  OpenVPNBrandIcon,
  OpenWrtBrandIcon,
  OpenZeppelinBrandIcon,
  OpenZFSBrandIcon,
  OperaBrandIcon,
  OperaGXBrandIcon,
  OPNsenseBrandIcon,
  OPPOBrandIcon,
  OpsgenieBrandIcon,
  OpsLevelBrandIcon,
  OptimismBrandIcon,
  OptunaBrandIcon,
  OrangeBrandIcon,
  OrchardCoreBrandIcon,
  OrcidBrandIcon,
  OReillyBrandIcon,
  OrganicMapsBrandIcon,
  OrgBrandIcon,
  OriginBrandIcon,
  OryBrandIcon,
  OsanoBrandIcon,
  OSFBrandIcon,
  OSGeoBrandIcon,
  OshkoshBrandIcon,
  OsmAndBrandIcon,
  OSMCBrandIcon,
  OsuBrandIcon,
  OttoBrandIcon,
  OutlineBrandIcon,
  OvercastBrandIcon,
  OverleafBrandIcon,
  OVHBrandIcon,
  OwaspBrandIcon,
  OwaspDependencyCheckBrandIcon,
  OwnCloudBrandIcon,
  OxcBrandIcon,
  OxygenBrandIcon,
  OYOBrandIcon,
  P5JsBrandIcon,
  PackagistBrandIcon,
  PackerBrandIcon,
  PacktBrandIcon,
  PaddleBrandIcon,
  PaddlePaddleBrandIcon,
  PaddyPowerBrandIcon,
  PadletBrandIcon,
  PagekitBrandIcon,
  PagerDutyBrandIcon,
  PageSpeedInsightsBrandIcon,
  PagSeguroBrandIcon,
  PalantirBrandIcon,
  PaloAltoNetworksBrandIcon,
  PaloAltoSoftwareBrandIcon,
  PanasonicBrandIcon,
  PandasBrandIcon,
  PandocBrandIcon,
  PandoraBrandIcon,
  PangolinBrandIcon,
  PantheonBrandIcon,
  PaperlessNgxBrandIcon,
  PaperspaceBrandIcon,
  PapersWithCodeBrandIcon,
  ParadoxInteractiveBrandIcon,
  ParamountBrandIcon,
  ParitySubstrateBrandIcon,
  ParrotSecurityBrandIcon,
  ParseLyBrandIcon,
  PassboltBrandIcon,
  PassportBrandIcon,
  PastebinBrandIcon,
  PatreonBrandIcon,
  PaybackBrandIcon,
  PaychexBrandIcon,
  PayhipBrandIcon,
  PayloadCMSBrandIcon,
  PayoneerBrandIcon,
  PayPalBrandIcon,
  PaysafeBrandIcon,
  PaytmBrandIcon,
  PCGamingWikiBrandIcon,
  PDMBrandIcon,
  PDQBrandIcon,
  PeakDesignBrandIcon,
  PearsonBrandIcon,
  PeerlistBrandIcon,
  PeerTubeBrandIcon,
  PegasusAirlinesBrandIcon,
  PelicanBrandIcon,
  PelotonBrandIcon,
  PennyBrandIcon,
  PenpotBrandIcon,
  PercyBrandIcon,
  PerforceBrandIcon,
  PerlBrandIcon,
  PerplexityBrandIcon,
  PersistentBrandIcon,
  PersonioBrandIcon,
  PetsAtHomeBrandIcon,
  PeugeotBrandIcon,
  PexelsBrandIcon,
  PfSenseBrandIcon,
  PhabricatorBrandIcon,
  PhilipsHueBrandIcon,
  PhoenixFrameworkBrandIcon,
  PhonePeBrandIcon,
  PhosphorIconsBrandIcon,
  PhotobucketBrandIcon,
  PhotocrowdBrandIcon,
  PhotonBrandIcon,
  PhotopeaBrandIcon,
  PhpBBBrandIcon,
  PHPBrandIcon,
  PhpMyAdminBrandIcon,
  PhpStormBrandIcon,
  PiaggioGroupBrandIcon,
  PiaproBrandIcon,
  PiBrandIcon,
  PicardSurgelSBrandIcon,
  PicartoTVBrandIcon,
  PicnicBrandIcon,
  PicPayBrandIcon,
  PicrewBrandIcon,
  PicsartBrandIcon,
  PicxyBrandIcon,
  PiHoleBrandIcon,
  PimcoreBrandIcon,
  PinboardBrandIcon,
  PineScriptBrandIcon,
  PiNetworkBrandIcon,
  PingdomBrandIcon,
  PiniaBrandIcon,
  PinoBrandIcon,
  PinterestBrandIcon,
  PioneerDJBrandIcon,
  PipecatBrandIcon,
  PipedBrandIcon,
  PipxBrandIcon,
  PivotalTrackerBrandIcon,
  PiwigoBrandIcon,
  PixabayBrandIcon,
  PixBrandIcon,
  PixelfedBrandIcon,
  PixivBrandIcon,
  PixlrBrandIcon,
  PkgsrcBrandIcon,
  PlaneBrandIcon,
  PlanetBrandIcon,
  PlanetScaleBrandIcon,
  PlanGridBrandIcon,
  PlatformIOBrandIcon,
  PlatformShBrandIcon,
  PlatziBrandIcon,
  PlausibleAnalyticsBrandIcon,
  PlayCanvasBrandIcon,
  PlayerFMBrandIcon,
  PlayerMeBrandIcon,
  PlayStation2BrandIcon,
  PlayStation3BrandIcon,
  PlayStation4BrandIcon,
  PlayStation5BrandIcon,
  PlayStationBrandIcon,
  PlayStationPortableBrandIcon,
  PlayStationVitaBrandIcon,
  PleromaBrandIcon,
  PleskBrandIcon,
  PlexBrandIcon,
  PlotlyBrandIcon,
  PlumeBrandIcon,
  PluralsightBrandIcon,
  PlurkBrandIcon,
  PM2BrandIcon,
  PnpmBrandIcon,
  PocketBaseBrandIcon,
  PocketCastsBrandIcon,
  PodcastAddictBrandIcon,
  PodcastIndexBrandIcon,
  PodmanBrandIcon,
  PoeBrandIcon,
  PoetryBrandIcon,
  PolarsBrandIcon,
  PolestarBrandIcon,
  PolkadotBrandIcon,
  PolyBrandIcon,
  PolygonBrandIcon,
  PolymerProjectBrandIcon,
  PolyworkBrandIcon,
  PomeriumBrandIcon,
  Pond5BrandIcon,
  PopOSBrandIcon,
  PorkbunBrandIcon,
  PorscheBrandIcon,
  PortableAppsComBrandIcon,
  PortainerBrandIcon,
  PortSwiggerBrandIcon,
  PositBrandIcon,
  PostCSSBrandIcon,
  PostgreSQLBrandIcon,
  PostHogBrandIcon,
  PostizBrandIcon,
  PostmanBrandIcon,
  PostmatesBrandIcon,
  PowersBrandIcon,
  PrCoBrandIcon,
  PreactBrandIcon,
  PreCommitBrandIcon,
  PrefectBrandIcon,
  PrekBrandIcon,
  PreMiDBrandIcon,
  PremierLeagueBrandIcon,
  PrepBytesBrandIcon,
  PrestaShopBrandIcon,
  PrestoBrandIcon,
  PrettierBrandIcon,
  PretzelBrandIcon,
  PreventionBrandIcon,
  PreziBrandIcon,
  PrimeFacesBrandIcon,
  PrimeNGBrandIcon,
  PrimeReactBrandIcon,
  PrimeVueBrandIcon,
  PrintablesBrandIcon,
  PrismaBrandIcon,
  PrismicBrandIcon,
  PrivateDivisionBrandIcon,
  PrivateInternetAccessBrandIcon,
  ProbotBrandIcon,
  ProcessingFoundationBrandIcon,
  ProcessOnBrandIcon,
  ProcessWireBrandIcon,
  ProductHuntBrandIcon,
  ProgateBrandIcon,
  ProgressBrandIcon,
  PrometheusBrandIcon,
  PronounsPageBrandIcon,
  ProseMirrorBrandIcon,
  ProSiebenBrandIcon,
  ProteusBrandIcon,
  ProtocolsIoBrandIcon,
  ProtoIoBrandIcon,
  ProtonBrandIcon,
  ProtonCalendarBrandIcon,
  ProtonDBBrandIcon,
  ProtonDriveBrandIcon,
  ProtonMailBrandIcon,
  ProtonVPNBrandIcon,
  ProToolsBrandIcon,
  ProtractorBrandIcon,
  ProxmoxBrandIcon,
  PterodactylBrandIcon,
  PUBGBrandIcon,
  PublonsBrandIcon,
  PubMedBrandIcon,
  PugBrandIcon,
  PulumiBrandIcon,
  PumaBrandIcon,
  PuppetBrandIcon,
  PuppeteerBrandIcon,
  PureScriptBrandIcon,
  PurgeCSSBrandIcon,
  PurismBrandIcon,
  PushbulletBrandIcon,
  PusherBrandIcon,
  PWABrandIcon,
  PyCharmBrandIcon,
  PyCQABrandIcon,
  PydanticBrandIcon,
  PyGBrandIcon,
  PyPIBrandIcon,
  PyPyBrandIcon,
  PyScaffoldBrandIcon,
  PySyftBrandIcon,
  PytestBrandIcon,
  PythonAnywhereBrandIcon,
  PythonBrandIcon,
  PyTorchBrandIcon,
  PyUpBrandIcon,
  QantasBrandIcon,
  QaseBrandIcon,
  QatarAirwaysBrandIcon,
  QbittorrentBrandIcon,
  QdrantBrandIcon,
  QEMUBrandIcon,
  QGISBrandIcon,
  QiBrandIcon,
  QiitaBrandIcon,
  QiskitBrandIcon,
  QIWIBrandIcon,
  QlikBrandIcon,
  QltyBrandIcon,
  QMKBrandIcon,
  QNAPBrandIcon,
  QodoBrandIcon,
  QQBrandIcon,
  QtBrandIcon,
  Quad9BrandIcon,
  QualcommBrandIcon,
  QualtricsBrandIcon,
  QualysBrandIcon,
  QuantcastBrandIcon,
  QuantConnectBrandIcon,
  QuarkusBrandIcon,
  QuartoBrandIcon,
  QuasarBrandIcon,
  QubesOSBrandIcon,
  QuestBrandIcon,
  QuickBooksBrandIcon,
  QuickLookBrandIcon,
  QuickTimeBrandIcon,
  QuicktypeBrandIcon,
  QuizletBrandIcon,
  QuoraBrandIcon,
  QwantBrandIcon,
  QWenBrandIcon,
  QwikBrandIcon,
  QwiklabsBrandIcon,
  QzoneBrandIcon,
  R3BrandIcon,
  RabbitMQBrandIcon,
  RacketBrandIcon,
  RadarBrandIcon,
  RadarrBrandIcon,
  RadiantEarthBrandIcon,
  RadioFranceBrandIcon,
  RadixUIBrandIcon,
  RADStudioBrandIcon,
  RailwayBrandIcon,
  RainmeterBrandIcon,
  RainYunBrandIcon,
  RakutenBrandIcon,
  RakutenKoboBrandIcon,
  RamBrandIcon,
  RancherBrandIcon,
  RapidBrandIcon,
  RaribleBrandIcon,
  RasaBrandIcon,
  RaspberryPiBrandIcon,
  RatatuiBrandIcon,
  RavelryBrandIcon,
  RayBrandIcon,
  RaycastBrandIcon,
  RaylibBrandIcon,
  RazerBrandIcon,
  RazorpayBrandIcon,
  RBrandIcon,
  RcloneBrandIcon,
  ReactBootstrapBrandIcon,
  ReactBrandIcon,
  ReactHookFormBrandIcon,
  ReactiveResumeBrandIcon,
  ReactiveXBrandIcon,
  ReactOSBrandIcon,
  ReactQueryBrandIcon,
  ReactRouterBrandIcon,
  ReactTableBrandIcon,
  ReadCvBrandIcon,
  ReadMeBrandIcon,
  ReadTheDocsBrandIcon,
  ReasonBrandIcon,
  ReasonStudiosBrandIcon,
  RecoilBrandIcon,
  RedashBrandIcon,
  RedBrandIcon,
  RedbubbleBrandIcon,
  RedBullBrandIcon,
  RedCandleGamesBrandIcon,
  RedditBrandIcon,
  RedHatBrandIcon,
  RedHatOpenShiftBrandIcon,
  RedisBrandIcon,
  RedmineBrandIcon,
  RedoxBrandIcon,
  RedragonBrandIcon,
  RedsysBrandIcon,
  ReduxBrandIcon,
  ReduxSagaBrandIcon,
  RedwoodJSBrandIcon,
  ReebokBrandIcon,
  RefineBrandIcon,
  RefinedGitHubBrandIcon,
  ReflexBrandIcon,
  RekaUIBrandIcon,
  RelayBrandIcon,
  RelianceIndustriesLimitedBrandIcon,
  RemarkBrandIcon,
  RemedyEntertainmentBrandIcon,
  RemixBrandIcon,
  RemoveBgBrandIcon,
  RenaultBrandIcon,
  RenderBrandIcon,
  RenovateBrandIcon,
  RenPyBrandIcon,
  RenrenBrandIcon,
  ReplicateBrandIcon,
  ReplitBrandIcon,
  RepublicOfGamersBrandIcon,
  ReScriptBrandIcon,
  RescueTimeBrandIcon,
  ResearchGateBrandIcon,
  ResendBrandIcon,
  ReSharperBrandIcon,
  ResurrectionRemixOSBrandIcon,
  RetoolBrandIcon,
  RetroAchievementsBrandIcon,
  RetroArchBrandIcon,
  RetroPieBrandIcon,
  ReVancedBrandIcon,
  RevealJsBrandIcon,
  RevenueCatBrandIcon,
  ReverbNationBrandIcon,
  RevoltChatBrandIcon,
  RevolutBrandIcon,
  REWEBrandIcon,
  RezgoBrandIcon,
  RhinocerosBrandIcon,
  RichBrandIcon,
  RiderBrandIcon,
  RimacAutomobiliBrandIcon,
  RimeBrandIcon,
  RingBrandIcon,
  RiotGamesBrandIcon,
  RippleBrandIcon,
  RISCVBrandIcon,
  RiseupBrandIcon,
  RitzCarltonBrandIcon,
  RiveBrandIcon,
  RoadmapShBrandIcon,
  RoamResearchBrandIcon,
  RobinhoodBrandIcon,
  RobloxBrandIcon,
  RobloxStudioBrandIcon,
  RoboflowBrandIcon,
  RobotFrameworkBrandIcon,
  RocketBrandIcon,
  RocketChatBrandIcon,
  RocksDBBrandIcon,
  RockstarGamesBrandIcon,
  RockwellAutomationBrandIcon,
  RockyLinuxBrandIcon,
  RokuBrandIcon,
  Roll20BrandIcon,
  RollbarBrandIcon,
  RolldownBrandIcon,
  RollsRoyceBrandIcon,
  RollupJsBrandIcon,
  RookBrandIcon,
  RoonBrandIcon,
  ROOTBrandIcon,
  RootMeBrandIcon,
  RootsBedrockBrandIcon,
  RootsBrandIcon,
  RootsSageBrandIcon,
  ROSBrandIcon,
  RossmannBrandIcon,
  RotaryInternationalBrandIcon,
  RottenTomatoesBrandIcon,
  RoundcubeBrandIcon,
  RSocketBrandIcon,
  RSSBrandIcon,
  RStudioIDEBrandIcon,
  RTBrandIcon,
  RTLBrandIcon,
  RtlzweiBrandIcon,
  RTMBrandIcon,
  RuboCopBrandIcon,
  RubyBrandIcon,
  RubyGemsBrandIcon,
  RubyMineBrandIcon,
  RubyOnRailsBrandIcon,
  RubySinatraBrandIcon,
  RuffBrandIcon,
  RumahwebBrandIcon,
  RumbleBrandIcon,
  RundeckBrandIcon,
  RunkeeperBrandIcon,
  RunKitBrandIcon,
  RunrunItBrandIcon,
  RustBrandIcon,
  RustDeskBrandIcon,
  RustFSBrandIcon,
  RxDBBrandIcon,
  RyanairBrandIcon,
  RyeBrandIcon,
  S7AirlinesBrandIcon,
  SabanciBrandIcon,
  SafariBrandIcon,
  SageBrandIcon,
  SageMathBrandIcon,
  SahibindenBrandIcon,
  SailfishOSBrandIcon,
  SailsJsBrandIcon,
  SallaBrandIcon,
  SaltProjectBrandIcon,
  SamSClubBrandIcon,
  SamsungBrandIcon,
  SamsungPayBrandIcon,
  SanFranciscoMunicipalRailwayBrandIcon,
  SanicBrandIcon,
  SanityBrandIcon,
  SAPBrandIcon,
  SartoriusBrandIcon,
  SassBrandIcon,
  Sat1BrandIcon,
  SatelliteBrandIcon,
  SaturnBrandIcon,
  SauceLabsBrandIcon,
  SaudiaBrandIcon,
  ScalaBrandIcon,
  ScalarBrandIcon,
  ScalewayBrandIcon,
  ScanBrandIcon,
  ScaniaBrandIcon,
  SchneiderElectricBrandIcon,
  ScikitLearnBrandIcon,
  ScilabBrandIcon,
  SciPyBrandIcon,
  ScopusBrandIcon,
  SCPFoundationBrandIcon,
  ScrapboxBrandIcon,
  ScrapyBrandIcon,
  ScratchBrandIcon,
  ScreencastifyBrandIcon,
  ScrimbaBrandIcon,
  ScrollRevealBrandIcon,
  ScrumAllianceBrandIcon,
  ScrutinizerCIBrandIcon,
  ScyllaDBBrandIcon,
  SeafileBrandIcon,
  SeagateBrandIcon,
  SearXNGBrandIcon,
  SEATBrandIcon,
  SeatGeekBrandIcon,
  SecurityScorecardBrandIcon,
  SefariaBrandIcon,
  SegaBrandIcon,
  SeleniumBrandIcon,
  SellfyBrandIcon,
  SemanticReleaseBrandIcon,
  SemanticScholarBrandIcon,
  SemanticUIBrandIcon,
  SemanticUIReactBrandIcon,
  SemanticWebBrandIcon,
  SemaphoreCIBrandIcon,
  SemrushBrandIcon,
  SemVerBrandIcon,
  SenchaBrandIcon,
  SennheiserBrandIcon,
  SensuBrandIcon,
  SentryBrandIcon,
  SEPABrandIcon,
  SequelizeBrandIcon,
  ServBayBrandIcon,
  ServerFaultBrandIcon,
  ServerlessBrandIcon,
  SessionBrandIcon,
  SessionizeBrandIcon,
  SetappBrandIcon,
  SetuptoolsBrandIcon,
  SFMLBrandIcon,
  ShadcnUiBrandIcon,
  ShadowBrandIcon,
  ShanghaiMetroBrandIcon,
  ShareXBrandIcon,
  SharpBrandIcon,
  ShazamBrandIcon,
  ShellBrandIcon,
  ShellyBrandIcon,
  ShenzhenMetroBrandIcon,
  ShieldsIoBrandIcon,
  ShikimoriBrandIcon,
  ShopeeBrandIcon,
  ShopifyBrandIcon,
  ShopwareBrandIcon,
  ShortcutBrandIcon,
  ShowpadBrandIcon,
  ShowtimeBrandIcon,
  ShowwcaseBrandIcon,
  SidekiqBrandIcon,
  SideQuestBrandIcon,
  SiemensBrandIcon,
  SiFiveBrandIcon,
  SignalBrandIcon,
  SilverAirwaysBrandIcon,
  SimilarwebBrandIcon,
  SimklBrandIcon,
  SimpleAnalyticsBrandIcon,
  SimpleIconsBrandIcon,
  SimpleIconsCDNBrandIcon,
  SimpleLocalizeBrandIcon,
  SimpleLoginBrandIcon,
  SimplenoteBrandIcon,
  SimpleXBrandIcon,
  SinaWeiboBrandIcon,
  SingaporeAirlinesBrandIcon,
  SingleStoreBrandIcon,
  SitecoreBrandIcon,
  SitePointBrandIcon,
  SiYuanBrandIcon,
  SkaffoldBrandIcon,
  SkeletonBrandIcon,
  SketchBrandIcon,
  SketchfabBrandIcon,
  SketchUpBrandIcon,
  SkillshareBrandIcon,
  SkyBrandIcon,
  SkypackBrandIcon,
  SlackBrandIcon,
  SlackwareBrandIcon,
  SlashdotBrandIcon,
  SlickPicBrandIcon,
  SlidesBrandIcon,
  SlideShareBrandIcon,
  SlintBrandIcon,
  SmartBrandIcon,
  SmartThingsBrandIcon,
  SmashingMagazineBrandIcon,
  SmoothcompBrandIcon,
  SMRTBrandIcon,
  SmugMugBrandIcon,
  SnapchatBrandIcon,
  SnapcraftBrandIcon,
  SnapdragonBrandIcon,
  SNCFBrandIcon,
  SnortBrandIcon,
  SnowflakeBrandIcon,
  SnowpackBrandIcon,
  SnykBrandIcon,
  SocialBladeBrandIcon,
  Society6BrandIcon,
  SocketBrandIcon,
  SocketIoBrandIcon,
  SoftcatalBrandIcon,
  SoftpediaBrandIcon,
  SogouBrandIcon,
  SolanaBrandIcon,
  SolidBrandIcon,
  SolidityBrandIcon,
  SololearnBrandIcon,
  SolusBrandIcon,
  SolvedAcBrandIcon,
  SonarBrandIcon,
  SonarQubeCloudBrandIcon,
  SonarQubeForIDEBrandIcon,
  SonarQubeServerBrandIcon,
  SonarrBrandIcon,
  SonatypeBrandIcon,
  SongkickBrandIcon,
  SongodaBrandIcon,
  SonicWallBrandIcon,
  SonosBrandIcon,
  SonyBrandIcon,
  SOPauloMetroBrandIcon,
  SorianaBrandIcon,
  SoundchartsBrandIcon,
  SoundCloudBrandIcon,
  SourceEngineBrandIcon,
  SourceForgeBrandIcon,
  SourceHutBrandIcon,
  SourcetreeBrandIcon,
  SouthwestAirlinesBrandIcon,
  SpacemacsBrandIcon,
  SpaceshipBrandIcon,
  SpaceXBrandIcon,
  SpaCyBrandIcon,
  SparkARBrandIcon,
  SparkasseBrandIcon,
  SparkFunBrandIcon,
  SparkPostBrandIcon,
  SPDXBrandIcon,
  SpeakerDeckBrandIcon,
  SpectrumBrandIcon,
  SpeedtestBrandIcon,
  SpeedyPageBrandIcon,
  SphereOnlineJudgeBrandIcon,
  SphinxBrandIcon,
  SpiderMonkeyBrandIcon,
  SpigotMCBrandIcon,
  SpineBrandIcon,
  SpinnakerBrandIcon,
  SplunkBrandIcon,
  SpondBrandIcon,
  SpotifyBrandIcon,
  SpotlightBrandIcon,
  SpreadshirtBrandIcon,
  SpreakerBrandIcon,
  SpringBootBrandIcon,
  SpringBrandIcon,
  SpringCreatorsBrandIcon,
  SpringSecurityBrandIcon,
  SpyderIDEBrandIcon,
  SQLAlchemyBrandIcon,
  SQLiteBrandIcon,
  SquareBrandIcon,
  SquareEnixBrandIcon,
  SquarespaceBrandIcon,
  SRGSSRBrandIcon,
  SSRNBrandIcon,
  SSTBrandIcon,
  StackbitBrandIcon,
  StackBlitzBrandIcon,
  StackEditBrandIcon,
  StackExchangeBrandIcon,
  StackHawkBrandIcon,
  StackOverflowBrandIcon,
  StackShareBrandIcon,
  StadiaBrandIcon,
  StaffbaseBrandIcon,
  StagetimerBrandIcon,
  StandardJSBrandIcon,
  StandardResumeBrandIcon,
  StarbucksBrandIcon,
  StardockBrandIcon,
  StarlingBankBrandIcon,
  StarshipBrandIcon,
  StartGgBrandIcon,
  StartpageBrandIcon,
  StarTrekBrandIcon,
  StarzBrandIcon,
  StatamicBrandIcon,
  StatistaBrandIcon,
  StatuspageBrandIcon,
  StatuspalBrandIcon,
  SteamBrandIcon,
  SteamDBBrandIcon,
  SteamDeckBrandIcon,
  SteamworksBrandIcon,
  SteelseriesBrandIcon,
  SteemBrandIcon,
  SteemitBrandIcon,
  SteinbergBrandIcon,
  StellarBrandIcon,
  StencilBrandIcon,
  StencylBrandIcon,
  StimulusBrandIcon,
  STMicroelectronicsBrandIcon,
  StockXBrandIcon,
  StopStalkBrandIcon,
  StoryblokBrandIcon,
  StorybookBrandIcon,
  StrapiBrandIcon,
  StravaBrandIcon,
  StreamlabsBrandIcon,
  StreamlitBrandIcon,
  StreamRunnersBrandIcon,
  StremioBrandIcon,
  StripeBrandIcon,
  StrongSwanBrandIcon,
  StrykerBrandIcon,
  StubHubBrandIcon,
  Studio3TBrandIcon,
  StyledComponentsBrandIcon,
  StylelintBrandIcon,
  StyleShareBrandIcon,
  StylusBrandIcon,
  SubaruBrandIcon,
  SublimeTextBrandIcon,
  SubstackBrandIcon,
  SubtitleEditBrandIcon,
  SubversionBrandIcon,
  SucklessBrandIcon,
  SuiBrandIcon,
  SuitestBrandIcon,
  SumoLogicBrandIcon,
  SumUpBrandIcon,
  SunoBrandIcon,
  SunriseBrandIcon,
  SupabaseBrandIcon,
  SupercellBrandIcon,
  SupercreaseBrandIcon,
  SupermicroBrandIcon,
  SuperUserBrandIcon,
  SurfsharkBrandIcon,
  SurrealDBBrandIcon,
  SurveyMonkeyBrandIcon,
  SUSEBrandIcon,
  SuzukiBrandIcon,
  SvelteBrandIcon,
  SVGBrandIcon,
  SVGJsBrandIcon,
  SVGOBrandIcon,
  SvgTraceBrandIcon,
  SwaggerBrandIcon,
  SwarmBrandIcon,
  SwayBrandIcon,
  SWCBrandIcon,
  SwiftBrandIcon,
  SwiggyBrandIcon,
  SwiperBrandIcon,
  SwisscowsBrandIcon,
  SWRBrandIcon,
  SymantecBrandIcon,
  SymbolabBrandIcon,
  SymfonyBrandIcon,
  SymphonyBrandIcon,
  SymPyBrandIcon,
  SyncthingBrandIcon,
  SynologyBrandIcon,
  System76BrandIcon,
  TabelogBrandIcon,
  TableCheckBrandIcon,
  TacoBellBrandIcon,
  TadoBrandIcon,
  TaichiGraphicsBrandIcon,
  TaichiLangBrandIcon,
  TailsBrandIcon,
  TailscaleBrandIcon,
  TailwindCSSBrandIcon,
  TaipyBrandIcon,
  TakeTwoInteractiveSoftwareBrandIcon,
  TalendBrandIcon,
  TalenthouseBrandIcon,
  TalosBrandIcon,
  TamiyaBrandIcon,
  TampermonkeyBrandIcon,
  TangledBrandIcon,
  TanStackBrandIcon,
  TaobaoBrandIcon,
  TapasBrandIcon,
  TargetBrandIcon,
  TaromBrandIcon,
  TarteaucitronBrandIcon,
  TaskBrandIcon,
  TasmotaBrandIcon,
  TataBrandIcon,
  TataConsultancyServicesBrandIcon,
  TauriBrandIcon,
  TaxBuzzBrandIcon,
  TealBrandIcon,
  TeamCityBrandIcon,
  TeamSpeakBrandIcon,
  TeamViewerBrandIcon,
  TechCrunchBrandIcon,
  TEDBrandIcon,
  TeePublicBrandIcon,
  TeespringBrandIcon,
  TektonBrandIcon,
  TELE5BrandIcon,
  TelefNicaBrandIcon,
  TelegramBrandIcon,
  TelegraphBrandIcon,
  TelenorBrandIcon,
  TemporalBrandIcon,
  TencentHyBrandIcon,
  TensorFlowBrandIcon,
  TeradataBrandIcon,
  TeratailBrandIcon,
  TermiusBrandIcon,
  TerraformBrandIcon,
  TescoBrandIcon,
  TeslaBrandIcon,
  TestCafeBrandIcon,
  TestinBrandIcon,
  TestingLibraryBrandIcon,
  TestRailBrandIcon,
  TetherBrandIcon,
  TextpatternBrandIcon,
  TextualBrandIcon,
  TGABrandIcon,
  ThangsBrandIcon,
  ThanosBrandIcon,
  TheAlgorithmsBrandIcon,
  TheBoringCompanyBrandIcon,
  TheConversationBrandIcon,
  THEFinalsBrandIcon,
  TheGuardianBrandIcon,
  TheIrishTimesBrandIcon,
  TheMightyBrandIcon,
  TheModelsResourceBrandIcon,
  TheMovieDatabaseBrandIcon,
  TheNorthFaceBrandIcon,
  TheOdinProjectBrandIcon,
  ThePlanetarySocietyBrandIcon,
  TheRegisterBrandIcon,
  TheSoundsResourceBrandIcon,
  TheSpritersResourceBrandIcon,
  TheStoryGraphBrandIcon,
  TheWashingtonPostBrandIcon,
  TheWeatherChannelBrandIcon,
  ThingiverseBrandIcon,
  ThingsBrandIcon,
  ThinkPadBrandIcon,
  ThirdwebBrandIcon,
  ThreadlessBrandIcon,
  ThreadsBrandIcon,
  ThreeJsBrandIcon,
  ThreemaBrandIcon,
  ThumbtackBrandIcon,
  ThunderbirdBrandIcon,
  ThunderstoreBrandIcon,
  ThurgauerKantonalbankBrandIcon,
  ThymeleafBrandIcon,
  TicketmasterBrandIcon,
  TicketTailorBrandIcon,
  TickTickBrandIcon,
  TidalBrandIcon,
  TiDBBrandIcon,
  TiddlyWikiBrandIcon,
  TideBrandIcon,
  TidyverseBrandIcon,
  TietoEVRYBrandIcon,
  TikTokBrandIcon,
  TildaPublishingBrandIcon,
  TileBrandIcon,
  TimescaleBrandIcon,
  TinaBrandIcon,
  TinderBrandIcon,
  TindieBrandIcon,
  TinkercadBrandIcon,
  TinygradBrandIcon,
  TinyLetterBrandIcon,
  TistoryBrandIcon,
  TldrawBrandIcon,
  TLQuBecBrandIcon,
  TmuxBrandIcon,
  TodoistBrandIcon,
  TogglBrandIcon,
  TogglTrackBrandIcon,
  TokioBrandIcon,
  TokyoMetroBrandIcon,
  TollBrandIcon,
  TOMLBrandIcon,
  TomorrowlandBrandIcon,
  TomTomBrandIcon,
  TONBrandIcon,
  TopcoderBrandIcon,
  TopGgBrandIcon,
  ToptalBrandIcon,
  TorBrowserBrandIcon,
  TorizonBrandIcon,
  TorProjectBrandIcon,
  ToshibaBrandIcon,
  TotvsBrandIcon,
  TourBoxBrandIcon,
  TowerBrandIcon,
  ToyotaBrandIcon,
  TPLinkBrandIcon,
  TqdmBrandIcon,
  TraccarBrandIcon,
  TradingViewBrandIcon,
  TRAEBrandIcon,
  TraefikMeshBrandIcon,
  TraefikProxyBrandIcon,
  TrailforksBrandIcon,
  TrainerRoadBrandIcon,
  TraktBrandIcon,
  TransifexBrandIcon,
  TransmissionBrandIcon,
  TransportForIrelandBrandIcon,
  TransportForLondonBrandIcon,
  TravisCIBrandIcon,
  TraxsourceBrandIcon,
  TreehouseBrandIcon,
  TrelloBrandIcon,
  TrendMicroBrandIcon,
  TresoritBrandIcon,
  TreyarchBrandIcon,
  TrezorBrandIcon,
  TricentisBrandIcon,
  TriliumBrandIcon,
  TrillerBrandIcon,
  TrillerTVBrandIcon,
  TrimbleBrandIcon,
  TrinoBrandIcon,
  TripadvisorBrandIcon,
  TripComBrandIcon,
  TrivagoBrandIcon,
  TrivyBrandIcon,
  TrmnlBrandIcon,
  TroveBrandIcon,
  TRPCBrandIcon,
  TrueNASBrandIcon,
  TrueUpBrandIcon,
  TruliaBrandIcon,
  TrustedShopsBrandIcon,
  TrustpilotBrandIcon,
  TryHackMeBrandIcon,
  TryItOnlineBrandIcon,
  TsNodeBrandIcon,
  TubiBrandIcon,
  TUIBrandIcon,
  TumblrBrandIcon,
  TurboBrandIcon,
  TurborepoBrandIcon,
  TurboSquidBrandIcon,
  TurkishAirlinesBrandIcon,
  TursoBrandIcon,
  TutaBrandIcon,
  TuxedoComputersBrandIcon,
  TV4PlayBrandIcon,
  TVTimeBrandIcon,
  TwentyBrandIcon,
  TwinklyBrandIcon,
  TwinmotionBrandIcon,
  TwitchBrandIcon,
  TyBrandIcon,
  TypeformBrandIcon,
  TypeORMBrandIcon,
  TyperBrandIcon,
  TypeScriptBrandIcon,
  Typo3BrandIcon,
  TypstBrandIcon,
  UberBrandIcon,
  UberEatsBrandIcon,
  UbiquitiBrandIcon,
  UbisoftBrandIcon,
  UBlockOriginBrandIcon,
  UbuntuBrandIcon,
  UbuntuMATEBrandIcon,
  UdacityBrandIcon,
  UdemyBrandIcon,
  UFCBrandIcon,
  UIkitBrandIcon,
  UiPathBrandIcon,
  UKCABrandIcon,
  UltralyticsBrandIcon,
  UluleBrandIcon,
  UmamiBrandIcon,
  UmbracoBrandIcon,
  UmbrelBrandIcon,
  UMLBrandIcon,
  UnacademyBrandIcon,
  UnderArmourBrandIcon,
  UnderscoreJsBrandIcon,
  UndertaleBrandIcon,
  UnicodeBrandIcon,
  UnileverBrandIcon,
  UniqloBrandIcon,
  UniqloJaBrandIcon,
  UnitedAirlinesBrandIcon,
  UnitedNationsBrandIcon,
  UnityBrandIcon,
  UnJSBrandIcon,
  UnlicenseBrandIcon,
  UnoCSSBrandIcon,
  UnpkgBrandIcon,
  UnraidBrandIcon,
  UnrealEngineBrandIcon,
  UnsplashBrandIcon,
  UnstopBrandIcon,
  UntappdBrandIcon,
  UpCloudBrandIcon,
  UpholdBrandIcon,
  UpLabsBrandIcon,
  UpptimeBrandIcon,
  UPSBrandIcon,
  UpstashBrandIcon,
  UptimeKumaBrandIcon,
  UpworkBrandIcon,
  UserVoiceBrandIcon,
  USNewsBrandIcon,
  USPSBrandIcon,
  UTorrentBrandIcon,
  UvBrandIcon,
  V0BrandIcon,
  V2EXBrandIcon,
  V8BrandIcon,
  VaadinBrandIcon,
  VagrantBrandIcon,
  ValaBrandIcon,
  ValorantBrandIcon,
  ValveBrandIcon,
  VanillaExtractBrandIcon,
  VaporBrandIcon,
  VaultBrandIcon,
  VaultwardenBrandIcon,
  VauxhallBrandIcon,
  VBrandIcon,
  VBulletinBrandIcon,
  VectaryBrandIcon,
  VectorLogoZoneBrandIcon,
  VectorworksBrandIcon,
  VeeamBrandIcon,
  VEEDBrandIcon,
  VeepeeBrandIcon,
  VegaBrandIcon,
  VegasBrandIcon,
  VelocityBrandIcon,
  VelogBrandIcon,
  VencordBrandIcon,
  VenmoBrandIcon,
  VercelBrandIcon,
  VerdaccioBrandIcon,
  VeritasBrandIcon,
  VerizonBrandIcon,
  VespaBrandIcon,
  VestelBrandIcon,
  VexxhostBrandIcon,
  VFairsBrandIcon,
  ViadeoBrandIcon,
  ViaplayBrandIcon,
  ViberBrandIcon,
  VibloBrandIcon,
  VictoriaMetricsBrandIcon,
  VictronEnergyBrandIcon,
  VikunjaBrandIcon,
  VimBrandIcon,
  VimeoBrandIcon,
  VimeoLivestreamBrandIcon,
  VintedBrandIcon,
  VirginAtlanticBrandIcon,
  VirginBrandIcon,
  VirginMediaBrandIcon,
  VirtualBoxBrandIcon,
  VirusTotalBrandIcon,
  VisaBrandIcon,
  VisualParadigmBrandIcon,
  VisualStudioCodeBrandIcon,
  VisxBrandIcon,
  ViteBrandIcon,
  VitePressBrandIcon,
  VitessBrandIcon,
  VitestBrandIcon,
  VivaldiBrandIcon,
  VivaWalletBrandIcon,
  VivinoBrandIcon,
  VivintBrandIcon,
  VivoBrandIcon,
  VKBrandIcon,
  VLCMediaPlayerBrandIcon,
  VLLMBrandIcon,
  VMwareBrandIcon,
  VodafoneBrandIcon,
  VoelknerBrandIcon,
  VoidLinuxBrandIcon,
  VoIPMsBrandIcon,
  VolkswagenBrandIcon,
  VolvoBrandIcon,
  VonageBrandIcon,
  VoronDesignBrandIcon,
  VowpalWabbitBrandIcon,
  VOXBrandIcon,
  VRChatBrandIcon,
  VSCOBrandIcon,
  VSCodiumBrandIcon,
  VTEXBrandIcon,
  VueJsBrandIcon,
  VuetifyBrandIcon,
  VueUseBrandIcon,
  VulkanBrandIcon,
  VultrBrandIcon,
  VyondBrandIcon,
  W3SchoolsBrandIcon,
  WacomBrandIcon,
  WagmiBrandIcon,
  WagtailBrandIcon,
  WailsBrandIcon,
  WakaTimeBrandIcon,
  WalkmanBrandIcon,
  WallabagBrandIcon,
  WalletConnectBrandIcon,
  WantedlyBrandIcon,
  WappalyzerBrandIcon,
  WarpBrandIcon,
  WasabiBrandIcon,
  WasmCloudBrandIcon,
  WasmerBrandIcon,
  WatchtowerBrandIcon,
  WattpadBrandIcon,
  WaylandBrandIcon,
  WazeBrandIcon,
  WazirXBrandIcon,
  WearOSBrandIcon,
  WeasylBrandIcon,
  Web3JsBrandIcon,
  WebAssemblyBrandIcon,
  WebAuthnBrandIcon,
  WebAwesomeBrandIcon,
  WebcomponentsOrgBrandIcon,
  WEBDEBrandIcon,
  WebdriverIOBrandIcon,
  WebexBrandIcon,
  WebflowBrandIcon,
  WebGLBrandIcon,
  WebGPUBrandIcon,
  WeblateBrandIcon,
  WebminBrandIcon,
  WebMoneyBrandIcon,
  WebpackBrandIcon,
  WebRTCBrandIcon,
  WebStormBrandIcon,
  WebtoonBrandIcon,
  WebtreesBrandIcon,
  WeChatBrandIcon,
  WeGameBrandIcon,
  WeightsBiasesBrandIcon,
  WelcomeToTheJungleBrandIcon,
  WellfoundBrandIcon,
  WellsFargoBrandIcon,
  WEMOBrandIcon,
  WeReadBrandIcon,
  WesternUnionBrandIcon,
  WeTransferBrandIcon,
  WezTermBrandIcon,
  WgpuBrandIcon,
  What3wordsBrandIcon,
  WhatsAppBrandIcon,
  WhenIWorkBrandIcon,
  WikibooksBrandIcon,
  WikidataBrandIcon,
  WikiGgBrandIcon,
  WikiJsBrandIcon,
  WikimediaCommonsBrandIcon,
  WikimediaFoundationBrandIcon,
  WikipediaBrandIcon,
  WikiquoteBrandIcon,
  WikisourceBrandIcon,
  WikiversityBrandIcon,
  WikivoyageBrandIcon,
  WinampBrandIcon,
  WindsurfBrandIcon,
  WineBrandIcon,
  WiproBrandIcon,
  WireBrandIcon,
  WireGuardBrandIcon,
  WiresharkBrandIcon,
  WiseBrandIcon,
  WishBrandIcon,
  WistiaBrandIcon,
  WixBrandIcon,
  WizzAirBrandIcon,
  WolframBrandIcon,
  WolframLanguageBrandIcon,
  WolframMathematicaBrandIcon,
  WondershareBrandIcon,
  WondershareFilmoraBrandIcon,
  WooBrandIcon,
  WooCommerceBrandIcon,
  WordPressBrandIcon,
  WorkplaceBrandIcon,
  WorldHealthOrganizationBrandIcon,
  WPEngineBrandIcon,
  WPExplorerBrandIcon,
  WPRocketBrandIcon,
  WriteAsBrandIcon,
  WWEBrandIcon,
  WwiseBrandIcon,
  WXTBrandIcon,
  WykopBrandIcon,
  WyzeBrandIcon,
  XamppBrandIcon,
  XBrandIcon,
  XcodeBrandIcon,
  XDADevelopersBrandIcon,
  XenditBrandIcon,
  XeroBrandIcon,
  XFCEBrandIcon,
  XiaohongshuBrandIcon,
  XiaomiBrandIcon,
  XingBrandIcon,
  XMLBrandIcon,
  XMPPBrandIcon,
  XOBrandIcon,
  XOrgBrandIcon,
  XRPBrandIcon,
  XSplitBrandIcon,
  XStateBrandIcon,
  XubuntuBrandIcon,
  XyflowBrandIcon,
  YaakBrandIcon,
  YabaiBrandIcon,
  YaleBrandIcon,
  YamahaCorporationBrandIcon,
  YamahaMotorCorporationBrandIcon,
  YAMLBrandIcon,
  YandexCloudBrandIcon,
  YarnBrandIcon,
  YCombinatorBrandIcon,
  YelpBrandIcon,
  YetiBrandIcon,
  YewBrandIcon,
  YiiBrandIcon,
  YoastBrandIcon,
  YOLOBrandIcon,
  YouHodlerBrandIcon,
  YouTubeBrandIcon,
  YouTubeGamingBrandIcon,
  YouTubeKidsBrandIcon,
  YouTubeMusicBrandIcon,
  YouTubeShortsBrandIcon,
  YouTubeStudioBrandIcon,
  YouTubeTVBrandIcon,
  YrBrandIcon,
  YubicoBrandIcon,
  YunoHostBrandIcon,
  ZAiBrandIcon,
  ZaimBrandIcon,
  ZalandoBrandIcon,
  ZaloBrandIcon,
  ZAPBrandIcon,
  ZapierBrandIcon,
  ZaraBrandIcon,
  ZazzleBrandIcon,
  ZcashBrandIcon,
  ZcoolBrandIcon,
  ZDFBrandIcon,
  ZebPayBrandIcon,
  ZebraTechnologiesBrandIcon,
  ZecTrixBrandIcon,
  ZedIndustriesBrandIcon,
  ZelleBrandIcon,
  ZenBrowserBrandIcon,
  ZendBrandIcon,
  ZendeskBrandIcon,
  ZennBrandIcon,
  ZenodoBrandIcon,
  ZensarBrandIcon,
  ZensicalBrandIcon,
  ZerodhaBrandIcon,
  ZeroTierBrandIcon,
  ZettlrBrandIcon,
  ZhihuBrandIcon,
  Zigbee2MQTTBrandIcon,
  ZigbeeBrandIcon,
  ZigBrandIcon,
  ZiggoBrandIcon,
  ZilchBrandIcon,
  ZillowBrandIcon,
  ZincSearchBrandIcon,
  ZingatBrandIcon,
  ZodBrandIcon,
  ZohoBrandIcon,
  ZoiperBrandIcon,
  ZolaBrandIcon,
  ZomatoBrandIcon,
  ZoomBrandIcon,
  ZorinBrandIcon,
  ZoteroBrandIcon,
  ZshBrandIcon,
  ZulipBrandIcon,
  ZxBrandIcon,
  ZyteBrandIcon,
}
export type { BrandIconProps, BrandIconComponentProps, BrandIconData, BrandIconsCatalogEntry }
