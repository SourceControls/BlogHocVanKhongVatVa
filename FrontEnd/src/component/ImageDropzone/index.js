import {useRef, useState} from 'react'
import {Text, Group, Button, createStyles, rem, Image, ActionIcon} from '@mantine/core'
import {Dropzone, MIME_TYPES} from '@mantine/dropzone'
import {IconCloudUpload, IconX, IconDownload} from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: rem(30),
    },

    dropzone: {
        borderWidth: rem(1),
        paddingBottom: rem(50),
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    control: {
        position: 'absolute',
        width: rem(250),
        left: `calc(50% - ${rem(125)})`,
        bottom: rem(-20),
    },
}))

export function ImageDropzone(props) {
    const {classes, theme} = useStyles()
    const openRef = useRef()

    const handleUpdateFile = (file) => {
        let url = URL.createObjectURL(file[0])
        props.form.setValues({[props.imageField]: url, file: file[0]})
    }
    const handleRemoveFile = () => {
        props.form.setValues({[props.imageField]: null, file: null})
    }
    return (
        <>
            {props.form.values[props.imageField] ? (
                <div style={{position: 'relative'}}>
                    <Image
                        src={props.form.values[props.imageField]}
                        radius='50%'
                        width={props.w || 300}
                        height={props.h || 300}
                        mx='auto'
                        fit='cover'
                    />
                    <ActionIcon style={{position: 'absolute', top: 0, right: '32px'}} onClick={handleRemoveFile}>
                        <IconX />
                    </ActionIcon>
                </div>
            ) : (
                <div className={classes.wrapper}>
                    <Dropzone
                        openRef={openRef}
                        onDrop={handleUpdateFile}
                        className={classes.dropzone}
                        radius='md'
                        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
                        maxSize={30 * 1024 ** 2}>
                        <div style={{pointerEvents: 'none'}}>
                            <Group position='center'>
                                <Dropzone.Accept>
                                    <IconDownload size={rem(50)} color={theme.colors[theme.primaryColor][6]} />
                                </Dropzone.Accept>
                                <Dropzone.Reject>
                                    <IconX size={rem(50)} color={theme.colors.red[6]} />
                                </Dropzone.Reject>
                                <Dropzone.Idle>
                                    <IconCloudUpload
                                        size={rem(50)}
                                        color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                                    />
                                </Dropzone.Idle>
                            </Group>

                            <Text ta='center' fw={700} fz='lg' mt='xl'>
                                <Dropzone.Accept>Thả ảnh ở đây</Dropzone.Accept>
                                <Dropzone.Reject>Hình ảnh có kích thước nhỏ hơn 30MB </Dropzone.Reject>
                                <Dropzone.Idle>Tải ảnh lên</Dropzone.Idle>
                            </Text>
                            <Text ta='center' fz='sm' mt='xs' c='dimmed'>
                                Kéo ảnh vào đây để upload. Chỉ chấp nhận các ảnh JPEG,JPG,PNG có kích thước nhỏ hơn 30MB
                            </Text>
                        </div>
                    </Dropzone>

                    <Button className={classes.control} size='md' radius='xl' onClick={() => openRef.current?.()}>
                        Chọn ảnh
                    </Button>
                </div>
            )}
        </>
    )
}
