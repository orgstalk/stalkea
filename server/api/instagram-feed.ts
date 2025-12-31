export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const username = query.username as string

    if (!username) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Username is required'
        })
    }

    // Mock data as requested
    return {
        "perfil_buscado": {
            "username": "wandersonsous4",
            "full_name": "Wanderson Sousa",
            "is_private": true,
            "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F579718374_18158168017397806_7632613885146581579_n.jpg%3Fstp%3Ddst-jpg_e0_s150x150_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QHeoNOiOuuf2OLHdHYMjnPAKTXl3KMOliHLT_4TlpNoH1Bpl34ThG8EkFfWKIgjgfc%26_nc_ohc%3DilTu0mpGST4Q7kNvwFwUoPb%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGObMjSIu6HLywYJAAEtK4KPjfexpbmNDAQAB1501500j-ccb7-5%26oh%3D00_AflA0vLnIRdGqak9kD59rPSkoHzaCxMT60Hwju9nDJN8aQ%26oe%3D695A4DB2%26_nc_sid%3D164c1d"
        },
        "fonte": "sugeridos",
        "fonte_api": "mediafy",
        "perfis_na_lista": 20,
        "perfis_publicos": 17,
        "lista_perfis_publicos": [
            {
                "username": "guilherme_caland",
                "full_name": "Guilherme",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F470919540_2090484601386333_9153009273078875784_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D109%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D3UfHJN7cInEQ7kNvwFwgvSr%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGHSpERxd9RLgSG0HAIgGuWtwBQZ-bkULAAAB3203200j-ccb7-5%26oh%3D00_AflT0HusD6LTBq8bww6CG69cj4FdggnE7U5EaGXp5-Yw5w%26oe%3D695A4567%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "tharso_l.t.a",
                "full_name": "tharso",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F607673619_17989326776875566_6586580619762832714_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D106%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Dw7aSRVwTbhEQ7kNvwH1PlFN%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGBNdOCQuukiIMuk-AEqVby0tPGhbbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfktJPS3AO7u5oLXnC5Kzc_OP-PBryVcxzONVDoHl8lecg%26oe%3D695A46A1%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "michelanemaria_",
                "full_name": "M_lane💥",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F607709818_17868592302515903_2348028252447175895_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D111%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Dv_oPWV_bd5sQ7kNvwFCygCa%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGHrqOCS-5tPYY3s-ANf0sVVB35UgbmNDAQAB3203200j-ccb7-5%26oh%3D00_Afk0nq1q4yIXuFnkQcrP55TaqAxL0nt7PNaeKFvxF77ZVA%26oe%3D695A4E45%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "erik_davy1",
                "full_name": "Erik Davy",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F571775891_17951646324043371_3512651760030621127_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D103%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D2LztHC2GzDcQ7kNvwG0S5yO%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGJObFCJrLkde7cY-AMedRjgqcr8wbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfnaBjForW2q9luBpwIY68IRxedBh2sejtoESqOLzaeu2Q%26oe%3D695A3D54%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "davidcarvalh_o",
                "full_name": "David Ariel",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F565378300_18188496154334249_5233783920456593609_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DwmQmmbqxs3UQ7kNvwFY_axX%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGPz8siEpFEdEV55AAMlw9-G_IqJIbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfnN2jhPVFlW_5iFDxNh4JD4XAr6NIz0SBZghnGPkrL6RQ%26oe%3D695A5B8A%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "j.araujo_.7",
                "full_name": "João Araújo",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F119129894_333439824540046_4394403756770060163_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D6UG_SJ20ma8Q7kNvwG2dOm_%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGCbHGQeOsUsCQy8BAIPn6ynvDvw8bkULAAAB3203200j-ccb7-5%26oh%3D00_Afn_Gdg1zBYyVJxXsGMaq1q-a8A5_MKe8EVGARbmp7IyrA%26oe%3D695A3484%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "abraao.ramon_ofc",
                "full_name": "Abraão Pires",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F587612365_18138455338460273_546052440348828103_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Da8EYxYfUpy4Q7kNvwGCK_vc%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGM1ABiNxJDk71HBAAMchuifN95MHbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfnRlT_hmzf6wMUmi7nSg_D2InlKaWlviz2YYZ5nopIgJw%26oe%3D695A44BD%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "3m3rson_s0uza",
                "full_name": "Emerson",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F527393224_18096127939617617_6975942622876764839_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Db2xv7aDKBgYQ7kNvwEErWDt%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGMhhbx9Ro6YdVUpAAKeKE-rahs9gbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfkYeSm-tYzzmQSvo9r4X_2PI89JT2xKwnTIp05VQp7Wgg%26oe%3D695A5B3F%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "_marcus_aso_",
                "full_name": "Marcus Aurélio",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F604073639_17893621764386709_769050462831288315_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D109%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D7FCXq-x-I9oQ7kNvwFMdT3V%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGKduASSV7wJ5J5I-APufaENSN6wKbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfmkxoAsd73Hsq1nR3ktusRwoRkDia5_ldc4ZLxl53jNmg%26oe%3D695A578E%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "mhariaclara__",
                "full_name": "Maria clara",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F567774901_18176023993362015_6596164583640722709_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D103%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DqgvzI2Y6uIcQ7kNvwHw3oAo%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGLWO1yFfpo1d-5JAABXt6qe9SIpbbmNDAQAB3203200j-ccb7-5%26oh%3D00_Afnt_Uw1OzHKAj816oYeqReo2L3b6WALTGEWfL_zvp7h-A%26oe%3D695A3A56%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "_sdrik4",
                "full_name": "Drika 💗",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F576643280_17863361001514802_195452009166243242_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D102%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Dtr5M2Zq9CggQ7kNvwFJgdao%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGNDgXiIyZ-3WoXY-AKqF-RiRYrYCbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfmOMdhKyRiwBThpmKp2YiZj_OWzkrqGYfbxWma2Mg7_WQ%26oe%3D695A34F4%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "a_amandaa_a",
                "full_name": "Amanda Ribeiro",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F471923606_1102128571362310_3944536133855477376_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44MjguYzIifQ%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D5cejUGyoATAQ7kNvwGsl4bo%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGJb7IBwGLP5NYeoDAID_Jfa2zr02bkULAAAB3203200j-ccb7-5%26oh%3D00_Afke3s2pmuD8u92d1PLWUno5CFRaqAgD91Bt7L_Rg0dTIw%26oe%3D695A3072%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "itachi._bbb",
                "full_name": "Bernardo Cardoso",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F483644444_533292029337547_2903501647086987005_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44NjQuYzIifQ%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D107%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DGrVV1dODaB0Q7kNvwFqiQy2%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGBzU0xzLX-i5BuUBAP2mYVddT0sobkULAAAB3203200j-ccb7-5%26oh%3D00_AflhWw1iArWPz1ZOGSSilci2X6V5JySxh8ELWZVVxf1eSw%26oe%3D695A2BDE%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "vanessabiiispo",
                "full_name": "Vanessa Bispo",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F472828732_657771859909356_7146211545351165587_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44MjguYzIifQ%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D100%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D1X4mILaZUKcQ7kNvwEYwxSj%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGDzLLhzsmg1yPVYCAJOWc8qJcSxjbkULAAAB3203200j-ccb7-5%26oh%3D00_AfmbBdNVCRZACtshWNAAvslH-yjR5J5fdkz6VjkFGCgiSw%26oe%3D695A4141%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "vitori4_maria",
                "full_name": "Maria Vitória",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F564784961_18411947542119896_1601756082376846555_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDYwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D108%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DNyKtXyVU7JUQ7kNvwE5Ky1q%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGEHvqSHYBd_YkWlBANus5KKrlDoWbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfmG9hl-0hVV7D_FTRoVW4q-ukGwxwYO5T9QHiX8WzDxig%26oe%3D695A2D77%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "wellingtonsousa2988",
                "full_name": "Wellington Carlos Ferreira Sousa",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F174516437_291086035938719_4873712467890404070_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MjAuYzIifQ%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D111%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DmPRDZ8feuA8Q7kNvwEjs3y6%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGNXoZgqfbcW-vQgBAOb6-_Gq56JDbkULAAAB3203200j-ccb7-5%26oh%3D00_AfmE5v6_1x8UCcU2A6SW3JifAORJ-TN_SHx5tQ2_WOHDHw%26oe%3D695A328F%26_nc_sid%3D164c1d",
                "is_verified": false
            },
            {
                "username": "ir.alexandrelobo",
                "full_name": "Ir. Alexandre Lucena Lôbo",
                "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F465611949_1257835982126051_4848262711939585867_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D111%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Dk2dovNZocO0Q7kNvwHVJEhK%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGK2swBvje_bC-ncEAEtX7tI-fUhDbkULAAAB3203200j-ccb7-5%26oh%3D00_AfkJFgIrE_gqb6jh369ax40r5FR1WJbGtXuEMvak6scNGQ%26oe%3D695A2B96%26_nc_sid%3D164c1d",
                "is_verified": false
            }
        ],
        "posts": [
            {
                "de_usuario": {
                    "username": "erik_davy1",
                    "full_name": "Erik Davy",
                    "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F571775891_17951646324043371_3512651760030621127_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D103%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3D2LztHC2GzDcQ7kNvwG0S5yO%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGJObFCJrLkde7cY-AMedRjgqcr8wbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfnaBjForW2q9luBpwIY68IRxedBh2sejtoESqOLzaeu2Q%26oe%3D695A3D54%26_nc_sid%3D164c1d"
                },
                "post": {
                    "id": "3427383247244854276",
                    "shortcode": "C-QgueBJ4QE",
                    "image_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F454236377_878315660883857_4124812411217449280_n.jpg%3Fstp%3Ddst-jpg_e35_s1080x1080_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QHrY_3iaFxvGDFZvtsrg9jcBwyR-p__xNPc49biU_spg4ccVCOwFmcABok5datehSE%26_nc_ohc%3Df9Fyz3qi73sQ7kNvwHmVu4t%26_nc_gid%3DeLA7CTuJ652OuD9dHeIpsw%26edm%3DACWDqb8BAAAA%26ccb%3D7-5%26ig_cache_key%3DMzQyNzM4MzI0NzI0NDg1NDI3Ng%253D%253D.3-ccb7-5%26oh%3D00_AfnzSytsFWx67VHYCbSqQ8Sgh998t2Mw3qONX2a9uumuYQ%26oe%3D695A2B01%26_nc_sid%3Dee9879",
                    "video_url": null,
                    "is_video": false,
                    "caption": "Jó 6:8 ❤️",
                    "like_count": 187,
                    "comment_count": 0,
                    "taken_at": 1722795943
                }
            },
            {
                "de_usuario": {
                    "username": "davidcarvalh_o",
                    "full_name": "David Ariel",
                    "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F565378300_18188496154334249_5233783920456593609_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DwmQmmbqxs3UQ7kNvwFY_axX%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGPz8siEpFEdEV55AAMlw9-G_IqJIbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfnN2jhPVFlW_5iFDxNh4JD4XAr6NIz0SBZghnGPkrL6RQ%26oe%3D695A5B8A%26_nc_sid%3D164c1d"
                },
                "post": {
                    "id": "3733018487871840252",
                    "shortcode": "DPOWIlNkR_8",
                    "image_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.82787-15%2F556597822_18186632290334249_4209420176405594501_n.heic%3Fstp%3Ddst-jpg_e35_s1080x1080_tt6%26_nc_cat%3D107%26ig_cache_key%3DMzczMzAxODQ3NDk5NTM0MjM3Nw%253D%253D.3-ccb7-5%26ccb%3D7-5%26_nc_sid%3D58cdad%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%253D%253D%26_nc_ohc%3DA5eIl4GKk88Q7kNvwFPVA0e%26_nc_oc%3DAdlovwrchkklziQiEsoBGpLR1GcdTvjyW-XBthQAU-XkqGvpnyG01rF-L0i2Vjq0fWg%26_nc_ad%3Dz-m%26_nc_cid%3D0%26_nc_zt%3D23%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_gid%3DuF7G-KAAoXyvFGJZutCa8Q%26oh%3D00_AflZWygnLmD8AtqoQcP5QUccmsXDVp1mc43vJGNTI6QY6Q%26oe%3D695A3D7D",
                    "video_url": null,
                    "is_video": false,
                    "caption": "Depois de um início árduo no meio da pandemia, finalmente concluí 95% do curso! Agradeço primeiramente a Deus pela vida, pela saúde e pela força nos momentos de adversidades!\nDedico essa vitória aos meus pais que sempre lutaram para me manter durante minha jornada de estudante e por sempre me apoiar incondicionalmente. Aos meus irmãos Natanael e Isaías por fazerem parte de vários momentos importantes da minha vida. Aos meus parentes, amigos, colegas e companheiros da igreja que sempre acreditaram no meu potencial. E finalmente, agradeço aos professores que me ensinaram durante toda a graduação!\n\"Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos, segundo o poder em que nós opera, a esse glória na igreja, por Jesus Cristo, em todas as gerações, para todo o sempre.\" Ef. 3:21-22\n\nE não, ainda não estou oficialmente formado, falta o TCC kkkkkk\n\n#estudante #quimico #graduação #formatura",
                    "like_count": 139,
                    "comment_count": 32,
                    "taken_at": 1759230503
                }
            },
            {
                "de_usuario": {
                    "username": "abraao.ramon_ofc",
                    "full_name": "Abraão Pires",
                    "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F587612365_18138455338460273_546052440348828103_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Da8EYxYfUpy4Q7kNvwGCK_vc%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGM1ABiNxJDk71HBAAMchuifN95MHbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfnRlT_hmzf6wMUmi7nSg_D2InlKaWlviz2YYZ5nopIgJw%26oe%3D695A44BD%26_nc_sid%3D164c1d"
                },
                "post": {
                    "id": "3085217975842154375",
                    "shortcode": "CrQ5WcguKeH",
                    "image_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.71878-15%2F491420592_710906461466401_4012941634667525654_n.jpg%3Fstp%3Ddst-jpg_e15_s640x640_tt6%26_nc_cat%3D102%26ig_cache_key%3DMzA4NTIxNzk3NTg0MjE1NDM3NQ%253D%253D.3-ccb7-5%26ccb%3D7-5%26_nc_sid%3D58cdad%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjQ4MHg4NTQuc2RyLkMzIn0%253D%26_nc_ohc%3DCjVwDsplXYwQ7kNvwHMWbNe%26_nc_oc%3DAdk-zf4JcM1IClmnB35gUR4-wGm4_1VKzFXu1q8GVM8yBgvbvB1OsQnG2rIbwbEHe1o%26_nc_ad%3Dz-m%26_nc_cid%3D0%26_nc_zt%3D23%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_gid%3DWjOyRunvf_BYPJM_WJrm6Q%26oh%3D00_AfkopGkkIqzBQuNV6keCToPohj7_BYLPqwuCDTZNer391g%26oe%3D695A3B3F",
                    "video_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fo1%2Fv%2Ft2%2Ff2%2Fm82%2FAQN4MPUbGISr2VgO8ulkVVUBH4EHPKBgU_osqJb1D3w-NQfUKbBpZILGYttABXNzL85WLWpsrmh-2_794mdJQ_PRrcYqDX9Ug6klAfg.mp4%3F_nc_cat%3D108%26_nc_sid%3D5e9851%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_ohc%3DRmy3bVhX53EQ7kNvwGSpwA3%26efg%3DeyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjQwNzA4NDA4NDg2MjExLCJhc3NldF9hZ2VfZGF5cyI6OTg1LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjYsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%253D%253D%26ccb%3D17-1%26vs%3Ded31b2d15c9745e6%26_nc_vs%3DHBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GRDQzQzJCQUI0RDY1RUU5Qzg4M0JEMDg3RjQ3RjdBNF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTXQwYXhUN1dRSkZTMm9FQUxpZEtzLU5FRXhaYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmhqX1som7bRUCKAJDMywXQDoQ5WBBiTcYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA%26_nc_gid%3DWjOyRunvf_BYPJM_WJrm6Q%26_nc_zt%3D28%26oh%3D00_AfmDUy_ItPe4oNarIvqiIWwX8Dr8UwZxko9r0K6SUzMSow%26oe%3D695664D9",
                    "is_video": true,
                    "caption": "☠️💪",
                    "like_count": 0,
                    "comment_count": 2,
                    "taken_at": 1682006706
                }
            },
            {
                "de_usuario": {
                    "username": "3m3rson_s0uza",
                    "full_name": "Emerson",
                    "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F527393224_18096127939617617_6975942622876764839_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3Db2xv7aDKBgYQ7kNvwEErWDt%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGMhhbx9Ro6YdVUpAAKeKE-rahs9gbmNDAQAB3203200j-ccb7-5%26oh%3D00_AfkYeSm-tYzzmQSvo9r4X_2PI89JT2xKwnTIp05VQp7Wgg%26oe%3D695A5B3F%26_nc_sid%3D164c1d"
                },
                "post": {
                    "id": "3238814646034502649",
                    "shortcode": "CzylMK2OBP5",
                    "image_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F403651021_875940180789076_3135850216741921402_n.webp%3Fstp%3Ddst-jpg_e35_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjMyMHgzMDEuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_cat%3D104%26_nc_oc%3DQ6cZ2QEKEKeB2VGro-gN2iaEy5HQeArOMbKZfQyGRFHyxBl_94Pm-GF5Eiq0M2Oq_YGbvEg%26_nc_ohc%3DOJ7WjfghmG8Q7kNvwHuUvrK%26_nc_gid%3DrTjYEsUkDZWCl7nqm9bgyQ%26edm%3DACWDqb8BAAAA%26ccb%3D7-5%26ig_cache_key%3DMzIzODgxNDY0MDE3MTEwMTM3Ng%253D%253D.3-ccb7-5%26oh%3D00_Aflvm0gc4cRYIroMsY99DNgquoN7zt3LDxtYbHulfaA1hw%26oe%3D695A2CB8%26_nc_sid%3Dee9879",
                    "video_url": null,
                    "is_video": false,
                    "caption": "Só umas coisas aleatórias que eu nunca postei aq\n\nDefinitivamente eu fico melhor com cabelo mais curto",
                    "like_count": 79,
                    "comment_count": 1,
                    "taken_at": 1700316814
                }
            },
            {
                "de_usuario": {
                    "username": "mhariaclara__",
                    "full_name": "Maria clara",
                    "profile_pic_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F567774901_18176023993362015_6596164583640722709_n.jpg%3Fstp%3Ddst-jpg_s320x320_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D103%26_nc_oc%3DQ6cZ2QEGiFf3YjXQCZ-rEaeGQEh2X5UUr-e4m31RZC_kqHaviPLHHtkLGeORXkhuTDgZN2g%26_nc_ohc%3DqgvzI2Y6uIcQ7kNvwHw3oAo%26_nc_gid%3Da_nCIvZTpACo7DpGmgPodQ%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26ig_cache_key%3DGLWO1yFfpo1d-5JAABXt6qe9SIpbbmNDAQAB3203200j-ccb7-5%26oh%3D00_Afnt_Uw1OzHKAj816oYeqReo2L3b6WALTGEWfL_zvp7h-A%26oe%3D695A3A56%26_nc_sid%3D164c1d"
                },
                "post": {
                    "id": "3795066627801495339",
                    "shortcode": "DSqyP2pDDcr",
                    "image_url": "https://proxt-insta.projetinho-solo.workers.dev/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.82787-15%2F605876140_18183163864362015_8690491928954050123_n.webp%3Fstp%3Ddst-webp_p1080x1080%26_nc_cat%3D106%26ig_cache_key%3DMzc5NTA2NjYxOTIxMTU0NzQxOA%253D%253D.3-ccb7-5%26ccb%3D7-5%26_nc_sid%3D58cdad%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%253D%253D%26_nc_ohc%3DinN-E3MMdgwQ7kNvwHiy6YY%26_nc_oc%3DAdmWc59jzz-AfEVcDLtDW6v9nkMmbYIyXs-P4yPKi-o7oTFMNx8PRMdzn7UxeSjjc4g%26_nc_ad%3Dz-m%26_nc_cid%3D0%26_nc_zt%3D23%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_gid%3Dl6M8XsEsqLiolwEVUkx-rg%26oh%3D00_AfmZ2h0wG3EAHiLp-7UXcJwFa33eBbwRyAYlsSqsQgv4mA%26oe%3D695A3C39",
                    "video_url": null,
                    "is_video": false,
                    "caption": "",
                    "like_count": 39,
                    "comment_count": 3,
                    "taken_at": 1766627218
                }
            }
        ],
        "total_posts": 5,
        "duracao_ms": 4383
    }
})
